import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('how-long-sell-out-20-40-unit-condo')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>How long does it take to sell out a 20–40 unit condo building?</h2>
      <p>
        There is no honest single month-count for every 20–40 unit condo. A 24-unit building next to proven comps is not a 40-unit project at a new price. Anyone publishing “six months” or “eighteen months” as a rule is guessing — or quoting another project’s closings as if they were yours.
      </p>
      <p>
        What actually moves the clock: price versus nearby inventory, whether buyers can commit before a sales office exists, and how fast contracts reach the lender. If they cannot pick a specific unit from their phone, they wait. Waiting is extra months of the construction loan. The method is not a published units-per-month rate. It is your loan, your rate, and how many months you still have unsold units.
      </p>
      <p>
        Boutique 10–50 unit projects feel each slipped month harder than a 200-unit operator. One extra quarter is money out before a brick is laid, and again after completion until the last closing. See{' '}
        <a href="/insights/sell-pre-construction-condos-faster">how to sell pre-construction condos faster</a> for the sequence that takes months off. This page is the scoreboard, not that playbook.
      </p>
      <h2>Two clocks — the draw and the last unit</h2>
      <p>
        Selling out is not one date. The first clock is the construction lender. US lenders commonly want 50–70% of project revenue under contract before they fund. Count dollars under contract, not a round unit count. Until that line is hit you keep paying interest and marketing with no draw. That range is a market pattern, not a statute. Your term sheet is the number that counts. See{' '}
        <a href="/insights/construction-loan-presale-requirement">how many units you need to pre-sell</a>.
      </p>
      <p>
        The second clock is the last unit. After the building is finished, buyers still pay only the staged deposit until closing. The remaining 80–85% arrives when they finalize. Until the last unit is gone, the construction loan and the ads keep running. Hitting the draw early and then sitting with leftover units is still extra months.
      </p>
      <table>
        <thead>
          <tr>
            <th>Clock</th>
            <th>What it is</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The draw</td>
            <td>50–70% of revenue under contract</td>
            <td>The lender funds. The build can start.</td>
          </tr>
          <tr>
            <td>The last unit</td>
            <td>Every unit closed</td>
            <td>The construction loan comes off. Extra months stop.</td>
          </tr>
          <tr>
            <td>Fannie’s 50%</td>
            <td>Conveyed or under contract for unit-buyer mortgages</td>
            <td>Not your construction draw. Not sell-out.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Fannie Mae’s 50% conveyed or under-contract test is about whether unit-buyers can get those mortgages. It is not the same as your construction draw, and it is not sell-out. Keep the three tests separate or you will brief the sales team on the wrong clock.
      </p>
      <h2>What extra months cost</h2>
      <p>
        On a typical boutique $10M–$15M construction loan at about 8%, monthly interest is loan × rate ÷ 12 — about $67k–$100k to the bank. A $12M loan at 8% is $80,000 a month, $240,000 across three extra months, before ads and ops. That is the $400k+ when burn is included on a typical timeline that slipped. Run the calculator on your loan if you want your month, not the range. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on comparable projects, not a promise that your 24-unit building sells in a set number of months. Comps in your submarket are what a lender will read. A number copied from a different city is a guess.
      </p>
      <p>
        The sales team still has to close. Extra months are what you pay when they are calling people who never picked a unit, or when contracts stall before the draw. The calculator is the method for your number.
      </p>
    </InsightsArticle>
  )
}
