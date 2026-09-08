import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('digital-twin-pre-construction')

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>Two different jobs, same two words</h2>
      <p>
        On a construction site, digital twin usually means a BIM model for the people building the thing. In sales, people use the same words for something else: the building a buyer can walk before it exists. Live units. Live price. Live availability. On a phone. No app.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>What it usually is</th>
            <th>What a buyer can do with it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BIM / construction twin</td>
            <td>A model for the build team</td>
            <td>Nothing at 11pm on their phone</td>
          </tr>
          <tr>
            <td>Rendering</td>
            <td>A still of the look</td>
            <td>See the vibe. Not pick a unit.</td>
          </tr>
          <tr>
            <td>Matterport</td>
            <td>A scan of a finished space</td>
            <td>Walk something that already exists</td>
          </tr>
          <tr>
            <td>Sales digital twin</td>
            <td>The live building on the project site</td>
            <td>Click a unit, see the price, see if it is still open</td>
          </tr>
        </tbody>
      </table>
      <h2>Twin vs virtual showroom</h2>
      <p>
        <a href="/insights/virtual-showroom-pre-construction">Virtual showroom</a> is the sales gallery — the website. The digital twin is the live building inside it. You can have pretty pages and still have no twin. You can have a twin and bury it so nobody finds a unit. The words get used as synonyms. They are not.
      </p>
      <h2>Why the distinction costs money</h2>
      <p>
        If a buyer cannot tell which unit is open, they wait. Extra months of a typical boutique construction loan are about $67k–$100k a month to the bank — loan × rate ÷ 12, plus whatever you still spend on ads and ops. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>. Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement.
      </p>
      <p>
        A live buyer-site glimpse: demo.wowdesign.io.
      </p>
    </InsightsArticle>
  )
}
