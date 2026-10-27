import { Mail, Phone, PhoneCall, CalendarRange, Siren } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { EMAIL, EMAIL_HREF, OWNER_LABEL, OWNER_PHONE, PHONES } from '../data/site'
import { ContactForm } from './ContactForm'

const LINES: { label: string; display: string; href: string; note: string; icon: LucideIcon; primary?: boolean }[] = [
  { ...PHONES.main, note: 'Rides, scheduling, and questions', icon: PhoneCall, primary: true },
  { ...PHONES.secondary, note: 'If the main line is busy', icon: Phone },
  ...(OWNER_PHONE ? [{ ...OWNER_PHONE, label: OWNER_LABEL, note: 'For problems with a ride in progress', icon: Siren }] : []),
  { ...PHONES.mas, note: 'Arrange Medicaid trips and ask for Fast Track', icon: CalendarRange },
  { label: 'Email', display: EMAIL, href: EMAIL_HREF, note: 'For non-urgent questions', icon: Mail },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-navy relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28"
    >
      <div className="planner-rules-navy pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <h2 id="contact-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05]">
            Talk to a real person
          </h2>
          <p className="mt-5 max-w-md text-lg text-route-100/85">
            Call our office to ask about a ride, confirm a pickup, or set up recurring transportation.
          </p>

          <ul className="mt-10 grid gap-3">
            {LINES.map(({ label, display, href, note, icon: Icon, primary }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`group flex items-center gap-4 whitespace-normal rounded-2xl px-5 py-4 transition-colors duration-200 ${
                    primary
                      ? 'bg-route-600 hover:bg-route-500'
                      : 'border border-white/12 bg-white/[0.04] hover:border-route-300/50 hover:bg-white/[0.08]'
                  }`}
                >
                  <span
                    className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full ${
                      primary ? 'bg-white text-route-700' : 'bg-navy-800 text-route-300'
                    }`}
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block text-sm ${primary ? 'text-white/85' : 'text-route-100/75'}`}>
                      {label} · {note}
                    </span>
                    <span
                      className={`block break-words font-display font-semibold tracking-[-0.01em] ${
                        label === 'Email' ? 'break-all text-lg sm:text-xl' : 'tabular whitespace-nowrap text-2xl sm:text-[1.7rem]'
                      }`}
                    >
                      {display}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-2xl border border-white/12 px-5 py-4 text-[0.95rem] text-route-100/85">
            <strong className="text-white">Medical emergency?</strong> Call{' '}
            <a href="tel:911" className="font-bold text-white underline">
              911
            </a>
            . Fast Track is not an ambulance service.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
