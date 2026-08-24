import InnerButton from '@/components/InnerButton'
import '@/app/problem-offer.css'

export default function ProblemSection() {
  return (
    <section id="the-problem" className="section problem-band">
      <div className="problem-band-inner">
        <div className="problem-band-grid">
          <div className="problem-band-copy">
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
            <h2 className="section-title">Every extra month costs you twice.</h2>
            <p className="text-size-medium">
              Carry is loan interest plus marketing and ops burn. Not the interest alone. Sell out months earlier and that money stays yours — that is the $400k+.
            </p>
            <div className="problem-band-actions">
              <div className="primary-button-wrapper">
                <InnerButton href="/carry-cost-calculator" label="See your number" cta="Problem - Calc" />
              </div>
            </div>
          </div>

          <div className="problem-ledger" aria-label="What carry is made of">
            <div className="problem-ledger-row">
              <div>
                <div className="problem-ledger-kicker">Loan interest</div>
                <div className="problem-ledger-label">The bank keeps getting paid</div>
                <p className="problem-ledger-note">Typical $10M–$15M construction loan at ~8%.</p>
              </div>
              <div className="problem-ledger-figure">$67k–$100k/mo</div>
            </div>
            <div className="problem-ledger-row">
              <div>
                <div className="problem-ledger-kicker">Marketing + ops</div>
                <div className="problem-ledger-label">Ads and ops do not pause</div>
                <p className="problem-ledger-note">Campaigns, brokers, and day-to-day spend keep running until units are gone.</p>
              </div>
              <div className="problem-ledger-figure">Still on</div>
            </div>
            <div className="problem-ledger-row is-keep">
              <div>
                <div className="problem-ledger-kicker">What you keep</div>
                <div className="problem-ledger-label">Finish months earlier</div>
                <p className="problem-ledger-note">Interest plus burn that would otherwise leave. Run your numbers in the calculator.</p>
              </div>
              <div className="problem-ledger-figure">$400k+</div>
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
