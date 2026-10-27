import { useMemo, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { AlertCircle, AlertTriangle, CalendarPlus, CheckCircle2, Mail } from 'lucide-react'
import { EMPTY_TRIP, LABELS, sendTrip, tripMailto, validateTrip } from '../lib/booking'
import type { TripErrors, TripRequest } from '../lib/booking'
import { EMAIL, PHONES } from '../data/site'

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'mail'; href: string } | { kind: 'error'; href: string }

const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
const daysUntil = (iso: string) => {
  if (!iso) return Infinity
  const [y, m, d] = iso.split('-').map(Number)
  const start = new Date()
  start.setHours(0, 0, 0, 0)
  return Math.round((new Date(y, m - 1, d).getTime() - start.getTime()) / 86_400_000)
}

export function BookingForm() {
  const [trip, setTrip] = useState<TripRequest>(EMPTY_TRIP)
  const [errors, setErrors] = useState<TripErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const statusRef = useRef<HTMLDivElement>(null)
  const minDate = useMemo(today, [])

  const set = <K extends keyof TripRequest>(key: K, value: TripRequest[K]) => {
    const next = { ...trip, [key]: value }
    setTrip(next)
    if (submitted) setErrors(validateTrip(next))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validateTrip(trip)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`trip-${first}`)?.focus()
      return
    }
    setStatus({ kind: 'sending' })
    const result = await sendTrip(trip)
    const href = tripMailto(trip, EMAIL)
    if (result.status === 'sent') {
      setStatus({ kind: 'sent' })
      setTrip(EMPTY_TRIP)
      setSubmitted(false)
    } else if (result.status === 'not-configured') {
      setStatus({ kind: 'mail', href })
      window.location.href = href
    } else setStatus({ kind: 'error', href })
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  const soon = daysUntil(trip.date) < 3

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-3xl bg-white p-6 text-ink shadow-lift sm:p-8 lg:p-10" aria-label="Ride request">
      <Group title="Who is riding">
        <Field id="name" label="Patient or contact name" required error={errors.name}>
          <input id="trip-name" autoComplete="name" value={trip.name} onChange={(e) => set('name', e.target.value)} {...aria('name', errors)} className={input(errors.name)} />
        </Field>
        <Field id="phone" label="Phone number" required error={errors.phone}>
          <input id="trip-phone" type="tel" inputMode="tel" autoComplete="tel" value={trip.phone} onChange={(e) => set('phone', e.target.value)} {...aria('phone', errors)} className={input(errors.phone)} />
        </Field>
        <Field id="email" label="Email" hint="Optional" error={errors.email} wide>
          <input id="trip-email" type="email" autoComplete="email" value={trip.email} onChange={(e) => set('email', e.target.value)} {...aria('email', errors)} className={input(errors.email)} />
        </Field>
      </Group>

      <Group title="The trip">
        <Field id="pickup" label="Pickup address" required error={errors.pickup} wide>
          <input id="trip-pickup" autoComplete="street-address" value={trip.pickup} onChange={(e) => set('pickup', e.target.value)} {...aria('pickup', errors)} className={input(errors.pickup)} />
        </Field>
        <Field id="destination" label="Destination (doctor, hospital, or facility)" required error={errors.destination} wide>
          <input id="trip-destination" value={trip.destination} onChange={(e) => set('destination', e.target.value)} {...aria('destination', errors)} className={input(errors.destination)} />
        </Field>
        <Field id="date" label="Trip date" required error={errors.date}>
          <input id="trip-date" type="date" min={minDate} value={trip.date} onChange={(e) => set('date', e.target.value)} {...aria('date', errors)} className={input(errors.date)} />
        </Field>
        <Field id="time" label="Pickup or appointment time" required error={errors.time}>
          <input id="trip-time" type="time" value={trip.time} onChange={(e) => set('time', e.target.value)} {...aria('time', errors)} className={input(errors.time)} />
        </Field>
        {trip.date && soon && (
          <Notice wide>
            Regular rides should be arranged at least three days ahead. For a sooner ride, please also call us at{' '}
            <a href={PHONES.main.href} className="tabular font-bold underline">
              {PHONES.main.display}
            </a>
            . We make every reasonable effort, but cannot guarantee a last-minute ride.
          </Notice>
        )}
        <Field id="tripType" label="Trip type" required error={errors.tripType}>
          <select id="trip-tripType" value={trip.tripType} onChange={(e) => set('tripType', e.target.value as TripRequest['tripType'])} {...aria('tripType', errors)} className={input(errors.tripType)}>
            <option value="">Choose one</option>
            {Object.entries(LABELS.tripType).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Field>
        {trip.tripType && trip.tripType !== 'one-way' ? (
          <Field id="returnTime" label="Return pickup time" hint="Or leave blank and call when ready">
            <input id="trip-returnTime" type="time" value={trip.returnTime} onChange={(e) => set('returnTime', e.target.value)} className={input()} />
          </Field>
        ) : (
          <span className="hidden sm:block" />
        )}
      </Group>

      <Group title="Passenger needs">
        <Field id="passengers" label="Additional passengers">
          <select id="trip-passengers" value={trip.passengers} onChange={(e) => set('passengers', e.target.value)} className={input()}>
            {Object.entries(LABELS.passengers).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Field>
        <Field id="carSeat" label="Car seat or booster seat">
          <select id="trip-carSeat" value={trip.carSeat} onChange={(e) => set('carSeat', e.target.value as TripRequest['carSeat'])} className={input()}>
            {Object.entries(LABELS.carSeat).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Field>
        {trip.carSeat === 'need-one' && (
          <Notice wide>Thanks for letting us know in advance. We’ll schedule your ride with a car seat from Fast Track.</Notice>
        )}
        <Field id="mobility" label="How does the passenger get around?" required error={errors.mobility} wide>
          <select id="trip-mobility" value={trip.mobility} onChange={(e) => set('mobility', e.target.value as TripRequest['mobility'])} {...aria('mobility', errors)} className={input(errors.mobility)}>
            <option value="">Choose one</option>
            {Object.entries(LABELS.mobility).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Field>
        {trip.mobility === 'folding-wheelchair' && (
          <Notice wide>We may be able to carry a folding wheelchair or walker if it fits securely in the trunk. We’ll confirm with you.</Notice>
        )}
        {trip.mobility === 'stays-in-wheelchair' && (
          <Notice wide tone="alert">
            Our vehicles are standard sedans and are not wheelchair accessible. Passengers who must stay seated in a
            wheelchair should request wheelchair-accessible transportation through MAS at{' '}
            <a href={PHONES.mas.href} className="tabular font-bold underline">
              {PHONES.mas.display}
            </a>
            .
          </Notice>
        )}
        <Field id="medicaid" label="Is this a Medicaid trip?" required error={errors.medicaid} wide>
          <select id="trip-medicaid" value={trip.medicaid} onChange={(e) => set('medicaid', e.target.value as TripRequest['medicaid'])} {...aria('medicaid', errors)} className={input(errors.medicaid)}>
            <option value="">Choose one</option>
            {Object.entries(LABELS.medicaid).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Field>
        {(trip.medicaid === 'yes' || trip.medicaid === 'not-sure') && (
          <Notice wide>
            Medicaid trips must first be arranged with MAS at{' '}
            <a href={PHONES.mas.href} className="tabular font-bold underline">
              {PHONES.mas.display}
            </a>
            . Ask for Fast Track as your preferred provider, then send this request so we can confirm the details.
          </Notice>
        )}
        <Field id="notes" label="Anything else we should know?" hint="Pickup instructions, recurring days, companion riding" wide>
          <textarea id="trip-notes" rows={4} value={trip.notes} onChange={(e) => set('notes', e.target.value)} className={`${input()} min-h-28 resize-y`} />
        </Field>
      </Group>

      <p className="mt-8 rounded-2xl bg-paper-deep px-5 py-4 text-[0.98rem] text-navy-900">
        <strong>This is a request, not a confirmed booking.</strong> Your ride is set once our office calls you to
        confirm. Please don’t include detailed medical information.
      </p>

      <button
        type="submit"
        disabled={status.kind === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-red px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-red-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        <CalendarPlus aria-hidden="true" className="size-5" />
        {status.kind === 'sending' ? 'Sending…' : 'Send ride request'}
      </button>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status.kind === 'sent' && (
          <Result icon="ok" title="Thank you. Your ride request was sent.">
            Our office will call you to confirm. If your ride is soon, please call {PHONES.main.display}.
          </Result>
        )}
        {status.kind === 'mail' && (
          <Result icon="ok" title="Your email app should be opening now.">
            Your ride request is filled in and addressed to our office. Press send there to deliver it. If nothing
            opened,{' '}
            <a href={status.href} className="font-bold text-route-700 underline">
              try again
            </a>{' '}
            or call{' '}
            <a href={PHONES.main.href} className="tabular font-bold text-route-700 underline">
              {PHONES.main.display}
            </a>
            .
            <a href={status.href} className="mt-3 flex w-fit items-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 font-bold text-white hover:bg-navy-800">
              <Mail aria-hidden="true" className="size-4" /> Email {EMAIL}
            </a>
          </Result>
        )}
        {status.kind === 'error' && (
          <Result icon="error" title="Your ride request could not be sent.">
            Please call{' '}
            <a href={PHONES.main.href} className="tabular font-bold underline">
              {PHONES.main.display}
            </a>{' '}
            or{' '}
            <a href={status.href} className="font-bold underline">
              send it by email
            </a>
            .
          </Result>
        )}
      </div>
    </form>
  )
}

const aria = (key: keyof TripRequest, errors: TripErrors) => ({
  'aria-invalid': !!errors[key],
  'aria-describedby': errors[key] ? `trip-${key}-error` : undefined,
})

const input = (error?: string) =>
  `w-full rounded-xl border bg-paper px-4 py-3 text-[1.02rem] text-ink transition-colors focus:bg-white focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-route-500 ${
    error ? 'border-alert' : 'border-rule-strong hover:border-route-500'
  }`

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="mt-8 first:mt-0">
      <legend className="mb-4 font-display text-xl font-semibold text-navy-900">{title}</legend>
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  )
}

function Field({ id, label, hint, required, error, wide, children }: { id: string; label: string; hint?: string; required?: boolean; error?: string; wide?: boolean; children: ReactNode }) {
  return (
    <div className={wide ? 'sm:col-span-2' : undefined}>
      <label htmlFor={`trip-${id}`} className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-2 font-bold text-navy-900">
        <span>
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-brand-red">
              *
            </span>
          )}
        </span>
        {hint && <span className="text-sm font-normal text-ink-faint">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`trip-${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[0.95rem] font-bold text-alert">
          <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

function Notice({ children, wide, tone = 'info' }: { children: ReactNode; wide?: boolean; tone?: 'info' | 'alert' }) {
  return (
    <div
      className={`flex gap-3 rounded-xl p-4 text-[0.98rem] ${wide ? 'sm:col-span-2' : ''} ${
        tone === 'alert' ? 'border border-[#f3d4bf] bg-alert-bg text-[#5b2410]' : 'bg-route-100/60 text-navy-900'
      }`}
    >
      <AlertTriangle aria-hidden="true" className={`mt-0.5 size-5 shrink-0 ${tone === 'alert' ? 'text-alert' : 'text-route-700'}`} />
      <p>{children}</p>
    </div>
  )
}

function Result({ icon, title, children }: { icon: 'ok' | 'error'; title: string; children: ReactNode }) {
  const Icon = icon === 'ok' ? CheckCircle2 : AlertCircle
  return (
    <div className={`mt-5 flex gap-3 rounded-2xl p-5 ${icon === 'ok' ? 'bg-route-100/70 text-navy-900' : 'border border-[#f3d4bf] bg-alert-bg text-[#5b2410]'}`}>
      <Icon aria-hidden="true" className={`mt-0.5 size-5 shrink-0 ${icon === 'ok' ? 'text-route-700' : 'text-alert'}`} />
      <div>
        <p className="font-display text-lg font-semibold">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}
