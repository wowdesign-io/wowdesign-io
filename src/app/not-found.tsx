import type { Metadata } from 'next'
import Script from 'next/script'
import SiteChrome from '@/components/SiteChrome'
import InnerButton from '@/components/InnerButton'

export const metadata: Metadata = {
  title: { absolute: 'wowdesign - Not found' },
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <SiteChrome current="none">
        <section className="section not-found">
          <div className="not-found-content">
            <div className="not-found-wrapper">
              <div className="not-found-typography">
                <div className="not-found-image-wrap">
                  <h1 className="_404-heading">404</h1>
                </div>
                <div className="not-found-description-button">
                  <div className="not-found-description-text">
                    Oops! Something is not right. Let’s get back on track.
                  </div>
                </div>
                <div className="not-found-button-wrapper">
                  <div className="primary-button-wrapper">
                    <InnerButton href="/" label="Back to home" cta="404 - Home" />
                  </div>
                </div>
              </div>
              <div className="_404-radial-gradient1"></div>
              <div className="_404-radial-gradient2"></div>
            </div>
          </div>
        </section>
      </SiteChrome>
      {/* Same IX2 stack as InsightsArticle — SiteChrome buttons need webflow.js */}
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="afterInteractive" />
      <Script src="/webflow.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/goo-motion-library@latest/dist/goo.bundle.js" strategy="afterInteractive" />
    </>
  )
}
