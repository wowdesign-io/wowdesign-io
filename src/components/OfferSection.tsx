import InnerButton from '@/components/InnerButton'

/**
 * Coaching: the only public dollar on the page was $400k saved — show what the system costs.
 * $45k–$75k per project. Never show Planpoint or other platform SKUs.
 */
export default function OfferSection() {
  return (
    <section id="the-offer" className="section_layout237">
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
                                <path d="M232 96v96a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V96Z" opacity=".2"></path>
                                <path d="M232 88h-40.58l-21.53-43.08a8 8 0 0 0-14.14.08L133.89 88H122.11L99.25 45a8 8 0 0 0-14.14-.08L63.58 88H24a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16M92.58 56.55L108.23 88H76.92ZM163.42 56.55L179.08 88h-31.31ZM224 200H32v-96h208zm-40-56a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8"></path>
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

              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid layout237_list">
                <div className="layout237_item">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">What you get</div>
                    <h3 className="heading-style-h6">The full buyer journey</h3>
                  </div>
                  <p>
                    Buyers explore every unit from their phone. Follow-up runs itself. Your sales team sees who is ready before they call. Not a brochure site.
                  </p>
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>
                <div className="layout237_item is-2">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">What moves the number</div>
                    <h3 className="heading-style-h6">Scope — not a package menu</h3>
                  </div>
                  <p>
                    Unit count, how deep the twin goes, and how follow-up wires into your sales tools. Same system. Different project weight.
                  </p>
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
                <div className="layout237_item is-3">
                  <div className="margin-bottom margin-xsmall">
                    <div className="text-style-tagline">How we run it</div>
                    <h3 className="heading-style-h6">We operate the platform</h3>
                  </div>
                  <p>
                    You do not buy or run a separate viewer. We build it, host it, and keep it under maintenance. One team. One system.
                  </p>
                  <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
              </div>

              <div className="process-timeline text-size-small">Typical project: months of carry vs. a one-time build.</div>
              <div className="process-button-wrapper">
                <div className="primary-button-wrapper">
                  <InnerButton href="/book-a-demo" label="Book A Demo" cta="Offer - Demo" />
                </div>
                <div className="primary-button-wrapper">
                  <InnerButton href="/contact" label="Get started" cta="Offer - Contact" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
