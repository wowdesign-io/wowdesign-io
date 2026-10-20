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
