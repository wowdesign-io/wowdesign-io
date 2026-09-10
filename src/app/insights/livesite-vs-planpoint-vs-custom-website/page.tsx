import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('livesite-vs-planpoint-vs-custom-website')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>What each option actually is</h2>
      <p>
        NEEZO LiveSite is a sales-and-marketing platform from a creative studio. Public pages lean on presentation centers, touchscreens, scale models, and full immersive builds — often for operators running big launches. Planpoint is different. It is the interactive inventory layer: floors, units, live price, live availability, embeddable on a project website and usable on a phone. A custom developer website, on its own, is branding, story, and renderings. Without a live twin inside it, buyers still cannot tell which unit is open at 11pm.
      </p>
      <p>
        Those are three different jobs. Mixing them is how a boutique developer buys the wrong stack. LiveSite solves gallery-scale immersion. Planpoint solves “pick a unit tonight.” The website is the front door and the credibility layer. See what a{' '}
        <a href="/insights/virtual-showroom-pre-construction">virtual showroom</a> has to do on a 10–50 unit project, and what a{' '}
        <a href="/insights/digital-twin-pre-construction">digital twin</a> is when the building does not exist yet.
      </p>
      <h2>What a 10–50 unit project needs</h2>
      <p>
        Boutique projects do not need a Toll Brothers sales-gallery build. They need buyers who can explore every unit from their phone, leave a trail, and get follow-up the same night so the sales team only calls people who are ready. That is website + twin + follow-up. Planpoint is the twin layer. A custom site without it is a nicer brochure. A full LiveSite-class studio package can fit a presentation-center flagship — it is usually oversized for a 20–40 unit sell-out and a loan that is already running.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Usually built for</th>
            <th>What a 10–50 unit project needs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NEEZO LiveSite</td>
            <td>Immersive galleries, large creative builds</td>
            <td>Phone-first unit pick, not a presentation-center package</td>
          </tr>
          <tr>
            <td>Planpoint</td>
            <td>Live inventory on the project website</td>
            <td>The twin buyers click — price and availability live</td>
          </tr>
          <tr>
            <td>Custom website alone</td>
            <td>Brand, story, renderings</td>
            <td>Credibility — still needs the twin and follow-up</td>
          </tr>
        </tbody>
      </table>
      <p>
        Spark.re stays in the CRM lane for the sales team — not the buyer-facing floor. See{' '}
        <a href="/insights/interactive-floor-plan-vs-pdf">interactive floor plan vs a PDF</a> if the question is the file vs the click.
      </p>
      <h2>Where the money shows up</h2>
      <p>
        Wrong stack means buyers wait. Waiting is extra months on the construction loan. On a typical boutique $10M–$15M loan at about 8%, monthly interest is loan × rate ÷ 12 — about $67k–$100k to the bank — plus ads and ops that keep running until units are gone. Three extra months of interest on a $12M loan at 8% is $240,000 before you add burn. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>. The stack that lets someone pick a unit tonight is how those months come off — not a prettier homepage with no live inventory.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on comparable projects, not a promise on yours. A live buyer-site glimpse: demo.wowdesign.io. Run the calculator on your loan if you want your month, not the range. For how the whole journey sells faster, see{' '}
        <a href="/insights/sell-pre-construction-condos-faster">how to sell pre-construction condos faster</a>.
      </p>
    </InsightsArticle>
  )
}
