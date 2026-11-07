import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { injectWowTwinBar } from '@/lib/twinBarHtml'

/** Production custom domains — /hero-lab stays WIP on *.vercel.app only. */
const PROD_HOSTS = new Set(['wowdesign.io', 'www.wowdesign.io'])

/** Proposal twin demos — reverse-proxy Planpoint top-level on our DNS. */
const TWIN_HOSTS: Record<string, { demoPath: string; title: string }> = {
  '3dlite.wowdesign.io': { demoPath: '/demo/planpoint360', title: '3D Lite demo' },
  '3dimmersive.wowdesign.io': { demoPath: '/demo/planpoint3d', title: 'Immersive 3D demo' },
}

const PLANPOINT_ORIGIN = 'https://app.planpoint.io'

/** Old Webflow template / dead asset paths — tell Google they are gone. */
const GONE_PREFIXES = ['/product', '/category']
const GONE_IMAGES = new Set([
  '/images/odule-enoch.avif',
  '/images/mateo-rivera.avif',
  // analytics-screenshot.avif still ships in FeaturesDeepDive — keep 200
])

function isGone(pathname: string): boolean {
  if (GONE_IMAGES.has(pathname)) return true
  for (const prefix of GONE_PREFIXES) {
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return true
  }
  return false
}

function twinDest(req: NextRequest, twin: { demoPath: string }): URL {
  const incoming = new URL(req.url)
  const dest = new URL(incoming.pathname + incoming.search, PLANPOINT_ORIGIN)
  if (incoming.pathname === '/' || incoming.pathname === '') {
    dest.pathname = twin.demoPath
    if (!dest.searchParams.has('lang')) dest.searchParams.set('lang', 'English')
  }
  return dest
}

async function proxyTwinHtml(
  req: NextRequest,
  twin: { demoPath: string; title: string },
  dest: URL,
): Promise<NextResponse> {
  const incoming = new URL(req.url)
  const upstream = await fetch(dest.toString(), {
    headers: {
      'user-agent': req.headers.get('user-agent') ?? 'Mozilla/5.0',
      accept: req.headers.get('accept') ?? 'text/html',
      'accept-language': req.headers.get('accept-language') ?? 'en',
    },
    redirect: 'manual',
  })

  if (upstream.status >= 300 && upstream.status < 400) {
    const loc = upstream.headers.get('location')
    if (loc) {
      try {
        const locUrl = new URL(loc, PLANPOINT_ORIGIN)
        if (locUrl.hostname === 'app.planpoint.io' || locUrl.hostname.endsWith('.planpoint.io')) {
          locUrl.protocol = incoming.protocol
          locUrl.host = incoming.host
          return NextResponse.redirect(locUrl, upstream.status as 301 | 302 | 303 | 307 | 308)
        }
      } catch {
        /* fall through */
      }
    }
  }

  const contentType = upstream.headers.get('content-type') || ''
  if (!contentType.includes('text/html')) {
    return NextResponse.rewrite(dest)
  }

  const html = injectWowTwinBar(await upstream.text(), twin.title)
  const headers = new Headers(upstream.headers)
  headers.delete('content-encoding')
  headers.delete('content-length')
  headers.set('content-type', 'text/html; charset=utf-8')
  return new NextResponse(html, { status: upstream.status, headers })
}

export async function middleware(req: NextRequest) {
  const host = (req.headers.get('host') ?? '').split(':')[0].toLowerCase()
  const { pathname } = req.nextUrl

  const twin = TWIN_HOSTS[host]
  if (twin) {
    const dest = twinDest(req, twin)
    const accept = req.headers.get('accept') ?? ''
    // Assets must use rewrite — fetch-proxying /_next JS broke Planpoint boot (blank #__next).
    const isAsset =
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      /\.[a-zA-Z0-9]+$/.test(pathname)
    const wantsHtml = accept.includes('text/html') && !isAsset

    if (!wantsHtml) {
      return NextResponse.rewrite(dest)
    }
    return proxyTwinHtml(req, twin, dest)
  }

  // Apex → www (canonical host). Staging / Vercel previews keep their host.
  // Plain URL — nextUrl.clone() keeps a sticky trailingSlash flag (see 063cccc),
  // so wowdesign.io/insights/ would still Location to www…/insights/ (two hops).
  // Collapse /en|/en/ → / in the same hop so wowdesign.io/en/ is not two 308s.
  if (host === 'wowdesign.io') {
    const url = new URL(req.url)
    url.host = 'www.wowdesign.io'
    url.protocol = 'https'
    if (url.pathname === '/en' || url.pathname === '/en/') {
      url.pathname = '/'
    } else if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
      url.pathname = url.pathname.slice(0, -1)
    }
    return NextResponse.redirect(url, 308)
  }

  // /en and /en/ → / in one hop. Requires skipTrailingSlashRedirect in next.config
  // (otherwise Next 308s /en/ → /en before this runs).
  // Use plain URL — NextURL keeps a sticky trailingSlash flag from the request,
  // so clone()+pathname='/insights' still serializes href as /insights/ (loop).
  if (pathname === '/en' || pathname === '/en/') {
    const url = new URL(req.url)
    url.pathname = '/'
    return NextResponse.redirect(url, 308)
  }

  // Recreate default no-trailing-slash behavior for everything else.
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const url = new URL(req.url)
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 308)
  }

  if (PROD_HOSTS.has(host) && pathname.startsWith('/hero-lab')) {
    return new NextResponse(null, { status: 404 })
  }

  if (isGone(pathname)) {
    return new NextResponse('Gone', {
      status: 410,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Twin demo hosts — must include /_next and dotted asset paths so Planpoint
     * static chunks proxy correctly (www matchers intentionally skip those).
     */
    {
      source: '/:path*',
      has: [{ type: 'host', value: '3dlite.wowdesign.io' }],
    },
    {
      source: '/:path*',
      has: [{ type: 'host', value: '3dimmersive.wowdesign.io' }],
    },
    /*
     * Trailing-slash + /en handling for page routes.
     * Skip Next internals and static files (have a dot in the last segment).
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
    '/en',
    '/en/',
    '/hero-lab',
    '/hero-lab/:path*',
    '/product',
    '/product/:path*',
    '/category',
    '/category/:path*',
    '/images/odule-enoch.avif',
    '/images/mateo-rivera.avif',
  ],
}
