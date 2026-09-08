import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('construction-loan-extra-month')

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>How to calculate monthly construction-loan interest</h2>
      <p>
        Monthly interest is loan amount × (annual rate ÷ 100) ÷ 12. That is only what the bank takes. Ads, brokers, and ops keep running until the last unit is gone.
      </p>
      <table>
        <thead>
          <tr>
            <th>Loan</th>
            <th>Rate</th>
            <th>One month of interest</th>
            <th>Three extra months</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$10M</td>
            <td>8%</td>
            <td>$66,667</td>
            <td>$200,000</td>
          </tr>
          <tr>
            <td>$12M</td>
            <td>8%</td>
            <td>$80,000</td>
            <td>$240,000</td>
          </tr>
          <tr>
            <td>$15M</td>
            <td>8%</td>
            <td>$100,000</td>
            <td>$300,000</td>
          </tr>
        </tbody>
      </table>
      <p>Use this to size extra months. Your term sheet is still the rate that counts.</p>
      <h2>Interest is not the whole extra month</h2>
      <p>
        Leave burn at 0 in the calculator if you only want the bank line. Enter what you actually spend if you want the real extra month.
      </p>
      <h2>What faster sell-out keeps</h2>
      <p>
        Three to six extra months on a typical boutique loan is how you get to $400k+ kept — interest plus marketing that does not go to the bank.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement.
      </p>
    </InsightsArticle>
  )
}
