import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { INSIGHTS } from '@/lib/insights'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = '2026-09-08'

  const pages: MetadataRoute.Sitemap = [
    { url: SITE, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/features`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/how-it-works`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE}/carry-cost-calculator`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/insights`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE}/book-a-demo`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/terms-of-service`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/disclaimer`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  for (const article of INSIGHTS) {
    pages.push({
      url: `${SITE}/insights/${article.slug}`,
      lastModified: article.dateModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }

  return pages
}
