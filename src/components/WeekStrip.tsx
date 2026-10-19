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
 * uses as its example. Labeled as an example so nobody reads it as a schedule.
 */
export function WeekStrip({ className = '' }: Props) {
  return (
    <figure
      className={`rounded-2xl border border-white/60 bg-white/95 p-4 text-ink shadow-lift backdrop-blur-sm sm:p-5 ${className}`}
    >
      <figcaption className="mb-3 flex items-baseline justify-between gap-3">
        <span className="font-display text-[1.05rem] font-semibold leading-tight text-navy-900">Standing order</span>
        <span className="rounded-full bg-paper-deep px-2.5 py-0.5 text-xs font-bold text-ink-soft">Example</span>
      </figcaption>
      <ol className="grid grid-cols-7 gap-1.5" aria-label="Example week: rides on Monday, Wednesday and Friday">
        {DAYS.map((d, i) => (
          <li key={d.short} className="flex flex-col items-center gap-1.5">
            <span className={`text-[0.72rem] font-bold ${d.booked ? 'text-navy-900' : 'text-ink-faint'}`}>
              <abbr title={d.long} className="no-underline">
                {d.short}
              </abbr>
            </span>
            <span
              className={`relative flex h-16 w-full flex-col justify-between overflow-hidden rounded-md ${
                d.booked ? '' : 'border border-dashed border-rule-strong bg-paper'
              }`}
            >
              {d.booked && (
                <span
                  className="booked-block absolute inset-0 flex flex-col justify-between rounded-md bg-route-600 p-1"
                  style={{ animationDelay: `${300 + i * 110}ms` }}
                >
                  <span className="h-1 w-full rounded-full bg-white/85" aria-hidden="true" />
                  <span className="h-1 w-full rounded-full bg-white/45" aria-hidden="true" />
                </span>
              )}
              <span className="sr-only">{d.booked ? `${d.long}: ride booked` : `${d.long}: no ride`}</span>
            </span>
          </li>
        ))}
      </ol>
      <dl className="mt-4 grid grid-cols-2 gap-x-4 border-t border-rule pt-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-1 w-4 rounded-full bg-route-600" aria-hidden="true" />
          <dt className="sr-only">First mark</dt>
          <dd className="font-bold text-navy-900">Pickup to treatment</dd>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1 w-4 rounded-full bg-route-300" aria-hidden="true" />
          <dt className="sr-only">Second mark</dt>
          <dd className="font-bold text-navy-900">Ride home after</dd>
        </div>
      </dl>
    </figure>
  )
}
