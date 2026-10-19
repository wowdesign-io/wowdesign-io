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

// Phosphor palette-duotone — official paths from @phosphor-icons/core (Relume Phosphor set)
const paletteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
    <g fill="currentColor">
      <path d="M224,127.17a96.48,96.48,0,0,1-2.39,22.18A24,24,0,0,1,198.21,168H152a24,24,0,0,0-24,24,24,24,0,0,1-32,22.61C58.73,201.44,32,169.81,32,128a96,96,0,0,1,95-96C179.84,31.47,223.55,74.35,224,127.17Z" opacity=".2"></path>
      <path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path>
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
              Partner surface · noindex.
              <br />
              Share by direct link only.
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
