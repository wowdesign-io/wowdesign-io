import type { Metadata } from 'next'
import Script from 'next/script'
import PageHero from '@/components/PageHero'
import SiteChrome from '@/components/SiteChrome'
import BrandGuide from '@/components/brand/BrandGuide'
import { SITE } from '@/lib/site'
import './styleguide.css'

export const metadata: Metadata = {
  title: 'Brand guidelines',
  description:
    'wowdesign visual system for designers and motion partners. Tokens, type, sky glows, glass, components, and downloadable brand assets.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE}/brand` },
}

const paletteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
    <g fill="currentColor">
      <path d="M232 128A104 104 0 1 1 128 24a8 8 0 0 1 0 16a88 88 0 1 0 88 88a8 8 0 0 1 16 0" opacity=".2"></path>
      <path d="M200.77 53.23A111.53 111.53 0 0 0 128.06 24h-.12a112 112 0 0 0-.05 224h1.79a48.1 48.1 0 0 0 46.55-34.93a43.9 43.9 0 0 0-2.2-34.3a40 40 0 0 1 10.14-49.57a48.22 48.22 0 0 0 16.51-42.68a51.66 51.66 0 0 0-.07-9.29Zm-67.93 163a32.06 32.06 0 0 1-31-23.38a28 28 0 0 1 1.4-21.81a24 24 0 0 0-6.08-29.74a32.16 32.16 0 0 1-11-28.45a35.75 35.75 0 0 1 .05-6.43A96 96 0 1 1 200.77 64.6a35.72 35.72 0 0 1 .05 6.43a32.16 32.16 0 0 1-11 28.45a24 24 0 0 0-6.08 29.74a28 28 0 0 1 1.4 21.81a32.06 32.06 0 0 1-31 23.38a16 16 0 0 0-14.3 9.22ZM140 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 24a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 56a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
    </g>
  </svg>
)

export default function BrandPage() {
  return (
    <>
      <SiteChrome current="none">
        <PageHero
          tagline="Brand"
          title="Style guide"
          description="The wowdesign visual system in one place. Tokens, type, effects, components, and downloads for designers and motion partners."
          ctaLabel="Jump to downloads"
          ctaHref="#downloads"
          ctaData="Brand - Downloads"
          timeline={
            <>
              Shareable by direct link.
              <br />
              Not linked in the main nav yet.
            </>
          }
          taglineIcon={paletteIcon}
        />
        <div className="spacer-xhuge"></div>
        <BrandGuide />
        <div className="spacer-xhuge"></div>
      </SiteChrome>
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="afterInteractive" />
      <Script src="/webflow.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/goo-motion-library@latest/dist/goo.bundle.js" strategy="afterInteractive" />
    </>
  )
}
