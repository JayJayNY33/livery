import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import { AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react'
import { PHONES } from '../data/site'

type Answer = 'yes' | 'no'
type QuestionId = 'nonEmergency' | 'carSeat' | 'threeDays'

const QUESTIONS: { id: QuestionId; label: string; hint: string }[] = [
  {
    id: 'nonEmergency',
    label: 'Is this a non-emergency trip to a medical appointment?',
    hint: 'Doctors, specialists, hospitals, dialysis, therapy and rehabilitation.',
  },
  {
    id: 'carSeat',
    label: 'Can the passenger ride in a regular car seat?',
    hint: 'Our sedans are not wheelchair accessible. Passengers cannot remain seated in a wheelchair.',
  },
  {
    id: 'threeDays',
    label: 'Is the appointment at least three days away?',
    hint: 'Regular rides should be arranged with MAS at least three days ahead.',
  },
]

const mas = (
  <a href={PHONES.mas.href} className="tabular font-bold underline">
    {PHONES.mas.display}
  </a>
)
const office = (
  <a href={PHONES.main.href} className="tabular font-bold underline">
    {PHONES.main.display}
  </a>
)

/** Its own home-page section, just before Contact us. */
export function RideCheckSection() {
  return (
    <section id="ride-check" aria-label="Is Fast Track right for my ride?" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <RideCheck />
      </div>
    </section>
  )
}

export function RideCheck() {
  const [answers, setAnswers] = useState<Partial<Record<QuestionId, Answer>>>({})
  const baseId = useId()
  const answered = QUESTIONS.filter((q) => answers[q.id]).length
  const complete = answered === QUESTIONS.length
  const allYes = complete && QUESTIONS.every((q) => answers[q.id] === 'yes')

  return (
    <div className="rounded-3xl bg-white p-6 text-ink shadow-lift sm:p-9">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-tight text-navy-900">
            Is Fast Track right for my ride?
          </h3>
          <p className="mt-2 text-ink-soft">Three quick questions. Your next step appears when all three are answered.</p>
        </div>
        <p className="tabular text-small font-bold text-ink-faint" aria-hidden="true">
          {answered} of {QUESTIONS.length} answered
        </p>
      </div>

      <div className="mt-7 grid gap-3">
        {QUESTIONS.map((q, i) => {
          const value = answers[q.id]
          return (
            <fieldset
              key={q.id}
              className="grid gap-4 rounded-2xl border border-rule bg-paper p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5"
            >
              <legend className="sr-only">{q.label}</legend>
              <div aria-hidden="true">
                <p className="font-display text-title-sm font-semibold text-navy-900">
                  <span className="tabular mr-2 text-route-600">{i + 1}.</span>
                  {q.label}
                </p>
                <p className="mt-1 text-small text-ink-soft">{q.hint}</p>
              </div>
              <div className="flex gap-2">
                {(['yes', 'no'] as const).map((opt) => {
                  const id = `${baseId}-${q.id}-${opt}`
                  const checked = value === opt
                  return (
                    <label
                      key={opt}
                      htmlFor={id}
                      className={`relative flex min-h-12 min-w-20 flex-1 cursor-pointer items-center justify-center rounded-xl border px-5 font-bold transition-colors duration-150 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-route-500 sm:flex-none ${
                        checked
                          ? opt === 'yes'
                            ? 'border-route-600 bg-route-600 text-white'
                            : 'border-navy-900 bg-navy-900 text-white'
                          : 'border-rule-strong bg-white text-navy-900 hover:border-route-500'
                      }`}
                    >
                      <input
                        id={id}
                        type="radio"
                        name={`${baseId}-${q.id}`}
                        value={opt}
                        checked={checked}
                        onChange={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
                        className="sr-only"
                        aria-describedby={`${baseId}-${q.id}-hint`}
                      />
                      {opt === 'yes' ? 'Yes' : 'No'}
                    </label>
                  )
                })}
                <span id={`${baseId}-${q.id}-hint`} className="sr-only">
                  {q.hint}
                </span>
              </div>
            </fieldset>
          )
        })}
      </div>

      <div aria-live="polite" className="mt-6">
        {complete && (
          <div className="grid gap-3">
            {allYes ? (
              <div className="flex gap-4 rounded-2xl bg-route-100/70 p-5 text-navy-900">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-sun-600" />
                <div>
                  <p className="font-display text-lg font-semibold">Fast Track may be a good fit for this ride.</p>
                  <p className="mt-1">
                    For a Medicaid trip, call MAS at {mas} and ask whether Fast Track can be assigned as your
                    preferred provider. Then call our office at {office} to confirm pickup details. Assignment is
                    subject to MAS requirements and availability.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {answers.nonEmergency === 'no' && (
                  <Notice tone="alert" title="For a life-threatening emergency, call 911.">
                    Fast Track is not an ambulance service.{' '}
                    <a href="tel:911" className="font-bold underline">
                      Call 911
                    </a>
                  </Notice>
                )}
                {answers.carSeat === 'no' && (
                  <Notice title="Our sedans are not wheelchair accessible.">
                    Patients who must remain seated in a wheelchair should request wheelchair-accessible transportation
                    through MAS at {mas}.
                  </Notice>
                )}
                {answers.threeDays === 'no' && (
                  <Notice title="Contact MAS and Fast Track as soon as possible.">
                    Explain the urgency to MAS at {mas}, then call us at {office}. We will make every reasonable effort
                    to accommodate urgent requests, but cannot guarantee a last-minute ride.
                  </Notice>
                )}
              </>
            )}
            {answers.carSeat === 'yes' && (
              <p className="text-small text-ink-soft">
                Bringing a folding wheelchair or walker? We may be able to carry one that fits securely in the trunk.
                Please confirm with us in advance.
              </p>
            )}
            <button
              type="button"
              onClick={() => setAnswers({})}
              className="inline-flex w-fit items-center gap-2 rounded-lg px-2 py-1 text-small font-bold text-route-700 hover:text-navy-900"
            >
              <RotateCcw aria-hidden="true" className="size-4" /> Start over
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function Notice({
  title,
  children,
  tone = 'info',
}: {
  title: string
  children: ReactNode
  tone?: 'info' | 'alert'
}) {
  return (
    <div
      className={`flex gap-4 rounded-2xl p-5 ${
        tone === 'alert' ? 'border border-[#f3d4bf] bg-alert-bg text-[#5b2410]' : 'bg-paper-deep text-navy-900'
      }`}
    >
      <AlertTriangle
        aria-hidden="true"
        className={`mt-0.5 size-6 shrink-0 ${tone === 'alert' ? 'text-alert' : 'text-route-700'}`}
      />
      <div>
        <p className="font-display text-lg font-semibold">{title}</p>
        <p className="mt-1">{children}</p>
      </div>
    </div>
  )
}
