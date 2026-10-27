export type Phone = {
  label: string
  display: string
  href: string
}

export const BUSINESS_NAME = 'Fast Track Medical & Livery Transportation'
export const TAGLINE = 'Your Health. Your Appointments. Our Commitment to Getting You There.'

export const PHONES = {
  main: { label: 'Main Office', display: '631-406-9922', href: 'tel:+16314069922' },
  secondary: { label: 'Secondary Number', display: '631-750-3666', href: 'tel:+16317503666' },
  mas: { label: 'MAS Scheduling', display: '1-844-666-6270', href: 'tel:+18446666270' },
} satisfies Record<string, Phone>

/**
 * The owner's direct line for urgent ride issues. Set `display` and `href` once the
 * number is confirmed; while it is null the line is simply not shown anywhere.
 * Example: { label: 'Urgent ride issues (owner’s direct line)', display: '631-555-0123', href: 'tel:+16315550123' }
 */
export const OWNER_PHONE: Phone | null = null
export const OWNER_LABEL = 'Urgent ride issues (owner’s direct line)'

export const EMERGENCY = { display: '911', href: 'tel:911' }

/** Google "write a review" link for the business profile. Null until the profile is set up. */
export const GOOGLE_REVIEW_URL: string | null = null

export const BOOK_HREF = '/book'

export const EMAIL = 'fasttrackcarservice2020@gmail.com'
export const EMAIL_HREF = `mailto:${EMAIL}`

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Our Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about', label: 'About Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
  { href: '/reviews', label: 'Reviews' },
] as const

/** Section links ("#services") point back to the home page when used on another page. */
export function sectionHref(href: string) {
  const onHome = typeof window === 'undefined' || window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')
  return href.startsWith('#') && !onHome ? `/${href}` : href
}
