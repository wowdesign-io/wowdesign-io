import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('follow-up-pre-construction-buyers')

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>Monday is already too late</h2>
      <p>
        A buyer looks at a unit at 11pm. They are in. If the first thing they get is a generic pack on Monday, they already looked at someone else over the weekend. Follow-up is not a drip you set once and forget. It is what happens in the hours after they showed their hand — the unit they looked at, sent back while they still care. A weekend of silence is enough to lose them.
      </p>
      <p>
        Pre-construction makes this worse than a finished listing. The building is not there. The sales office may not be open. The only thing holding them is whatever you sent, and whether they can come back to that same unit in month four. Silence is not neutral. It is extra months of the loan.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Too late</th>
            <th>What should happen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>When</td>
            <td>Monday. Or after the sales office opens.</td>
            <td>The same night.</td>
          </tr>
          <tr>
            <td>What they get</td>
            <td>A generic PDF. The whole building.</td>
            <td>The unit they looked at. Live availability.</td>
          </tr>
          <tr>
            <td>During the build</td>
            <td>Nothing to come back to.</td>
            <td>Their unit is still there when they return in month four.</td>
          </tr>
          <tr>
            <td>The call</td>
            <td>The sales team guesses.</td>
            <td>They already know which unit before they pick up.</td>
          </tr>
        </tbody>
      </table>
      <h2>What the sales team needs before they call</h2>
      <p>
        Which unit. How far the buyer went. Whether they came back. Calling without that is a cold call with a nicer calendar invite. The follow-up is what builds that picture — if it actually ran the night they showed interest, not after someone remembered to export a list. A CRM row with a name and a phone number is not the picture. The sales team needs the unit in the tools they already use before they pick up.
      </p>
      <p>
        The tools the sales team already uses should show the unit, not a blank contact. That is the difference between a call that closes and a call that asks “so what were you looking at?” See{' '}
        <a href="/insights/sell-pre-construction-condos-faster">how to sell pre-construction condos faster</a> for the full sequence: pick a unit, follow-up the same night, then the call.
      </p>
      <h2>What delay costs</h2>
      <p>
        Cold buyers stretch sell-out. Extra months of a typical boutique construction loan are about $67k–$100k a month to the bank. Method:{' '}
        <a href="/insights/construction-loan-extra-month">loan × rate ÷ 12</a>, plus marketing that keeps running until the last unit is gone. Three extra months of interest alone on a $12M loan at 8% is $240k before you add burn.
      </p>
      <p>
        Follow-up does not replace the twin or the website. It is what happens after the buyer already picked something. If there was nothing to pick, there is nothing useful to send. If there was something to pick and nothing went out that night, you paid for the look and then let them go cold. The night they showed interest is the only cheap window. Monday is a new sale.
      </p>
    </InsightsArticle>
  )
}
