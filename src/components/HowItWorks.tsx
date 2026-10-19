import { Phone } from 'lucide-react'
import { PHONES } from '../data/site'
import { RideCheck } from './RideCheck'

const STEPS = [
  {
    title: 'Arrange your transportation',
    body: 'Contact MAS to arrange an eligible Medicaid transportation trip.',
    action: { phone: PHONES.mas, label: 'Call MAS' },
  },
  {
    title: 'Request Fast Track',
    body: 'Ask whether Fast Track Car Service can be assigned as your preferred provider.',
    action: null,
  },
  {
    title: 'Confirm your ride',
    body: 'Contact our office to confirm the transportation arrangements, pickup instructions, and special requirements.',
    action: { phone: PHONES.main, label: 'Call our office' },
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="on-navy relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28"
    >
      <div className="planner-rules-navy pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 id="how-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05]">
              How it works
            </h2>
            <p className="mt-5 max-w-xl text-lg text-route-100/85">
              Medicaid rides on Long Island are scheduled through Medical Answering Services (MAS). Here is how to
              get Fast Track as your provider.
            </p>
          </div>
          <a
            href={PHONES.mas.href}
            className="group inline-flex items-center gap-4 self-start rounded-2xl border border-white/15 bg-white/5 px-5 py-4 transition-colors hover:border-route-300/60 hover:bg-white/10 lg:self-end"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-route-600">
              <Phone aria-hidden="true" className="size-5" />
            </span>
            <span>
              <span className="block text-sm text-route-100/80">MAS scheduling</span>
              <span className="tabular block font-display text-2xl font-semibold tracking-[-0.01em]">
                {PHONES.mas.display}
              </span>
            </span>
          </a>
        </div>

        <ol className="relative mt-14 grid gap-4 lg:grid-cols-3 lg:gap-6">
          <span
            className="absolute left-[calc(16.66%)] right-[calc(16.66%)] top-[2.15rem] hidden h-px bg-gradient-to-r from-route-300/0 via-route-300/50 to-route-300/0 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative flex flex-col rounded-2xl border border-white/10 bg-navy-800/70 p-6 sm:p-7">
              <span
                className="tabular relative z-10 mb-6 inline-flex size-11 items-center justify-center self-start rounded-full bg-white font-display text-lg font-bold text-navy-900 lg:self-center"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="text-xl font-semibold lg:text-center">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-route-100/85 lg:text-center">{step.body}</p>
              {step.action && (
                <a
                  href={step.action.phone.href}
                  className="mt-5 inline-flex items-center gap-2 self-start font-bold text-route-300 underline decoration-route-300/40 underline-offset-4 hover:text-white lg:self-center"
                >
                  {step.action.label}: <span className="tabular">{step.action.phone.display}</span>
                </a>
              )}
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-3xl text-[0.95rem] text-route-100/75">
          Provider selection and transportation are subject to MAS authorization, assignment, and availability. For
          regular appointments, contact MAS at least three (3) days ahead.
        </p>

        <div className="mt-16">
          <RideCheck />
        </div>
      </div>
    </section>
  )
}
