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

export const EMAIL = 'fasttrackcarservice2020@gmail.com'
export const EMAIL_HREF = `mailto:${EMAIL}`

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Our Services' },
  { href: '#about', label: 'About Us' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const
