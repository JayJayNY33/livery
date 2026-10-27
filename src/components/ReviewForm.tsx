import { useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { AlertCircle, Mail, Star } from 'lucide-react'
import { EMAIL } from '../data/site'

const RATING_WORDS = ['', 'Poor', 'Fair', 'Good', 'Very good', 'Excellent']

/**
 * Collects a review and hands it to the visitor's email app, addressed to the office.
 * Nothing is sent from the page itself, and the copy says so.
 */
export function ReviewForm() {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [text, setText] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [mailto, setMailto] = useState<string | null>(null)
  const statusRef = useRef<HTMLDivElement>(null)
  const id = useId()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found: Record<string, string> = {}
    if (!name.trim()) found.name = 'Please enter your first name or initials.'
    if (!rating) found.rating = 'Please choose a star rating.'
    if (text.trim().length < 10) found.text = 'Please write a few words about your ride.'
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`${id}-${first}`)?.focus()
      return
    }
    const body = [
      `Rating: ${rating} out of 5 (${RATING_WORDS[rating]})`,
      '',
      text.trim(),
      '',
      `Name to show: ${name.trim()}`,
      consent
        ? 'I agree that Fast Track may post this review and my name as written above on its website.'
        : 'Please do not post this review on the website.',
    ].join('\n')
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent('My review of Fast Track')}&body=${encodeURIComponent(body)}`
    setMailto(href)
    window.location.href = href
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  const field =
    'w-full rounded-xl border bg-paper px-4 py-3 text-[1.02rem] text-ink transition-colors focus:bg-white focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-route-500'

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-3xl bg-white p-6 text-ink shadow-lift sm:p-8" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="text-2xl font-bold text-navy-900">
        Write a review
      </h2>
      <p className="mt-1.5 text-[0.98rem] text-ink-soft">
        Tell us about your ride. When you press send, your email app opens with your review filled in, addressed to
        our office.
      </p>

      <fieldset className="mt-6">
        <legend className="mb-2 font-bold text-navy-900">
          Your rating<span aria-hidden="true" className="ml-0.5 text-route-600">*</span>
        </legend>
        <div className="flex flex-wrap items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <label key={n} className="cursor-pointer rounded-lg p-1 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-route-500">
              <input
                id={n === 1 ? `${id}-rating` : undefined}
                type="radio"
                name={`${id}-stars`}
                value={n}
                checked={rating === n}
                onChange={() => setRating(n)}
                className="sr-only"
              />
              <Star
                aria-hidden="true"
                className={`size-10 transition-colors ${n <= rating ? 'fill-sun-500 text-sun-500' : 'text-rule-strong'}`}
                strokeWidth={1.6}
              />
              <span className="sr-only">
                {n} star{n > 1 ? 's' : ''}, {RATING_WORDS[n]}
              </span>
            </label>
          ))}
          <span className="ml-2 text-[0.98rem] font-bold text-navy-900" aria-hidden="true">
            {RATING_WORDS[rating]}
          </span>
        </div>
        {errors.rating && <ErrorText id={`${id}-rating-error`}>{errors.rating}</ErrorText>}
      </fieldset>

      <div className="mt-5">
        <label htmlFor={`${id}-name`} className="mb-1.5 block font-bold text-navy-900">
          First name or initials<span aria-hidden="true" className="ml-0.5 text-route-600">*</span>
        </label>
        <input
          id={`${id}-name`}
          value={name}
          autoComplete="given-name"
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          className={`${field} ${errors.name ? 'border-alert' : 'border-rule-strong'}`}
        />
        {errors.name && <ErrorText id={`${id}-name-error`}>{errors.name}</ErrorText>}
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-text`} className="mb-1.5 block font-bold text-navy-900">
          Your review<span aria-hidden="true" className="ml-0.5 text-route-600">*</span>
        </label>
        <textarea
          id={`${id}-text`}
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-invalid={!!errors.text}
          aria-describedby={errors.text ? `${id}-text-error` : undefined}
          className={`${field} min-h-32 resize-y ${errors.text ? 'border-alert' : 'border-rule-strong'}`}
        />
        {errors.text && <ErrorText id={`${id}-text-error`}>{errors.text}</ErrorText>}
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-[0.98rem] text-ink-soft">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 size-5 shrink-0 accent-route-600"
        />
        Fast Track may post my review and the name above on this website.
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-route-600 px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-route-700 sm:w-auto"
      >
        <Mail aria-hidden="true" className="size-5" /> Send my review
      </button>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {mailto && (
          <p className="mt-5 rounded-2xl bg-paper-deep p-5 text-navy-900">
            <strong>Your email app should be opening now.</strong> Press send there to deliver your review. If nothing
            opened,{' '}
            <a href={mailto} className="font-bold text-route-700 underline">
              try again
            </a>{' '}
            or email us at{' '}
            <a href={`mailto:${EMAIL}`} className="break-all font-bold text-route-700 underline">
              {EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}

function ErrorText({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-[0.95rem] font-bold text-alert">
      <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
      {children}
    </p>
  )
}
