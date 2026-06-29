import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  title: 'Sell Out Faster | wowdesign',
  description:
    "Boutique developers close 31% faster with wowdesign — we build the website, the digital twin, and the automated follow-up system, so your team always knows who's ready to buy.",
  metadataBase: new URL('https://www.wowdesign.io'),
  openGraph: {
    title: 'Sell Out Faster | wowdesign',
    description:
      "Boutique developers close 31% faster with wowdesign — we build the website, the digital twin, and the automated follow-up system, so your team always knows who's ready to buy.",
    url: 'https://www.wowdesign.io',
    siteName: 'wowdesign',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Out Faster | wowdesign',
    description:
      "Boutique developers close 31% faster with wowdesign — we build the website, the digital twin, and the automated follow-up system, so your team always knows who's ready to buy.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.wowdesign.io' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-wf-page="68ac826b2e7f29829046bfc6"
      data-wf-site="68ac826a2e7f29829046bf54"
    >
      <head>
        {/* Real Outfit + Inter under their literal family names (300–700) so the
            Webflow CSS `font-family: Outfit / Inter` resolves at the correct weights. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body">{children}</body>
    </html>
  )
}
