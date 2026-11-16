import type { Metadata } from 'next'
import InsightsArticle from '@/components/InsightsArticle'
import { getInsight } from '@/lib/insights'
import { SITE } from '@/lib/site'

const article = getInsight('why-construction-lenders-care-about-presales')

export const metadata: Metadata = {
  title: article.h1,
  description: article.description,
  alternates: { canonical: `${SITE}/insights/${article.slug}` },
}

export default function Page() {
  return (
    <InsightsArticle article={article}>
      <p>
        The construction loan is repaid when buyers close, not from land sitting idle. If they
        fund before enough qualifying contracts are in, leftover units sit on their book. Presales
        are how they cut that leftover. The percent on the term sheet is a line on that risk. See{' '}
        <a href="/insights/construction-loan-presale-requirement">how many units you need to pre-sell</a>{' '}
        for the number. See{' '}
        <a href="/insights/what-counts-qualifying-presale-construction-loan">what counts as a qualifying presale</a>{' '}
        for the filter.
      </p>
      <h2>What leftover units do to the lender&apos;s exposure?</h2>
      <p>
        They fund the build. They get repaid as units close and the loan pays down. Every unit still
        open after they fund is leftover collateral they have to live with: a stack that might not
        move at the prices in the appraisal, in a market that can cool while the building goes up.
        That is why they care about presales. Not because a round percent looks tidy on a committee
        memo.
      </p>
      <p>
        A boutique residential stack makes that leftover more concentrated. There are fewer units to
        hide a miss. On an illustrative 24-unit stack, six unsold homes is a quarter of the sell-out
        still sitting there. On a 400-unit tower the same miss is noise. On yours it is the residual loan.
        US bank examiners tell construction lenders to keep speculative unsold units limited, and to
        treat presales as real only when the commitment is bona fide and the deposit is meaningful. A
        list of names is not that.
      </p>
      <blockquote className="insights-pull-quote">
        They are not counting names. They are shrinking leftover exposure they have to live with
        once those contracts close.
      </blockquote>
      <h2>How does each qualifying presale cut that leftover?</h2>
      <p>
        Each contract they will count takes a slice of sell-out revenue off the leftover. Binding
        purchase contract, a deposit they recognize, a buyer who is not you or a related party. A
        reservation, a letter of intent, or a hold with no money usually stays in the leftover. So
        does a related-party or bulk contract they haircut. Illustrative: ten names on a list can be
        six after that filter. Ask the lender in writing what they will take before you brief the
        sales team that you are “at 50%.”
      </p>
      <p>
        The share they wrote on the sheet is the point where leftover exposure is small enough that
        they will fund. Banks and credit unions commonly want 50–70% of project revenue under those
        contracts. That range is a market pattern, not a law. Some private lenders will fund with
        fewer presales and price the extra risk. Convert the percent to dollars first, then to units,
        and only from contracts they will count. Soft holds do not close the gap.
      </p>
      <figure className="insights-figure">
        <svg
          viewBox="0 0 640 280"
          role="img"
          aria-labelledby="leftover-title leftover-desc"
          width={640}
          height={280}
        >
          <title id="leftover-title">Leftover lender exposure versus qualifying presale share</title>
          <desc id="leftover-desc">
            On an illustrative $12 million sell-out, leftover exposure falls from $12 million at 0
            percent qualifying presales, to $9 million at 25 percent, to $6 million at a 50 percent
            example line, to zero at 100 percent.
          </desc>
          <rect width="640" height="280" fill="rgba(13,12,32,0.35)" />
          <text x="24" y="28" fill="#e8e8ea" fontSize="14" fontFamily="Inter, system-ui, sans-serif">
            Leftover on a $12M sell-out (illustrative)
          </text>
          <text x="24" y="72" fill="#b8b8bc" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            0%
          </text>
          <rect x="88" y="56" width="400" height="22" fill="#2d68ff" />
          <text x="500" y="72" fill="#fff" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            $12.0M leftover
          </text>
          <text x="24" y="118" fill="#b8b8bc" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            25%
          </text>
          <rect x="88" y="102" width="300" height="22" fill="#2d68ff" />
          <text x="400" y="118" fill="#fff" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            $9.0M leftover
          </text>
          <text x="24" y="164" fill="#b8b8bc" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            50%
          </text>
          <rect x="88" y="148" width="200" height="22" fill="#2d68ff" />
          <text x="300" y="164" fill="#fff" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            $6.0M leftover
          </text>
          <text x="24" y="210" fill="#b8b8bc" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            100%
          </text>
          <rect x="88" y="194" width="8" height="22" fill="#2d68ff" />
          <text x="108" y="210" fill="#fff" fontSize="12" fontFamily="Inter, system-ui, sans-serif">
            $0 leftover
          </text>
          <line x1="288" y1="48" x2="288" y2="228" stroke="#ee7c2c" strokeDasharray="4 4" />
          <text x="298" y="246" fill="#ee7c2c" fontSize="11" fontFamily="Inter, system-ui, sans-serif">
            Example 50% line. Your sheet is the number that counts.
          </text>
        </svg>
        <figcaption>
          Leftover exposure on an illustrative $12M sell-out as qualifying presales rise. The 50%
          line is an example, not a statute. Method: leftover = sell-out revenue × (1 − qualifying
          share).
        </figcaption>
      </figure>
      <div className="features-typography-card top-border-none insights-worked-example">
        <div className="features-typography-card-single">
          <h3>Worked example (illustrative numbers)</h3>
          <ol>
            <li>$12,000,000 sell-out. Lender line: 50% of revenue under qualifying contracts.</li>
            <li>At 0% qualifying: leftover exposure = $12,000,000. They do not fund.</li>
            <li>At 25% qualifying ($3,000,000): leftover = $9,000,000. Still below the line. They do not fund.</li>
            <li>At 50% qualifying ($6,000,000): leftover after those close = $6,000,000. That is the residual they agreed to live with. They fund.</li>
            <li>Method: leftover = sell-out revenue × (1 − qualifying share). Soft holds are not in the share.</li>
          </ol>
          <p>
            Illustrative arithmetic on a $12M sell-out. Your term sheet is the percent that counts.
            Waiting on that line still costs extra months on the loan. See{' '}
            <a href="/insights/construction-loan-extra-month">how much an extra month costs</a> for
            the interest method.
          </p>
        </div>
      </div>
      <h2>Is this the same as Fannie Mae&apos;s 50%?</h2>
      <p>
        No. Fannie Mae&apos;s 50% is whether unit-buyers can get those conventional mortgages on the
        project. For new and newly converted condo projects, at least 50% of the total units in the
        project or subject legal phase must have been conveyed or be under contract for sale to
        principal-residence or second-home purchasers. The same Full Review also wants the project
        or phase substantially complete, with a certificate of occupancy. That clock usually sits
        after construction, not before the construction lender funds.
      </p>
      <p>
        Construction lenders are looking at leftover risk on the build: share of project revenue
        under qualifying contracts, before they will fund. Investor contracts can fill a
        construction-lender dollar line and still fail Fannie&apos;s buyer-type test. Mixing the two
        is how you “hit 50%” and still do not have a draw, or you have a draw and unit-buyers still
        cannot get those mortgages. Keep them separate. The Fannie rule is linked under Sources.
      </p>
      <h2>What else do they underwrite besides the percent?</h2>
      <p>
        The percent is one line. They also look at whether those contracts will actually close,
        whether the leftover after that is a size they can live with, and whether you can finish the
        building. US bank guidance says presales may not be a reliable indicator of actual future
        sales if values decline. Banks are told to check that the commitments are bona fide and that
        deposits have been collected and are meaningful. A reservation pack from the launch party
        fails that test.
      </p>
      <p>
        They also cap speculative unsold units so the bank is not financing a building full of
        leftovers. That is the same leftover-exposure problem from the other side: how many units
        can sit unsold without blowing the residual loan. Your construction sheet is its own list.
        Do not brief the sales team from a spreadsheet of holds the lender will throw out. See{' '}
        <a href="/insights/how-fast-pre-sell-construction-loan-draw">how fast you need to pre-sell to hit the draw</a>{' '}
        once you know which contracts actually count.
      </p>
      <h2>What happens to you while they wait on that line?</h2>
      <p>
        Until they fund, you keep paying interest and marketing with no construction draw. That is
        your month, not theirs. The leftover on their book is why they wait. The extra months on
        your loan are what you pay while they wait. Do not size that month from a units-per-month
        sticker copied from another building. Size it from your loan. See{' '}
        <a href="/insights/construction-loan-extra-month">how much an extra month costs</a> for the
        interest method.
      </p>
      <p>
        Hit the presale line faster and the build starts sooner. That is one clock. After
        completion, leftover units keep the loan running. That is the other clock. See{' '}
        <a href="/insights/how-long-sell-out-20-40-unit-condo">how long a 20–40 unit sell-out takes</a>.
        Your scoreboard with the lender is leftover exposure they still have to live with. Your
        scoreboard with yourself is extra months until that leftover is small enough that they fund.
        The calculator sizes the month on your loan. It does not change the term sheet overnight.
      </p>
    </InsightsArticle>
  )
}
