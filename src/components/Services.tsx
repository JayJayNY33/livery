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
    <section id="services" aria-labelledby="services-title" className="relative bg-paper py-20 sm:py-28">
      <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="services-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
            Our Services
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
          <ul className="grid gap-4 sm:grid-cols-2">
            {SERVICES.map(({ title, body, icon: Icon }) => (
              <li key={title} className="flex flex-col rounded-2xl border border-rule bg-white p-6 shadow-card">
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-navy-900 text-route-300">
                  <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
                </span>
                <h3 className="text-xl font-semibold leading-snug text-navy-900">{title}</h3>
                <p className="mt-2 text-ink-soft">{body}</p>
              </li>
            ))}
          </ul>

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
