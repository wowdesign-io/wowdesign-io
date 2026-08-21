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
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                            <g fill="currentColor">
                              <path d="M224 56v40H32V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></path>
                              <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v32H40V56Zm0 144H40v-96h176z"></path>
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
                    Open the real buyer website and click around. A demo covers CRM, sales-team view, and follow-up — the layer behind the site.
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
            </div>
            <p className="selva-showcase-note">
              Prefer full screen? Open the live site. A demo covers CRM, what your sales team sees, and follow-up — what clicking around cannot show.
            </p>
          </div>
        </div>
      </div>
      <div className="sky-container" aria-hidden="true">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
  )
}
