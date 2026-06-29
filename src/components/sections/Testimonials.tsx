import Image from 'next/image'
import Link from 'next/link'

const TESTIMONIALS = [
  {
    quote:
      'Every agency we talked to showed up with beautiful renders. Nobody talked about what happens when a buyer lands on the site at 11pm and wants to know if unit 4B is available. That\'s what this actually solves.',
    name: 'Claudia',
    bio: 'Principal Developer, Fort Lauderdale',
    photo: 'https://a.storyblok.com/f/293523249633085/2066/3142beb7d6/testimonial-claudia.avif',
  },
  {
    quote:
      'Our team used to spend the first 20 minutes of every call figuring out what the buyer was actually interested in. Now that information is already there before anyone picks up the phone.',
    name: 'Thomas',
    bio: 'VP of Sales, Tampa',
    photo: 'https://a.storyblok.com/f/293523249633085/2499/7652d662c6/testimonial-thomas.avif',
  },
  {
    quote:
      'We had a situation where two buyers were interested in the same unit and our website still showed it available after we\'d taken it off market internally. That was the moment I knew we needed something better. Haven\'t had that problem since.',
    name: 'Marcus',
    bio: 'Managing Partner, Miami',
    photo: 'https://a.storyblok.com/f/293523249633085/2826/c272287635/testimonial-marcus.avif',
  },
  {
    quote:
      'We sent out probably 200 PDF packages last cycle. Maybe 15 people actually opened them. First month with the presales system we could see exactly who was looking at what. That\'s a different business.',
    name: 'Elena',
    bio: 'Principal, Brickell Development',
    photo: 'https://a.storyblok.com/f/293523249633085/3059/95d1ce5482/testimonial-elena.avif',
  },
  {
    quote:
      'Pre-construction is a long game and buyers go cold. What I didn\'t expect was how much the digital twin keeps them engaged between first look and signing. It gives them something to come back to.',
    name: 'Daniel',
    bio: 'Director of Sales, Orlando',
    photo: 'https://a.storyblok.com/f/293523249633085/3857/c3f4bad641/testimonial-daniel.avif',
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad bg-[var(--color-brand-dark)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--color-brand-blue)] mb-4">
              Testimonials
            </span>
            <h2
              className="text-4xl md:text-5xl font-medium text-white mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What developers say about results, not just websites.
            </h2>
            <p className="text-[var(--color-brand-muted)]">
              Built for boutique developments. Designed for measurable sales impact.
            </p>
          </div>
          <Link
            href="/book-a-demo"
            className="shrink-0 px-6 py-3 rounded-lg bg-[var(--color-brand-blue)] text-white font-medium hover:bg-blue-500 transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card-border p-6 flex flex-col gap-6">
              <p className="text-[var(--color-brand-muted)] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-brand-border)]">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-[var(--color-brand-muted)]">{t.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
