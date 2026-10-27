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

export function GoodToKnow() {
  return (
    <section id="good-to-know" aria-labelledby="good-to-know-title" className="relative bg-paper py-20 sm:py-24">
      <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="good-to-know-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
          Good to know before you ride
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GOOD_TO_KNOW.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-4 rounded-2xl border border-rule bg-white p-6 shadow-card">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/8 text-brand-red">
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.9} />
              </span>
              <div>
                <h3 className="text-title font-semibold text-navy-900">{title}</h3>
                <p className="mt-1 text-ink-soft">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
