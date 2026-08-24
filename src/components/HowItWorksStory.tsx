import InnerButton from '@/components/InnerButton'

const chevron = (
  <div className="icon-embed-xsmall text-color-primary w-embed">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="100%" viewBox="0 0 256 256">
      <g fill="currentColor">
        <path d="m136 128l-80 80V48Z" opacity=".2"></path>
        <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
      </g>
    </svg>
  </div>
)

const cardShapes = (
  <>
    <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
    <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" />
    <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" />
    <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" />
  </>
)

function ImageCol({ src, side }: { src: string; side: 'left' | 'right' }) {
  return (
    <div className={`features-card-image-wrapper ${side === 'left' ? 'is-img-left' : 'is-img-right'}`}>
      <div className="feature-card is-img">
        <img src={src} loading="lazy" alt="" className="feature-image" />
      </div>
      <div className="sky-container">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </div>
  )
}

function CopyCol({
  tagline,
  title,
  description,
  items,
  first,
  cta,
}: {
  tagline: string
  title: string
  description: string
  items: string[]
  first?: boolean
  cta?: string
}) {
  return (
    <div className={first ? 'features-typography-card top-border-none' : 'features-typography-card'}>
      <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
        <div className="features-subtitle-wrapper">
          <div className="tagline-container">
            <div className="icon-embed-xsmall text-color-primary w-embed">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="100%" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15 7H7.89l3.57 5l-3.57 5H15l3.55-5z" opacity=".3"></path>
                <path fill="currentColor" d="M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7l-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12zM15 17H7.89l3.57-5l-3.57-5H15l3.55 5z"></path>
              </svg>
            </div>
            <div className="text-style-tagline">{tagline}</div>
          </div>
        </div>
        <div className="features-title-description">
          <h3 className="features-title">{title}</h3>
          <p className="features-description-text">{description}</p>
        </div>
        <div className="features-list-wrapper">
          <ul role="list" className="features-list">
            {items.map((item) => (
              <li key={item} className="features-list-item">
                {chevron}
                <div className="features-list-item-text">{item}</div>
              </li>
            ))}
          </ul>
        </div>
        {cta ? (
          <div className="features-button-wrapper">
            <div className="primary-button-wrapper">
              <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta={cta} />
            </div>
          </div>
        ) : null}
      </div>
      {cardShapes}
    </div>
  )
}

function Row({
  imageLeft,
  image,
  first,
  cta,
  ...copy
}: {
  imageLeft?: boolean
  image: string
  first?: boolean
  cta?: string
  tagline: string
  title: string
  description: string
  items: string[]
}) {
  const img = <ImageCol src={image} side={imageLeft ? 'left' : 'right'} />
  const text = <CopyCol {...copy} first={first} cta={cta} />
  return (
    <div className="features-flex">
      {imageLeft ? (
        <>
          {img}
          {text}
        </>
      ) : (
        <>
          {text}
          {img}
        </>
      )}
    </div>
  )
}

export default function HowItWorksStory() {
  return (
    <section id="how-it-works-story" className="section features">
      <div className="container">
        <div className="features-content">
          <Row
            first
            image="/images/analytics-screenshot.avif"
            tagline="The problem"
            title="You're paying until the last unit sells."
            description="Interest on the construction loan. Then marketing and ops. That is carry — a months problem, not a PDF problem."
            items={[
              '$67k–$100k loan interest / month on a typical $10M–$15M build',
              'Ads, brokers, and ops keep spending until it is sold',
              '$400k+ typical carry kept if you sell out faster',
            ]}
          />
          <Row
            imageLeft
            image="/images/digital-twin-screenshot.avif"
            tagline="Step 1"
            title="A buyer can pick a unit tonight."
            description="From their phone — every floor, live price, live availability. No PDF. No waiting until Monday."
            items={['Every floor, live', 'Live price and availability', 'Works on their phone tonight']}
          />
          <Row
            image="/images/leads-screenshot.avif"
            tagline="Step 2"
            title="Follow-up runs itself."
            description="The second they request a unit, they get the floor plan and next steps. You don't write a thing."
            items={['Floor plan goes out automatically', 'Next steps without a Monday email', "You don't write a thing"]}
          />
          <Row
            imageLeft
            image="/images/crm-sync-v9.avif"
            tagline="Step 3"
            title="Your sales team has the picture before they call."
            description="No new system. It shows up in the tools you already use — which unit they want, and how ready they are."
            items={['Which unit they want', 'How ready they are', 'In the tools you already use']}
          />
          <Row
            image="/images/65e2250341631373794d20d2_6564d517cc477ac6d22cd256_Devices2023.avif"
            tagline="The offer"
            title="What a project costs."
            description="Website, digital twin, and follow-up. Built in 6–8 weeks for 10–50 unit buildings. We run the platform. You don't buy one."
            items={[
              '$45k–$75k per project',
              'The range is units, twin depth, and sales-team wiring — not three packages',
              'We keep it under maintenance. You never operate a separate viewer',
            ]}
            cta="How it works offer - Calc"
          />
        </div>
      </div>
    </section>
  )
}
