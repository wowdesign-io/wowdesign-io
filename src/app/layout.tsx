import type { Metadata, Viewport } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

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
      className={`${outfit.variable} ${inter.variable}`}
    >
      <body className="body">{children}</body>
    </html>
  )
}
