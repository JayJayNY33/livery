import { Building2, CalendarSync, Droplet, FileCheck2, Info, Stethoscope, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PHONES } from '../data/site'

type Service = {
  title: string
  body: string
  icon: LucideIcon
}

const SERVICES: Service[] = [
  {
    title: 'Medical Appointments',
    body: 'Transportation to primary care physicians, specialists, hospitals, and eligible outpatient appointments.',
    icon: Stethoscope,
  },
  {
    title: 'Dialysis Transportation',
    body: 'Dependable transportation for patients attending regularly scheduled dialysis treatments.',
    icon: Droplet,
  },
  {
    title: 'Physical Therapy & Rehabilitation',
    body: 'Transportation to eligible physical therapy and rehabilitation appointments.',
    icon: Activity,
  },
  {
    title: 'Recurring Medical Transportation',
    body: 'Assistance coordinating recurring transportation arrangements for ongoing treatments.',
    icon: CalendarSync,
  },
  {
    title: 'Medicaid Transportation',
    body: 'Transportation through eligible Medicaid arrangements coordinated with Medical Answering Services (MAS).',
    icon: FileCheck2,
  },
  {
    title: 'Healthcare Facility Transportation',
    body: 'Transportation solutions for medical offices, rehabilitation centers, nursing homes, and healthcare coordinators.',
    icon: Building2,
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-paper py-20 sm:py-24">
      <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="services-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
          Our Services
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          From a single specialist visit to dialysis three times a week, we get you there and back with the same care
          every trip.
        </p>

        <div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ title, body, icon: Icon }) => (
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

          <aside
            aria-label="About Medicaid coverage"
            className="mt-6 flex gap-4 rounded-2xl border border-route-100 bg-route-100/60 p-5 text-body text-navy-900"
          >
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-route-700" />
            <p className="max-w-[52ch]">
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
