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
  lib/contact.ts        form validation, optional submission, mailto fallback
  components/           Header, Hero, WeekStrip, Services, WhyChoose, About,
                        HowItWorks, RideCheck, Faq, Contact, ContactForm,
                        Footer, MobileCallBar, Logo, PhoneLink
```

## Contact form

The form validates input but **does not send anything** until a backend is connected. Until then, a valid submission tells the visitor that the message was not sent. It then offers the phone number and a pre-filled email to fasttrackcarservice2020@gmail.com.

To connect it, set `VITE_CONTACT_ENDPOINT` to any HTTPS endpoint that accepts a JSON POST of `{ name, phone, email, message }`. A Formspree form URL works, as does your own serverless function. See `.env.example`.

## Before launch

- **Photos are stock placeholders** (Unsplash License). Replace them with real Fast Track vehicles and drivers when available:
  - `hero-*.webp`, `og-image.jpg`: [Centre for Ageing Better, "Elderly man getting into a car"](https://unsplash.com/photos/aang4D4VMEI)
  - `sonata-*.webp`: [Hyundai Motor Group, silver Sonata](https://unsplash.com/photos/ZPvrPejfrPU)
- **Logo:** `src/assets/logo.png` was cut from the logo embedded in the FAQ file. A vector (SVG) original would look sharper.
- **Domain:** once you know it, make the `og:image` URL in `index.html` absolute (`https://yourdomain.com/images/og-image.jpg`). Also add `<link rel="canonical">` and a `"url"` field to the JSON-LD.
- FAQ #15 in the source file listed "Cell Phone Numbers: To be added". That line is left out until real numbers exist. Add them in `src/data/faqs.tsx`.

## Filling in client details

All in `src/data/`:

- **Owner's direct line:** in `site.ts`, set `OWNER_PHONE` (see the example in the comment). It then shows up as "Urgent ride issues (owner’s direct line)" in the Contact section, the footer, and FAQs #8, #11, #12, #13 and #15. While it's `null` it isn't shown.
- **Google review link:** in `site.ts`, set `GOOGLE_REVIEW_URL` once the Google Business Profile is set up. A "Review us on Google" button then appears on the Reviews page.
- **Reviews:** add real reviews, posted with the client's permission, to `REVIEWS` in `reviews.ts`. Until there are any, the Reviews page shows "Be one of our first reviewers".

The site has three pages: home (`index.html`), the FAQ (`faq.html`, at `/faq`) and Reviews (`reviews.html`, at `/reviews`). `vercel.json` turns on clean URLs. Reviews submitted through its form open the visitor's email app, addressed to the office.
