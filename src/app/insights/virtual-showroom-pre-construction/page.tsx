import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('virtual-showroom-pre-construction')

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>What a virtual showroom actually is</h2>
      <p>
        On a boutique 10–50 unit pre-construction project, a virtual showroom is the sales gallery on the website. A buyer opens the project on their phone, walks floors that are not built yet, and sees live price and live availability. No app. They leave having looked at a specific unit — not a mood board. That is the job. If the site cannot do that, it is not a showroom. It is a brochure with a nicer domain.
      </p>
      <p>
        Follow-up is what happens after they showed that interest. The showroom is the place they did it. Mix those two and you get a pretty homepage with a “request information” button, and a sales team that still has no idea which unit anyone wanted. See{' '}
        <a href="/insights/follow-up-pre-construction-buyers">what follow-up should do the same night</a>. The gallery has to exist first, or there is nothing useful to send.
      </p>
      <h2>What it is not</h2>
      <p>
        People use “virtual showroom” for almost anything with a 3D file in it. A scan of a finished space is a walkthrough of something that already exists. Pre-construction needs units that do not exist yet. A stacking plan in the CRM is inventory for the sales team. The buyer never sees that. A rendering is a still of the look. It does not say whether 4B is still open.
      </p>
      <p>
        A <a href="/insights/digital-twin-pre-construction">digital twin</a> is the live building inside the showroom — floors, units, price, availability. The showroom is the gallery they land on. You can have a gallery with no twin (stills and a PDF). You can have a twin buried so deep nobody finds a unit. The words get used as synonyms. They are not. The test is still the same: can they pick a specific unit at a specific price before Monday.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>What that usually is</th>
            <th>What a 10–50 unit project needs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finished-space scan</td>
            <td>A walkthrough of something already built</td>
            <td>Units that are not built yet</td>
          </tr>
          <tr>
            <td>A stacking plan in the CRM</td>
            <td>Inventory for the sales team</td>
            <td>What the buyer uses on the project website</td>
          </tr>
          <tr>
            <td>Rendering pack</td>
            <td>The look</td>
            <td>Which unit, at what price, whether it is still open</td>
          </tr>
        </tbody>
      </table>
      <h2>Why this is money</h2>
      <p>
        Buyers who cannot tell which unit is open wait. Waiting is extra months of the construction loan. On a typical boutique $10M–$15M loan at about 8%, monthly interest is loan × rate ÷ 12 — about $67k–$100k to the bank, plus ads and ops that keep running until units are gone. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>. A showroom that lets them commit earlier is how those months come off.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on comparable projects, not a promise on yours. A live buyer-site glimpse: demo.wowdesign.io. Run the calculator on your loan if you want your month, not the range.
      </p>
    </InsightsArticle>
  )
}
