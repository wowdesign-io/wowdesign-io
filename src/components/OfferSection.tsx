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

            <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="pricing-single is-wowdesign offer-board">
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
