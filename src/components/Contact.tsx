import { ArrowRight, CalendarPlus, CalendarRange, Mail, Phone, PhoneCall, Siren } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BOOK_HREF, EMAIL, EMAIL_HREF, EMERGENCY, OWNER_LABEL, OWNER_PHONE, PHONES } from '../data/site'

const LINES: { label: string; display: string; href: string; note: string; icon: LucideIcon; primary?: boolean }[] = [
  { ...PHONES.main, note: 'Rides, scheduling, and questions', icon: PhoneCall, primary: true },
  { ...PHONES.secondary, note: 'If the main line is busy', icon: Phone },
  ...(OWNER_PHONE ? [{ ...OWNER_PHONE, label: OWNER_LABEL, note: 'For problems with a ride in progress', icon: Siren }] : []),
  { ...PHONES.mas, note: 'Arrange Medicaid trips and ask for Fast Track', icon: CalendarRange },
  { label: 'Email', display: EMAIL, href: EMAIL_HREF, note: 'For non-urgent questions', icon: Mail },
]

/** Contact numbers in columns, a prominent 911 notice, and (except on the booking page) a link to book online. */
export function Contact({ showBooking = true }: { showBooking?: boolean }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="on-navy relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24">
      <div className="planner-rules-navy pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="contact-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05]">
          Contact us
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-route-100/85">
          Call our office to ask about a ride, confirm a pickup, or set up recurring transportation.
        </p>

        <div
          role="note"
          aria-label="Medical emergency"
          className="mt-10 flex flex-col gap-5 rounded-2xl bg-brand-red px-6 py-6 shadow-lift sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div className="flex items-start gap-4">
            <Siren aria-hidden="true" className="mt-1 size-9 shrink-0 text-white" strokeWidth={2} />
            <div>
              <p className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight">
                Medical emergency? Call 911.
              </p>
              <p className="mt-1 text-lg font-semibold text-white/90">Fast Track is not an ambulance service.</p>
            </div>
          </div>
          <a
            href={EMERGENCY.href}
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-4 text-xl font-bold text-brand-red transition-colors hover:bg-white/90"
          >
            <Phone aria-hidden="true" className="size-6" strokeWidth={2.4} /> Call 911
          </a>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LINES.map(({ label, display, href, note, icon: Icon, primary }) => (
            <li key={label} className="min-w-0">
              <a
                href={href}
                className={`flex h-full flex-col gap-3 whitespace-normal rounded-2xl p-6 transition-colors duration-200 ${
                  primary
                    ? 'bg-route-600 hover:bg-route-500'
                    : 'border border-white/12 bg-white/[0.04] hover:border-route-300/50 hover:bg-white/[0.08]'
                }`}
              >
                <span
                  className={`inline-flex size-11 items-center justify-center rounded-full ${
                    primary ? 'bg-white text-route-700' : 'bg-navy-800 text-brand-red-light'
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="font-bold">{label}</span>
                <span
                  className={`block font-display font-semibold tracking-[-0.01em] ${
                    label === 'Email' ? 'break-words text-lg' : 'tabular whitespace-nowrap text-2xl'
                  }`}
                >
                  {label === 'Email' ? (
                    <>
                      {display.split('@')[0]}
                      <wbr />@{display.split('@')[1]}
                    </>
                  ) : (
                    display
                  )}
                </span>
                <span className={`text-sm ${primary ? 'text-white/85' : 'text-route-100/75'}`}>{note}</span>
              </a>
            </li>
          ))}
        </ul>

        {showBooking && (
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg">
              <span className="font-bold">Prefer to book online?</span>{' '}
              <span className="text-route-100/85">Send us your trip details and we’ll call to confirm.</span>
            </p>
            <a
              href={BOOK_HREF}
              className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-brand-red px-6 py-3.5 text-lg font-bold text-white transition-colors hover:bg-brand-red-dark"
            >
              <CalendarPlus aria-hidden="true" className="size-5" /> Book a Trip
              <ArrowRight aria-hidden="true" className="size-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
