import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { ChevronsDownUp, ChevronsUpDown, Plus } from 'lucide-react'
import { FAQS, FAQ_CATEGORIES } from '../data/faqs'
import type { FaqCategory } from '../data/faqs'
import { PHONES } from '../data/site'

export function Faq() {
  const [filter, setFilter] = useState<FaqCategory | 'all'>('all')
  const [open, setOpen] = useState<Set<number>>(() => new Set([1]))
  const buttons = useRef<Map<number, HTMLButtonElement>>(new Map())

  const visible = filter === 'all' ? FAQS : FAQS.filter((f) => f.category === filter)
  const allOpen = visible.every((f) => open.has(f.n))

  const toggle = (n: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(n)) next.delete(n)
      else next.add(n)
      return next
    })

  // Links elsewhere on the page (href="#faq-q-9") open their answer, not just scroll to it.
  useEffect(() => {
    const openFromHash = (hash: string) => {
      const n = Number(hash.match(/^#faq-q-(\d+)$/)?.[1])
      if (!n) return false
      setFilter('all')
      setOpen((prev) => new Set(prev).add(n))
      requestAnimationFrame(() => {
        const btn = document.getElementById(`faq-q-${n}`)
        btn?.scrollIntoView({ block: 'start' })
        btn?.focus({ preventScroll: true })
      })
      return true
    }
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="#faq-q-"]')
      if (!link) return
      const hash = link.getAttribute('href') ?? ''
      if (openFromHash(hash)) {
        e.preventDefault()
        history.replaceState(null, '', hash)
      }
    }
    openFromHash(window.location.hash)
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const setAll = (expand: boolean) =>
    setOpen((prev) => {
      const next = new Set(prev)
      visible.forEach((f) => (expand ? next.add(f.n) : next.delete(f.n)))
      return next
    })

  // Arrow keys move between question headers, per the WAI-ARIA accordion pattern.
  const onHeaderKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowDown: (index + 1) % visible.length,
      ArrowUp: (index - 1 + visible.length) % visible.length,
      Home: 0,
      End: visible.length - 1,
    }
    if (!(e.key in keys)) return
    e.preventDefault()
    buttons.current.get(visible[keys[e.key]].n)?.focus()
  }

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative bg-paper py-20 sm:py-28">
      <div className="planner-rules pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-title" className="text-[clamp(2.1rem,4vw,3.25rem)] font-bold leading-[1.05] text-navy-900">
            Frequently asked questions
          </h2>
          <p className="mt-5 text-lg text-ink-soft">Your transportation questions, answered. Because your care matters.</p>
          <div className="mt-8 rounded-2xl border border-rule bg-white p-5 shadow-card">
            <p className="font-bold text-navy-900">Still have a question?</p>
            <p className="mt-1 text-[0.98rem] text-ink-soft">Our office is happy to help.</p>
            <a
              href={PHONES.main.href}
              className="tabular mt-3 inline-flex font-display text-2xl font-semibold text-route-700 underline decoration-route-300 underline-offset-4 hover:text-navy-900"
            >
              {PHONES.main.display}
            </a>
          </div>
        </div>

        <div>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div role="group" aria-label="Filter questions by topic" className="-mx-1 flex flex-wrap gap-2 px-1">
              {FAQ_CATEGORIES.map((c) => {
                const count = c.id === 'all' ? FAQS.length : FAQS.filter((f) => f.category === c.id).length
                const active = filter === c.id
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(c.id)}
                    className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-[0.95rem] font-bold transition-colors duration-150 ${
                      active
                        ? 'border-navy-900 bg-navy-900 text-white'
                        : 'border-rule-strong bg-white text-navy-900 hover:border-route-500'
                    }`}
                  >
                    {c.label}
                    <span className={`tabular text-xs ${active ? 'text-route-300' : 'text-ink-faint'}`}>{count}</span>
                  </button>
                )
              })}
            </div>
            <button
              type="button"
              onClick={() => setAll(!allOpen)}
              className="inline-flex min-h-10 shrink-0 items-center gap-2 self-start rounded-lg px-2 text-[0.95rem] font-bold text-route-700 hover:text-navy-900 sm:self-auto"
            >
              {allOpen ? (
                <ChevronsDownUp aria-hidden="true" className="size-4" />
              ) : (
                <ChevronsUpDown aria-hidden="true" className="size-4" />
              )}
              {allOpen ? 'Close all' : 'Open all'}
            </button>
          </div>

          <p className="sr-only" aria-live="polite">
            Showing {visible.length} of {FAQS.length} questions
          </p>

          <ul className="grid gap-3">
            {visible.map((faq, index) => {
              const isOpen = open.has(faq.n)
              const btnId = `faq-q-${faq.n}`
              const panelId = `faq-a-${faq.n}`
              return (
                <li
                  key={faq.n}
                  className={`overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-300 ${
                    isOpen ? 'border-route-300 shadow-lift' : 'border-rule shadow-card hover:border-rule-strong'
                  }`}
                >
                  <h3 className="text-[1.08rem] font-semibold leading-snug sm:text-[1.15rem]">
                    <button
                      ref={(el) => {
                        if (el) buttons.current.set(faq.n, el)
                        else buttons.current.delete(faq.n)
                      }}
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(faq.n)}
                      onKeyDown={(e) => onHeaderKey(e, index)}
                      className={`flex w-full items-start gap-4 px-5 py-5 text-left transition-colors duration-200 focus-visible:-outline-offset-3 sm:px-6 ${
                        isOpen ? 'bg-navy-900 text-white' : 'text-navy-900 hover:bg-paper'
                      }`}
                    >
                      <span
                        className={`tabular mt-0.5 w-7 shrink-0 font-display text-base font-bold ${
                          isOpen ? 'text-route-300' : 'text-route-600'
                        }`}
                        aria-hidden="true"
                      >
                        {faq.n}.
                      </span>
                      <span className="flex-1 font-display">{faq.question}</span>
                      <span
                        className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full transition-[transform,background-color] duration-300 ease-out-expo ${
                          isOpen ? 'rotate-45 bg-white/15' : 'bg-paper-deep'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="size-4" strokeWidth={2.5} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-[grid-template-rows] duration-400 ease-out-expo ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                    {...(isOpen ? {} : { inert: '' })}
                  >
                    <div className="overflow-hidden">
                      <div className="faq-answer px-5 pb-6 pt-5 text-[1.02rem] leading-[1.7] text-ink-soft sm:px-6 sm:pl-[4.25rem]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
