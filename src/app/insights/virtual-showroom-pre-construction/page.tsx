import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('virtual-showroom-pre-construction')

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>What a virtual showroom actually is</h2>
      <p>
        On a boutique 10–50 unit project it is the sales gallery on the website: every floor, live price, live availability, on a phone. No app. Follow-up goes out so your sales team only calls people who are ready.
      </p>
      <h2>What it is not</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>What that usually is</th>
            <th>What a 10–50 unit project needs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finished-space scan</td>
            <td>A walkthrough of something already built</td>
            <td>Units that are not built yet</td>
          </tr>
          <tr>
            <td>A stacking plan in the CRM</td>
            <td>Inventory for the sales team</td>
            <td>What the buyer uses on the project website</td>
          </tr>
        </tbody>
      </table>
      <h2>Why this is money</h2>
      <p>
        Buyers who cannot pick a unit tonight stall. Extra months of construction-loan interest plus marketing burn are $67k–$100k a month to the bank on a typical boutique loan. A virtual showroom is how they commit earlier. See a live buyer-site glimpse at demo.wowdesign.io.
      </p>
    </InsightsArticle>
  )
}
