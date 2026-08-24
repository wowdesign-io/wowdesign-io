import InnerButton from '@/components/InnerButton'
import '@/app/problem-offer.css'

const check = (
  <div className="icon-embed-xsmall text-color-primary w-embed">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
      <g fill="currentColor">
        <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24" opacity=".2"></path>
        <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></path>
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
                <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="max-width-large align-center">
                  <div className="display-flex-vertical flex-align-center">
                    <div className="margin-bottom margin-xsmall">
                      <div className="tagline-container">
                        <div className="icon-embed-xsmall text-color-primary w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                            <g fill="currentColor">
                              <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24" opacity=".2"></path>
                              <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m56-88a8 8 0 0 1-8 8h-48V80a8 8 0 0 1 16 0v48h32a8 8 0 0 1 8 8"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="text-style-tagline">The problem</div>
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="section-title">
                      One extra month.
                      <br />
                      That&apos;s $67k–$100k.
                    </h2>
                  </div>
                  <p className="text-size-medium">
                    That&apos;s the loan. Then ads and ops — until the last unit sells. Boutique developers hit the 50% draw by selling out faster. That&apos;s how $400k+ stays yours.
                  </p>
                </div>
              </div>
            </div>

            <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid pricing-grid problem-pair">
              <div className="pricing-card-wrap">
                <div className="pricing-single problem-card">
                  <div className="text-style-tagline">Leaving every month</div>
                  <div className="pricing-price">$67k–$100k</div>
                  <p className="pricing-short-details-text">Every month units sit on a typical $10M–$15M loan at 8%.</p>
                  <ul role="list" className="pricing-features-list">
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">The bank still gets paid if units sit</div>
                    </li>
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">Ads, brokers, and ops stay on until sell-out</div>
                    </li>
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">The 50% draw waits until units actually move</div>
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
                  <p className="pricing-short-details-text">What a 10–50 unit project keeps when sell-out happens months earlier.</p>
                  <ul role="list" className="pricing-features-list">
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">Months of interest you do not keep paying</div>
                    </li>
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">Months of ads and ops you do not keep burning</div>
                    </li>
                    <li className="pricing-features-list-item">
                      {check}
                      <div className="pricing-features-list-item-text">The 50% draw unlocks sooner, so the build starts sooner</div>
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
