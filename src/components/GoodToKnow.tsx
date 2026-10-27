import { Check, X } from 'lucide-react'

type Item = { title: string; body: string }

/** The two limits that decide whether someone can ride at all. */
const LIMITS: Item[] = [
  { title: 'Not wheelchair accessible', body: 'Passengers cannot remain seated in a wheelchair during transportation.' },
  { title: 'Not an ambulance', body: 'For life-threatening emergencies, call 911.' },
]

const GOOD_TO_KNOW: Item[] = [
  { title: 'Standard sedans', body: 'Our fleet includes Hyundai Sonatas and Elantras.' },
  { title: 'Folding wheelchairs & walkers', body: 'May be carried if they fit securely in the trunk. Please confirm with us in advance.' },
  { title: 'Schedule 3 days ahead', body: 'Contact MAS at least three days before regular appointments.' },
  { title: '4 hours to cancel', body: 'We kindly request at least four hours’ notice whenever possible.' },
]

/** A checklist rather than another card grid, so the limits stand out from the services above. */
export function GoodToKnow() {
  return (
    <section id="good-to-know" aria-labelledby="good-to-know-title" className="relative bg-paper py-20 sm:py-24">
      <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="good-to-know-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
          Good to know before you ride
        </h2>

        <ul className="mt-10 grid border-t-2 border-navy-900 sm:grid-cols-2 sm:gap-x-12">
          {LIMITS.map(({ title, body }) => (
            <li key={title} className="flex gap-4 border-b border-rule py-6">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                <X aria-hidden="true" className="size-6" strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-display text-[1.5rem] font-bold leading-tight text-navy-900">{title}</h3>
                <p className="mt-1.5 text-ink-soft">{body}</p>
              </div>
            </li>
          ))}
          {GOOD_TO_KNOW.map(({ title, body }) => (
            <li key={title} className="flex gap-4 border-b border-rule py-5">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-route-100 text-route-700">
                <Check aria-hidden="true" className="size-5" strokeWidth={3} />
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
