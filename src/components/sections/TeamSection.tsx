import Image from 'next/image'

const TEAM = [
  {
    name: 'Andy',
    role: 'CEO & Founder',
    photo: 'https://a.storyblok.com/f/293523249633085/23185/b909bbc604/andy-bittner.avif',
  },
  {
    name: 'Ashekur',
    role: 'Lead Systems Engineer',
    photo: null,
  },
  {
    name: 'Mahmudul',
    role: 'Digital Twin Architect',
    photo: 'https://a.storyblok.com/f/293523249633085/12711/335c7ed351/team-mahmudul.avif',
  },
  {
    name: 'Odule',
    role: 'CRM Integration Lead',
    photo: 'https://a.storyblok.com/f/293523249633085/14443/2cdf1683f4/team-odule.avif',
  },
  {
    name: 'Bence',
    role: 'Performance Engineer',
    photo: 'https://a.storyblok.com/f/293523249633085/12190/3e639acf63/team-bence.avif',
  },
]

export default function TeamSection() {
  return (
    <section className="section-pad bg-[var(--color-brand-dark)]">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[var(--color-brand-blue)] mb-4">
            Team
          </span>
          <h2
            className="text-4xl md:text-5xl font-medium text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Team Behind Your Presales System.
          </h2>
          <p className="text-[var(--color-brand-muted)] text-lg">
            A specialized team focused on digital twin infrastructure and CRM-integrated presales systems for boutique real estate developers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] flex items-center justify-center">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-2xl font-medium text-[var(--color-brand-muted)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {member.name[0]}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{member.name}</p>
                <p className="text-xs text-[var(--color-brand-muted)] mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
