import InnerButton from '@/components/InnerButton'

/** Buyers tonight + sales team ready — features-flex / features-typography-card only. */
export default function ProposalSignals() {
  return (
    <section id="how-buyers-and-sales" className="section features">
      <div className="container">
        <div className="features-content">
          <div className="features-flex">
            <div className="features-typography-card top-border-none">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path d="M208 80v96a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V80Z" opacity=".2"></path>
                          <path d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Zm-40-16a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="text-style-tagline">Tonight on their phone</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">Buyers pick a unit before Monday.</h3>
                  <p className="features-description-text">
                    Every floor. Live price. Live availability. They can reserve with a deposit — without waiting for someone to send a PDF.
                  </p>
                </div>
              </div>
              <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
              <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" />
              <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" />
            </div>
            <div className="features-typography-card top-border-none">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></path>
                          <path d="M168 128a8 8 0 0 1-8 8h-48v48a8 8 0 0 1-16 0v-56a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8m64 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="text-style-tagline">Sales team ready</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">Your sales team knows who&apos;s ready.</h3>
                  <p className="features-description-text">
                    Which units they opened, time on price, return visits — ranked before the call. Fewer cold conversations. More committed buyers.
                  </p>
                </div>
              </div>
              <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
              <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" />
              <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" />
            </div>
          </div>

          <div className="features-flex">
            <div className="features-typography-card top-border-none">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path d="M224 80v96H32V80Z" opacity=".2"></path>
                          <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h176v24H40Zm0 144V96h176v104Z"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="text-style-tagline">Demand</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">Views become demand you can act on.</h3>
                  <p className="features-description-text">
                    See which floor plans pull attention and where buyers drop off — so you put time on the units that move and leave the rest alone.
                  </p>
                </div>
                <div className="features-button-wrapper">
                  <div className="primary-button-wrapper">
                    <InnerButton href="#open-the-demos" label="Open the demos" cta="Proposal - Signals demos" />
                  </div>
                </div>
              </div>
              <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
              <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" />
              <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
