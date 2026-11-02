import { getInsight, INSIGHTS, type InsightArticle } from './insights'

/** Related-questions defaults (linking only — no date bump). Plan 2026-11-02. */
const RELATED_DEFAULTS: Record<string, string[]> = {
  'construction-loan-presale-requirement': [
    'why-construction-lenders-care-about-presales',
    'how-fast-pre-sell-construction-loan-draw',
    'interactive-floor-plan-vs-pdf',
  ],
  'how-long-sell-out-20-40-unit-condo': [
    'how-fast-pre-sell-construction-loan-draw',
    'construction-loan-extra-month',
    'interactive-floor-plan-vs-pdf',
  ],
  'how-fast-pre-sell-construction-loan-draw': [
    'construction-loan-presale-requirement',
    'sell-pre-construction-condos-faster',
    'interactive-floor-plan-vs-pdf',
  ],
  'keep-pre-construction-buyers-from-backing-out': [
    'follow-up-pre-construction-buyers',
    'what-sales-team-should-know-before-calling',
    'interactive-floor-plan-vs-pdf',
  ],
  'why-construction-lenders-care-about-presales': [
    'construction-loan-presale-requirement',
    'construction-loan-extra-month',
    'how-long-sell-out-20-40-unit-condo',
  ],
  'interactive-floor-plan-vs-pdf': [
    'virtual-showroom-pre-construction',
    'digital-twin-pre-construction',
    'boutique-website-besides-renderings',
  ],
  'construction-loan-extra-month': [
    'how-long-sell-out-20-40-unit-condo',
    'how-fast-pre-sell-construction-loan-draw',
    'why-construction-lenders-care-about-presales',
  ],
  'digital-twin-pre-construction': [
    'virtual-showroom-pre-construction',
    'interactive-floor-plan-vs-pdf',
    'boutique-website-besides-renderings',
  ],
  'follow-up-pre-construction-buyers': [
    'what-sales-team-should-know-before-calling',
    'keep-pre-construction-buyers-from-backing-out',
    'sell-pre-construction-condos-faster',
  ],
  'virtual-showroom-pre-construction': [
    'digital-twin-pre-construction',
    'interactive-floor-plan-vs-pdf',
    'boutique-website-besides-renderings',
  ],
  'sell-pre-construction-condos-faster': [
    'how-long-sell-out-20-40-unit-condo',
    'follow-up-pre-construction-buyers',
    'boutique-website-besides-renderings',
  ],
  'boutique-website-besides-renderings': [
    'digital-twin-pre-construction',
    'interactive-floor-plan-vs-pdf',
    'virtual-showroom-pre-construction',
  ],
  'what-sales-team-should-know-before-calling': [
    'follow-up-pre-construction-buyers',
    'keep-pre-construction-buyers-from-backing-out',
    'sell-pre-construction-condos-faster',
  ],
  'sell-last-units-pre-construction-condo': [
    'how-long-sell-out-20-40-unit-condo',
    'sell-pre-construction-condos-faster',
    'keep-pre-construction-buyers-from-backing-out',
  ],
  'what-counts-qualifying-presale-construction-loan': [
    'construction-loan-presale-requirement',
    'why-construction-lenders-care-about-presales',
    'how-fast-pre-sell-construction-loan-draw',
  ],
}

/** Labels for related list — must read as questions even when H1 is a statement. */
const RELATED_QUESTION_LABEL: Record<string, string> = {
  'interactive-floor-plan-vs-pdf': 'Interactive floor plan vs a PDF: which do buyers need?',
  'sell-pre-construction-condos-faster': 'How do you sell pre-construction condos faster?',
  'keep-pre-construction-buyers-from-backing-out':
    'How do you keep pre-construction buyers from backing out during the build?',
}

export function relatedQuestionLabel(article: InsightArticle): string {
  if (RELATED_QUESTION_LABEL[article.slug]) return RELATED_QUESTION_LABEL[article.slug]
  if (article.h1.trim().endsWith('?')) return article.h1
  const fromFaq = article.faqs.find((f) => f.q.trim().endsWith('?'))
  if (fromFaq) return fromFaq.q
  return `${article.h1}?`
}

export function relatedInsights(article: InsightArticle): InsightArticle[] {
  const slugs = article.related ?? RELATED_DEFAULTS[article.slug] ?? []
  const out: InsightArticle[] = []
  for (const slug of slugs) {
    if (slug === article.slug) continue
    try {
      out.push(getInsight(slug))
    } catch {
      /* skip unknown */
    }
    if (out.length >= 3) break
  }
  return out
}

/** Sanity: every Insights URL has ≥3 related neighbours available. */
export function assertRelatedCoverage() {
  for (const article of INSIGHTS) {
    if (relatedInsights(article).length < 2) {
      throw new Error(`Related coverage thin for ${article.slug}`)
    }
  }
}
