import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('why-construction-lenders-care-about-presales')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>Why do construction lenders care about presales?</h2>
      <p>
        The construction loan is not repaid from land sitting idle. It is repaid when buyers close. Until enough units are under contracts the lender will actually take, the bank is looking at a building that might not sell. Presales cut that leftover risk. Qualifying contracts with deposits prove someone other than you believes the stack will move, and they leave a residual loan the bank can live with once those close.
      </p>
      <p>
        That is why they care — not because a statute says 50%. Banks and credit unions commonly want 50–70% of project revenue under qualifying contracts before they fund. That range is a market pattern. Your term sheet is the number that counts. Some private lenders will fund with fewer presales and price the extra risk. Fannie Mae&apos;s 50% test is a different job: whether unit-buyers can get those mortgages.
      </p>
      <p>
        On a 10–50 unit boutique project, missing that line is months of interest and marketing with no draw. See{' '}
        <a href="/insights/construction-loan-presale-requirement">how many units you need to pre-sell</a> for the percent and what counts.
      </p>
      <h2>What they are actually testing</h2>
      <p>
        They are not counting names on a list. They want a binding purchase contract, a deposit they recognize, and a buyer who is not you or a related party. A reservation, a letter of intent, or a hold with no money is usually out. Related-party sales and bulk contracts are often excluded or haircut. Ten contracts on paper can be six after that filter. Ask the lender in writing what they will take before you brief the sales team that you are “at 50%.”
      </p>
      <p>
        Two questions sit under that filter. First: will enough of those buyers actually close so the loan gets paid down. Second: after they close, is the leftover inventory a size the bank can live with. Investor contracts can fail the first test if the buyer is only in for a flip. Your construction sheet is its own list.
      </p>
      <table>
        <thead>
          <tr>
            <th>They fund against</th>
            <th>They usually do not</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Binding contract + a deposit they count</td>
            <td>Reservation, letter of intent, hold with no money</td>
          </tr>
          <tr>
            <td>Unrelated buyer</td>
            <td>Related-party, insider, bulk they haircut</td>
          </tr>
          <tr>
            <td>Residual loan they can live with after those close</td>
            <td>A stack that only looks sold on a spreadsheet</td>
          </tr>
        </tbody>
      </table>
      <p>
        On a boutique 10–50 unit stack, six contracts that do not qualify is not a paperwork issue. It is the draw slipping a month.
      </p>
      <h2>What waiting on that test costs</h2>
      <p>
        Until the line is hit you keep paying interest and marketing with no construction draw. On a typical boutique $10M–$15M loan at about 8%, monthly interest is loan × rate ÷ 12 — about $67k–$100k to the bank. A $12M loan at 8% is $80,000 a month. Three extra months of interest is $240,000 before ads. That is the method. Run the calculator on your loan if you want your month, not the range.
      </p>
      <p>
        Hit the presale line faster and the build starts sooner. That is one clock. After completion, leftover units keep the loan running — the other clock. See{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a>. Missing the line is how you pay an extra month before a brick is laid. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on comparable projects, not a promise that your term sheet moves. Your scoreboard is extra months on your loan.
      </p>
    </InsightsArticle>
  )
}
