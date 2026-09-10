import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('best-software-pre-construction-condos')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>What “best software” means on a 10–50 unit project</h2>
      <p>
        Most “best software” roundups rank CRMs, agent portals, or presentation-center platforms.
        Those lists are written for operators running hundreds of units, or a sales gallery with
        touchscreens. A boutique 10–50 unit condo has a narrower job: get enough units under
        contract for the construction lender, then sell the rest without extra months on the loan.
      </p>
      <p>
        That job is whether a buyer can pick a specific unit tonight from their phone — live price,
        live availability — then get that unit back the same night, and a call from a sales team
        that already knows which one. A contact database does not do that. A walkthrough that cannot
        answer which unit is still open does not do that either. Renderings still sell the look.
        They do not tell you who is ready. See what a{' '}
        <a href="/insights/digital-twin-pre-construction">digital twin</a> is when the building
        does not exist yet, and{' '}
        <a href="/insights/follow-up-pre-construction-buyers">what follow-up should include</a> after
        a buyer shows interest.
      </p>
      <h2>How the jobs actually split</h2>
      <p>
        Spark.re and similar tools are the sales-team back office: stacking plans, contracts,
        deposits, and nurture. They are not the public project website a buyer opens at 11pm. NEEZO
        LiveSite-class platforms are studio sales galleries — presentation centers and immersive
        launches, usually oversized for a 20–40 unit sell-out. A custom developer website with only
        renderings is branding. The twin is interactive inventory: every floor, every unit, live
        price, live availability, on a phone.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>What it is</th>
            <th>What a 10–50 unit project needs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spark.re and similar CRMs</td>
            <td>Inventory and pipeline for the sales team</td>
            <td>Keep it if you already use it — not the buyer site</td>
          </tr>
          <tr>
            <td>LiveSite-class gallery platforms</td>
            <td>Immersive presentation-center builds</td>
            <td>Usually oversized for a boutique sell-out</td>
          </tr>
          <tr>
            <td>Custom website + live twin</td>
            <td>Brand, story, and units buyers can pick tonight</td>
            <td>The stack that answers which unit is still open</td>
          </tr>
          <tr>
            <td>Renderings alone</td>
            <td>Stills of the look</td>
            <td>Necessary — still not live price or availability</td>
          </tr>
        </tbody>
      </table>
      <p>
        Those are different purchases. Keep Spark.re if your sales team already runs inventory
        there. Do not expect it to be the buyer-facing floor. Do not buy a presentation-center
        package to solve a phone pick. See{' '}
        <a href="/insights/livesite-vs-planpoint-vs-custom-website">
          NEEZO LiveSite vs Planpoint vs a custom developer website
        </a>{' '}
        for the three-way split, and{' '}
        <a href="/insights/interactive-floor-plan-vs-pdf">interactive floor plan vs a PDF</a> if the
        question is the file vs the click.
      </p>
      <h2>What the wrong stack costs in extra months</h2>
      <p>
        Wrong stack means buyers wait for a callback before they can commit. Waiting is extra months
        on the construction loan. On a typical boutique $10M–$15M loan at about 8%, monthly interest
        is loan × rate ÷ 12 — about $67k–$100k to the bank — plus ads and ops that keep running
        until units are gone. A $12M loan at 8% is $80,000 a month. Three extra months is $240,000
        in interest before you add burn. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a>.
      </p>
      <p>
        Hit the{' '}
        <a href="/insights/construction-loan-presale-requirement">lender’s presale line</a> faster
        and the build starts sooner. Sell out faster after completion and the loan comes off sooner.
        Planpoint platform data on comparable pre-construction developments: 31% faster unit
        sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on
        comparable projects, not a promise on yours. Run the calculator on your loan if you want
        your month, not the range. For how the whole journey sells faster, see{' '}
        <a href="/insights/sell-pre-construction-condos-faster">
          how to sell pre-construction condos faster
        </a>
        .
      </p>
    </InsightsArticle>
  )
}
