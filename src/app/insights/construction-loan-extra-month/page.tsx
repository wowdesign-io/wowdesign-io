import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('construction-loan-extra-month')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <p>
        Until the lender funds, extra months are interest and marketing with no construction draw.
        After completion, leftover units keep the loan on. Both clocks use the same month. See{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a>{' '}
        for the two clocks. The method below sizes that month on your loan, not a units-per-month
        sticker from another building.
      </p>
      <h2>How do you calculate monthly construction-loan interest?</h2>
      <p>
        Monthly interest is loan amount × (annual rate ÷ 100) ÷ 12. A $12M loan at 8% is $80,000 a
        month to the bank. A $10M loan at the same rate is about $66,667. A $15M loan is $100,000.
        Your term sheet is still the rate that counts. The 8% is a typical boutique illustration, not
        a quote from your bank.
      </p>
      <p>
        That formula treats the full loan as outstanding so you can size delay once you already know
        the size. Construction loans usually accrue on what has been drawn. If you are early in the
        draw, the real bank line is smaller. Once most of the loan is out, or you are sitting in extra
        months after completion, this is the number. Use it to size a slipped month. Do not use it to
        replace your lender&apos;s draw model. The table is the same method at three loan sizes.
      </p>
      <div className="table-scroll">
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
      </div>
      <h2>Why is this not a lender draw-schedule number?</h2>
      <p>
        Draw-schedule tools show interest as you pull during the build. Extra months of delay sit
        after you already know the loan: sell-out slipping, the build running longer than the
        interest reserve was sized for, or waiting on the presale line with no draw. Those months
        cost the same formula, on a known size. They are not the first dollar of a construction
        budget.
      </p>
      <p>
        A draw model is the right tool for the build itself. This method is the right tool when the
        calendar slips. If a buyer cannot pick a specific unit from their phone, they wait. Waiting
        is how you add a month. The sequence that takes months off lives on{' '}
        <a href="/insights/sell-pre-construction-condos-faster">how to sell pre-construction condos faster</a>.
        The pace to the draw lives on{' '}
        <a href="/insights/how-fast-pre-sell-construction-loan-draw">how fast you need to pre-sell to hit a construction loan draw</a>.
      </p>
      <h2>Why is interest not the whole extra month?</h2>
      <p>
        Interest is the bank line. Ads, brokers, and ops keep running until units are gone. Leave
        burn at 0 in the calculator if you only want the bank line. Enter what you actually spend if
        you want the real extra month. A project that “only” pays $80k to the bank still burns
        marketing every month sell-out slips. Skip either line and you understate it.
      </p>
      <p>
        That is why the $400k+ figure on a typical boutique timeline is interest plus burn across
        three to six extra months, not interest in a vacuum. The calculator models both. Your number
        is your loan, your rate, and what you actually spend until the last unit is gone. Interest
        alone understates the month.
      </p>
      <blockquote className="insights-pull-quote">
        The extra month is loan × rate ÷ 12, plus whatever you still spend until the last unit is
        gone.
      </blockquote>
      <figure className="insights-figure">
        <svg
          viewBox="0 0 640 280"
          role="img"
          aria-labelledby="month-title month-desc"
          width={640}
          height={280}
        >
          <title id="month-title">Interest on an illustrative $12 million loan at 8 percent</title>
          <desc id="month-desc">
            On an illustrative $12 million construction loan at 8 percent, one extra month of
            interest is $80,000, three extra months are $240,000, and six extra months are $480,000.
          </desc>
          <rect width="640" height="280" fill="rgba(13,12,32,0.35)" />
          <text x="24" y="28" fill="#e8e8ea" fontSize="14" fontFamily="Inter, system-ui, sans-serif">
            Interest on a $12M loan at 8% (illustrative)
          </text>
          <text x="24" y="72" fill="#b8b8bc" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            1 mo
          </text>
          <rect x="88" y="56" width="67" height="22" fill="#2d68ff" />
          <text x="167" y="72" fill="#fff" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            $80k
          </text>
          <text x="24" y="118" fill="#b8b8bc" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            3 mo
          </text>
          <rect x="88" y="102" width="200" height="22" fill="#2d68ff" />
          <text x="300" y="118" fill="#fff" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            $240k
          </text>
          <text x="24" y="164" fill="#b8b8bc" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            6 mo
          </text>
          <rect x="88" y="148" width="400" height="22" fill="#2d68ff" />
          <text x="500" y="164" fill="#fff" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            $480k
          </text>
          <text x="24" y="246" fill="#b8b8bc" fontSize="11" fontFamily="Inter, system-ui, sans-serif">
            Method: loan × rate ÷ 12 × months. Marketing and ops sit on top of the bank line.
          </text>
        </svg>
        <figcaption>
          Interest only on an illustrative $12M construction loan at 8%. One month is $80,000. Three
          months is $240,000. Six months is $480,000. Method: loan × rate ÷ 12 × months. Add
          marketing and ops on top.
        </figcaption>
      </figure>
      <div className="features-typography-card insights-callout insights-worked-example">
        <div className="features-typography-card-single">
          <h3>Worked example (illustrative numbers)</h3>
          <ol>
            <li>$12,000,000 loan × 8% ÷ 12 = $80,000 interest per month.</li>
            <li>Three extra months of interest = $240,000.</li>
            <li>Add $15,000 a month of marketing and ops × 3 = $45,000.</li>
            <li>Extra three months = $285,000.</li>
            <li>Method: (loan × rate ÷ 12 × months) + (monthly burn × months).</li>
          </ol>
          <p>
            Illustrative arithmetic on a $12M loan at 8% plus a $15k monthly burn. Your term sheet is
            the rate that counts. Leave burn at 0 if you only want the bank line.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" />
      </div>
      <h2>What happens when extra months eat the interest reserve?</h2>
      <p>
        US bank examiners treat interest during construction as a budgeted line, same as hard costs.
        The OCC says an appropriate interest reserve should cover interest through the project&apos;s
        anticipated completion and sale. That reserve is sometimes depleted before the project is
        done. Construction delays and a change in market conditions are the usual reasons. Then the
        bank generally wants cash from you or the guarantor to keep paying interest. Adding more
        debt to refill the reserve is a red flag on their side. On yours it is still extra months
        you did not price.
      </p>
      <p>
        FDIC construction-lending exams ask whether the bank even uses interest reserves, and
        whether any extension of those reserves is backed by a realistic completion date. Extra
        months are how that reserve runs out. Size those months from your loan. Waiting on{' '}
        <a href="/insights/construction-loan-presale-requirement">the lender&apos;s presale line</a>{' '}
        with no draw is one way the calendar slips. See{' '}
        <a href="/insights/why-construction-lenders-care-about-presales">why construction lenders care about presales</a>{' '}
        for leftover exposure on their book.
      </p>
      <h2>What does faster sell-out keep on both clocks?</h2>
      <p>
        Hit the presale line faster and the build starts sooner. That is one clock. After
        completion, leftover units keep the loan running. That is the other clock. Faster sell-out
        hits both. For leftover units after the first wave, see{' '}
        <a href="/insights/sell-last-units-pre-construction-condo">how you sell the last units in a pre-construction condo</a>.
        A cancellation in month four is another month of the loan. See{' '}
        <a href="/insights/keep-pre-construction-buyers-from-backing-out">how to keep buyers from backing out during the build</a>.
      </p>
      <p>
        Three to six extra months on a typical boutique loan is how you get to $400k+ kept: interest
        plus marketing that does not go to the bank. Do not size that from a units-per-month rate
        you copied. Size it from your loan, your rate, and what you still spend until the last unit
        is gone. Run the calculator on your numbers. That is the method for your month, not a
        slogan.
      </p>
    </InsightsArticle>
  )
}
