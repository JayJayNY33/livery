import { ExternalLink, MessageSquareQuote, Phone, Star } from 'lucide-react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MobileCallBar } from './components/MobileCallBar'
import { ReviewForm } from './components/ReviewForm'
import { REVIEWS } from './data/reviews'
import type { Review } from './data/reviews'
import { GOOGLE_REVIEW_URL, PHONES } from './data/site'

function Stars({ rating, size = 'size-5' }: { rating: number; size?: string }) {
  return (
    <span className="inline-flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={`${size} ${n <= rating ? 'fill-sun-500 text-sun-500' : 'text-rule-strong'}`}
          strokeWidth={1.6}
        />
      ))}
    </span>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <li className="flex flex-col rounded-2xl border border-rule bg-white p-6 shadow-card">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink">“{review.text}”</blockquote>
      <p className="mt-5 font-bold text-navy-900">
        {review.name}
        {review.context && <span className="font-normal text-ink-soft"> · {review.context}</span>}
      </p>
      {review.date && <p className="text-sm text-ink-faint">{review.date}</p>}
    </li>
  )
}

export default function ReviewsPage() {
  const average = REVIEWS.length ? REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length : 0

  return (
    <>
      <Header />
      <main id="main">
        <section aria-labelledby="reviews-title" className="on-navy relative overflow-hidden bg-navy-900 text-white">
          <div className="planner-rules-navy pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <h1 id="reviews-title" className="text-[clamp(2.4rem,5.5vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.03em]">
              What our clients say
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-route-100/90 sm:text-xl">
              Rode with Fast Track? Your words help other patients and families choose a ride they can trust.
            </p>
            {REVIEWS.length > 0 && (
              <p className="mt-6 flex items-center gap-3 text-lg">
                <Stars rating={Math.round(average)} size="size-6" />
                <span className="tabular font-bold">{average.toFixed(1)}</span>
                <span className="text-route-100/80">
                  from {REVIEWS.length} review{REVIEWS.length > 1 ? 's' : ''}
                </span>
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#write"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-route-600 px-6 py-4 text-lg font-bold text-white shadow-card transition-colors hover:bg-route-500"
              >
                <Star aria-hidden="true" className="size-5 fill-sun-500 text-sun-500" />
                Write a review
              </a>
              {GOOGLE_REVIEW_URL && (
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-4 text-lg font-bold text-white transition-colors hover:border-white/60 hover:bg-white/5"
                >
                  Review us on Google <ExternalLink aria-hidden="true" className="size-5" />
                </a>
              )}
            </div>
          </div>
        </section>

        <section aria-labelledby="list-title" className="relative bg-paper py-16 sm:py-20">
          <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="list-title" className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold leading-[1.08] text-navy-900">
              Client reviews
            </h2>
            {REVIEWS.length > 0 ? (
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {REVIEWS.map((r, i) => (
                  <ReviewCard key={i} review={r} />
                ))}
              </ul>
            ) : (
              <div className="mt-10 flex max-w-2xl gap-4 rounded-2xl border border-rule bg-white p-6 shadow-card">
                <MessageSquareQuote aria-hidden="true" className="mt-0.5 size-7 shrink-0 text-sun-600" />
                <div>
                  <p className="font-display text-xl font-semibold text-navy-900">Be one of our first reviewers</p>
                  <p className="mt-1.5 text-ink-soft">
                    Reviews appear here after clients share them and agree to have them posted. If you’ve ridden with
                    us, we would love to hear how it went.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="write" aria-label="Write a review" className="on-navy relative bg-navy-900 py-16 sm:py-20">
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
            <div className="min-w-0 text-white">
              <p className="font-display text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold leading-[1.08]">
                Thank you for riding with us
              </p>
              <p className="mt-5 max-w-md text-lg text-route-100/85">
                Good or bad, every review helps us take better care of the next client. Prefer to talk? Call our office.
              </p>
              <a
                href={PHONES.main.href}
                className="mt-6 inline-flex items-center gap-3 font-display text-2xl font-semibold text-white underline decoration-route-300/60 underline-offset-4"
              >
                <Phone aria-hidden="true" className="size-6" />
                <span className="tabular">{PHONES.main.display}</span>
              </a>
            </div>
            <div className="min-w-0">
              <ReviewForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
