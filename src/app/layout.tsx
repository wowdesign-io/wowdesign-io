import type { Metadata, Viewport } from 'next'
import './globals.css'
import NewsletterFormHandler from '@/components/NewsletterFormHandler'
import SiteAnalytics from '@/components/SiteAnalytics'
import JsonLd from '@/components/JsonLd'

const SITE = 'https://www.wowdesign.io'
const TITLE = 'Sell Out Faster | Presales System for Boutique Real Estate Developers'
const DESCRIPTION =
  "We help boutique real estate developers with 10–50 unit projects sell out faster, so they keep $400k+ that would otherwise go to the bank."
const OG_IMAGE = '/images/open-graph-img-en.png'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: '%s | wowdesign',
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    siteName: 'wowdesign',
    locale: 'en_US',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'wowdesign' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/webclip.png',
  },
  robots: { index: true, follow: true },
  // Per-page routes set their own canonical via metadata.alternates
}

const isDev = process.env.NODE_ENV === 'development'

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
        <JsonLd />
        <noscript>
          <style>{`#wwd-page-loader{display:none!important}`}</style>
        </noscript>
        {/* First visit only (sessionStorage): show page loader until goo/ScrollTrigger inits.
            Return visits / later page loads: no loader. Dev: skip. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var dev=${isDev ? 'true' : 'false'};var html=document.documentElement;try{if(dev||sessionStorage.getItem('wwd-seen')){html.classList.add('wwd-seen');return;}html.classList.add('wwd-first');}catch(e){html.classList.add('wwd-seen');return;}function done(){if(html.classList.contains('wwd-ready'))return;html.classList.add('wwd-ready');try{sessionStorage.setItem('wwd-seen','1');}catch(_){ }var el=document.getElementById('wwd-page-loader');if(!el)return;function rm(){if(el&&el.parentNode)el.parentNode.removeChild(el);}el.addEventListener('transitionend',rm,{once:true});setTimeout(rm,700);}function gooReady(){if(!document.querySelector('[goo]'))return true;if(!window.gsap||!window.jQuery||!window.ScrollTrigger)return false;try{return !!(window.ScrollTrigger.getAll&&window.ScrollTrigger.getAll().length);}catch(_){return false;}}var n=0;(function tick(){if(gooReady()){done();return;}if(++n>80){done();return;}setTimeout(tick,50);})();})();`,
          }}
        />
      </head>
      <body className="body">
        <div id="wwd-page-loader" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wow-design-color-logo-dark.svg" alt="" />
        </div>
        {children}
        <NewsletterFormHandler />
        <SiteAnalytics />
      </body>
    </html>
  )
}
