import InnerButton from '@/components/InnerButton'
import '@/app/problem-offer.css'

export default function ProblemSection() {
  return (
    <section id="the-problem" className="section problem-band">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
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
                    Interest on the construction loan. Then ads, brokers, and ops. That is carry — a months problem, not a brochure problem. Sell out faster and $400k+ stays yours.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-layout-grid pricing-grid problem-pair">
              <div className="pricing-card-wrap">
                <div className="pricing-single problem-card">
                  <div className="text-style-tagline">Loan interest</div>
                  <div className="pricing-price-pack-name-wrap">
                    <div className="pricing-price">$67k–$100k</div>
                    <div className="pricing-short-details-text">/ month</div>
                  </div>
                  <h3 className="pricing-name">The loan does not wait</h3>
                  <p className="pricing-short-details-text">Typical $10M–$15M construction loan at ~8%. Every extra month is interest leaving as cost, not profit.</p>
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>
              </div>
              <div className="pricing-card-wrap">
                <div className="pricing-single problem-card">
                  <div className="text-style-tagline">Marketing + ops</div>
                  <div className="pricing-price-pack-name-wrap">
                    <div className="pricing-short-details-text problem-card-running">Keeps running every month</div>
                  </div>
                  <h3 className="pricing-name">Marketing does not stop</h3>
                  <p className="pricing-short-details-text">Campaigns, brokers, and day-to-day spend keep going until the units are gone. The calculator adds that burn on top of the interest.</p>
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>
              </div>
            </div>

            <div className="pricing-single is-wowdesign problem-keep">
              <div>
                <div className="text-style-tagline">What you keep</div>
                <h3 className="pricing-name">Sell out months earlier</h3>
                <p className="pricing-short-details-text">That interest plus burn stays yours. Typical keep on a boutique project: $400k+.</p>
              </div>
              <div className="pricing-price">$400k+</div>
              <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
              <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
            </div>

            <div className="process-button-wrapper">
              <div className="primary-button-wrapper">
                <InnerButton href="/carry-cost-calculator" label="See your number" cta="Problem - Calc" />
              </div>
            </div>
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
