import InnerButton from '@/components/InnerButton'
import './twin-option-cards.css'

type TwinOptionCardsProps = {
  id?: string
  tagline?: string
  title?: string
  description?: string
  /** Proposal leave-behind: open live demos. How it works: omit. */
  showLiveButtons?: boolean
  ctaHref?: string
  ctaLabel?: string
  cta?: string
  ctaTarget?: string
  ctaRel?: string
  timeline?: string
}

const DEMO_A = 'https://demo.wowdesign.io/residences#digital-twin'
const DEMO_B = '/proposal/3d-lite'
const DEMO_C = '/proposal/immersive'

/** Three twin-depth options — layout237 cards. Shared by /proposal and /how-it-works. */
export default function TwinOptionCards({
  id = 'your-options',
  tagline = 'Your options',
  title = 'What a project costs.',
  description =
    'Website, follow-up, and the full sales system on every option. Choose 360, 3D Lite, or Immersive 3D.',
  showLiveButtons = false,
  ctaHref = '/carry-cost-calculator',
  ctaLabel = 'Carry Cost Calc',
  cta = 'Options - Calc',
  ctaTarget,
  ctaRel,
  timeline = 'Full system included. Plus $2,500/mo. We keep it running. Your sales team sells. Live in 6–8 weeks.',
}: TwinOptionCardsProps) {
  return (
    <section id={id} className="section_layout237 twin-option-cards">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="layout237_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="max-width-large align-center">
                    <div className="display-flex-vertical flex-align-center">
                      <div className="margin-bottom margin-xsmall">
                        <div className="tagline-container">
                          <div className="icon-embed-xsmall text-color-primary w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                              <g fill="currentColor">
                                <path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></path>
                                <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-68a28 28 0 0 1-28 28h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 28 28"></path>
                              </g>
                            </svg>
                          </div>
                          <div className="text-style-tagline">{tagline}</div>
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="section-title">{title}</h2>
                    </div>
                    <p className="text-size-medium">{description}</p>
                  </div>
                </div>
              </div>

              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid layout237_list">
                <div className="layout237_item">
                  <img
                    src="/images/proposal/twin-360.png"
                    alt="Interactive building — floors and units from a phone"
                    className="twin-option-shot"
                    loading="lazy"
                  />
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">360</div>
                    <h3 className="heading-style-h6">$45k</h3>
                  </div>
                  <p>Every floor and unit from a phone — live price and availability.</p>
                  {showLiveButtons ? (
                    <div className="margin-top margin-small">
                      <div className="primary-button-wrapper">
                        <InnerButton href={DEMO_A} label="Open live" cta="Proposal - Open 360" target="_blank" rel="noopener noreferrer" />
                      </div>
                    </div>
                  ) : null}
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>

                <div className="layout237_item is-2">
                  <img
                    src="/images/proposal/twin-3d-lite.png"
                    alt="3D Lite interactive building"
                    className="twin-option-shot"
                    loading="lazy"
                  />
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">3D Lite</div>
                    <h3 className="heading-style-h6">$55k</h3>
                  </div>
                  <p>More depth than 360. Buyers walk the massing and units without the full Immersive build.</p>
                  {showLiveButtons ? (
                    <div className="margin-top margin-small">
                      <div className="primary-button-wrapper">
                        <InnerButton href={DEMO_B} label="Open live" cta="Proposal - Open 3D Lite" target="_blank" rel="noopener noreferrer" />
                      </div>
                    </div>
                  ) : null}
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>

                <div className="layout237_item is-3">
                  <img
                    src="/images/proposal/twin-immersive.png"
                    alt="Immersive 3D interactive building"
                    className="twin-option-shot"
                    loading="lazy"
                  />
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">Immersive 3D</div>
                    <h3 className="heading-style-h6">$65k</h3>
                  </div>
                  <p>Full 3D presence. For projects where buyers need to feel the space before they commit.</p>
                  {showLiveButtons ? (
                    <div className="margin-top margin-small">
                      <div className="primary-button-wrapper">
                        <InnerButton href={DEMO_C} label="Open live" cta="Proposal - Open Immersive" target="_blank" rel="noopener noreferrer" />
                      </div>
                    </div>
                  ) : null}
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
              </div>

              {timeline ? <div className="process-timeline text-size-small">{timeline}</div> : null}
              <div className="process-button-wrapper">
                <div className="primary-button-wrapper">
                  <InnerButton href={ctaHref} label={ctaLabel} cta={cta} target={ctaTarget} rel={ctaRel} />
                </div>
              </div>
            </div>
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
