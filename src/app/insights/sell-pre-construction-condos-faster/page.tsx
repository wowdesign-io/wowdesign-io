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
      <ol>
        <li>Buyers can pick a unit tonight from their phone — live price, live availability. Not a PDF they wait on.</li>
        <li>Follow-up goes out the same night so they do not go cold during the build.</li>
        <li>Your sales team only calls people who are ready, with the unit already in the tools you use.</li>
      </ol>
      <p>Renderings still sell the look. They do not tell you who is ready.</p>
      <h2>What extra months cost</h2>
      <p>
        On a typical boutique $10M–$15M construction loan at about 8%, the bank takes $67k–$100k a month. Marketing and ops keep running. Three extra months of interest alone is $200k–$300k. That is the $400k+ when burn is included on a typical timeline. Monthly interest is loan × rate ÷ 12.
      </p>
      <h2>How long to sell out a 20–40 unit building</h2>
      <p>
        There is no honest single month-count for every 20–40 unit condo. Price, location, and whether buyers can commit before a sales office exists all move it. Use extra months of interest as the scoreboard. Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. Your loan is the number — run the calculator.
      </p>
    </InsightsArticle>
  )
}
