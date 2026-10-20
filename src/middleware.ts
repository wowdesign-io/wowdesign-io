import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Production custom domains — /hero-lab stays WIP on *.vercel.app only. */
const PROD_HOSTS = new Set(['wowdesign.io', 'www.wowdesign.io'])

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

  // /en and /en/ → / in one hop. Requires skipTrailingSlashRedirect in next.config
  // (otherwise Next 308s /en/ → /en before this runs).
  if (pathname === '/en' || pathname === '/en/') {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url, 308)
  }

  // Recreate default no-trailing-slash behavior for everything else.
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const url = req.nextUrl.clone()
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
