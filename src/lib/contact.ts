export type ContactMessage = {
  name: string
  phone: string
  email: string
  message: string
}

export type SubmitResult = { status: 'sent' } | { status: 'not-configured' } | { status: 'error'; message: string }

/**
 * Sends the contact form to VITE_CONTACT_ENDPOINT when one is configured
 * (any service that accepts a JSON POST, such as Formspree or a serverless function).
 * Without an endpoint nothing is sent, and the form says so instead of pretending.
 */
export async function submitContact(data: ContactMessage): Promise<SubmitResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
  if (!endpoint) return { status: 'not-configured' }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) return { status: 'error', message: `The message service responded with ${res.status}.` }
    return { status: 'sent' }
  } catch {
    return { status: 'error', message: 'We could not reach the message service.' }
  }
}

export function validate(data: ContactMessage) {
  const errors: Partial<Record<keyof ContactMessage, string>> = {}
  if (!data.name.trim()) errors.name = 'Please enter your name.'
  const digits = data.phone.replace(/\D/g, '')
  if (!digits) errors.phone = 'Please enter a phone number so we can call you back.'
  else if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))))
    errors.phone = 'Please enter a 10-digit phone number, for example 631-555-0123.'
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim()))
    errors.email = 'This email address looks incomplete. Check it, or leave it blank.'
  if (!data.message.trim()) errors.message = 'Please tell us how we can help.'
  else if (data.message.trim().length < 10) errors.message = 'Please add a little more detail so we can help.'
  return errors
}

export function mailtoFor(data: ContactMessage, to: string) {
  const body = [
    data.message.trim(),
    '',
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`,
    data.email.trim() ? `Email: ${data.email.trim()}` : '',
  ]
    .filter((l, i, arr) => l || i < arr.length - 1)
    .join('\n')
  return `mailto:${to}?subject=${encodeURIComponent('Transportation question from the website')}&body=${encodeURIComponent(body)}`
}
