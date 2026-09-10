import type { Metadata } from 'next'
import SiteChrome from '@/components/SiteChrome'
import InnerButton from '@/components/InnerButton'

export const metadata: Metadata = {
  title: { absolute: 'wowdesign - Not found' },
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
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
  )
}
