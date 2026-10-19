---
name: Fast Track Medical & Livery Transportation
description: Non-emergency medical rides on Long Island, organized around the rider's week.
colors:
  navy-950: "#061428"
  navy-900: "#0b1f3a"
  navy-800: "#12305a"
  navy-700: "#1b3f70"
  route-700: "#1c4ea6"
  route-600: "#2563c9"
  route-500: "#3b7be0"
  route-300: "#9cc0f5"
  route-100: "#dfeafc"
  paper: "#f2f5fa"
  paper-deep: "#e6ecf5"
  rule: "#d3dce9"
  rule-strong: "#b9c6d8"
  white: "#ffffff"
  ink: "#0f1e33"
  ink-soft: "#3d4f68"
  ink-faint: "#5a6b82"
  alert: "#9a3412"
  alert-bg: "#fff4ec"
  alert-rule: "#f3d4bf"
  alert-ink: "#5b2410"
typography:
  display:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.2vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "'Schibsted Grotesk Variable', 'Schibsted Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.375
  body-lead:
    fontFamily: "'Atkinson Hyperlegible Next', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "'Atkinson Hyperlegible Next', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Atkinson Hyperlegible Next', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.43
  day-label:
    fontFamily: "'Atkinson Hyperlegible Next', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    fontFeature: "tnum"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter-tablet: "24px"
  gutter-desktop: "32px"
  card-sm: "20px"
  card-md: "24px"
  card-lg: "36px"
  section-mobile: "80px"
  section-desktop: "112px"
  container: "80rem"
components:
  button-primary:
    backgroundColor: "{colors.route-600}"
    textColor: "{colors.white}"
    typography: "{typography.body-lead}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.route-500}"
  button-primary-active:
    backgroundColor: "{colors.route-700}"
  button-outline-navy:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
  button-call-header:
    backgroundColor: "{colors.route-600}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
  button-text:
    textColor: "{colors.route-700}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "4px 8px"
  chip-filter:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "40px"
  chip-filter-active:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
  choice-yes-selected:
    backgroundColor: "{colors.route-600}"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    height: "48px"
  choice-no-selected:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    height: "48px"
  input-text:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
  input-text-focus:
    backgroundColor: "{colors.white}"
  card-paper:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.3xl}"
    padding: "{spacing.card-lg}"
  card-navy:
    backgroundColor: "{colors.navy-800}"
    textColor: "{colors.white}"
    rounded: "{rounded.2xl}"
    padding: "28px"
  faq-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.2xl}"
    padding: "20px 24px"
  faq-item-open:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
  notice-info:
    backgroundColor: "{colors.route-100}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  notice-alert:
    backgroundColor: "{colors.alert-bg}"
    textColor: "{colors.alert-ink}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  booked-block:
    backgroundColor: "{colors.route-600}"
    rounded: "{rounded.md}"
    height: "64px"
  open-day:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    height: "64px"
  icon-tile:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.route-300}"
    rounded: "{rounded.xl}"
    size: "44px"
---

# Design System: Fast Track Medical & Livery Transportation

## Overview

**Creative North Star: "The Standing Week"**

The system is a rider's weekly planner rendered in navy ink and blue-gray paper. Recurring care (dialysis three mornings a week, physical therapy twice) is the organizing frame, so the world's native material is the seven-day column: faint hairline day rules run behind paper sections and navy sections alike, and filled medium-blue blocks mean "a ride is booked." Everything else is quiet so that those blocks, and the phone number, read first.

Density is calm and generous: large Atkinson Hyperlegible Next body type (17px base, 1.65 leading) for older readers on phones, big tap targets (48px choices, 56px primary calls), and sections that breathe at 80px on mobile and 112px on desktop. Navy owns the opening, the "how it works" band, and the close; paper and white carry the explanatory middle. Depth is soft and navy-tinted, never hard.

The phone line is the single live channel and is always on screen: a persistent call button in the sticky navy header on desktop and a fixed navy call bar on phones.

**Key Characteristics:**
- Seven-day column rules as ground texture on both paper and navy.
- Medium blue reserved for actions and booked-ride blocks.
- Tabular figures for every phone number, count, step number, and day.
- Soft, navy-tinted two-layer shadows; 6px to 24px corners scaled to element size.
- Navy bookends (hero, process band, contact, footer) around a paper middle.

## Colors

A two-blue palette on cool paper: deep navy for authority and ground, one medium blue for anything you can press or anything that is booked.

### Primary
- **Standing-Order Blue** (route-600): the only fill for primary actions (call buttons, form submit), booked-day blocks in the week strip and service rows, the selected "Yes" choice, numbered question markers, and FAQ answer bullets.
- **Pressed Route** (route-700): text-weight links and text buttons on light grounds ("Start over", "Expand all"), info icons, and the pressed state of the mobile call bar and submit hover.
- **Lit Route** (route-500): hover fill for primary buttons, hover border on inputs and chips, and the global focus outline (3px, 3px offset).
- **Second-Leg Blue** (route-300): on navy only for accents (the second hero headline clause, active nav underline, open-FAQ number, focus outline inside navy regions); on paper as the "ride home after" legend mark and facility-arranged day cells at 70%.
- **Planner Wash** (route-100): info notices and the all-yes verdict (at 60 to 70%), and secondary text on navy at 75 to 90%.

### Secondary
- **Night Ledger Navy** (navy-900): the hero, header, process band, contact band, open FAQ headers, icon tiles, selected "No" choice, active filter chip, and all headings on light grounds. Also the browser theme color.
- **Deep Ledger** (navy-950): footer and mobile menu overlay; image gradient scrims.
- **Ledger Raised** (navy-800): cards set on navy at 70% opacity; secondary hover for navy buttons.
- **Ledger Edge** (navy-700): reserved step in the scale; present in tokens, rarely drawn.

### Tertiary
- **Clay Alert** (alert, alert-bg, alert-rule, alert-ink): the 911 / emergency notice and form error states only. Text and icons in alert, field in alert-bg, 1px alert-rule border, body text in alert-ink. Note: alert-rule and alert-ink are currently literals in the source rather than `@theme` variables.

### Neutral
- **Planner Paper** (paper): page ground, input fields at rest, open week-day cells, question rows.
- **Folded Paper** (paper-deep): the "Example" pill, neutral notices, FAQ toggle discs.
- **Hairline** (rule): card borders, list dividers, legend dividers.
- **Pencil Line** (rule-strong): input and chip borders at rest, dashed open-day outlines, scrollbar thumb; at 38% it is the day-column rule on paper.
- **Ink** (ink): default body text. **Ink Soft** (ink-soft): supporting paragraphs and captions. **Ink Faint** (ink-faint): unbooked day labels, counts, hints, placeholders.
- **White**: cards, FAQ items, choices at rest, the week-strip card (at 95%).

### Named Rules
**The Booked Means Blue Rule.** Standing-Order Blue fills only two things: something you press, and a day that has a ride. Never use it for decoration, section grounds, or icons in tiles.

**The Red Stays in the Logo Rule.** The supplied logo's red appears nowhere else. The only warm hue in the interface is Clay Alert, and it appears only for emergencies and errors.

## Typography

**Display Font:** Schibsted Grotesk Variable (with Schibsted Grotesk, ui-sans-serif, system-ui)
**Body Font:** Atkinson Hyperlegible Next (with ui-sans-serif, system-ui), weights 400, 400 italic, 700

**Character:** A firm, newsy grotesk for headings set tight, over a body face designed for low-vision legibility. The pairing reads dependable rather than clinical.

### Hierarchy
- **Display** (700, clamp(2.6rem, 6.2vw, 5rem), 1.02, -0.035em): the hero headline only, white on navy with the second clause in route-300.
- **Headline** (700, clamp(2.1rem, 4vw, 3.25rem), 1.05, -0.02em): every section title.
- **Headline Small** (700, clamp(1.6rem, 3vw, 2.1rem), tight): titles of large interactive cards (ride check) and pull statements.
- **Title** (600, 1.25rem, snug): service names, card headings. **Title Small** (600, 1.125rem): question rows, notice titles, FAQ questions (1.08 to 1.15rem).
- **Body Lead** (400, 1.125 to 1.25rem, relaxed): section intros and hero lede, capped near 34rem.
- **Body** (400, 1.0625rem, 1.65): running text; FAQ answers at 1.02rem / 1.7.
- **Label** (700, 0.875rem): legends, column headings in tables, "n of 3 answered" counts. Sentence case.
- **Day Label** (700, 0.72rem, tabular): Mon to Sun headers in week strips; navy when booked, ink-faint when open.

All h1 to h4 use the display face, `text-wrap: balance`, and -0.02em tracking by default; paragraphs use `text-wrap: pretty`.

### Named Rules
**The Tabular Clock Rule.** Every phone number, count, step number, question number, and day uses tabular figures. Phone numbers never wrap.

**The Sentence-Case Label Rule.** Labels are bold sentence case in the body face. Small text is made distinct by weight and color, not by uppercase tracking.

## Layout

A centered 80rem container with 16 / 24 / 32px gutters at mobile / sm / lg. Sections stack vertically at 80px padding (112px from 640px). Desktop compositions are asymmetric two-column grids (hero 1.08fr / 0.92fr, services 0.72fr / 1.28fr with a sticky left column at top 7rem) that collapse to a single column below 1024px. The header is a 4.5rem sticky bar; anchored sections reserve 5.5rem scroll margin. On phones a fixed call bar sits at the bottom, so the footer carries extra bottom padding (7rem) below 1024px.

The planner grid is literal: day-column rules repeat at `100% / 7` across the full section width, and week rows are 7-column grids with 4 to 6px gaps. Breakpoints: 640px, 768px (service rows go two-column), 1024px (navigation, two-column layouts).

**The Seven Columns Rule.** Any calendar-like element divides into exactly seven equal columns, Monday first. Examples are always labeled as examples, never as a schedule.

## Elevation & Depth

Hybrid: tonal layering does most of the work (paper under white cards, navy-800 cards on navy-900), and two soft, navy-tinted shadows lift interactive or floating panels. Shadows are layered (a tight contact shadow plus a long negative-spread drop) so they read as paper resting on a desk, not as stickers.

### Shadow Vocabulary
- **Card** (`0 1px 2px rgb(11 31 58 / 0.06), 0 8px 24px -12px rgb(11 31 58 / 0.18)`): resting cards, closed FAQ items, the service table, image figures, primary hero call.
- **Lift** (`0 2px 4px rgb(11 31 58 / 0.08), 0 22px 44px -20px rgb(11 31 58 / 0.35)`): floating or focal panels: the week-strip card over the hero photo, the ride check, the contact form, an open FAQ item.

**The Soft Offset Rule.** Shadows are blurred, navy-tinted, and negatively spread. No hard, zero-blur offsets.

## Shapes

Corners scale with the element: 6px for day blocks and small marks, 8px for compact buttons, 12px for primary buttons, inputs, choices, and icon tiles, 16px for cards, notices, and FAQ items, 24px for the large panels (service table, ride check, contact form, wide photos). Pills (full) for filter chips, the "Example" tag, step-number discs, and the FAQ toggle disc. Borders are 1px hairlines; dashed 1px rule-strong marks an open, unbooked day; a 2px route-600 outline marks a "call MAS" day. (The direction contract named 10 to 14px; the build settled on this wider 6 to 24px scale.)

## Components

### Buttons
Tactile, large, and plain-spoken; the primary is always a phone call.
- **Shape:** 12px corners for full-size, 8px for the compact header call.
- **Primary:** route-600 fill, white bold 1.125rem text, 16px by 24px, Lucide phone icon (2.4 stroke) leading, the number in regular weight route-100 tabular figures beside the label.
- **Hover / Focus:** fill lifts to route-500 with a 2px rise (200ms); focus is a 3px route-500 outline at 3px offset (route-300 inside navy regions). Pressed on mobile: route-700.
- **Outline on navy:** transparent with a 1px white/25 border; hover brightens the border to white/60 and adds a white/5 wash.
- **Text button:** route-700 bold small text, hover to navy-900.

### Chips
- **Style:** pill, 40px minimum height, 1px rule-strong border, white fill, navy text, tabular count in ink-faint.
- **State:** active filter inverts to navy-900 fill, white text, route-300 count; hover border route-500.

### Cards / Containers
- **Corner Style:** 16px standard, 24px for large panels.
- **Background:** white on paper; paper on white sections; navy-800 at 70% on navy.
- **Shadow Strategy:** Card at rest, Lift for focal panels (see Elevation & Depth).
- **Border:** 1px rule on light grounds, white/10 on navy.
- **Internal Padding:** 20px to 36px, stepping up at 640px.

### Inputs / Fields
- **Style:** paper fill, 1px rule-strong border, 12px corners, 12px by 16px padding, 1.02rem text, bold navy label above with a route-600 asterisk for required.
- **Focus:** fill turns white, 3px route-500 outline at 1px offset; hover border route-500.
- **Error:** border and message in alert, message bold with a leading alert icon.

### Navigation
Sticky navy-900 bar at 95% with a light backdrop blur and white/10 bottom hairline. Links are 0.95rem medium in route-100 at 75%, white when hovered or current; the current section gets a 2px route-300 underline that scales in from center (300ms expo-out). Below 1024px a navy-950 full-screen menu lists links at 1.5rem display weight with day-column rules behind, followed by both phone lines as full-width buttons.

### Week Strip (signature)
A white card (95%, 16px corners, Lift shadow) labeled "Standing order" with an "Example" pill. Seven columns: booked days are route-600 blocks 64px tall carrying two white bars (pickup at 85%, ride home at 45%); open days are paper with a dashed rule-strong outline. Booked blocks grow downward once on load, left to right, 700ms expo-out with 110ms stagger; reduced motion disables it. A compact 36px-tall row of the same grammar labels each service.

### Ride Check (signature)
A three-row question panel where each row is a paper fieldset with large Yes / No choices (48px tall, 12px corners). The verdict appears only when every row is answered, in an info notice (route-100) or the Clay Alert notice for emergencies.

### FAQ Item
White 16px card with Card shadow; the closed header shows a tabular route-600 number and a paper-deep plus disc. Open, the header inverts to navy-900 with a route-300 number, the disc rotates 45 degrees, the border becomes route-300, and the shadow rises to Lift. The panel expands by grid-row transition (400ms expo-out). Answer bullets are 9px route-600 squares with 2px corners.

## Do's and Don'ts

### Do:
- **Do** keep the main office number visible at every scroll position: header call button at 1024px and up, fixed bottom call bar below.
- **Do** draw day-column rules at `100% / 7` behind planner sections (rule-strong at 38% on paper, route-300 at 8% on navy).
- **Do** use route-600 only for actions and booked-ride blocks, and set every number in tabular figures.
- **Do** use the Card and Lift shadows as specified; tonal layering first, shadow second.
- **Do** keep tap targets at 44px or more (48px for choices, about 56px for primary calls) and body text at 17px or larger.
- **Do** label any illustrative week as an example.

### Don't:
- **Don't** use the logo's red, or any warm hue other than Clay Alert, anywhere in the interface.
- **Don't** put uppercase tracked kickers or eyebrows above headings; headings stand on their own.
- **Don't** use hard, zero-blur offset shadows.
- **Don't** fill decorative shapes, section grounds, or icon tiles with route-600.
- **Don't** divide a calendar element into anything but seven columns, Monday first.
