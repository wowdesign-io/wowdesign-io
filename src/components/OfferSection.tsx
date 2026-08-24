import InnerButton from '@/components/InnerButton'
import '@/app/problem-offer.css'

export default function OfferSection() {
  return (
    <section id="the-offer" className="section offer-band">
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
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                            <g fill="currentColor">
                              <path d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32" opacity=".2"></path>
                              <path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="text-style-tagline">The offer</div>
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="section-title">What a project costs.</h2>
                  </div>
                  <p className="text-size-medium">
                    10–50 units. Buyers pick a unit tonight. Your sales team only calls people who are ready. Six to eight weeks. We run it.
                  </p>
                </div>
              </div>
            </div>

            <div className="pricing-single is-wowdesign offer-board">
              <div className="offer-board-price">
                <div className="pricing-price">$45k–$75k</div>
                <p className="pricing-short-details-text">Per project. Live in 6–8 weeks for a 10–50 unit building.</p>
              </div>
              <div className="offer-board-body">
                <div className="offer-point">
                  <h3 className="pricing-name">What you get</h3>
                  <p className="pricing-short-details-text">Buyers pick a unit tonight — live price, live availability. Follow-up goes out when a buyer requests a unit. Your sales team already knows who is ready.</p>
                </div>
                <div className="offer-point">
                  <h3 className="pricing-name">What moves the number</h3>
                  <p className="pricing-short-details-text">Units, how far the twin goes, how it shows up for your sales team. Not three packages.</p>
                </div>
                <div className="offer-point">
                  <h3 className="pricing-name">How we run it</h3>
                  <p className="pricing-short-details-text">You never log into a separate viewer. We build it and keep it running. Your sales team sells.</p>
                </div>
              </div>
              <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
              <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
            </div>

            <div className="process-button-wrapper">
              <div className="primary-button-wrapper">
                <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta="Offer - Calc" />
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
