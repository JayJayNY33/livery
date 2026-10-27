import { ArrowDown, ArrowRight, MessageSquarePlus, Phone } from 'lucide-react'
import { PHONES } from '../data/site'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="on-navy relative overflow-hidden bg-navy-900 text-white">
      <div className="planner-rules-navy pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <h1
            id="hero-title"
            className="order-1 text-[clamp(2.6rem,5.6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.035em]"
          >
            Reliable Transportation.{' '}
            <span className="text-route-300">Courteous Drivers. Comfortable Rides.</span>
          </h1>
          <p className="order-3 mt-6 max-w-[34rem] text-title-sm leading-relaxed text-route-100/90 sm:text-lead">
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

          <a
            href="#how-it-works"
            className="order-5 mt-5 inline-flex min-h-11 items-center gap-2 self-start font-bold text-route-100 underline decoration-route-300/50 underline-offset-4 hover:text-white"
          >
            Using Medicaid? See how it works
            <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="relative mx-auto flex w-full max-w-[34rem] flex-col justify-center lg:max-w-none">
          <div className="relative overflow-hidden rounded-[1.25rem] shadow-[0_40px_80px_-40px_rgb(0_0_0/0.7)] ring-1 ring-white/10">
            <img
              src="/images/hero-960.webp"
              srcSet="/images/hero-640.webp 640w, /images/hero-960.webp 960w, /images/hero-1280.webp 1280w"
              sizes="(min-width: 1024px) 40vw, 92vw"
              width={1280}
              height={1010}
              alt="A helper holds a passenger's hands to steady them as they step out of a car"
              className="aspect-[5/4] w-full object-cover"
              {...{ fetchpriority: "high" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/55 to-transparent"
              aria-hidden="true"
            />
          </div>
          <a
            href="/reviews#write"
            className="group mt-5 inline-flex min-h-11 items-center gap-3 self-start rounded-xl border border-white/25 px-5 py-3 font-display text-title font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/5 lg:self-end"
          >
            <MessageSquarePlus aria-hidden="true" className="size-6 text-route-300" strokeWidth={2} />
            Leave us a review
            <ArrowRight aria-hidden="true" className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
