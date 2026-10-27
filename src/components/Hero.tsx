import { ArrowDown, ArrowRight, Phone, Star } from 'lucide-react'
import { PHONES } from '../data/site'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="on-navy relative overflow-hidden bg-navy-900 text-white">
      <div className="planner-rules-navy pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <h1
            id="hero-title"
            className="order-1 text-[clamp(2.6rem,6.2vw,5rem)] font-bold leading-[1.02] tracking-[-0.035em]"
          >
            Reliable Transportation.{' '}
            <span className="text-route-300">Drivers Who Treat You Like Family.</span>
          </h1>
          <p className="order-3 mt-6 max-w-[34rem] text-lg leading-relaxed text-route-100/90 sm:text-xl">
            Rides to doctor visits, dialysis, and therapy across Long Island, with a team that cares about every client.
          </p>

          <div className="order-4 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={PHONES.main.href}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-route-600 px-6 py-4 text-lg font-bold text-white shadow-card transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-route-500"
            >
              <Phone aria-hidden="true" className="size-5" strokeWidth={2.4} />
              <span>
                Call Us Today
                <span className="tabular ml-2 font-normal text-route-100">{PHONES.main.display}</span>
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-4 text-lg font-bold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5"
            >
              Explore Our Services
              <ArrowDown aria-hidden="true" className="size-5" />
            </a>
          </div>

          <p className="order-5 mt-6 text-[0.95rem] text-route-100/75">
            Medicaid rides are arranged through MAS at{' '}
            <a href={PHONES.mas.href} className="tabular font-bold text-white underline decoration-route-300/60">
              {PHONES.mas.display}
            </a>
            . Ask for Fast Track.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[1.25rem] shadow-[0_40px_80px_-40px_rgb(0_0_0/0.7)] ring-1 ring-white/10">
            <img
              src="/images/hero-960.webp"
              srcSet="/images/hero-640.webp 640w, /images/hero-960.webp 960w, /images/hero-1280.webp 1280w"
              sizes="(min-width: 1024px) 40vw, 92vw"
              width={1280}
              height={1600}
              alt="An older man in a navy vest steps into the back seat of a dark sedan on a tree-lined street"
              className="aspect-[4/5] w-full object-cover object-[60%_center]"
              {...{ fetchpriority: "high" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/55 to-transparent"
              aria-hidden="true"
            />
            <a
              href="/reviews#write"
              className="group absolute right-3 top-3 flex flex-col items-start gap-1.5 rounded-2xl bg-white/95 px-4 py-3 text-navy-900 shadow-lift backdrop-blur-sm transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 sm:right-4 sm:top-4 sm:px-5 sm:py-4"
            >
              <span className="inline-flex gap-0.5" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-5 fill-sun-500 text-sun-500 sm:size-6" strokeWidth={1.5} />
                ))}
              </span>
              <span className="inline-flex items-center gap-2 font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-bold leading-none tracking-[-0.02em]">
                Write a review
                <ArrowRight
                  aria-hidden="true"
                  className="size-6 text-route-600 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
