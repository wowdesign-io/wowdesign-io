import InnerButton from '@/components/InnerButton'
import '@/app/selva-showcase.css'
import '@/app/how-it-works-headings.css'

const LIVE_URL = 'https://demo.wowdesign.io'

export default function SelvaShowcase() {
  return (
    <section id="live-project" className="section selva-showcase">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="margin-bottom margin-xxlarge">
              <div className="text-align-center">
                <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="max-width-large align-center">
                  <div className="display-flex-vertical flex-align-center">
                    <div className="margin-bottom margin-xsmall">
                      <div className="tagline-container">
                        <div className="icon-embed-xsmall text-color-primary w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                            <g fill="currentColor">
                              <path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></path>
                              <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H80a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="text-style-tagline">Live project</div>
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="section-title">This is what buyers get.</h2>
                  </div>
                  <p className="text-size-medium">
                    Open the real buyer website. Click around. Book a demo when you want the layer behind it — CRM, what your sales team sees, and follow-up.
                  </p>
                </div>
              </div>
            </div>

            <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="selva-showcase-frame">
              <div className="selva-showcase-chrome">
                <div className="selva-showcase-dots" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="selva-showcase-url">{LIVE_URL.replace('https://', '')}</div>
              </div>
              <div className="selva-showcase-viewport">
                <iframe
                  src={LIVE_URL}
                  title="Live wowdesign buyer website example"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allow="fullscreen"
                />
              </div>
            </div>

            <div className="selva-showcase-actions">
              <div className="primary-button-wrapper">
                <InnerButton
                  href={LIVE_URL}
                  label="Open live site"
                  cta="SELVA - Live"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
              <div className="primary-button-wrapper">
                <InnerButton href="/book-a-demo" label="Book a Demo" cta="SELVA - Demo" />
              </div>
            </div>
            <p className="selva-showcase-note">
              Prefer the full screen? Open the live site. The booked demo covers what clicking around cannot show.
            </p>
          </div>
        </div>
      </div>
      <div className="sky-container">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
  )
}
