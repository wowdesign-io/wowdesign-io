import InnerButton from '@/components/InnerButton'

export default function OfferSection() {
  return (
    <section id="the-offer" className="section_comparison13">
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
                      <h2 className="section-title">What a project costs.</h2>
                    </div>
                    <p className="text-size-medium">
                      Website, digital twin, and follow-up. Built in 6–8 weeks for 10–50 unit buildings. We run the platform. You don&apos;t buy one.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-width-large align-center">
                <div className="pricing-single is-wowdesign">
                  <div className="pricing-top-content">
                    <div className="pricing-image-name-wrap">
                      <div className="pricing-icon-wrapper">
                        <img loading="lazy" src="/images/wow-design-color-logo-dark.svg" alt="" className="pricing-icon" />
                      </div>
                    </div>
                    <div className="pricing-price-pack-name-wrap">
                      <div className="pricing-price">$45k–$75k</div>
                      <div className="pricing-short-details-text">per project</div>
                    </div>
                        <p className="pricing-short-details-text">The range is units, how far the twin goes, and how it lands in your sales team&apos;s tools — not three packages.</p>
                        <p className="pricing-short-details-text">We build it and we keep it under maintenance. You never operate a separate viewer.</p>
                    <div className="pricing-features-button-wrapper">
                      <div className="primary-button-wrapper pricing">
                        <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta="Offer - Calc" className="pricing" />
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
