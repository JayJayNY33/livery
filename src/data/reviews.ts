export type Review = {
  /** First name or initials, as the client agreed to have it shown. */
  name: string
  /** 1 to 5 */
  rating: number
  text: string
  /** Optional, e.g. "Dialysis rider" or "Daughter of a client". */
  context?: string
  /** Optional, e.g. "October 2026". */
  date?: string
}

/**
 * Real client reviews only, posted with the client's permission.
 * Example entry:
 * { name: 'Maria G.', rating: 5, text: 'Always on time for my dialysis.', context: 'Dialysis rider', date: 'October 2026' },
 */
export const REVIEWS: Review[] = []
