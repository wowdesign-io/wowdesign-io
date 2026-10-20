import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('keep-pre-construction-buyers-from-backing-out')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>How to keep pre-construction buyers from backing out during the build</h2>
      <p>
        A reservation in month one is not a closed unit at occupancy. The building is not there. Between those two dates, the buyer is living with a PDF, a competing project, and whatever they last heard from you. If they cannot open their unit again. Same stack number, live price, still available. They start shopping the one that will let them.
      </p>
      <p>
        Keeping them is not a new brochure. It is three things that stay true every month of the build. Their unit is still on the site. Follow-up did not stop after the first night. The sales team can pick up and already know which unit, whether it is still open, and whether they came back. Same-night follow-up starts that picture. See{' '}
        <a href="/insights/follow-up-pre-construction-buyers">what follow-up should include</a>. This page is the months after.
      </p>
      <p>
        If any of those three goes dark, you are re-selling a unit you thought you had. On a 10–50 unit stack, that is a month, not a rounding error.
      </p>
      <h2>A PDF from month one will not hold them</h2>
      <p>
        What they took home in week one is a still. Price moved. A unit they liked went on hold. A new building opened down the street. The file on their phone does not know any of that. When they open it in month four they see last quarter&apos;s look, not whether 4B is still theirs.
      </p>
      <p>
        The site has to answer the same three questions every time they come back: which unit, at what price, is it still open. That is the job of the live building. See{' '}
        <a href="/insights/digital-twin-pre-construction">what a digital twin is for pre-construction</a>, not a new rendering drop. If the only thing they have is the first PDF, they will use someone else&apos;s site to check.
      </p>
      <table>
        <thead>
          <tr>
            <th>Through the build</th>
            <th>What loses them</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Their unit, live price, still open</td>
            <td>A PDF from week one</td>
          </tr>
          <tr>
            <td>Follow-up that did not stop after night one</td>
            <td>Silence until the sales office opens</td>
          </tr>
          <tr>
            <td>Sales team already knows the unit</td>
            <td>&ldquo;So what were you looking at?&rdquo;</td>
          </tr>
        </tbody>
      </table>
      <p>
        A 10–50 unit project cannot treat a reservation as finished work. The months of the build are when they decide whether they still want it. Give them their unit to reopen, or they will reopen someone else&apos;s.
      </p>
      <h2>What a walk-away costs</h2>
      <p>
        A cancelled reservation is not a free retry. You spend the month again: ads, the sales team&apos;s time, and interest on the loan while that unit sits. On a typical boutique $10M–$15M construction loan at about 8%, monthly interest is loan × rate ÷ 12. about $67k–$100k to the bank. A $12M loan at 8% is $80,000 a month. Re-selling two units that went cold is how a 24-unit building slips a month you thought you had.
      </p>
      <p>
        The lender still wants 50–70% of revenue under qualifying contracts. A walk-away that was in that count is a hole in the draw. See{' '}
        <a href="/insights/construction-loan-presale-requirement">how many units you need to pre-sell</a>. After completion, leftover units keep the loan running. See{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a>.
      </p>
      <p>
        A walk-away that was in the qualifying count is a hole in the draw. Your scoreboard is extra months on your loan. Run the calculator on your numbers.
      </p>
    </InsightsArticle>
  )
}
