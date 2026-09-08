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
      <h2>What a buyer can do on each</h2>
      <p>
        A PDF floor plan is a file. It is accurate the minute you export it, and stale the minute a unit sells. The buyer downloads it, maybe prints it, and still has to ask someone whether 4B is open and what it costs today. That callback is the delay. An interactive floor plan is the floor on the project website. They click a unit. They see if it is still available. They see the price. They leave a trail your sales team can actually use.
      </p>
      <p>
        That is the whole comparison. One is a document. The other is live inventory the buyer can use at 11pm. Renderings still sell the look on both. They do not tell you who is ready. The floor has to answer which unit, at what price, and whether it is still open — without a Monday email.
      </p>
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
        The floor plan lives on the project website, not in a CRM the buyer cannot open. Spark.re and tools like it are inventory and CRM for the sales team. That is a different job. The buyer needs the clickable floor on the site. Your sales team then calls with the unit already in the tools they already use — not a blank contact who “downloaded the brochure.”
      </p>
      <p>
        For 10–50 units you do not need an enterprise gallery stack built for a 400-unit operator. You need the floor on the phone, live price, live availability, and a trail. If they still have to wait for someone to send the right PDF, you have the file version. See a{' '}
        <a href="/insights/digital-twin-pre-construction">digital twin</a> if the question is the live building around that floor, not the file vs click split.
      </p>
      <h2>What this is worth</h2>
      <p>
        A file cannot take extra months off the loan. An extra month of a typical boutique $10M–$15M construction loan at about 8% is about $67k–$100k to the bank. Method: loan × rate ÷ 12. Ads and ops keep running until units are gone. Three extra months of interest on a $12M loan at 8% is $240,000 before you add burn. See{' '}
        <a href="/insights/construction-loan-extra-month">the extra-month math</a>.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. Supporting numbers, not a promise on your project. The interactive floor is how a buyer commits without the file delay. A PDF cannot take those months off. Run the calculator on your loan if you want your month, not the range.
      </p>
    </InsightsArticle>
  )
}
