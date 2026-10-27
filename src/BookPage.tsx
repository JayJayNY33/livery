import { CalendarClock, Car, FileCheck2, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BookingForm } from './components/BookingForm'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MobileCallBar } from './components/MobileCallBar'
import { PHONES } from './data/site'

const BEFORE_YOU_BOOK: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FileCheck2,
    title: 'Medicaid trips go through MAS first',
    body: `Call MAS at ${PHONES.mas.display} and ask for Fast Track as your preferred provider.`,
  },
  { icon: CalendarClock, title: 'Book at least 3 days ahead', body: 'Urgent or last-minute rides can’t be guaranteed.' },
  { icon: Car, title: 'Standard sedans', body: 'Not wheelchair accessible. Folding wheelchairs and walkers may fit in the trunk.' },
]

export default function BookPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section aria-labelledby="book-title" className="on-navy relative overflow-hidden bg-navy-900 text-white">
          <div className="planner-rules-navy pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <h1 id="book-title" className="text-[clamp(2.4rem,5.5vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.03em]">
              Book a Trip
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-route-100/90 sm:text-xl">
              Tell us where and when, and our office will call you to confirm your ride. Prefer to talk? Call{' '}
              <a href={PHONES.main.href} className="tabular font-bold text-white underline decoration-route-300/60">
                {PHONES.main.display}
              </a>
              .
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {BEFORE_YOU_BOOK.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-3 rounded-2xl border border-white/12 bg-white/[0.04] p-5">
                  <Icon aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-brand-red-light" strokeWidth={1.9} />
                  <div>
                    <p className="font-bold text-white">{title}</p>
                    <p className="mt-1 text-[0.95rem] text-route-100/80">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-label="Trip request form" className="relative bg-paper py-14 sm:py-20">
          <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_20rem] lg:gap-12 lg:px-8">
            <div className="min-w-0">
              <BookingForm />
            </div>
            <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-rule bg-white p-6 shadow-card">
                <p className="font-display text-xl font-semibold text-navy-900">Need help booking?</p>
                <p className="mt-1.5 text-ink-soft">Families and caregivers can book for a patient. Our office is happy to help.</p>
                <a
                  href={PHONES.main.href}
                  className="mt-4 flex items-center justify-center gap-2.5 rounded-xl bg-route-600 px-5 py-3.5 font-bold text-white hover:bg-route-500"
                >
                  <Phone aria-hidden="true" className="size-5" />
                  <span className="tabular">{PHONES.main.display}</span>
                </a>
                <a href={PHONES.secondary.href} className="tabular mt-3 block text-center font-bold text-route-700 underline">
                  or {PHONES.secondary.display}
                </a>
              </div>
            </aside>
          </div>
        </section>

        <Contact showBooking={false} />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
