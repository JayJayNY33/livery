import { useEffect, useRef, useState } from 'react'
import { CalendarPlus, Menu, Phone, X } from 'lucide-react'
import { BOOK_HREF, NAV_LINKS, PHONES, sectionHref } from '../data/site'
import { Logo } from './Logo'

/** The page path ('/faq', '/reviews', '/book') on any page except home, where it is null. */
function currentPage() {
  const path = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '')
  return path === '' || path === '/index' ? null : path
}

function useActiveSection() {
  const [active, setActive] = useState<string>(() =>
    typeof window !== 'undefined' ? (currentPage() ?? '#home') : '#home',
  )
  useEffect(() => {
    if (currentPage()) return
    const ids = NAV_LINKS.filter((l) => l.href.startsWith('#')).map((l) => l.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(`#${visible[0].target.id}`)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

export function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  // Solid background on purpose: a backdrop-filter on the header would trap the fixed mobile menu inside it.
  return (
    <header className="on-navy sticky top-0 z-50 border-b border-white/10 bg-navy-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 xl:gap-6 px-4 sm:px-6 lg:px-8">
        <a href={sectionHref('#home')} className="shrink-0" aria-label="Fast Track Medical & Livery Transportation, back to top">
          <Logo className="h-12 w-auto sm:h-[3.4rem]" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href
              return (
                <li key={link.href}>
                  <a
                    href={sectionHref(link.href)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative rounded-md px-2.5 py-2 text-[0.95rem] xl:px-3 font-medium transition-colors duration-200 ${
                      isActive ? 'text-brand-red-light' : 'text-brand-red-light/85 hover:text-brand-red-light'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-red-light transition-transform duration-300 ease-out-expo ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONES.main.href}
            className="group inline-flex items-center gap-2.5 rounded-lg bg-route-600 px-3.5 py-2.5 text-[0.95rem] font-bold text-white shadow-[0_2px_8px_-2px_rgb(6_20_40/0.5)] transition-colors duration-200 hover:bg-route-500 sm:px-4"
          >
            <Phone aria-hidden="true" className="size-4" strokeWidth={2.4} />
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">
              Call Us <span className="tabular hidden font-normal text-route-100 xl:inline">{PHONES.main.display}</span>
            </span>
          </a>
          <a
            href={BOOK_HREF}
            aria-current={active === BOOK_HREF ? 'page' : undefined}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-3.5 py-2.5 text-[0.95rem] font-bold text-white shadow-[0_2px_8px_-2px_rgb(6_20_40/0.5)] transition-colors duration-200 hover:bg-brand-red-dark sm:px-4"
          >
            <CalendarPlus aria-hidden="true" className="hidden size-4 sm:block" strokeWidth={2.4} />
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book a Trip</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 bg-navy-950 transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="planner-rules-navy h-full overflow-y-auto px-4 pb-32 pt-4 sm:px-6">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={sectionHref(link.href)}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? 'location' : undefined}
                  className="flex items-center justify-between py-4 font-display text-2xl font-semibold text-brand-red-light"
                >
                  {link.label}
                  {active === link.href && <span className="size-2 rounded-full bg-brand-red-light" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a
              href={BOOK_HREF}
              className="flex items-center justify-center gap-3 rounded-xl bg-brand-red px-5 py-4 text-lg font-bold text-white"
            >
              <CalendarPlus aria-hidden="true" className="size-5" /> Book a Trip
            </a>
            <a
              href={PHONES.main.href}
              className="flex items-center justify-center gap-3 rounded-xl bg-route-600 px-5 py-4 text-lg font-bold text-white"
            >
              <Phone aria-hidden="true" className="size-5" /> Call {PHONES.main.display}
            </a>
            <a
              href={PHONES.secondary.href}
              className="flex items-center justify-center gap-3 rounded-xl border border-white/20 px-5 py-4 text-lg font-bold text-white"
            >
              Secondary line {PHONES.secondary.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
