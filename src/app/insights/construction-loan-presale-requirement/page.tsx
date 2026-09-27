import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('construction-loan-presale-requirement')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>Construction-lender presales vs Fannie’s 50%</h2>
      <p>
        Construction lenders are deciding whether to fund the build. They commonly want 50–70% of project revenue under contract before they will. That range is a market pattern, not a statute. Your term sheet is the number that counts. Fannie Mae’s 50% test is a different job: whether unit-buyers can get those mortgages on the project. For new projects, Fannie looks at share of units conveyed or under contract to principal-residence or second-home purchasers. Investor contracts do not fill that 50%. Mixing the two clocks is how you “hit 50%” and still do not have a construction draw.
      </p>
      <p>
        Count dollars under contract, not a round unit count, when you are talking to the construction lender. A penthouse and a studio are not the same revenue. Fannie’s test is a unit share — and only certain buyers. Keep them on separate lines in your own head, and in anything you send a partner.
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
            <td>Often 50–70% of project revenue under qualifying contracts</td>
          </tr>
          <tr>
            <td>Fannie 50% conveyed / under contract</td>
            <td>Unit-buyer mortgage eligibility</td>
            <td>Share of units to principal-residence or second-home purchasers — not your construction draw</td>
          </tr>
        </tbody>
      </table>
      <h2>What counts as a qualifying presale?</h2>
      <p>
        The percent only helps if the contracts actually count. Construction lenders are not counting every handshake. A reservation, a letter of intent, or a hold with no deposit is usually not a presale on the term sheet. Ask the lender in writing what they will take: a binding purchase contract, a deposit that is actually held, and whether a reservation without that deposit is in or out.
      </p>
      <p>
        They also filter who is on the other side. Related-party sales, insider units, and one buyer taking a bulk of the stack are often excluded or haircut — those are not the same demand as an unrelated buyer putting money down. That is a term-sheet filter, not a statute. Your sheet is the list that counts. Get the definition before you brief the sales team on “we are at 50%.” Ten contracts on paper can be six after that filter.
      </p>
      <h2>How many units is that?</h2>
      <p>
        Convert the percent to dollars first, then to units — and only from contracts the lender will count. If the lender wants 60% of revenue under contract on a $20M sell-out, that is $12M in qualifying contracts. It is not “60% of the unit count” if penthouses and studios are different prices. A 30-unit building can hit the unit-count percent and still miss the revenue line, or the other way around. Soft holds do not close that gap.
      </p>
      <p>
        Florida term sheets still vary. Many still look for roughly 50–70% of revenue under contract. That is a pattern, not a law. Some non-bank lenders will fund with fewer presales and price the extra risk. Ask the lender for the test in writing: percent of revenue, which contracts count, and whether reservations without a hard deposit are in or out. Then map your stack — which units at which prices — to that dollar line. Guessing “half the units” is how the draw slips a month.
      </p>
      <h2>Why extra months still matter once you know the line</h2>
      <p>
        Until the construction lender funds, you keep paying interest and marketing with no draw. After completion, unsold units keep the loan and the burn running. Hit the presale line faster and you start the build sooner. Sell out faster after that and you keep the months. Those are two clocks — see{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a>. On a typical boutique $10M–$15M loan at about 8%, each extra month is about $67k–$100k to the bank. Method: loan × rate ÷ 12.
      </p>
      <p>
        Three extra months of interest on a $12M loan at 8% is $240,000 before ads. See{' '}
        <a href="/insights/construction-loan-extra-month">how to run that month</a>. The presale line is why lenders care: qualifying presales prove demand and reduce the chance they are financing unsold inventory. Faster qualifying contracts move the draw. The calculator is the month on your loan, not a slogan.
      </p>
    </InsightsArticle>
  )
}
