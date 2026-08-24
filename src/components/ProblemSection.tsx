import InnerButton from '@/components/InnerButton'

const check = (
  <div className="icon-embed-xsmall text-color-primary w-embed">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="100%" viewBox="0 0 256 256">
      <g fill="currentColor">
        <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
        <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></path>
      </g>
    </svg>
  </div>
)

export default function ProblemSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="the-problem" className="section_comparison13">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="comparison13_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="display-flex-vertical flex-align-center">
                      <div className="margin-bottom margin-xsmall">
                        <div className="tagline-container">
                          <div className="icon-embed-xsmall text-color-primary w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="100%" viewBox="0 0 256 256">
                              <g fill="currentColor">
                                <path d="M224 56v144H40V56Z" opacity=".2"></path>
                                <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176Zm-40-96a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8m0 40a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8"></path>
                              </g>
                            </svg>
                          </div>
                          <div className="text-style-tagline">The problem</div>
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="section-title">You&apos;re paying until the last unit sells.</h2>
                    </div>
                    <p className="text-size-medium">
                      Interest on the construction loan. Then marketing and ops on top of that. That is carry — not a PDF problem. A months problem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-width-xlarge align-center">
                <div className="w-layout-grid pricing-grid">
                  <div className="pricing-card-wrap">
                    <div className="pricing-single">
                      <div className="pricing-top-content">
                        <div className="pricing-image-name-wrap">
                          <div className="pricing-name-short-text">
                            <h5 className="pricing-name">What it costs every month</h5>
                          </div>
                        </div>
                        <div className="pricing-price-pack-name-wrap">
                          <div className="pricing-price">$67k–$100k</div>
                          <div className="pricing-short-details-text">loan interest / month</div>
                        </div>
                        <p className="pricing-short-details-text">Typical $10M–$15M construction loan at ~8%. Ads, brokers, and ops keep spending until the building is sold. The calculator adds that burn on top of the interest.</p>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-card-wrap">
                    <div className="pricing-single is-wowdesign">
                      <div className="pricing-top-content">
                        <div className="pricing-image-name-wrap">
                          <div className="pricing-name-short-text">
                            <h5 className="pricing-name">What you keep if you sell out faster</h5>
                          </div>
                        </div>
                        <div className="pricing-price-pack-name-wrap">
                          <div className="pricing-price">$400k+</div>
                          <div className="pricing-short-details-text">typical carry kept</div>
                        </div>
                        <ul role="list" className="pricing-features-list">
                          <li className="pricing-features-list-item">
                            {check}
                            <div className="pricing-features-list-item-text">Interest plus marketing burn — not the loan alone</div>
                          </li>
                          <li className="pricing-features-list-item">
                            {check}
                            <div className="pricing-features-list-item-text">Months earlier = that money stays yours</div>
                          </li>
                        </ul>
                        {showCta ? (
                        <div className="pricing-features-button-wrapper">
                          <div className="primary-button-wrapper pricing">
                            <InnerButton href="/carry-cost-calculator" label="Run your numbers" cta="Problem - Calc" className="pricing" />
                          </div>
                        </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
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
