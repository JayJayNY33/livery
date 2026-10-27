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

    </section>
  )
}
