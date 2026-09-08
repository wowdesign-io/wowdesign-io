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
        </tbody>
      </table>
      <h2>What boutique 10–50 actually needs</h2>
      <p>
        The floor plan lives on the project website. Buyers pick a unit. Your sales team already knows which one. Renderings still sell the look. They do not tell you who is ready.
      </p>
      <h2>What this is worth</h2>
      <p>
        Extra months of construction-loan interest plus marketing burn are $67k–$100k a month to the bank on a typical boutique loan. A file cannot take those months off. Run the calculator on your loan.
      </p>
    </InsightsArticle>
  )
}
