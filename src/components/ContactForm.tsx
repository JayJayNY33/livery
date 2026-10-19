import { useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { AlertCircle, CheckCircle2, Mail, Send } from 'lucide-react'
import { mailtoFor, submitContact, validate } from '../lib/contact'
import type { ContactMessage } from '../lib/contact'
import { EMAIL, PHONES } from '../data/site'

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'not-configured'; mailto: string }
  | { kind: 'error'; message: string; mailto: string }

const EMPTY: ContactMessage = { name: '', phone: '', email: '', message: '' }

export function ContactForm() {
  const [data, setData] = useState<ContactMessage>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactMessage, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof ContactMessage, boolean>>>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const statusRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const update = (field: keyof ContactMessage, value: string) => {
    const next = { ...data, [field]: value }
    setData(next)
    if (touched[field]) setErrors((e) => ({ ...e, [field]: validate(next)[field] }))
  }
  const blur = (field: keyof ContactMessage) => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors((e) => ({ ...e, [field]: validate(data)[field] }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validate(data)
    setErrors(found)
    setTouched({ name: true, phone: true, email: true, message: true })
    const first = (Object.keys(found) as (keyof ContactMessage)[])[0]
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    setStatus({ kind: 'sending' })
    const result = await submitContact(data)
    const mailto = mailtoFor(data, EMAIL)
    if (result.status === 'sent') {
      setStatus({ kind: 'sent' })
      setData(EMPTY)
      setTouched({})
    } else if (result.status === 'not-configured') setStatus({ kind: 'not-configured', mailto })
    else setStatus({ kind: 'error', message: result.message, mailto })
    requestAnimationFrame(() => statusRef.current?.focus())
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-labelledby="form-title"
      className="min-w-0 rounded-3xl bg-white p-6 text-ink shadow-lift sm:p-8"
    >
      <h3 id="form-title" className="text-2xl font-bold text-navy-900">
        Send us a message
      </h3>
      <p className="mt-1.5 text-[0.98rem] text-ink-soft">
        For the fastest answer, please call. Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">required</span> are required.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          autoComplete="name"
          value={data.name}
          error={errors.name}
          onChange={(v) => update('name', v)}
          onBlur={() => blur('name')}
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          value={data.phone}
          error={errors.phone}
          onChange={(v) => update('phone', v)}
          onBlur={() => blur('phone')}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          hint="Optional"
          value={data.email}
          error={errors.email}
          onChange={(v) => update('email', v)}
          onBlur={() => blur('email')}
          className="sm:col-span-2"
        />
        <Field
          label="Message"
          name="message"
          multiline
          required
          hint="Please don’t include detailed medical information."
          value={data.message}
          error={errors.message}
          onChange={(v) => update('message', v)}
          onBlur={() => blur('message')}
          className="sm:col-span-2"
        />
      </div>

      <button
        type="submit"
        disabled={status.kind === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-route-600 px-6 py-4 text-lg font-bold text-white transition-colors duration-200 hover:bg-route-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        <Send aria-hidden="true" className="size-5" />
        {status.kind === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status.kind === 'sent' && (
          <StatusBox tone="success" title="Thank you. Your message was sent.">
            Our office will get back to you. If your ride is soon, please call {PHONES.main.display}.
          </StatusBox>
        )}
        {status.kind === 'not-configured' && (
          <StatusBox tone="info" title="Your message has not been sent yet.">
            Online messaging isn’t connected yet. Please call{' '}
            <a href={PHONES.main.href} className="tabular font-bold underline">
              {PHONES.main.display}
            </a>
            , or open your email app with your message filled in:
            <a
              href={status.mailto}
              className="mt-3 flex w-fit items-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 font-bold text-white no-underline hover:bg-navy-800"
            >
              <Mail aria-hidden="true" className="size-4" /> Email {EMAIL}
            </a>
          </StatusBox>
        )}
        {status.kind === 'error' && (
          <StatusBox tone="error" title="Your message could not be sent.">
            {status.message} Please call{' '}
            <a href={PHONES.main.href} className="tabular font-bold underline">
              {PHONES.main.display}
            </a>{' '}
            or{' '}
            <a href={status.mailto} className="font-bold underline">
              send it by email
            </a>
            .
          </StatusBox>
        )}
      </div>
    </form>
  )
}

type FieldProps = {
  label: string
  name: keyof ContactMessage
  value: string
  onChange: (v: string) => void
  onBlur: () => void
  error?: string
  hint?: string
  required?: boolean
  multiline?: boolean
  type?: string
  inputMode?: 'tel' | 'email' | 'text'
  autoComplete?: string
  className?: string
}

function Field({ label, name, value, onChange, onBlur, error, hint, required, multiline, className = '', ...rest }: FieldProps) {
  const id = `contact-${name}`
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
  const base = `w-full rounded-xl border bg-paper px-4 py-3 text-[1.02rem] text-ink placeholder:text-ink-faint transition-colors duration-150 focus:bg-white focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-route-500 ${
    error ? 'border-alert' : 'border-rule-strong hover:border-route-500'
  }`
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-2 font-bold text-navy-900">
        <span>
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-route-600">
              *
            </span>
          )}
        </span>
        {hint && (
          <span id={`${id}-hint`} className="text-sm font-normal text-ink-faint">
            {hint}
          </span>
        )}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          value={value}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${base} min-h-32 resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          value={value}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={base}
          {...rest}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[0.95rem] font-bold text-alert">
          <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

function StatusBox({
  tone,
  title,
  children,
}: {
  tone: 'success' | 'info' | 'error'
  title: string
  children: ReactNode
}) {
  const styles = {
    success: 'bg-route-100/70 text-navy-900',
    info: 'bg-paper-deep text-navy-900',
    error: 'border border-[#f3d4bf] bg-alert-bg text-[#5b2410]',
  }[tone]
  const Icon = tone === 'error' ? AlertCircle : CheckCircle2
  return (
    <div className={`mt-5 flex gap-3 rounded-2xl p-5 ${styles}`}>
      <Icon aria-hidden="true" className={`mt-0.5 size-5 shrink-0 ${tone === 'error' ? 'text-alert' : 'text-route-700'}`} />
      <div>
        <p className="font-display text-lg font-semibold">{title}</p>
        <div className="mt-1">
          {children}
        </div>
      </div>
    </div>
  )
}
