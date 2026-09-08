import type { FaqItem } from '@/lib/schema'

const faqIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8 4v12h12V4zm6.74 10.69a.96.96 0 0 1-.73.31c-.29 0-.54-.1-.74-.31a1 1 0 0 1-.31-.74c0-.29.1-.54.31-.74s.45-.3.74-.3s.54.1.74.3s.3.45.3.74s-.11.54-.31.74m1.77-5.86c-.23.34-.54.69-.92 1.06c-.3.27-.51.52-.64.75q-.18.345-.18.78v.4h-1.52v-.56c0-.42.09-.78.26-1.09c.18-.32.49-.67.95-1.07c.32-.29.55-.54.69-.74q.21-.3.21-.72q0-.54-.36-.87c-.24-.23-.57-.34-.99-.34c-.4 0-.72.12-.97.36s-.42.53-.53.87l-1.37-.57c.18-.55.52-1.03 1-1.45c.49-.43 1.11-.64 1.85-.64c.56 0 1.05.11 1.49.33q.66.33 1.02.93c.36.6.36.84.36 1.33s-.11.9-.35 1.24" opacity=".3"></path>
    <path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-6.49-5.84c.41-.73 1.18-1.16 1.63-1.8c.48-.68.21-1.94-1.14-1.94c-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26c.37.6.58 1.73.01 2.57c-.63.93-1.23 1.21-1.56 1.81c-.13.24-.18.4-.18 1.18h-1.52c.01-.41-.06-1.08.26-1.66m-.56 3.79c0-.59.47-1.04 1.05-1.04c.59 0 1.04.45 1.04 1.04c0 .58-.44 1.05-1.04 1.05c-.58 0-1.05-.47-1.05-1.05"></path>
  </svg>
)

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="faq-section-title-wrapper">
          <div className="section-subtitle-wrapper center">
            <div className="tagline-container">
              <div className="icon-embed-xsmall text-color-primary w-embed">{faqIcon}</div>
              <div className="text-style-tagline">FAQ</div>
            </div>
          </div>
          <div className="section-title-single">
            <h2 className="section-title">Frequently asked questions</h2>
          </div>
        </div>
        <div className="faq-content">
          <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="w-tabs">
            <div className="faq-accordion-wrapper w-tab-menu">
              {items.map((item, i) => (
                <a
                  key={item.q}
                  data-w-tab={`Tab ${i + 1}`}
                  className={i === 0 ? 'single-faq-accordion-wrap w-inline-block w-tab-link w--current' : 'single-faq-accordion-wrap w-inline-block w-tab-link'}
                >
                  <div className="faq-accordion-question-wrap">
                    <h3 className="faq-question">{item.q}</h3>
                    <div className="faq-icon-wrapper">
                      <img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" />
                      <img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" />
                    </div>
                  </div>
                  <div className="faq-accordion-answer-wrap">
                    <div className="faq-answer">
                      <p className="faq-answer-text">{item.a}</p>
                    </div>
                  </div>
                  <img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" />
                  <img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" />
                  <img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" />
                  <img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
                </a>
              ))}
            </div>
            <div className="display-none w-tab-content">
              {items.map((_, i) => (
                <div key={i} data-w-tab={`Tab ${i + 1}`} className={i === 0 ? 'w-tab-pane w--tab-active' : 'w-tab-pane'}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
