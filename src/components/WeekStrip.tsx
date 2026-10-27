import { ArrowRight } from 'lucide-react'

const DAYS = [
  { short: 'Mon', long: 'Monday', booked: true },
  { short: 'Tue', long: 'Tuesday', booked: false },
  { short: 'Wed', long: 'Wednesday', booked: true },
  { short: 'Thu', long: 'Thursday', booked: false },
  { short: 'Fri', long: 'Friday', booked: true },
  { short: 'Sat', long: 'Saturday', booked: false },
  { short: 'Sun', long: 'Sunday', booked: false },
]

type Props = {
  className?: string
}

/**
 * An illustrative standing order: the Monday / Wednesday / Friday pattern the FAQ
 * uses as its example. The whole card links to that FAQ answer, so it is never a
 * dead control.
 */
export function WeekStrip({ className = '' }: Props) {
  return (
    <a
      href="#faq-q-9"
      aria-label="Example standing order: rides every Monday, Wednesday and Friday. Read what a standing order is."
      className={`group block rounded-2xl border border-white/60 bg-white/95 p-4 text-ink shadow-lift backdrop-blur-sm transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 sm:p-5 ${className}`}
    >
      <figure>
        <figcaption className="mb-3 flex items-baseline justify-between gap-3">
          <span className="font-display text-[1.05rem] font-semibold leading-tight text-navy-900">
            Standing order
          </span>
          <span className="rounded-full bg-paper-deep px-2.5 py-0.5 text-xs font-bold text-ink-soft">Example</span>
        </figcaption>
        <ol className="grid grid-cols-7 gap-1.5" aria-hidden="true">
          {DAYS.map((d, i) => (
            <li key={d.short} className="flex flex-col items-center gap-1.5">
              <span className={`text-[0.72rem] font-bold ${d.booked ? 'text-navy-900' : 'text-ink-faint'}`}>
                {d.short}
              </span>
              <span
                className={`relative flex h-14 w-full flex-col justify-between overflow-hidden rounded-md ${
                  d.booked ? '' : 'bg-paper-deep/70'
                }`}
              >
                {d.booked && (
                  <span
                    className="booked-block absolute inset-0 flex flex-col justify-between rounded-md bg-route-600 p-1"
                    style={{ animationDelay: `${300 + i * 110}ms` }}
                  >
                    <span className="h-1 w-full rounded-full bg-white/85" />
                    <span className="h-1 w-full rounded-full bg-white/45" />
                  </span>
                )}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-ink-soft" aria-hidden="true">
          The same rides every week: pickup to treatment and the ride home after.
        </p>
      </figure>
      <span
        className="mt-3 flex items-center justify-between border-t border-rule pt-3 font-bold text-route-700 group-hover:text-navy-900"
        aria-hidden="true"
      >
        What’s a standing order?
        <ArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
      </span>
    </a>
  )
}
