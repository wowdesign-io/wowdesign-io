import Script from 'next/script'
import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PageCta from '@/components/PageCta'
import FaqAccordion from '@/components/FaqAccordion'
import SiteChrome from '@/components/SiteChrome'
import InnerButton from '@/components/InnerButton'
import InsightsIcon from '@/components/InsightsIcon'
import { articleSchema, faqPage } from '@/lib/schema'
import type { InsightArticle } from '@/lib/insights'
import { SITE } from '@/lib/site'
import '@/app/how-it-works-headings.css'

export default function InsightsArticle({
  article,
  children,
}: {
  article: InsightArticle
  children: ReactNode
}) {
  const url = `${SITE}/insights/${article.slug}`
  return (
    <>
      <JsonLd
        data={articleSchema({
          url,
          headline: article.h1,
          description: article.description,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
        })}
      />
      <JsonLd data={faqPage(url, article.faqs)} />
      <SiteChrome current="insights">
        <PageHero
          tagline="Insights"
          title={article.h1}
          description={article.answer}
          ctaLabel="Carry Cost Calc"
          ctaHref="/carry-cost-calculator"
          ctaData={`Insights - ${article.slug}`}
          taglineIcon={<InsightsIcon />}
          timeline={
            <>
              Andy Bittner · {article.datePublished}
              <br />
              Updated {article.dateModified}
            </>
          }
        />
        <section className="section_content7 insights-article">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="content7_component">
                  <div className="max-width-large align-center">
                    <div className="content7_content-wrapper">
                      <div className="text-rich-text w-richtext">{children}</div>
                      <div className="banner-button-wrapper" style={{ marginTop: '2rem' }}>
                        <div className="primary-button-wrapper">
                          <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta={`Insights body - ${article.slug}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PageCta ctaData={`Insights CTA - ${article.slug}`} />
        <FaqAccordion items={article.faqs} />
      </SiteChrome>
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="afterInteractive" />
      <Script src="/webflow.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/goo-motion-library@latest/dist/goo.bundle.js" strategy="afterInteractive" />
    </>
  )
}
