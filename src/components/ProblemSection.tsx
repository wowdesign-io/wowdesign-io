import InnerButton from '@/components/InnerButton'
import '@/app/problem-offer.css'

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
                    <h2 className="section-title">One extra month. That&apos;s $67k–$100k.</h2>
                  </div>
                  <p className="text-size-medium">
                    Loan interest. Then ads and ops. Until the last unit sells. Sell out faster and $400k+ stays yours.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-layout-grid pricing-grid problem-pair">
              <div className="pricing-card-wrap">
                <div className="pricing-single problem-card">
                  <div className="text-style-tagline">Leaving every month</div>
                  <div className="pricing-price">$67k–$100k</div>
                  <p className="pricing-short-details-text">Typical $10M–$15M construction loan at ~8%.</p>
                  <ul role="list" className="pricing-features-list">
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">Interest leaves as cost, not profit</div>
                    </li>
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">Ads, brokers, and ops keep spending</div>
                    </li>
                  </ul>
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>
              </div>
              <div className="pricing-card-wrap">
                <div className="pricing-single is-wowdesign problem-card">
                  <div className="text-style-tagline">What you keep</div>
                  <div className="pricing-price">$400k+</div>
                  <p className="pricing-short-details-text">If you sell out months earlier.</p>
                  <ul role="list" className="pricing-features-list">
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">Interest plus marketing burn</div>
                    </li>
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">That money stays yours</div>
                    </li>
                  </ul>
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>
              </div>
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
