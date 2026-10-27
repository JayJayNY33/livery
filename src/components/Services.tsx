import { Building2, CalendarSync, Droplet, FileCheck2, Info, Phone, Stethoscope, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PHONES } from '../data/site'

/** r = ride, c = call MAS, s = ride arranged by a facility, . = no ride */
type Pattern = string

type Service = {
  title: string
  body: string
  rhythm: string
  pattern: Pattern
  icon: LucideIcon
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const SERVICES: Service[] = [
  {
    title: 'Medical Appointments',
    body: 'Transportation to primary care physicians, specialists, hospitals, and eligible outpatient appointments.',
    rhythm: 'As scheduled',
    pattern: '..r....',
    icon: Stethoscope,
  },
  {
    title: 'Dialysis Transportation',
    body: 'Dependable transportation for patients attending regularly scheduled dialysis treatments.',
    rhythm: 'Recurring, e.g. Mon · Wed · Fri',
    pattern: 'r.r.r..',
    icon: Droplet,
  },
  {
    title: 'Physical Therapy & Rehabilitation',
    body: 'Transportation to eligible physical therapy and rehabilitation appointments.',
    rhythm: 'Recurring, e.g. Tue · Thu',
    pattern: '.r.r...',
    icon: Activity,
  },
  {
    title: 'Recurring Medical Transportation',
    body: 'Assistance coordinating recurring transportation arrangements for ongoing treatments.',
    rhythm: 'Standing order, same days each week',
    pattern: 'r..r...',
    icon: CalendarSync,
  },
  {
    title: 'Medicaid Transportation',
    body: 'Transportation through eligible Medicaid arrangements coordinated with Medical Answering Services (MAS).',
    rhythm: 'Call MAS at least 3 days ahead',
    pattern: 'c..r...',
    icon: FileCheck2,
  },
  {
    title: 'Healthcare Facility Transportation',
    body: 'Transportation solutions for medical offices, rehabilitation centers, nursing homes, and healthcare coordinators.',
    rhythm: 'Arranged with your facility',
    pattern: 'sssss..',
    icon: Building2,
  },
]

function describe(pattern: Pattern) {
  const rides = [...pattern].flatMap((c, i) => (c === 'r' || c === 's' ? [DAY_NAMES[i]] : []))
  const call = pattern.indexOf('c')
  return [call >= 0 ? `call MAS on ${DAY_NAMES[call]}` : '', rides.length ? `rides on ${rides.join(', ')}` : '']
    .filter(Boolean)
    .join(', ')
}

function WeekRow({ pattern }: { pattern: Pattern }) {
  return (
    <ol className="grid grid-cols-7 gap-1" aria-label={`Example week: ${describe(pattern)}`}>
      {[...pattern].map((cell, i) => (
        <li
          key={i}
          className={`flex h-9 items-center justify-center rounded-md ${
            cell === 'r'
              ? 'bg-route-600'
              : cell === 's'
                ? 'bg-route-300/70'
                : cell === 'c'
                  ? 'border-2 border-route-600 bg-white text-route-600'
                  : 'bg-paper-deep/70'
          }`}
        >
          {cell === 'r' && <span className="h-1 w-3/5 rounded-full bg-white/85" aria-hidden="true" />}
          {cell === 'c' && <Phone aria-hidden="true" className="size-3.5" strokeWidth={2.6} />}
          <span className="sr-only">{DAYS[i]}</span>
        </li>
      ))}
    </ol>
  )
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-paper py-20 sm:py-28">
      <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="services-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
            Rides built around your care
          </h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            From a single specialist visit to dialysis three times a week, we get you there and back with the same
            care every trip.
          </p>
          <figure className="mt-8 hidden overflow-hidden rounded-2xl shadow-card lg:block">
            <img
              src="/images/sonata-800.webp"
              srcSet="/images/sonata-800.webp 800w, /images/sonata-1400.webp 1400w"
              sizes="30vw"
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
              alt="A silver Hyundai Sonata sedan on a sunny city street"
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption className="bg-white px-4 py-3 text-sm text-ink-soft">
              Standard sedans, including Hyundai Sonatas and Elantras.
            </figcaption>
          </figure>
        </div>

        <div>
          <div className="overflow-hidden rounded-3xl border border-rule bg-white shadow-card">
            <div className="hidden items-end gap-8 border-b border-rule bg-paper/70 px-7 py-3 md:grid md:grid-cols-[1fr_17rem]">
              <p className="text-sm font-bold text-ink-soft">Service</p>
              <div>
                <p className="mb-1.5 text-xs font-bold text-ink-faint">Example week</p>
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-navy-900" aria-hidden="true">
                  {DAYS.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
            <ul className="divide-y divide-rule">
              {SERVICES.map(({ title, body, rhythm, pattern, icon: Icon }) => (
                <li
                  key={title}
                  className="grid gap-5 px-5 py-6 sm:px-7 md:grid-cols-[1fr_17rem] md:items-center md:gap-8"
                >
                  <div className="flex gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-route-300">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold leading-snug text-navy-900">{title}</h3>
                      <p className="mt-1.5 text-ink-soft">{body}</p>
                    </div>
                  </div>
                  <div className="pl-15 md:pl-0">
                    <div className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[0.7rem] font-bold text-ink-faint md:hidden" aria-hidden="true">
                      {DAYS.map((d) => (
                        <span key={d}>{d.slice(0, 1)}</span>
                      ))}
                    </div>
                    <WeekRow pattern={pattern} />
                    <p className="mt-2 text-sm font-bold text-navy-800">{rhythm}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-rule bg-paper/70 px-7 py-3 text-sm text-ink-soft" aria-hidden="true">
              <span className="inline-flex items-center gap-2">
                <span className="size-3 rounded-sm bg-route-600" /> Ride
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-3 rounded-sm border-2 border-route-600" /> Call MAS
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-3 rounded-sm bg-route-300/70" /> Arranged by a facility
              </span>
              <span>Weeks shown are examples, not a schedule.</span>
            </div>
          </div>

          <aside
            aria-label="About Medicaid coverage"
            className="mt-6 flex gap-4 rounded-2xl border border-route-100 bg-route-100/60 p-5 text-[0.98rem] text-navy-900"
          >
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-route-700" />
            <p>
              <strong>Not every trip is automatically covered by Medicaid.</strong> Medicaid transportation is
              arranged through MAS and is subject to eligibility, authorization, assignment, and availability. Call
              MAS at{' '}
              <a href={PHONES.mas.href} className="tabular font-bold text-route-700 underline">
                {PHONES.mas.display}
              </a>{' '}
              or our office at{' '}
              <a href={PHONES.main.href} className="tabular font-bold text-route-700 underline">
                {PHONES.main.display}
              </a>{' '}
              if you are unsure.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
