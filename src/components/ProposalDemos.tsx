import InnerButton from '@/components/InnerButton'

const DEMO_A = 'https://demo.wowdesign.io'
const DEMO_B = 'https://demo.wowdesign.io/showcase/3d-lite'
const DEMO_C = 'https://demo.wowdesign.io/showcase/immersive'

/** Three live showcases with investment labels — layout237, not pricing-grid. */
export default function ProposalDemos() {
  return (
    <section id="open-the-demos" className="section_layout237">
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
                          <div className="text-style-tagline">Open the demos</div>
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="section-title">See what you get. Live.</h2>
                    </div>
                    <p className="text-size-medium">
                      Three options for a 10–50 unit project. Same website and follow-up. The building experience is what moves the number.
                    </p>
                  </div>
                </div>
              </div>

              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid layout237_list">
                <div className="layout237_item">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM140 80v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">Website + 360</div>
                    <h3 className="heading-style-h6">$45k</h3>
                  </div>
                  <p>Full site with interactive building — every floor and unit from a phone. The SELVA demo.</p>
                  <div className="margin-top margin-small">
                    <div className="primary-button-wrapper">
                      <InnerButton href={DEMO_A} label="Open demo" cta="Proposal - Demo SELVA" target="_blank" rel="noopener noreferrer" />
                    </div>
                  </div>
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>

                <div className="layout237_item is-2">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-32a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32.4 32.4 0 0 1 4.62-8.59a32 32 0 1 1 51.11 38.52L120 168h32a8 8 0 0 1 8 8"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">3D Lite</div>
                    <h3 className="heading-style-h6">$55k</h3>
                  </div>
                  <p>Lighter 3D walk of the building — more depth than 360, faster to ship than full Immersive.</p>
                  <div className="margin-top margin-small">
                    <div className="primary-button-wrapper">
                      <InnerButton href={DEMO_B} label="Open demo" cta="Proposal - Demo 3D Lite" target="_blank" rel="noopener noreferrer" />
                    </div>
                  </div>
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>

                <div className="layout237_item is-3">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-60a36 36 0 0 1-61.71 25.19A8 8 0 1 1 109.71 162A20 20 0 1 0 124 128a8 8 0 0 1-6.55-12.59L136.63 88H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36.07 36.07 0 0 1 160 148"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">Immersive 3D</div>
                    <h3 className="heading-style-h6">$65k</h3>
                  </div>
                  <p>Full 3D presence for buyers who need to feel the space before they commit.</p>
                  <div className="margin-top margin-small">
                    <div className="primary-button-wrapper">
                      <InnerButton href={DEMO_C} label="Open demo" cta="Proposal - Demo Immersive" target="_blank" rel="noopener noreferrer" />
                    </div>
                  </div>
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
              </div>

              <div className="process-timeline text-size-small">
                Plus $2,500/mo retainer — Analyze + Optimize included. We run it; your sales team sells.
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
