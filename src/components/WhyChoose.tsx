import { CalendarCheck2, MessagesSquare, ShieldCheck, Clock3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const REASONS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Dependable transportation',
    body: 'Rides planned ahead with our dispatch team, to your appointment and home again.',
    icon: Clock3,
  },
  {
    title: 'Patient dignity and respect',
    body: 'Every passenger is treated with dignity, respect, patience, and professionalism.',
    icon: ShieldCheck,
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
    <section id="about" aria-labelledby="why-title" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h2 id="why-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
              Why choose Fast Track?
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
                We work with patients, families, caregivers, and healthcare coordinators. We treat every passenger
                with patience and respect, because for us, this work is about people, not just destinations.
              </p>
            </div>
          </div>
          <blockquote className="relative rounded-2xl bg-navy-900 lg:mt-24 px-7 py-8 text-white sm:px-9">
            <p className="font-display text-[clamp(1.6rem,3vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
              At Fast Track, you are more than just another ride.
            </p>
            <footer className="mt-4 text-[0.95rem] text-route-100/80">
              After dialysis or a long appointment, we make every reasonable effort to get you home sooner.
            </footer>
          </blockquote>
        </div>

        <div className="mt-14">
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map(({ title, body, icon: Icon }) => (
              <li key={title} className="flex gap-4 border-t border-rule py-6">
                <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-brand-red" strokeWidth={1.9} />
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
