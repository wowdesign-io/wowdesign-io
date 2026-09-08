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
        Construction lenders are deciding whether to fund the build. They commonly want 50–70% of project revenue under contract before they will. That range is a market pattern, not a statute. Your term sheet is the number that counts. Fannie Mae’s 50% conveyed or under-contract test is a different job: whether unit-buyers can get those mortgages on the project. Mixing the two is how you “hit 50%” and still do not have a construction draw.
      </p>
      <p>
        Count dollars under contract, not a round unit count, when you are talking to the construction lender. A penthouse and a studio are not the same revenue. Fannie’s test is about share of units conveyed or under contract — not your construction draw. Keep them on separate lines in your own head, and in anything you send a partner.
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
        Convert the percent to dollars first, then to units. If the lender wants 60% of revenue under contract on a $20M sell-out, that is $12M in contracts. It is not “60% of the unit count” if penthouses and studios are different prices. A 30-unit building can hit the unit-count percent and still miss the revenue line, or the other way around.
      </p>
      <p>
        Florida term sheets still vary. Many still look for roughly 50–70% of revenue under contract. That is a pattern, not a law. Ask the lender for the test in writing: percent of revenue, which contracts count, and whether reservations without a hard deposit are in or out. Then map your stack — which units at which prices — to that dollar line. Guessing “half the units” is how the draw slips a month.
      </p>
      <h2>Why extra months still matter once you know the line</h2>
      <p>
        Until the construction lender funds, you keep paying interest and marketing with no draw. After completion, unsold units keep the loan and the burn running. Hit the presale line faster and you start the build sooner. Sell out faster after that and you keep the months. On a typical boutique $10M–$15M loan at about 8%, each extra month is about $67k–$100k to the bank. Method: loan × rate ÷ 12.
      </p>
      <p>
        Three extra months of interest on a $12M loan at 8% is $240,000 before ads. See{' '}
        <a href="/insights/construction-loan-extra-month">how to run that month</a>. The presale line is why lenders care: presales prove demand and reduce the chance they are financing unsold inventory. Faster contracts move the draw. The calculator is the month on your loan, not a slogan.
      </p>
    </InsightsArticle>
  )
}
