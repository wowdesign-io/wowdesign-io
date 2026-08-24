import InnerButton from '@/components/InnerButton'

type PageCtaProps = {
  ctaData?: string
}

export default function PageCta({ ctaData = 'CTA - Calc' }: PageCtaProps) {
  return (
    <section data-w-id="1c3f6ead-2444-a223-fec9-b2e0c543d72e" className="section cta">
      <div className="container">
        <div className="cta-content">
          <div data-w-id="1c3f6ead-2444-a223-fec9-b2e0c543d731" className="cta-typography">
            <div className="cta-title-description">
              <h2 className="cta-title">
                Stop Funding the Bank. <br />
                Start Selling Units.
              </h2>
              <p className="cta-description-text">
                Every extra month is loan interest plus marketing burn. Run the calculator — that starts the path to a demo.
                <br />
              </p>
            </div>
            <div className="cta-button-wrapper">
              <div className="primary-button-wrapper">
                <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta={ctaData} />
              </div>
            </div>
            <div className="cta-timeline text-size-small">
              Built for 10–50 unit developments.
              <br />
              $45k–$75k per project · Launched in 6–8 weeks.
            </div>
          </div>
          <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="cta-top-left-element" />
          <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="cta-top-right-element" />
          <img src="/images/CTA-Botton-Left-Element.svg" loading="lazy" alt="" className="cta-bottom-left-element" />
          <img src="/images/CTA-Botton-Right-Element.svg" loading="lazy" alt="" className="cta-bottom-right-element" />
        </div>
      </div>
      <div className="sky-container">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
  )
}
