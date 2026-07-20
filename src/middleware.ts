import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** Production custom domains — /hero-lab stays WIP on *.vercel.app only. */
const PROD_HOSTS = new Set(['wowdesign.io', 'www.wowdesign.io'])

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') ?? '').split(':')[0].toLowerCase()

  if (PROD_HOSTS.has(host) && req.nextUrl.pathname.startsWith('/hero-lab')) {
    // Same deploy as staging; only block the public custom domains.
    return new NextResponse(null, { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/hero-lab', '/hero-lab/:path*'],
}
