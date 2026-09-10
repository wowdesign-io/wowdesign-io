import type { Metadata } from 'next'
import Script from 'next/script'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PageCta from '@/components/PageCta'
import SiteChrome from '@/components/SiteChrome'
import InnerButton from '@/components/InnerButton'
import InsightsIcon from '@/components/InsightsIcon'
import InsightsTagIcon from '@/components/InsightsTagIcon'
import { INSIGHTS, type InsightArticle } from '@/lib/insights'
import { SITE } from '@/lib/site'
import '@/app/how-it-works-headings.css'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'What a digital twin is on a building that is not built yet. What follow-up should do the night a buyer shows interest. How much an extra month of a construction loan costs.',
  alternates: { canonical: `${SITE}/insights` },
}

const ROWS: InsightArticle[][] = []
for (let i = 0; i < INSIGHTS.length; i += 2) {
  ROWS.push(INSIGHTS.slice(i, i + 2))
}

function InsightCard({ article }: { article: InsightArticle }) {
  return (
    <div className="features-typography-card top-border-none">
      <div className="features-typography-card-single">
        <div className="features-subtitle-wrapper">
          <div className="tagline-container">
            <div className="icon-embed-xsmall text-color-primary w-embed">
              <InsightsTagIcon slug={article.slug} />
            </div>
            <div className="text-style-tagline">{article.tag}</div>
          </div>
        </div>
        <div className="features-title-description">
          <h2 className="features-title">{article.h1}</h2>
          <p className="features-description-text insights-card-date">{article.datePublished}</p>
          <p className="features-description-text">{article.answer}</p>
        </div>
        <div className="features-button-wrapper">
          <div className="primary-button-wrapper">
            <InnerButton href={`/insights/${article.slug}`} label="Read this" cta={`Insights index - ${article.slug}`} />
          </div>
        </div>
      </div>
      <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
      <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" />
      <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" />
      <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" />
    </div>
  )
}

export default function InsightsIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Insights',
          url: `${SITE}/insights`,
          publisher: { '@id': `${SITE}/#org` },
        }}
      />
      <SiteChrome current="insights">
        <PageHero
          tagline="Insights"
          title="Pre-construction, explained."
          description="Digital twins, follow-up, showrooms, floor plans, software comparisons, and how units sell before they exist."
          ctaLabel="Start reading"
          ctaHref="#insights"
          ctaData="Insights index - Read"
          taglineIcon={<InsightsIcon />}
          wide
          timeline={null}
        />
        <div className="spacer-xhuge"></div>
        <section id="insights" className="section features">
          <div className="container">
            <div className="features-content">
              {ROWS.map((pair) => (
                <div
                  key={pair[0].slug}
                  className={pair.length === 1 ? 'features-flex insights-flex-single' : 'features-flex'}
                >
                  {pair.map((article) => (
                    <InsightCard key={article.slug} article={article} />
                  ))}
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
