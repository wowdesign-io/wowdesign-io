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
        Monthly interest is loan amount × (annual rate ÷ 100) ÷ 12. That is only what the bank takes on a loan you already have a size and a rate for. It is not a full draw schedule. Those tools show interest as you draw during the build. This number is for extra months of delay — sell-out slipping after you already know the loan. Use it to size a slipped month, not to replace your lender’s draw model.
      </p>
      <p>
        A $12M loan at 8% is $80,000 a month to the bank. Your term sheet is still the rate that counts. Use the table to size the month. Then add whatever you still spend on ads, brokers, and ops until the last unit is gone.
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
      <h2>Interest is not the whole extra month</h2>
      <p>
        Interest is the bank line. Ads, brokers, and ops keep running until units are gone. Leave burn at 0 in the calculator if you only want the bank line. Enter what you actually spend if you want the real extra month. A project that “only” pays $80k to the bank still burns marketing every month sell-out slips. The extra month is both lines added together. Skip either and you understate it.
      </p>
      <p>
        That is why the $400k+ figure on a typical boutique timeline is interest plus burn across three to six extra months — not interest in a vacuum. The calculator models both. Your number is your loan, your rate, and what you actually spend until the last unit is gone. Interest alone understates the month.
      </p>
      <h2>What faster sell-out keeps</h2>
      <p>
        Three to six extra months on a typical boutique loan is how you get to $400k+ kept — interest plus marketing that does not go to the bank. Hit{' '}
        <a href="/insights/construction-loan-presale-requirement">the lender’s presale line</a> faster and the build starts sooner. Sell out faster after completion and the loan comes off sooner.
      </p>
      <p>
        Two places the months show up. Until you hit the lender’s presale line, you keep paying interest and marketing with no construction draw. After completion, unsold units keep the loan on. Faster sell-out hits both. Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. Supporting numbers, not a promise on your project. Run the calculator on your loan — that is the method for your month, not a slogan.
      </p>
    </InsightsArticle>
  )
}
