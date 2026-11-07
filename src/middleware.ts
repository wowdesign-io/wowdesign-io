import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Production custom domains — /hero-lab stays WIP on *.vercel.app only. */
const PROD_HOSTS = new Set(['wowdesign.io', 'www.wowdesign.io'])

/** Proposal twin demos — reverse-proxy Planpoint top-level on our DNS. */
const TWIN_HOSTS: Record<string, { demoPath: string }> = {
  '3dlite.wowdesign.io': { demoPath: '/demo/planpoint360' },
  '3dimmersive.wowdesign.io': { demoPath: '/demo/planpoint3d' },
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

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') ?? '').split(':')[0].toLowerCase()
  const { pathname } = req.nextUrl

  // Twin demo hosts: proxy entire origin to Planpoint (including /_next assets).
  const twin = TWIN_HOSTS[host]
  if (twin) {
    const incoming = new URL(req.url)
    const dest = new URL(incoming.pathname + incoming.search, PLANPOINT_ORIGIN)
    if (pathname === '/' || pathname === '') {
      dest.pathname = twin.demoPath
      if (!dest.searchParams.has('lang')) dest.searchParams.set('lang', 'English')
    }
    return NextResponse.rewrite(dest)
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
