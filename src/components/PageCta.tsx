import type { ReactNode } from 'react'
import InnerButton from '@/components/InnerButton'

type PageCtaProps = {
  ctaData?: string
  /** Per-post one-line lead-in above the button. */
  lead?: string
  /** Per-post headline. Falls back to the shared bank line. */
  title?: ReactNode
  href?: string
  label?: string
  target?: string
  rel?: string
  timeline?: ReactNode
}

const DEFAULT_TITLE = (
  <>
    Stop Funding the Bank. <br />
    Start Selling Units.
  </>
)

const DEFAULT_LEAD = 'Every extra month is loan interest plus marketing burn. Run your numbers.'

const DEFAULT_TIMELINE = (
  <>
    Built for 10–50 unit developments.
    <br />
    $45k–$65k + $2,500/mo · Live in 6–8 weeks.
  </>
)

export default function PageCta({
  ctaData = 'CTA - Calc',
  lead = DEFAULT_LEAD,
  title,
  href = '/carry-cost-calculator',
  label = 'Carry Cost Calc',
  target,
  rel,
  timeline = DEFAULT_TIMELINE,
}: PageCtaProps) {
  return (
    <section data-w-id="1c3f6ead-2444-a223-fec9-b2e0c543d72e" className="section cta">
      <div className="container">
        <div className="cta-content">
          <div data-w-id="1c3f6ead-2444-a223-fec9-b2e0c543d731" className="cta-typography">
            <div className="cta-title-description">
              <h2 className="cta-title">{title ?? DEFAULT_TITLE}</h2>
              <p className="cta-description-text">
                {lead}
                <br />
              </p>
            </div>
            <div className="cta-button-wrapper">
              <div className="primary-button-wrapper">
                <InnerButton href={href} label={label} cta={ctaData} target={target} rel={rel} />
              </div>
            </div>
            <div className="cta-timeline text-size-small">{timeline}</div>
          </div>
          {/* Same Features-Card-Shape L-marks as Insights/Features; glass is on ::before so these aren't clipped by backdrop-filter */}
          <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="cta-top-left-element" />
          <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="cta-top-right-element" />
          <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="cta-bottom-left-element" />
          <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="cta-bottom-right-element" />
        </div>
      </div>
      <div className="sky-container">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
  )
}
