import logoUrl from '../assets/logo.png'
import { BUSINESS_NAME } from '../data/site'

type Props = {
  className?: string
}

/** The Fast Track mark, cut out for navy surfaces. */
export function Logo({ className }: Props) {
  return <img src={logoUrl} alt={BUSINESS_NAME} width={560} height={261} className={className} decoding="async" />
}
