import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('boutique-website-besides-renderings')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>What does a boutique developer website need besides renderings?</h2>
      <p>
        Renderings still belong on the site. They sell the look — the lobby, the view, the kitchen that does not exist yet. A buyer who cannot see the building will not pick a unit. That job does not go away on a 10–50 unit pre-construction project.
      </p>
      <p>
        What they cannot do is tell anyone which unit is open, what it costs today, or whether the person who stared at 4B is ready for a call. A rendering pack plus a request button is still pictures. The sales team gets a name and a phone number. They still have to ask what the buyer wanted.
      </p>
      <p>
        The website has a second job: let a buyer walk the building on their phone, pick a specific unit at a live price, and leave a trail. Follow-up then goes out the same night with that unit. See{' '}
        <a href="/insights/follow-up-pre-construction-buyers">what follow-up should include</a>. Your sales team only calls people who already picked something. If any of that is missing, the renderings did their job and the site did not.
      </p>
      <h2>What the pictures cannot do</h2>
      <p>
        A still of the look cannot answer which unit, at what price, and whether it is still open. That is the job of live inventory on the project website — the same inventory the sales team uses. A PDF floor plan is a file. An{' '}
        <a href="/insights/interactive-floor-plan-vs-pdf">interactive floor plan</a> lets them click a unit tonight. A{' '}
        <a href="/insights/virtual-showroom-pre-construction">virtual showroom</a> is the gallery they land on. A{' '}
        <a href="/insights/digital-twin-pre-construction">digital twin</a> is the live building inside it. None of those replace the renderings. They are what the renderings sit next to.
      </p>
      <p>
        If the site is only pictures, the buyer waits until Monday. Waiting is extra months of the construction loan. The sales team also waits: they call a list of people who liked the project and guess which unit. That is not a briefing. That is a cold call with a nicer title. The table is the split. Pictures sell the look. The rest of the site has to do the job the pictures cannot.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Rendering pack</th>
            <th>What the site still needs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>What the buyer gets</td>
            <td>The look</td>
            <td>A unit they can pick tonight</td>
          </tr>
          <tr>
            <td>Availability and price</td>
            <td>Not in the still</td>
            <td>Live, from the same inventory the sales team uses</td>
          </tr>
          <tr>
            <td>What the sales team sees</td>
            <td>A form, maybe</td>
            <td>Which unit, how far they went, whether they are ready</td>
          </tr>
        </tbody>
      </table>
      <h2>Why this is months on the loan</h2>
      <p>
        On a typical boutique $10M–$15M construction loan at about 8%, monthly interest is loan × rate ÷ 12 — about $67k–$100k to the bank, plus ads and ops that keep running until units are gone. Three extra months of interest on a $12M loan at 8% is $240,000 before burn. Pictures that cannot take a unit pick do not take those months off. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>.
      </p>
      <p>
        Hit the lender’s{' '}
        <a href="/insights/construction-loan-presale-requirement">presale line</a> faster and the build starts sooner. Sell out faster after completion and the loan comes off sooner. Both are extra months you either pay or keep. Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on comparable projects, not a promise on yours. Run the calculator on your loan if you want your month, not the range.
      </p>
    </InsightsArticle>
  )
}
