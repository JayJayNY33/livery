import { CalendarCheck2, HandHeart, MessagesSquare, ShieldCheck, UserRound, Clock3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const REASONS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Dependable transportation',
    body: 'Rides planned ahead with our dispatch team, to your appointment and home again.',
    icon: Clock3,
  },
  {
    title: 'Compassionate service',
    body: 'Patience and kindness from pickup to drop-off, especially after a long treatment.',
    icon: HandHeart,
  },
  {
    title: 'Patient dignity and respect',
    body: 'Every passenger is treated with dignity, respect, patience, and professionalism.',
    icon: ShieldCheck,
  },
  {
    title: 'Personalized attention',
    body: 'We get to know our regular riders and do our best to honor driver preferences when scheduling permits.',
    icon: UserRound,
  },
  {
    title: 'Help with recurring rides',
    body: 'Guidance setting up and confirming standing orders through MAS for ongoing treatment.',
    icon: CalendarCheck2,
  },
  {
    title: 'Communication with caregivers',
    body: 'We keep patients, families, and caregivers in the loop on pickups, changes, and return rides.',
    icon: MessagesSquare,
  },
]

export function WhyChoose() {
  return (
    <section aria-labelledby="why-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 id="why-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
              Why choose Fast Track?
            </h2>
            <p className="mt-5 max-w-lg text-lg text-ink-soft">
              Medical transportation is about much more than getting from one place to another. It is about getting
              people to the care they need, with dignity, respect, and reliability.
            </p>
          </div>
          <blockquote className="relative rounded-2xl bg-navy-900 px-7 py-8 text-white sm:px-9">
            <p className="font-display text-[clamp(1.6rem,3vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
              At Fast Track, you are more than just another ride.
            </p>
            <footer className="mt-4 text-[0.95rem] text-route-100/80">
              After dialysis or a long appointment, we make every reasonable effort to get you home sooner.
            </footer>
          </blockquote>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <figure className="relative overflow-hidden rounded-2xl shadow-card">
            <img
              src="/images/standing-800.webp"
              srcSet="/images/standing-800.webp 800w, /images/standing-1400.webp 1400w"
              sizes="(min-width: 1024px) 40vw, 92vw"
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
              alt="A smiling older man stands at the open rear door of a dark sedan"
              className="h-full min-h-72 w-full object-cover object-[45%_center]"
            />
          </figure>

          <ul className="grid content-start gap-x-10 sm:grid-cols-2">
            {REASONS.map(({ title, body, icon: Icon }) => (
              <li key={title} className="flex gap-4 border-t border-rule py-6">
                <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-sun-600" strokeWidth={1.9} />
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-navy-900">{title}</h3>
                  <p className="mt-1.5 text-ink-soft">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
