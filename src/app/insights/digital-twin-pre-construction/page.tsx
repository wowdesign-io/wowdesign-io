import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('digital-twin-pre-construction')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>Two different jobs, same two words</h2>
      <p>
        On a construction site, digital twin usually means a BIM model for the people building the thing. That model tracks the physical building as it goes up. It is for architects, GCs, and the people who have to hit a drawing. A buyer at 11pm cannot use it. They cannot pick a unit in it. They cannot see if 4B is still open.
      </p>
      <p>
        In sales, people use the same two words for something else: the live building on the project website. Every floor. Every unit. Live price. Live availability. On a phone. No app. That is the sales digital twin. If you mix the two jobs, you buy a construction model and still have nothing a buyer can commit to before the building exists. The table is the split. Construction tools stay on the job. Sales has to answer which unit is open, at what price, tonight.
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
            <td>Finished-space scan</td>
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
        A <a href="/insights/virtual-showroom-pre-construction">virtual showroom</a> is the sales gallery — the website a buyer lands on. The digital twin is the live building inside it. You can have a beautiful site and still have no twin: stills, a PDF, a “request this floor plan” button. You can also have a twin and bury it three clicks down so nobody finds a unit. The words get used as synonyms. They are not.
      </p>
      <p>
        For a 10–50 unit pre-construction project, the test is simple. Can a buyer open the project on their phone, walk a floor that is not built yet, and leave having picked a specific unit at a specific price? If yes, you have a sales twin. If they still have to wait until Monday for someone to tell them what is available, you have pictures.
      </p>
      <h2>Why the distinction costs money</h2>
      <p>
        If a buyer cannot tell which unit is open, they wait. Waiting is extra months. On a typical boutique $10M–$15M construction loan at about 8%, monthly interest is loan × rate ÷ 12 — about $67k–$100k to the bank, plus ads and ops that keep running until units are gone. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on comparable projects, not a promise on yours. Three extra months of interest alone on a $12M loan at 8% is $240,000 before ads. A live buyer-site glimpse of a twin in a real project: demo.wowdesign.io. Run the calculator on your loan if you want the month in your numbers, not the range.
      </p>
    </InsightsArticle>
  )
}
