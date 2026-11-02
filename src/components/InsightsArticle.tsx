import Script from 'next/script'
import type { ReactNode } from 'react'
import JsonLd from '@/components/JsonLd'
import PageHero from '@/components/PageHero'
import PageCta from '@/components/PageCta'
import FaqAccordion from '@/components/FaqAccordion'
import SiteChrome from '@/components/SiteChrome'
import InsightsTagIcon from '@/components/InsightsTagIcon'
import { articleSchema, breadcrumbList, faqPage, personAndy } from '@/lib/schema'
import type { InsightArticle } from '@/lib/insights'
import { relatedInsights } from '@/lib/insights-related'
import { ANDY_INSIGHTS_BIO } from '@/lib/andy-bio'
import { ANDY, SITE } from '@/lib/site'
import '@/app/how-it-works-headings.css'

export default function InsightsArticle({
  article,
  children,
}: {
  article: InsightArticle
  children: ReactNode
}) {
  const url = `${SITE}/insights/${article.slug}`
  const related = relatedInsights(article)
  const ogImage = article.ogImage
    ? article.ogImage.startsWith('http')
      ? article.ogImage
      : `${SITE}${article.ogImage}`
    : undefined

  return (
    <>
      <JsonLd
        data={articleSchema({
          url,
          headline: article.h1,
          description: article.description,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          image: ogImage,
        })}
      />
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', url: SITE },
          { name: 'Insights', url: `${SITE}/insights` },
          { name: article.h1, url },
        ])}
      />
      <JsonLd data={faqPage(url, article.faqs)} />
      <JsonLd data={personAndy()} />
      <SiteChrome current="insights">
        <PageHero
          tagline={article.tag}
          title={article.h1}
          description={
            <>
              {article.answer}
              <span className="insights-last-reviewed">Last reviewed {article.dateModified}</span>
            </>
          }
          taglineIcon={<InsightsTagIcon slug={article.slug} />}
          wide
          motion={false}
          timeline={null}
        />

        {article.takeaways && article.takeaways.length > 0 ? (
          <section className="section features insights-takeaways" aria-label="Key takeaways">
            <div className="container">
              <div className="features-typography-card top-border-none">
                <div className="features-typography-card-single">
                  <div className="text-style-tagline">Key takeaways</div>
                  <ul className="insights-takeaways-list">
                    {article.takeaways.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="section_content7 insights-article">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="content7_component">
                  <div className="max-width-large align-center">
                    <div className="content7_content-wrapper">
                      <div className="text-rich-text w-richtext">
                        {children}
                        {article.pullQuote ? (
                          <blockquote className="insights-pull-quote">{article.pullQuote}</blockquote>
                        ) : null}
                        {article.figures?.map((fig) => (
                          <figure key={fig.src} className="insights-figure">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={fig.src}
                              alt={fig.alt}
                              width={fig.width}
                              height={fig.height}
                              loading="lazy"
                            />
                            <figcaption>{fig.caption}</figcaption>
                          </figure>
                        ))}
                        {article.workedExample ? (
                          <div className="features-typography-card top-border-none insights-worked-example">
                            <div className="features-typography-card-single">
                              <h3>{article.workedExample.title}</h3>
                              <ol>
                                {article.workedExample.rows.map((row) => (
                                  <li key={row}>{row}</li>
                                ))}
                              </ol>
                              <p>{article.workedExample.note}</p>
                            </div>
                          </div>
                        ) : null}
                        {article.sources && article.sources.length > 0 ? (
                          <div className="insights-sources">
                            <h2>Sources and method</h2>
                            <ul>
                              {article.sources.map((src) => (
                                <li key={src.url}>
                                  <a href={src.url} rel="noopener noreferrer" target="_blank">
                                    {src.label}
                                  </a>
                                  {src.note ? `. ${src.note}` : null}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="section features insights-related" aria-label="Related questions">
            <div className="container">
              <div className="section-title-single" style={{ marginBottom: '1.5rem' }}>
                <h2 className="section-title">Related questions</h2>
              </div>
              <div className="features-flex">
                {related.map((item) => (
                  <div key={item.slug} className="features-typography-card top-border-none">
                    <div className="features-typography-card-single">
                      <div className="features-subtitle-wrapper">
                        <div className="tagline-container">
                          <div className="icon-embed-xsmall text-color-primary w-embed">
                            <InsightsTagIcon slug={item.slug} />
                          </div>
                          <div className="text-style-tagline">{item.tag}</div>
                        </div>
                      </div>
                      <div className="features-title-description">
                        <h3 className="features-title">
                          <a href={`/insights/${item.slug}`}>{item.h1}</a>
                        </h3>
                        <p className="features-description-text">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <FaqAccordion items={article.faqs} />

        <section className="section insights-author-box" aria-label="About the author">
          <div className="container">
            <div className="testimonial-single-card two insights-author-footer">
              <a href="/about" className="testimonial-author-wrapper">
                <div className="testimonial-author-image-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/founder/andy-miami-square.webp"
                    alt={`${ANDY.name}, ${ANDY.jobTitle} of wowdesign`}
                    className="testimonial-author-image"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="testimonial-author-name-bio-wrapper">
                  <div className="testimonial-author-name">{ANDY.name}</div>
                  <div className="testimonial-author-bio">Founder, wowdesign</div>
                  <p className="insights-author-bio-text">{ANDY_INSIGHTS_BIO}</p>
                  <div className="blog-post-date-text">Last reviewed: {article.dateModified}</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <PageCta
          ctaData={`Insights CTA - ${article.slug}`}
          lead={article.ctaLead}
          title={article.ctaTitle}
        />
      </SiteChrome>
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="afterInteractive" />
      <Script src="/webflow.js" strategy="afterInteractive" />
    </>
  )
}
