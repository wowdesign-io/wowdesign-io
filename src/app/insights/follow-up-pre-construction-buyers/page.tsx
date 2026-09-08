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
        A buyer looks at a unit at 11pm. If the first thing they get is a generic pack on Monday, they already looked at someone else. Follow-up is not a drip you set and forget. It is what happens in the hours after they showed their hand.
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
        Which unit. How far the buyer went. Whether they came back. Calling without that is a cold call. The follow-up is what builds that picture — if it actually ran.
      </p>
      <h2>What delay costs</h2>
      <p>
        Cold buyers stretch sell-out. Extra months of a typical boutique construction loan are about $67k–$100k a month to the bank. Method:{' '}
        <a href="/insights/construction-loan-extra-month">loan × rate ÷ 12</a>, plus marketing that keeps running. How to sell faster is a longer read:{' '}
        <a href="/insights/sell-pre-construction-condos-faster">how to sell pre-construction condos faster</a>.
      </p>
    </InsightsArticle>
  )
}
