import { BUSINESS_NAME, EMAIL, EMAIL_HREF, EMERGENCY, NAV_LINKS, OWNER_LABEL, OWNER_PHONE, PHONES, TAGLINE, sectionHref } from '../data/site'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="on-navy border-t-[3px] border-brand-red bg-navy-950 pb-28 pt-16 text-route-100/80 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Logo className="h-16 w-auto" />
            <p className="mt-6 font-display text-xl font-semibold leading-snug text-white">{TAGLINE}</p>
            <p className="mt-3 max-w-sm text-[0.95rem]">
              {BUSINESS_NAME} provides dependable non-emergency medical transportation, based on Long Island, New York.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-base font-semibold text-white">Explore</h2>
            <ul className="mt-4 grid gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={sectionHref(l.href)} className="hover:text-white hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base font-semibold text-white">Contact</h2>
            <dl className="mt-4 grid gap-3 text-[0.98rem]">
              {[PHONES.main, PHONES.secondary, ...(OWNER_PHONE ? [{ ...OWNER_PHONE, label: OWNER_LABEL }] : []), PHONES.mas].map((p) => (
                <div key={p.label}>
                  <dt className="text-sm text-route-100/65">{p.label}</dt>
                  <dd>
                    <a href={p.href} className="tabular font-bold text-white hover:underline">
                      {p.display}
                    </a>
                  </dd>
                </div>
              ))}
              <div>
                <dt className="text-sm text-route-100/65">Email</dt>
                <dd>
                  <a href={EMAIL_HREF} className="break-all font-bold text-white hover:underline">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-route-100/65">Medical emergency</dt>
                <dd>
                  <a href={EMERGENCY.href} className="font-bold text-white hover:underline">
                    Call {EMERGENCY.display}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-route-100/60 sm:flex-row sm:justify-between">
          <p>
            © {year} {BUSINESS_NAME}.
          </p>
          <p>Non-emergency transportation only. In an emergency, call 911.</p>
        </div>
      </div>
    </footer>
  )
}
