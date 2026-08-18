import type { Metadata, Viewport } from 'next'
import './globals.css'
import NewsletterFormHandler from '@/components/NewsletterFormHandler'
import SiteAnalytics from '@/components/SiteAnalytics'
import JsonLd from '@/components/JsonLd'

const SITE = 'https://www.wowdesign.io'
const TITLE = 'Sell Out Faster | Presales System for Boutique Real Estate Developers'
const DESCRIPTION =
  "We help boutique real estate developers sell out faster, so they keep $400k+ that would otherwise go to the bank."
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
        {/* Anti-FOUC: body starts hidden (below) and is revealed only after window load,
            once the goo/IX2 runtimes have set their animation "from" states — so elements
            never flash visible-then-hidden. Failsafe timeout guarantees it never stays blank. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function rb(){var b=document.body;if(b){b.style.transition='opacity .4s ease';b.style.opacity='1';}}function rv(e){e.style.transition='opacity .6s ease, transform .6s ease';e.style.opacity='1';if(e.style.transform)e.style.transform='none';}function init(){rb();try{var els=[].slice.call(document.querySelectorAll('[style*="opacity"]')).filter(function(e){return getComputedStyle(e).opacity==='0';});if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){rv(x.target);io.unobserve(x.target);}});},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e);});setTimeout(function(){els.forEach(rv);},3500);}else{els.forEach(rv);}}catch(_){}}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}window.addEventListener('load',rb,{once:true});setTimeout(rb,2000);})();`,
          }}
        />
      </head>
      <body className="body" style={{ opacity: 0 }}>
        {children}
        <NewsletterFormHandler />
        <SiteAnalytics />
      </body>
    </html>
  )
}
