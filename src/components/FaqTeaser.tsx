import { ArrowRight, ChevronRight } from 'lucide-react'
import { FAQS } from '../data/faqs'
import { PHONES } from '../data/site'

/** The questions people ask first; each opens its full answer on the FAQ page. */
const POPULAR = [5, 13, 11, 12]

export function FaqTeaser() {
  const questions = POPULAR.map((n) => FAQS.find((f) => f.n === n)!).filter(Boolean)

  return (
    <section id="faq" aria-labelledby="faq-teaser-title" className="relative bg-paper py-20 sm:py-28">
      <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8">
        <div>
          <h2 id="faq-teaser-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
            Common questions
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Medicaid rides, scheduling, cancellations, wheelchairs and car seats. Find every answer on our FAQ page.
          </p>
          <a
            href="/faq"
            className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-navy-900 px-6 py-4 text-lg font-bold text-white shadow-card transition-colors hover:bg-navy-800"
          >
            See all {FAQS.length} questions
            <ArrowRight aria-hidden="true" className="size-5" />
          </a>
          <p className="mt-6 text-[0.98rem] text-ink-soft">
            Still have a question? Call{' '}
            <a href={PHONES.main.href} className="tabular font-bold text-route-700 underline">
              {PHONES.main.display}
            </a>
            .
          </p>
        </div>

        <ul className="grid content-start gap-3">
          {questions.map((faq) => (
            <li key={faq.n}>
              <a
                href={`/faq#faq-q-${faq.n}`}
                className="group flex items-center gap-4 rounded-2xl border border-rule bg-white px-5 py-5 shadow-card transition-[border-color,box-shadow] duration-200 hover:border-route-300 hover:shadow-lift sm:px-6"
              >
                <span className="tabular w-7 shrink-0 font-display text-base font-bold text-route-600" aria-hidden="true">
                  {faq.n}.
                </span>
                <span className="flex-1 font-display text-[1.08rem] font-semibold leading-snug text-navy-900 sm:text-[1.15rem]">
                  {faq.question}
                </span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-route-600 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
