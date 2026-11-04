import type { Metadata } from 'next'
import WebflowScripts from '@/components/WebflowScripts'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PageCta from '@/components/PageCta'
import SiteChrome from '@/components/SiteChrome'
import InnerButton from '@/components/InnerButton'
import InsightsIcon from '@/components/InsightsIcon'
import InsightsTagIcon from '@/components/InsightsTagIcon'
import SkyGlow from '@/components/SkyGlow'
import {
  insightsForHub,
  insightsReadMinutes,
  type InsightArticle,
} from '@/lib/insights'
import { breadcrumbList } from '@/lib/schema'
import { SITE } from '@/lib/site'
import '@/app/how-it-works-headings.css'

const HUB_INTRO =
  'What construction lenders need, what an extra month costs, and how buyers stay through the build.'

export const metadata: Metadata = {
  title: 'Insights',
  description: HUB_INTRO,
  alternates: { canonical: `${SITE}/insights` },
}

const ROWS: InsightArticle[][] = []
const ORDERED = insightsForHub()
for (let i = 0; i < ORDERED.length; i += 2) {
  ROWS.push(ORDERED.slice(i, i + 2))
}

function InsightCard({ article }: { article: InsightArticle }) {
  const minutes = insightsReadMinutes(article)
  const excerpt = article.takeaways?.[0] ?? article.answer

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
          <p className="features-description-text insights-card-meta">{minutes} min read</p>
          <p className="features-description-text insights-card-excerpt">{excerpt}</p>
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
          description: HUB_INTRO,
          publisher: { '@id': `${SITE}/#org` },
        }}
      />
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', url: SITE },
          { name: 'Insights', url: `${SITE}/insights` },
        ])}
      />
      <SiteChrome current="insights">
        <PageHero
          tagline="Insights"
          title="Pre-construction, explained."
          description={HUB_INTRO}
          ctaLabel="Start reading"
          ctaHref="#insights"
          ctaData="Insights index - Read"
          taglineIcon={<InsightsIcon />}
          wide
          motion={false}
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
                  <SkyGlow />
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
      <WebflowScripts />
    </>
  )
}
