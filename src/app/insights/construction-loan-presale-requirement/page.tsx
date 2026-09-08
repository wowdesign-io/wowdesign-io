import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('construction-loan-presale-requirement')

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>Construction-lender presales vs Fannie’s 50%</h2>
      <p>
        Two different tests get mashed in Miami conversations. Construction lenders are deciding whether to fund the build. Fannie Mae’s 50% conveyed or under-contract test is about whether unit-buyers can get those mortgages on the project. Do not treat them as one number.
      </p>
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Who uses it</th>
            <th>What it usually measures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Construction-loan presale</td>
            <td>The bank funding the build</td>
            <td>Often 50–70% of project revenue under contract</td>
          </tr>
          <tr>
            <td>Fannie 50% conveyed / under contract</td>
            <td>Unit-buyer mortgage eligibility</td>
            <td>Share of units conveyed or under contract — not your construction draw</td>
          </tr>
        </tbody>
      </table>
      <h2>How many units is that?</h2>
      <p>
        Convert the percent to dollars first, then to units. If the lender wants 60% of revenue under contract on a $20M sell-out, that is $12M in contracts — not “60% of the unit count” if penthouses and studios are different prices. Florida term sheets still vary. The Real Deal and lender FAQs keep repeating this because developers mix the tests.
      </p>
      <h2>Why extra months still matter once you know the line</h2>
      <p>
        Until the construction lender funds, you keep paying interest and marketing with no draw. After completion, unsold units keep the loan and the burn running. Hit the presale line faster and you start the build sooner. Sell out faster after that and you keep the $67k–$100k months. Run the calculator on your loan. Then book a demo if you want the sales-team layer behind the buyer site.
      </p>
    </InsightsArticle>
  )
}
