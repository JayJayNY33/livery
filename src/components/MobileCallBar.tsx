import { Phone } from 'lucide-react'
import { PHONES } from '../data/site'

/** The office line stays one tap away on phones. */
export function MobileCallBar() {
  return (
    <div className="on-navy fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-900/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm lg:hidden">
      <a
        href={PHONES.main.href}
        className="flex items-center justify-center gap-3 rounded-xl bg-route-600 py-3.5 text-lg font-bold text-white active:bg-route-700"
      >
        <Phone aria-hidden="true" className="size-5" strokeWidth={2.4} />
        Call <span className="tabular">{PHONES.main.display}</span>
      </a>
    </div>
  )
}
