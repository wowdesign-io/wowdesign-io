import InnerButton from '@/components/InnerButton'
import '@/app/problem-offer.css'

export default function OfferSection() {
  return (
    <section id="the-offer" className="section offer-band">
      <div className="offer-band-inner">
        <div className="offer-board">
          <div className="offer-board-price">
            <div>
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
              <p className="offer-price-kicker">Per project</p>
              <p className="offer-price-amount">$45k–$75k</p>
              <p className="offer-price-meta">Website, digital twin, and automated follow-up. Built in 6–8 weeks for 10–50 unit developments.</p>
            </div>
          </div>

          <div className="offer-board-body">
            <dl className="offer-points">
              <div className="offer-point">
                <dt>What you get</dt>
                <dd>Buyers explore every unit from their phone. Follow-up runs itself. Your sales team sees who is ready before they call.</dd>
              </div>
              <div className="offer-point">
                <dt>What moves the number</dt>
                <dd>Unit count, how deep the twin goes, and how follow-up wires into your sales tools. Same system. Different project weight. Not a package menu.</dd>
              </div>
              <div className="offer-point">
                <dt>How we run it</dt>
                <dd>You do not buy or operate a separate viewer. We build it, host it, and keep it under maintenance.</dd>
              </div>
            </dl>
            <div className="offer-board-actions">
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
      <div className="sky-container" aria-hidden="true">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
  )
}
