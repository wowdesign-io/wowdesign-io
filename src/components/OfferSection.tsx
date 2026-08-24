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
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="100%" viewBox="0 0 256 256">
                            <g fill="currentColor">
                              <path d="M232 96v96H32V96Z" opacity=".2"></path>
                              <path d="M232 88h-40.58l-21.53-43.08a8 8 0 0 0-14.14.08L133.89 88H122.11L99.25 45a8 8 0 0 0-14.14-.08L63.58 88H24a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16M92.58 56.55L108.23 88H76.92ZM163.42 56.55L179.08 88h-31.31ZM224 200H32v-96h208z"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="text-style-tagline">The offer</div>
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-small">
                    <h2 className="section-title">$45k–$75k per project.</h2>
                  </div>
                  <p className="text-size-medium">
                    Website, digital twin, and automated follow-up — one system. Built in 6–8 weeks for boutique 10–50 unit developments.
                  </p>
                </div>
              </div>
            </div>

            <div className="pricing-single is-wowdesign offer-board">
              <div className="offer-board-price">
                <div className="pricing-price">$45k–$75k</div>
                <p className="pricing-short-details-text">Per project · launched in 6–8 weeks</p>
              </div>
              <div className="offer-board-body">
                <div className="offer-point">
                  <h3 className="pricing-name">What you get</h3>
                  <p className="pricing-short-details-text">Buyers explore every unit from their phone. Follow-up runs itself. Your sales team sees who is ready before they call.</p>
                </div>
                <div className="offer-point">
                  <h3 className="pricing-name">What moves the number</h3>
                  <p className="pricing-short-details-text">Unit count, how deep the twin goes, and how follow-up wires into your sales tools. Same system. Different project weight — not a package menu.</p>
                </div>
                <div className="offer-point">
                  <h3 className="pricing-name">How we run it</h3>
                  <p className="pricing-short-details-text">You do not buy or operate a separate viewer. We build it, host it, and keep it under maintenance.</p>
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
