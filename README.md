# Fast Track Medical & Livery Transportation — website

A single-page website for Fast Track, a non-emergency medical transportation (NEMT) provider based on Long Island, NY.
It is built with React 18, Vite, TypeScript, Tailwind CSS v4, and Lucide icons.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository. Vercel detects Vite automatically:
   - Build command: `npm run build`
   - Output directory: `dist`
3. (Optional) Add the environment variable `VITE_CONTACT_ENDPOINT` to connect the contact form (see below), then redeploy.
4. Add your custom domain under **Settings → Domains**.

## Project structure

```
index.html              SEO title/description, Open Graph, LocalBusiness JSON-LD
public/                 favicon, touch icon, optimized photos (WebP) and og-image.jpg
src/
  main.tsx, App.tsx     entry and page composition
  index.css             design tokens (@theme), base styles, FAQ answer styles
  data/site.ts          business name, phone numbers, email, navigation (edit contacts here)
  data/faqs.tsx         the 15 FAQs, verbatim from Fast_Track_Deep_Blue_Interactive_FAQ.html
  lib/booking.ts        Book a Ride form: checks, email fallback, optional sending
  components/           Header, Hero, Services, HowItWorks, RideCheck, WhyChoose, GoodToKnow,
                        Contact, Faq, BookingForm, ReviewForm, Footer, MobileCallBar,
                        Logo, PhoneLink
```

## Book a Ride form

The Book a Ride page (`book.html`, at `/book`) collects the trip details and checks them. By default it opens the visitor's email app with the request filled in, addressed to fasttrackcarservice2020@gmail.com. Nothing is sent from the page itself, and the page says that a request is not a confirmed booking.

To have requests sent directly instead, set `VITE_CONTACT_ENDPOINT` to any HTTPS endpoint that accepts a JSON POST, such as a Formspree form URL. See `.env.example`.

## Before launch

- **Photos are stock placeholders** (Unsplash License). Replace them with real Fast Track vehicles and drivers when available:
  - `hero-*.webp`, `og-image.jpg`: photo supplied by the client (2026-10-27)
- **Logo:** `src/assets/logo.png` was cut from the logo embedded in the FAQ file. A vector (SVG) original would look sharper.
- **Domain:** once you know it, make the `og:image` URL in `index.html` absolute (`https://yourdomain.com/images/og-image.jpg`). Also add `<link rel="canonical">` and a `"url"` field to the JSON-LD.
- FAQ #15 in the source file listed "Cell Phone Numbers: To be added". That line is left out until real numbers exist. Add them in `src/data/faqs.tsx`.

## Filling in client details

All in `src/data/`:

- **Owner's direct line:** in `site.ts`, set `OWNER_PHONE` (see the example in the comment). It then shows up as "Urgent ride issues (owner’s direct line)" in the Contact section, the footer, and FAQs #8, #11, #12, #13 and #15. While it's `null` it isn't shown.
- **Google review link:** in `site.ts`, set `GOOGLE_REVIEW_URL` once the Google Business Profile is set up. A "Review us on Google" button then appears on the Reviews page.
- **Reviews:** add real reviews, posted with the client's permission, to `REVIEWS` in `reviews.ts`. Until there are any, the Reviews page shows "Be one of our first reviewers".

The site has four pages: home (`index.html`), the FAQ (`faq.html`, at `/faq`), Reviews (`reviews.html`, at `/reviews`) and Book a Ride (`book.html`, at `/book`). `vercel.json` turns on clean URLs. Reviews submitted through its form open the visitor's email app, addressed to the office.
