import InnerButton from '@/components/InnerButton'

type HowItWorksSectionProps = {
  cta?: string
  ctaHref?: string
  ctaLabel?: string
  tagline?: string
  title?: string
  description?: string
}

export default function HowItWorksSection({
  cta = 'How to - Page',
  ctaHref = '/how-it-works',
  ctaLabel = 'How it works',
  tagline = 'How it works',
  title = 'How it works.',
  description = 'Buyers pick a unit tonight. Follow-up is automatic. Your sales team has the picture before they call.',
}: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="section_layout237">
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
                          <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M15 7H7.89l3.57 5l-3.57 5H15l3.55-5z" opacity=".3"></path>
                              <path fill="currentColor" d="M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7l-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12zM15 17H7.89l3.57-5l-3.57-5H15l3.55 5z"></path>
                            </svg></div>
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
                <div id="w-node-_5bacbfb7-9f05-92dc-f68d-38ed810a6613-9046bfc6" className="layout237_item">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM140 80v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80"></path>
                          </g>
                        </svg></div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">Step 1</div>
                    <h3 className="heading-style-h6">Buyers pick a unit tonight</h3>
                  </div>
                  <p>From the buyer&apos;s phone — every floor, live price, live availability. Not just a PDF. No waiting until Monday.</p><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>
                <div id="w-node-_5bacbfb7-9f05-92dc-f68d-38ed810a661c-9046bfc6" className="layout237_item is-2">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-32a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32.4 32.4 0 0 1 4.62-8.59a32 32 0 1 1 51.11 38.52L120 168h32a8 8 0 0 1 8 8"></path>
                          </g>
                        </svg></div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">Step 2</div>
                    <h3 className="heading-style-h6">Follow-up runs itself</h3>
                  </div>
                  <p className="paragraph">The second a buyer requests a unit, the floor plan and next steps go out. You don&apos;t write a thing.</p><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" /><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
                <div id="w-node-_5bacbfb7-9f05-92dc-f68d-38ed810a6625-9046bfc6" className="layout237_item is-3">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-60a36 36 0 0 1-61.71 25.19A8 8 0 1 1 109.71 162A20 20 0 1 0 124 128a8 8 0 0 1-6.55-12.59L136.63 88H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36.07 36.07 0 0 1 160 148"></path>
                          </g>
                        </svg></div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">Step 3</div>
                    <h3 className="heading-style-h6">Your sales team has the picture</h3>
                  </div>
                  <p>Which unit a buyer wants, and how ready that buyer is — in the tools you already use. No new system to learn.</p><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" /><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
              </div>
              <div className="process-timeline text-size-small">Built in 6–8 weeks.</div>
              <div className="process-button-wrapper">
                <div className="primary-button-wrapper">
                  <InnerButton href={ctaHref} label={ctaLabel} cta={cta} />
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
