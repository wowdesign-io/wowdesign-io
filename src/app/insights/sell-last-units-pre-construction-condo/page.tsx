import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('sell-last-units-pre-construction-condo')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>How do you sell the last units in a pre-construction condo?</h2>
      <p>
        The first wave is the easy stack. Best views, friends and family, early prices. Those units leave. What is left is the leftover view, the leftover floor, the leftover price. A PDF from month one still shows the penthouse that already closed. A buyer in month seven cannot tell what is actually open.
      </p>
      <p>
        You sell leftovers the same way you should have sold the first wave, except the inventory has to be true today. Live units. Live price. The ones that are gone stay gone on the site. The sales team calls people who already looked at a leftover unit, not a list from the launch party.
      </p>
      <p>
        That is a different job from the clocks. See{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a> for the draw, then the last unit. This page is what you do when the best units are gone and the construction loan is still on. See{' '}
        <a href="/insights/sell-pre-construction-condos-faster">how to sell pre-construction condos faster</a> for the first-wave sequence. Leftovers need that sequence on today&apos;s stack, not last quarter&apos;s brochure.
      </p>
      <h2>What has to be live for leftovers</h2>
      <p>
        A leftover unit only sells if a buyer can open the project on their phone and see that exact unit, at today&apos;s price, still open. Not a rendering of a floor that sold in month two. Not a request button that waits until Monday. If the site still leads with the best views, the leftover stack is invisible. Invisible inventory does not get a deposit.
      </p>
      <p>
        The sales team needs the same picture. A name from the launch list is a first-wave leftover. The call that works is the person who already clicked a remaining unit, saw the price, and came back. That briefing lives in the tools the sales team already uses. See{' '}
        <a href="/insights/what-sales-team-should-know-before-calling">what the sales team should know before they call</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>First wave</th>
            <th>Last units</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What the buyer sees</td>
            <td>Best views, early prices</td>
            <td>What is actually still open</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Launch stack</td>
            <td>Today&apos;s leftover stack</td>
          </tr>
          <tr>
            <td>What the sales team calls</td>
            <td>Launch list</td>
            <td>People who looked at a leftover</td>
          </tr>
        </tbody>
      </table>
      <p>
        Follow-up has to keep pointing at the live leftover, not the PDF from week one. A buyer who reserved a first-wave unit and walks is a hole in both clocks. A buyer who never saw what is left never reserved. See{' '}
        <a href="/insights/keep-pre-construction-buyers-from-backing-out">how to keep buyers from backing out during the build</a>.
      </p>
      <h2>What leftover units still cost after the draw</h2>
      <p>
        Hitting the construction draw does not take the loan off. The lender funded because qualifying contracts covered their share of project revenue. The rest of the stack is still unsold. Method: leftover revenue = (1 − lender percent) × project sell-out revenue. A $12M sell-out with a 50% line still has $6M to close after the draw. That $6M is the last-unit clock. It is not a unit count.
      </p>
      <p>
        Those leftover dollars sit on the construction loan until they close. Extra months on that remainder are still extra months. Size them from your leftover revenue, then from how many months those last contracts still have to take. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a> if you want the interest method. Run the calculator on your loan if you want the month in your numbers. Pace to the draw lives on{' '}
        <a href="/insights/how-fast-pre-sell-construction-loan-draw">how fast you need to pre-sell to hit the construction draw</a>. This page is the second clock: what is left after that line.
      </p>
    </InsightsArticle>
  )
}
