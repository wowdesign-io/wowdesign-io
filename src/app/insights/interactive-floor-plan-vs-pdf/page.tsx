import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('interactive-floor-plan-vs-pdf')

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>PDF vs clickable floor</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>PDF floor plan</th>
            <th>Interactive floor plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What the buyer gets</td>
            <td>A file</td>
            <td>A unit they can click tonight</td>
          </tr>
          <tr>
            <td>Availability and price</td>
            <td>Stale the moment you export</td>
            <td>Live, from the same inventory the sales team uses</td>
          </tr>
          <tr>
            <td>What the sales team sees</td>
            <td>A download, maybe</td>
            <td>Which unit, how far they went, whether they are ready</td>
          </tr>
          <tr>
            <td>Job it is not</td>
            <td>A CRM</td>
            <td>Not Spark.re. Spark stays inventory for the sales team.</td>
          </tr>
        </tbody>
      </table>
      <h2>Software category vs what boutique developers buy</h2>
      <p>
        People search “interactive floor plan software” because vendors rank for it. A 10–50 unit developer does not need to staff a viewer. They need buyers to pick a unit, then a sales team that already knows which one. We build the website and the live building. You do not log into Planpoint.
      </p>
      <h2>What this is worth</h2>
      <p>
        A PDF cannot close the extra months. Extra months of construction-loan interest plus marketing burn are $67k–$100k a month to the bank on a typical boutique loan. Run the calculator. If you want the operator layer — CRM, what the sales team sees, follow-up — that is the booked demo after the number.
      </p>
    </InsightsArticle>
  )
}
