import InnerButton from '@/components/InnerButton'

/**
 * Coaching: the problem must stand alone — not only via comparison / “Stop Sending PDFs.”
 * Carry = loan interest + marketing/ops burn. Never interest alone.
 */
export default function ProblemSection() {
  return (
    <section id="the-problem" className="section_layout237">
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
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                              <g fill="currentColor">
                                <path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v94.37L90.73 98a8 8 0 0 1 10.07-.38l46.35 31.42l44.51-53.41a8 8 0 0 1 12.68 9.74L143.84 143.8a8 8 0 0 1-10.07.38L87.42 112.76L40 160.46V200h184a8 8 0 0 1 8 8" opacity=".2"></path>
                                <path d="M224 200h-16V40a8 8 0 0 0-16 0v160h-48V88a8 8 0 0 0-16 0v112H80V136a8 8 0 0 0-16 0v64H40V48a8 8 0 0 0-16 0v160a8 8 0 0 0 8 8h192a8 8 0 0 0 0-16"></path>
                              </g>
                            </svg>
                          </div>
                          <div className="text-style-tagline">The problem</div>
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="section-title">Every extra month costs you twice.</h2>
                    </div>
                    <p className="text-size-medium">
                      Interest on the construction loan. Marketing and ops burn that keeps running until the units are gone. That is the $400k+.
                    </p>
                  </div>
                </div>
              </div>

              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid layout237_list">
                <div className="layout237_item">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">Loan interest</div>
                    <h3 className="heading-style-h6">The bank keeps getting paid</h3>
                  </div>
                  <p>
                    A typical $10M–$15M construction loan at ~8% is roughly $67k–$100k a month. Every month past sell-out, that leaves as interest — not profit.
                  </p>
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>
                <div className="layout237_item is-2">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">Marketing burn</div>
                    <h3 className="heading-style-h6">Ads and ops do not pause</h3>
                  </div>
                  <p>
                    Campaigns, brokers, and day-to-day spend keep going while inventory sits. Carry is not the loan alone — it is interest plus that burn.
                  </p>
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
                <div className="layout237_item is-3">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">What you keep</div>
                    <h3 className="heading-style-h6">Sell out faster. Keep the $400k+.</h3>
                  </div>
                  <p>
                    Finish months earlier and that money stays yours. Run your numbers in the calculator — loan, rate, months saved, and marketing burn.
                  </p>
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
              </div>

              <div className="process-button-wrapper">
                <div className="primary-button-wrapper">
                  <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta="Problem - Calc" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
