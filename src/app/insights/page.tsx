import type { Metadata } from 'next'
import Script from 'next/script'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PageCta from '@/components/PageCta'
import SiteChrome from '@/components/SiteChrome'
import InnerButton from '@/components/InnerButton'
import { INSIGHTS } from '@/lib/insights'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Insights for boutique condo developers',
  description:
    'Straight answers on construction-loan cost, presale requirements, virtual showrooms, and interactive floor plans — then run your numbers on the calculator.',
  alternates: { canonical: `${SITE}/insights` },
}

export default function InsightsIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Insights for boutique condo developers',
          url: `${SITE}/insights`,
          publisher: { '@id': `${SITE}/#org` },
        }}
      />
      <SiteChrome current="insights">
        <PageHero
          tagline="Insights"
          title="Questions boutique developers actually type."
          description="Construction-loan cost, presale requirements, virtual showrooms, interactive floor plans. Titles match the search. The how is still extra months, $67k–$100k, and a sales team that only calls people who are ready."
          ctaLabel="Carry Cost Calc"
          ctaHref="/carry-cost-calculator"
          ctaData="Insights index - Calc"
        />
        <section className="section features">
          <div className="container">
            <div className="features-content">
              {INSIGHTS.map((article) => (
                <div key={article.slug} className="features-flex" style={{ marginBottom: '2rem' }}>
                  <div className="features-typography-card top-border-none">
                    <div className="features-typography-card-single">
                      <div className="features-subtitle-wrapper">
                        <div className="tagline-container">
                          <div className="text-style-tagline">{article.datePublished}</div>
                        </div>
                      </div>
                      <div className="features-title-description">
                        <h2 className="features-title">{article.h1}</h2>
                        <p className="features-description-text">{article.answer}</p>
                      </div>
                      <div className="features-button-wrapper">
                        <div className="primary-button-wrapper">
                          <InnerButton href={`/insights/${article.slug}`} label="Read the answer" cta={`Insights index - ${article.slug}`} />
                        </div>
                      </div>
                    </div>
                    <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
                    <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" />
                    <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" />
                    <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <PageCta ctaData="Insights index CTA - Calc" />
      </SiteChrome>
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="afterInteractive" />
      <Script src="/webflow.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/goo-motion-library@latest/dist/goo.bundle.js" strategy="afterInteractive" />
    </>
  )
}
