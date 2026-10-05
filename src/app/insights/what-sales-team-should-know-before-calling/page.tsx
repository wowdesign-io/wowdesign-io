import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('what-sales-team-should-know-before-calling')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <h2>What should a sales team know before they call a condo buyer?</h2>
      <p>
        The briefing is four things. Which unit they looked at — the actual stack number, not “a two-bed.” Whether that unit is still open, and at what price, on the same inventory the sales team uses. How far they went: did they open pricing, a floor plan, a gallery, or leave after the look? And whether they came back. A return visit is a different call than a one-pass browse.
      </p>
      <p>
        If any of that is missing, the first minute is spent asking what they wanted. That is a cold call with a nicer title. The buyer already showed their hand on the site. The sales team should walk in with that picture, not reconstruct it on the phone.
      </p>
      <p>
        This is not a script. It is what has to be in the tools they already use before they pick up. Follow-up the same night is how that picture gets built — see{' '}
        <a href="/insights/follow-up-pre-construction-buyers">what follow-up should include</a>. This page is the call, not the email.
      </p>
      <table>
        <thead>
          <tr>
            <th>Before they pick up</th>
            <th>Guessing on the call</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Which unit</td>
            <td>“So what were you looking at?”</td>
          </tr>
          <tr>
            <td>Still open, live price</td>
            <td>“Let me check and call you back.”</td>
          </tr>
          <tr>
            <td>How far they went</td>
            <td>Treat a browser like a buyer</td>
          </tr>
          <tr>
            <td>They came back</td>
            <td>Treat a one-pass like a return</td>
          </tr>
        </tbody>
      </table>
      <h2>A name and a phone number is not the briefing</h2>
      <p>
        A CRM row with a name, a phone, and “interested” is a contact. It is not a briefing. The sales team still has to ask which floor, which view, what they thought it cost. Buyers who already picked a unit hang up on that. Buyers who did not pick one were never ready — and the call still burned an hour.
      </p>
      <p>
        The split is simple. A contact list is everyone who left a number. A ranked list is people who opened a specific unit, saw a live price, and came back. The second list is who the sales team should call first. The first list is what you get when the site is pictures and a form.
      </p>
      <p>
        Put the unit in the tools they already use. Not a separate dashboard they never open. If the sales team has to export a spreadsheet to see 4B, they will not. They will call the newest name and guess. That is how a 10–50 unit project spends an extra month asking people what they wanted.
      </p>
      <h2>Why those calls cost months</h2>
      <p>
        On a typical boutique $10M–$15M construction loan at about 8%, monthly interest is loan × rate ÷ 12 — about $67k–$100k to the bank. A $12M loan at 8% is $80,000 a month, $240,000 across three extra months, before ads and ops. Cold calls stretch sell-out. Extra months are what you pay when the sales team is reconstructing a unit on the phone instead of closing it.
      </p>
      <p>
        The lender’s line is still 50–70% of revenue under qualifying contracts. Calls that go nowhere do not fill that line. See{' '}
        <a href="/insights/construction-loan-presale-requirement">how many units you need to pre-sell</a>. After completion, leftover units keep the loan running. See{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a>.
      </p>
      <p>
        Planpoint platform data on comparable pre-construction developments: 31% faster unit sell-through, 49% more qualified leads, 3x buyer engagement. That is platform data on comparable projects, not a promise that your sales team closes every briefing. The method for your month is the calculator on your loan.
      </p>
    </InsightsArticle>
  )
}
