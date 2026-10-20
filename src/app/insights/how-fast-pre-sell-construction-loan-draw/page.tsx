import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('how-fast-pre-sell-construction-loan-draw')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>How fast do you need to pre-sell to hit a construction loan draw?</h2>
      <p>
        The speed that matters is not a units-per-month sticker copied from another building. It is how fast qualifying contracts, at the prices in your stack, reach the share of project revenue your construction lender wrote on the term sheet. US lenders commonly want 50–70% of revenue under those contracts before they fund. That range is a market pattern, not a statute. Your sheet is the number that counts. See{' '}
        <a href="/insights/construction-loan-presale-requirement">how many units you need to pre-sell</a> for the percent and what counts. For why they wait on that line, see{' '}
        <a href="/insights/why-construction-lenders-care-about-presales">why construction lenders care about presales</a>.
      </p>
      <p>
        A published absorption rate from a different city is a guess. Pace is remaining qualifying dollars divided by the months you still have before you miss the window. If buyers cannot pick a specific unit from their phone tonight, they wait. Waiting is how that monthly pace slips. This page is the scoreboard for the draw. The sequence that takes months off lives on{' '}
        <a href="/insights/sell-pre-construction-condos-faster">how to sell pre-construction condos faster</a>.
      </p>
      <h2>Convert the line to a monthly pace</h2>
      <p>
        Start with dollars, not unit count. Take the percent on your term sheet. Multiply by project sell-out revenue. That is the qualifying-contract line. Then divide by the months you still have before that window closes. The result is the monthly pace the lender is actually watching. Soft holds, letters of intent, and related-party contracts usually drop out of that math. Ten names on a list can be six after the filter. Ask the lender in writing what they will take before you brief the sales team that you are on pace.
      </p>
      <p>
        Worked example. A $12M sell-out with a 50% line is $6M in contracts they will count. If six months remain on the sheet, you need about $1M a month in qualifying contracts. Method: (presale percent × project revenue) ÷ months left. If penthouses and studios are different prices, that is not half the units. A 30-unit building can look “halfway sold” on a unit count and still miss the revenue line, or the other way around. Map the stack to dollars first.
      </p>
      <ol>
        <li>Take the lender percent from the term sheet. Often 50–70% of revenue.</li>
        <li>Multiply by project sell-out revenue. That is the dollar line.</li>
        <li>Keep only contracts they will count. Binding, deposit, unrelated buyer.</li>
        <li>Divide by months left on the window. That is the monthly pace.</li>
      </ol>
      <h2>What a slipped month on that pace costs</h2>
      <p>
        Until the line is hit you keep paying interest and marketing with no construction draw. Each extra month on a typical boutique loan is about $67k–$100k of interest. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a> for the method. Do not size the month from a units-per-month rate you copied. Size it from your loan, then from how many months the pace still has to run.
      </p>
      <p>
        Hitting the draw early and then sitting with leftover units is still extra months. That is the second clock. See{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a>. The monthly pace on this page is only the first clock: qualifying revenue fast enough that the lender funds. After that, the last unit still has to close. If a buyer reserved in month one and walks in month four, that hole hits both clocks. See{' '}
        <a href="/insights/keep-pre-construction-buyers-from-backing-out">how to keep buyers from backing out during the build</a>. Run the calculator on your loan if you want the month in your numbers, not the range.
      </p>
    </InsightsArticle>
  )
}
