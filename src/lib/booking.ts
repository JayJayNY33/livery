export type TripRequest = {
  name: string
  phone: string
  email: string
  pickup: string
  destination: string
  date: string
  time: string
  tripType: '' | 'one-way' | 'round-trip' | 'recurring'
  returnTime: string
  passengers: string
  mobility: '' | 'walks' | 'walker' | 'folding-wheelchair' | 'stays-in-wheelchair'
  carSeat: '' | 'none' | 'bringing' | 'need-one'
  medicaid: '' | 'yes' | 'no' | 'not-sure'
  notes: string
}

export const EMPTY_TRIP: TripRequest = {
  name: '',
  phone: '',
  email: '',
  pickup: '',
  destination: '',
  date: '',
  time: '',
  tripType: '',
  returnTime: '',
  passengers: 'none',
  mobility: '',
  carSeat: 'none',
  medicaid: '',
  notes: '',
}

export const LABELS = {
  tripType: { 'one-way': 'One-way', 'round-trip': 'Round trip', recurring: 'Recurring (standing order)' },
  mobility: {
    walks: 'Can walk to the car',
    walker: 'Uses a walker or cane',
    'folding-wheelchair': 'Folding wheelchair, can move to a car seat',
    'stays-in-wheelchair': 'Must stay seated in a wheelchair',
  },
  carSeat: { none: 'No car seat needed', bringing: 'Bringing our own car seat', 'need-one': 'Need Fast Track to provide a car seat' },
  medicaid: { yes: 'Yes, Medicaid (through MAS)', no: 'No', 'not-sure': 'Not sure' },
  passengers: { none: 'None, just the patient', '1': '1 additional passenger', '2': '2 additional passengers' },
} as const

export type TripErrors = Partial<Record<keyof TripRequest, string>>

export function validateTrip(t: TripRequest): TripErrors {
  const e: TripErrors = {}
  if (!t.name.trim()) e.name = 'Please enter the patient’s or your name.'
  const digits = t.phone.replace(/\D/g, '')
  if (!digits) e.phone = 'Please enter a phone number so we can confirm the ride.'
  else if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith('1'))))
    e.phone = 'Please enter a 10-digit phone number, for example 631-555-0123.'
  if (t.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t.email.trim()))
    e.email = 'This email address looks incomplete. Check it, or leave it blank.'
  if (!t.pickup.trim()) e.pickup = 'Please enter the pickup address.'
  if (!t.destination.trim()) e.destination = 'Please enter where you are going.'
  if (!t.date) e.date = 'Please choose the trip date.'
  if (!t.time) e.time = 'Please choose the pickup or appointment time.'
  if (!t.tripType) e.tripType = 'Please choose a trip type.'
  if (!t.mobility) e.mobility = 'Please tell us how the passenger gets around.'
  if (!t.medicaid) e.medicaid = 'Please tell us if this is a Medicaid trip.'
  return e
}

export function tripSummary(t: TripRequest) {
  const lines = [
    'RIDE REQUEST (not confirmed until the office calls back)',
    '',
    `Name: ${t.name.trim()}`,
    `Phone: ${t.phone.trim()}`,
    t.email.trim() ? `Email: ${t.email.trim()}` : '',
    '',
    `Pickup address: ${t.pickup.trim()}`,
    `Destination: ${t.destination.trim()}`,
    `Date: ${t.date}`,
    `Pickup / appointment time: ${t.time}`,
    `Trip type: ${t.tripType ? LABELS.tripType[t.tripType] : ''}`,
    t.tripType !== 'one-way' && t.returnTime ? `Return time: ${t.returnTime}` : '',
    `Additional passengers: ${LABELS.passengers[t.passengers as keyof typeof LABELS.passengers] ?? t.passengers}`,
    `Mobility: ${t.mobility ? LABELS.mobility[t.mobility] : ''}`,
    `Car seat: ${t.carSeat ? LABELS.carSeat[t.carSeat] : ''}`,
    `Medicaid trip: ${t.medicaid ? LABELS.medicaid[t.medicaid] : ''}`,
    t.notes.trim() ? `\nNotes: ${t.notes.trim()}` : '',
  ]
  return lines.filter((l, i) => l !== '' || lines[i - 1] !== '').join('\n')
}

export function tripMailto(t: TripRequest, to: string) {
  const subject = `Ride request: ${t.date} ${t.time} – ${t.name.trim()}`
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(tripSummary(t))}`
}

export type SendResult = { status: 'sent' } | { status: 'not-configured' } | { status: 'error' }

/** Posts to VITE_CONTACT_ENDPOINT when one is configured; otherwise the page falls back to email. */
export async function sendTrip(t: TripRequest): Promise<SendResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
  if (!endpoint) return { status: 'not-configured' }
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ type: 'trip-request', ...t, summary: tripSummary(t) }),
    })
    return res.ok ? { status: 'sent' } : { status: 'error' }
  } catch {
    return { status: 'error' }
  }
}
