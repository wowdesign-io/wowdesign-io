import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('sell-pre-construction-condos-faster')

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>What actually shortens sell-out</h2>
      <p>
        Faster sell-out on a 10–50 unit pre-construction project is not more renderings. It is whether a buyer can pick a unit tonight from their phone — live price, live availability — then get that unit back the same night, and a call from a sales team that already knows which one. If any of those three is missing, they wait. Waiting is extra months of the loan.
      </p>
      <ol>
        <li>Buyers pick a unit tonight from their phone. Not a PDF they wait on.</li>
        <li>
          Follow-up goes out the same night so they do not go cold during the build. See{' '}
          <a href="/insights/follow-up-pre-construction-buyers">what that follow-up should include</a>.
        </li>
        <li>Your sales team only calls people who are ready, with the unit already in the tools you use.</li>
      </ol>
      <p>
        Renderings still sell the look. They do not tell you who is ready. The{' '}
        <a href="/insights/digital-twin-pre-construction">digital twin</a> is the live building they pick from. The website is the gallery they land on. Follow-up is what holds them through the months the building does not exist yet. Skip one and the other two do not close the gap.
      </p>
      <h2>What extra months cost</h2>
      <p>
        On a typical boutique $10M–$15M construction loan at about 8%, the bank takes $67k–$100k a month. Method: loan × rate ÷ 12. Marketing and ops keep running until units are gone. Three extra months of interest alone on that range is $200k–$300k. A $12M loan at 8% is $80,000 a month, $240,000 across three months, before burn. That is the $400k+ when burn is included on a typical timeline that slipped.
      </p>
      <p>
        Hit{' '}
        <a href="/insights/construction-loan-presale-requirement">the lender’s presale line</a> faster and the build starts sooner. Sell out faster after completion and the loan comes off sooner. Both are extra months you either pay or keep. Run the calculator on your loan — that is the method for your number, not the range on this page.
      </p>
      <h2>How long to sell out a 20–40 unit building</h2>
      <p>
        There is no honest single month-count for every 20–40 unit condo. Price, location, and whether buyers can commit before a sales office exists all move it. Anyone publishing “6 months” as a rule is guessing. Use extra months of interest as the scoreboard instead: each month you still have unsold units is a month the bank and the ads keep taking.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on comparable projects, not a promise that your 24-unit building sells in a set number of months. Your loan, your rate, and what you actually spend until the last unit is gone is the number. Run the calculator.
      </p>
    </InsightsArticle>
  )
}
