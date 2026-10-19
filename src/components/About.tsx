import { Ambulance, Armchair, CalendarClock, Car, Luggage, TimerReset } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const GOOD_TO_KNOW: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Car,
    title: 'Standard sedans',
    body: 'Our fleet includes Hyundai Sonatas and Elantras.',
  },
  {
    icon: Armchair,
    title: 'Not wheelchair accessible',
    body: 'Passengers cannot remain seated in a wheelchair during transportation.',
  },
  {
    icon: Luggage,
    title: 'Folding wheelchairs & walkers',
    body: 'May be carried if they fit securely in the trunk. Please confirm with us in advance.',
  },
  {
    icon: CalendarClock,
    title: 'Schedule 3 days ahead',
    body: 'Contact MAS at least three days before regular appointments.',
  },
  {
    icon: TimerReset,
    title: '4 hours to cancel',
    body: 'We kindly request at least four hours’ notice whenever possible.',
  },
  {
    icon: Ambulance,
    title: 'Not an ambulance',
    body: 'For life-threatening emergencies, call 911.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 id="about-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
              Getting you to care, the way we would want our own family driven
            </h2>
            <div className="mt-7 grid max-w-2xl gap-5 text-lg text-ink-soft">
              <p>
                Fast Track Medical &amp; Livery Transportation is a Long Island, New York company committed to
                dependable non-emergency medical transportation. We drive patients to the appointments that keep them
                well: doctor and specialist visits, hospital and outpatient care, dialysis, physical therapy, and
                rehabilitation.
              </p>
              <p>
                A missed ride can mean a missed treatment. That is why we focus on getting every passenger there
                safely, comfortably, and on time, and on getting them home again without an unnecessary wait.
              </p>
              <p>
                We work with patients, families, caregivers, and healthcare coordinators. We treat every
                passenger with patience and respect, because for us, this work is about people, not just
                destinations.
              </p>
            </div>
          </div>

          <aside aria-labelledby="good-to-know" className="self-start rounded-3xl border border-rule bg-paper p-6 sm:p-8">
            <h3 id="good-to-know" className="text-2xl font-bold text-navy-900">
              Good to know before you ride
            </h3>
            <ul className="mt-6 grid gap-5">
              {GOOD_TO_KNOW.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-route-600 shadow-card">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="font-bold text-navy-900">{title}</p>
                    <p className="text-[0.98rem] text-ink-soft">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <figure className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <img
          src="/images/road-1400.webp"
          srcSet="/images/road-800.webp 800w, /images/road-1400.webp 1400w, /images/road-2000.webp 2000w"
          sizes="(min-width: 1280px) 1216px, 94vw"
          width={2000}
          height={1333}
          loading="lazy"
          decoding="async"
          alt="A dark sedan driving along a quiet, tree-lined road"
          className="aspect-[21/9] w-full rounded-3xl object-cover shadow-card"
        />
      </figure>
    </section>
  )
}
