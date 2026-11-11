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
      <p>
        The number on the term sheet is a dollar line. Ask the lender in writing before you brief the sales team that you are at 50%. Get three things: the percent of project revenue they want, which contracts they will take, and which buyers they exclude. Your sheet is the test that funds the build. A pattern copied from another building is a guess.
      </p>
      <h2>Is the construction-lender line the same as Fannie Mae&apos;s 50%?</h2>
      <p>
        Construction lenders are deciding whether to fund the build. They commonly want 50–70% of project revenue under qualifying contracts before they will. That range is a market pattern, not a statute. Your term sheet is the number that counts.
      </p>
      <p>
        Fannie Mae&apos;s 50% test is a different job: whether unit-buyers can get those mortgages on the project. For new and newly converted condo projects, Fannie looks at share of units conveyed or under contract to principal-residence or second-home purchasers. Investor contracts do not fill that 50%. The project or legal phase must also be substantially complete. That means a certificate of occupancy or a similar document from the applicable agency, with units in that phase finished aside from typical buyer selections. Mixing the two clocks is how you &quot;hit 50%&quot; and still do not have a construction draw.
      </p>
      <p>
        FHA condo project approval is a third clock for unit-buyer FHA mortgages. It is not the construction draw. Confirm the live percent with the FHA lender. Keep Fannie, FHA, and the construction lender on separate lines in your own head, and in anything you send a partner.
      </p>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Clock</th>
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
              <td>Share of units to principal-residence or second-home purchasers. Project or phase substantially complete. Not your construction draw.</td>
            </tr>
            <tr>
              <td>FHA condo project approval</td>
              <td>Unit-buyer FHA mortgages</td>
              <td>A separate occupancy / presale clock. Confirm the live percent with the FHA lender. Not the construction draw.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Why count dollars instead of units?</h2>
      <p>
        Count dollars under contract when you are talking to the construction lender. A penthouse and a studio are not the same revenue. Fannie&apos;s test is a unit share, and only certain buyers. A 28-unit building can look halfway sold on a unit count and still miss the revenue line, or the other way around. The construction lender is watching leftover risk on the loan. Cheap units moving first can make the stack look sold while the dollar line is still open.
      </p>
      <p>
        Florida term sheets still vary. Many still look for roughly 50–70% of revenue under contract. Some non-bank lenders will fund with fewer presales and price the extra risk. None of that makes &quot;half the units&quot; the test. Map your stack, which units at which prices, to the dollar line on the sheet. Ask whether reservations without a hard deposit are in or out. Guessing from unit count is how the draw slips a month.
      </p>
      <h2>What contracts actually fill the line?</h2>
      <p>
        The percent only helps if the contracts actually count. See{' '}
        <a href="/insights/what-counts-qualifying-presale-construction-loan">what counts as a qualifying presale</a> for
        the filter: a binding purchase contract, a deposit the lender will recognize, and a buyer they will count. A
        reservation, a letter of intent, or a hold with no deposit is usually not a presale on the term sheet. Ask the
        lender in writing what they will take.
      </p>
      <p>
        They also filter who is on the other side. Related-party sales, insider units, and one buyer taking a bulk of the
        stack are often excluded or haircut. Those are not the same demand as an unrelated buyer putting money down. That
        is a term-sheet filter, not a statute. Ten contracts on paper can be six after that filter. Get the definition
        before you brief the sales team that you are at 50%. Soft holds do not close the gap.
      </p>
      <h2>How do you convert the percent into a unit map?</h2>
      <p>
        Convert the percent to dollars first, then to units, and only from contracts the lender will count. Worked
        example with illustrative numbers. A 28-unit building with $14.4M of sell-out revenue. The lender wants 60% of
        revenue under qualifying contracts. That is $8.64M. It is not 17 of 28 units.
      </p>
      <p>
        The stack: 4 penthouses at $900k ($3.6M), 10 mid-floor units at $520k ($5.2M), 14 studios at $400k ($5.6M). If
        every studio is under a qualifying contract, that is 14 of 28 units, half the stack, and $5.6M, which is 39% of
        revenue. You missed the line.
      </p>
      <p>
        If the four penthouses and eight mid-floor units are under qualifying contracts, that is 12 of 28 units, 43% of
        the stack, and $7.76M, which is 54% of revenue. Still short of 60%. You still need about $880k in contracts the
        lender will count. At those mid-floor prices, that is roughly two more units. Method: lender percent times
        sell-out revenue, minus qualifying contract revenue already in. Then map the leftover dollars onto units that are
        still open.
      </p>
      <p>
        Once you have the dollar line, see{' '}
        <a href="/insights/how-fast-pre-sell-construction-loan-draw">how fast you need to pre-sell to hit the construction draw</a>{' '}
        for the monthly pace.
      </p>
      <h2>What if you miss the construction-lender line?</h2>
      <p>
        Until the construction lender funds, you keep paying interest and marketing with no draw. That is the first
        clock. After completion, unsold units keep the loan and the burn running. That is the second. See{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a>. Qualifying
        contracts prove demand so the lender is not financing unsold inventory. See{' '}
        <a href="/insights/why-construction-lenders-care-about-presales">why construction lenders care about presales</a>.
      </p>
      <p>
        Do not brief the sales team from a unit count. Brief them from contracts the lender will take, at the prices in
        your stack, against the percent on the sheet. If the line is still open, the months in front of the draw are
        already on the loan. If you want those months in dollars, see{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>. Size them on your numbers,
        not a units-per-month sticker from another building.
      </p>
    </InsightsArticle>
  )
}
