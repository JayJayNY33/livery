import { Phone } from 'lucide-react'
import { PHONES } from '../data/site'

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
              <span className="block text-small text-route-100/80">MAS scheduling</span>
              <span className="tabular block font-display text-2xl font-semibold tracking-[-0.01em]">
                {PHONES.mas.display}
              </span>
            </span>
          </a>
        </div>

        <ol className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative pl-16 lg:pl-0">
              {i < STEPS.length - 1 && (
                <span className="absolute bottom-[-2.5rem] left-6 top-14 w-px bg-route-300/40 lg:hidden" aria-hidden="true" />
              )}
              <div className="absolute left-0 top-0 lg:static lg:mb-6 lg:flex lg:items-center lg:gap-4" aria-hidden="true">
                <span className="tabular flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-route-300 font-display text-xl font-bold text-white">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && <span className="hidden h-px flex-1 bg-route-300/40 lg:block" />}
              </div>
              <h3 className="pt-2.5 text-title font-semibold lg:pt-0">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 max-w-[34ch] text-route-100/85">{step.body}</p>
              {step.action && (
                <a
                  href={step.action.phone.href}
                  className="mt-3 inline-flex min-h-11 items-center gap-2 font-bold text-route-300 underline decoration-route-300/40 underline-offset-4 hover:text-white"
                >
                  {step.action.label}: <span className="tabular">{step.action.phone.display}</span>
                </a>
              )}
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-[52ch] text-small text-route-100/75">
          Provider selection and transportation are subject to MAS authorization, assignment, and availability. For
          regular appointments, contact MAS at least three (3) days ahead.
        </p>

      </div>
    </section>
  )
}
