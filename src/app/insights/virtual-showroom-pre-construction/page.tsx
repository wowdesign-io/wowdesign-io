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
        Category vendors call it a virtual showroom, virtual sales gallery, or digital sales gallery. On a boutique 10–50 unit project it is the sales gallery on the website: every floor, live price, live availability, on a phone. No app. Follow-up goes out so your sales team only calls people who are ready.
      </p>
      <h2>What it is not</h2>
      <table>
        <thead>
          <tr>
            <th>They say</th>
            <th>What that usually is</th>
            <th>What boutique 10–50 needs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matterport</td>
            <td>Scan of a finished space</td>
            <td>Units that are not built yet</td>
          </tr>
          <tr>
            <td>Enterprise LiveSite / Planpoint login</td>
            <td>Software you staff and operate</td>
            <td>We run the twin. You do not buy a viewer login.</td>
          </tr>
          <tr>
            <td>Spark.re stacking plan</td>
            <td>CRM / inventory for the sales team</td>
            <td>The buyer site is separate. Spark stays the sales-team tool.</td>
          </tr>
        </tbody>
      </table>
      <h2>Why this is money, not a nicer brochure</h2>
      <p>
        Buyers who cannot pick a unit tonight stall. Extra months of construction-loan interest plus marketing burn are $67k–$100k a month to the bank on a typical boutique loan. A virtual showroom is how they commit earlier. See a live buyer-site glimpse at demo.wowdesign.io. The booked demo is CRM, what the sales team sees, and follow-up — the layer clicking around cannot show.
      </p>
      <p>
        Public project fee is $45k–$75k. 6–8 weeks. Built for 10–50 units, not a $125k–$370k enterprise gallery stack.
      </p>
    </InsightsArticle>
  )
}
