import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('what-counts-qualifying-presale-construction-loan')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <p>
        A name on a list is not a presale. A construction lender wants a contract they can take to the credit committee: binding, signed, with a deposit they will recognize, from a buyer they will count. Soft holds, letters of intent, and &quot;coming in next week&quot; do not fill that line. The 50–70% of revenue they often want is only as good as the contracts inside it.
      </p>
      <p>
        Ask the lender in writing before you brief the sales team that you are at 50%. Get three things: what document they will take, what deposit they will recognize, and which buyers they exclude. Your term sheet is the list that counts. A pattern from another building is a guess. Until those contracts exist, you are not on the line. You are on a list. See{' '}
        <a href="/insights/construction-loan-presale-requirement">how many units you need to pre-sell</a> for the percent. This page is the filter.
      </p>
      <h2>What usually does not count</h2>
      <p>
        Reservations and letters of intent are useful. They are not usually qualifying presales. A hold with no deposit, a related-party contract, and a bulk take of the stack by one buyer are the three filters that most often cut a &quot;we are at 50%&quot; briefing down. Ask whether those are in or out. Do not guess from last year&apos;s project.
      </p>
      <div className="table-scroll"><table>
        <thead>
          <tr>
            <th></th>
            <th>Usually counts</th>
            <th>Usually drops</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Document</td>
            <td>Binding purchase contract</td>
            <td>Reservation or letter of intent</td>
          </tr>
          <tr>
            <td>Money</td>
            <td>Deposit the lender will recognize</td>
            <td>Hold with no deposit</td>
          </tr>
          <tr>
            <td>Buyer</td>
            <td>Unrelated buyer they will count</td>
            <td>Related-party, insider, or bulk haircut</td>
          </tr>
        </tbody>
      </table></div>
      <p>
        Related-party and insider units are not the same demand as an unrelated buyer putting money down. Bulk contracts are often haircut or excluded because one walk-away takes a hole the size of several units. A reservation can convert. Until it is a binding contract with a held deposit, it does not move the construction draw. Ten contracts on paper can be six after that filter. See{' '}
        <a href="/insights/why-construction-lenders-care-about-presales">why construction lenders care about presales</a> if you want the leftover-inventory reason. This table is the filter, not a statute.
      </p>
      <h2>How to score your stack against the line</h2>
      <p>
        Do not count units. Count dollars from contracts that survive the filter. List every name that has a document. Drop reservations, letters of intent, and holds with no deposit. Drop related-party and bulk deals the lender will not take. Sum the remaining contract prices. Divide by project sell-out revenue. That share is where you actually sit.
      </p>
      <ol>
        <li>List every name with a document.</li>
        <li>Keep only binding contracts with a held deposit from buyers they will count.</li>
        <li>Sum those contract prices.</li>
        <li>Divide by project sell-out revenue.</li>
      </ol>
      <p>
        Worked example (illustrative numbers). Eighteen names on a list. Twelve have a signed contract and a held deposit. Two of those twelve are related-party. Ten count. Those ten are $4.2M on a $12M sell-out. You are at 35%, not eighteen of thirty units. Method: qualifying contract revenue ÷ project sell-out revenue. Once you have that share, see{' '}
        <a href="/insights/how-fast-pre-sell-construction-loan-draw">how fast you need to pre-sell to hit the construction draw</a> for the monthly pace. Soft holds do not close the gap. If the line slips a month, size it from your loan. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>. Run the calculator on your numbers.
      </p>
    </InsightsArticle>
  )
}
