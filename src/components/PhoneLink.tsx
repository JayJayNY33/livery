import type { ReactNode } from 'react'
import { PHONES } from '../data/site'

type Props = {
  phone: keyof typeof PHONES
  children?: ReactNode
  className?: string
}

/** A click-to-call link that announces which line it dials. */
export function PhoneLink({ phone, children, className }: Props) {
  const p = PHONES[phone]
  return (
    <a href={p.href} className={className} aria-label={`Call ${p.label}, ${p.display}`}>
      {children ?? p.display}
    </a>
  )
}
