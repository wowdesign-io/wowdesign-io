import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't misinfer it from a parent
  // lockfile (it sits one level up under "Web Projects").
  turbopack: { root: process.cwd() },
  // Let middleware own /en/ → / in one hop. Without this, Next 308s /en/ → /en first.
  skipTrailingSlashRedirect: true,
  images: {
    qualities: [75, 85, 90],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Legacy lead URLs Google still crawls
      { source: '/request-briefing', destination: '/book-a-demo', permanent: true },
      { source: '/discovery-call', destination: '/book-a-demo', permanent: true },
      { source: '/free-mini-audit', destination: '/book-a-demo', permanent: true },
      { source: '/roi-calculator', destination: '/carry-cost-calculator', permanent: true },
      // /en and /en/ → / handled in middleware (see skipTrailingSlashRedirect above)
      // Old Insights slug (Oct 2026 rename)
      {
        source: '/insights/sales-team-know-before-call',
        destination: '/insights/what-sales-team-should-know-before-calling',
        permanent: true,
      },
      // Old Webflow blog → Insights hub (readers want content; product/category = 410 in middleware)
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog/:path*', destination: '/insights', permanent: true },
      // Print QR / offline links — temporary so destination can change without
      // browsers caching an old 301. Update destination only; QR stays /gasc.
      {
        source: '/gasc',
        destination:
          '/carry-cost-calculator?utm_source=gasc&utm_medium=newsletter&utm_campaign=2026-10',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      // Storyblok visual editor appends story slug to preview URL
      { source: '/home', destination: '/' },
    ]
  },
  async headers() {
    const security = [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
    // Immutable Cache-Control on /_next/* breaks Turbopack HMR in `next dev`.
    if (process.env.NODE_ENV !== 'production') return security
    return [
      ...security,
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
