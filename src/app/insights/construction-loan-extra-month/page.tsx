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
        Monthly interest is loan amount × (annual rate ÷ 100) ÷ 12. That is the bank line only. It is not a full construction-loan draw model — those tools show interest as you draw during the build. This is extra months of delay after you already have a loan size and a rate.
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
      <p>
        Method: simple monthly interest, not compounded daily and not a draw schedule. Use it to size extra months. Your term sheet is still the source for the rate.
      </p>
      <h2>Interest is not the whole extra month</h2>
      <p>
        Interest is only the bank line. Ads, brokers, and ops keep running until the last unit is gone. Leave burn at 0 in the calculator if you only want the bank line. Enter what you actually spend if you want the real extra month.
      </p>
      <h2>What faster sell-out keeps</h2>
      <p>
        Three to six extra months on a typical boutique loan is how you get to $400k+ kept — interest plus marketing that does not go to the bank. Buyers pick a unit tonight. Your sales team only calls people who are ready. Run your number on the calculator.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. Supporting proof, not the opener.
      </p>
    </InsightsArticle>
  )
}
