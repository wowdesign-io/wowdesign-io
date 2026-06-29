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
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full`}>
      <head>
        {/* Prevent flash on repeat visits — inline before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('wowLoaded'))document.documentElement.classList.add('wow-loaded')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-brand-dark text-white">
        {children}
      </body>
    </html>
  )
}
