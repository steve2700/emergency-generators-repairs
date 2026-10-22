import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { HeroStage } from "@/components/hero-stage"
import { RotatingWord } from "@/components/rotating-word"
import { Typewriter } from "@/components/typewriter"
import { WordReveal } from "@/components/word-reveal"
import { ScrambleText } from "@/components/scramble-text"
import { ScrollText } from "@/components/scroll-text"
import { CountUp } from "@/components/count-up"
import { FaultFinder } from "@/components/fault-finder"
import { MaintenanceSteps } from "@/components/maintenance-steps"
import { BrandTicker } from "@/components/brand-ticker"
import { PhotoStrip } from "@/components/photo-strip"
import { MovingImage } from "@/components/moving-image"
import { JobCard } from "@/components/job-card"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"
import { FAULTS } from "@/lib/faults"

export const metadata: Metadata = {
  title: { absolute: "Emergency Generator Repairs | Home and Business Generator Repairs in Gauteng" },
  alternates: { canonical: "/" },
}

const faqs = [
  { q: "What areas do you cover?", a: "We operate across Gauteng and its outskirts, including Johannesburg, Sandton, Pretoria, Centurion, Midrand, Randburg, Roodepoort, Krugersdorp, Germiston, Kempton Park, Boksburg and Benoni." },
  { q: "Do you repair generators at my home or business?", a: "Yes. In most cases we repair on site. If a part must go to the workshop, we tell you first." },
  { q: "How do I get a quote?", a: "Fill in the job card on this page. It opens in WhatsApp, ready to send. Add photos of the generator and the fault and we will come back with a quote." },
  { q: "Which generators do you repair?", a: "Petrol and diesel generators, from small portable units to silent canopy and industrial sets. That includes sets with Perkins, Cummins, Volvo, Deutz, John Deere, Yanmar and Caterpillar engines, and Mecc Alte, Marelli Motori and Leroy Somer alternators." },
  { q: "Do you offer maintenance plans?", a: "Yes, for homes and businesses. Tell us about your generator and how often it runs and we will set up a service schedule." },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 h-[560px] w-[560px] rounded-full bg-signal/30 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="rise flex flex-wrap items-center gap-x-3 gap-y-2" style={{ animationDelay: "0ms" }}>
              <span className="rounded-md bg-ink px-2.5 py-1 font-mono text-xs tracking-widest text-signal">SOUND FAMILIAR?</span>
              <Typewriter className="min-h-[1.6em] font-mono text-sm text-graphite sm:text-base" lines={["It will not start.", "It cuts out after a minute.", "It will not switch over.", "It is making a knocking noise."]} />
            </div>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
              <span className="rise block" style={{ animationDelay: "120ms" }}>Generator repairs</span>
              <span className="rise my-1 block" style={{ animationDelay: "240ms" }}>
                for <RotatingWord words={["homes", "businesses", "shops", "farms", "workshops", "offices"]} className="rounded-2xl bg-signal px-4 pb-1" />
              </span>
              <span className="rise block" style={{ animationDelay: "360ms" }}>across Gauteng.</span>
            </h1>
            <WordReveal as="p" step={28} text="Emergency repairs, servicing and maintenance. Tell us what the generator is doing and we will tell you what it costs." className="mt-6 max-w-xl text-xl leading-relaxed text-graphite" />
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "600ms" }}>
              <CallButton pulse />
              <LinkButton href="/contact#job-card" look="outline">Get a Free Quote</LinkButton>
              <WhatsAppButton label="WhatsApp" />
            </div>
          </div>
          <div className="rise px-2 sm:px-8" style={{ animationDelay: "400ms" }}><HeroStage /></div>
        </div>
      </section>

      {/* Statement and facts */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <ScrambleText text="THE REASON WE EXIST" className="font-mono text-xs tracking-widest text-chrome" />
        <ScrollText className="mt-5 font-display text-3xl font-extrabold leading-[1.15] md:text-5xl" text="A generator that fails in an outage is worse than no generator at all, because you were counting on it. We repair them, service them before they fail, and keep homes and businesses running." />
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[[SERVICES.length, "repair services"], [AREAS.length, "Gauteng areas"], [BRANDS.length, "engine and alternator brands"], [FAULTS.length, "common faults explained"]].map(([n, l]) => (
            <div key={l as string} className="border-l-4 border-signal pl-4">
              <CountUp to={n as number} className="font-display text-6xl font-extrabold md:text-7xl" />
              <p className="mt-1 text-graphite">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who are you */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="mb-3"><ScrambleText text="01 WHO IS IT FOR" className="font-mono text-xs tracking-widest text-chrome" /></p>
        <WordReveal text="Who needs the generator fixed?" className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { href: "/home-generator-repairs", t: "My home", d: "Load shedding, power cuts, portable and standby generators.", img: "/residential-generator-unit.jpg", alt: "Residential generator unit at a home", n: ["Will not start", "No power at the sockets", "Changeover not working"] },
            { href: "/business-generator-repairs", t: "My business", d: "Silent canopy and industrial standby sets, kept ready for every outage.", img: "/industrial-generator-exterior.jpg", alt: "Silent industrial generator at a business", n: ["Did not start in an outage", "Maintenance plans", "Service records"] },
          ].map((c, i) => (
            <Link key={c.href} href={c.href} className="group relative block overflow-hidden rounded-[2rem] bg-ink text-white">
              <MovingImage src={c.img} alt={c.alt} variant={i} mark={false} className="absolute inset-0 opacity-50 transition duration-500 group-hover:opacity-70" sizes="(min-width: 768px) 50vw, 100vw" />
              <div className="relative flex min-h-[340px] flex-col justify-end bg-gradient-to-t from-ink via-ink/70 to-transparent p-8">
                <h3 className="text-4xl font-extrabold md:text-5xl">{c.t}</h3>
                <p className="mt-2 max-w-sm text-silver">{c.d}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{c.n.map((x) => <li key={x} className="rounded-full bg-white/15 px-3 py-1 text-sm">{x}</li>)}</ul>
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-signal px-5 py-2 font-display text-lg font-bold text-ink transition group-hover:gap-4">See how we help <span aria-hidden="true">&rarr;</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Fault finder */}
      <section className="bg-white py-20" id="fault-finder">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3"><ScrambleText text="02 DIAGNOSE IT" className="font-mono text-xs tracking-widest text-chrome" /></p>
        <WordReveal text="What is your generator doing?" className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" mark={["doing"]} />
          <p className="mt-4 max-w-2xl text-lg text-graphite">Pick what you are seeing. We will show the usual causes and what we do about them, and you can send it to us in one tap.</p>
          <div className="mt-10"><FaultFinder /></div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="mb-3"><ScrambleText text="03 THE REPAIRS" className="font-mono text-xs tracking-widest text-chrome" /></p>
        <WordReveal text="Every kind of generator repair" className="max-w-2xl text-4xl font-extrabold leading-[1.05] md:text-5xl" /></div>
          <LinkButton href="/services" look="dark" size="md">See all services</LinkButton>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="aspect-[4/3]" />
              <div className="p-6">
                <h3 className="text-2xl font-bold leading-tight">{s.name}</h3>
                <p className="mt-3 text-graphite">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-lg font-bold">
                  <span className="underline decoration-signal decoration-4 underline-offset-4">View service</span>
                  <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-signal text-ink transition group-hover:translate-x-1">&rsaquo;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Job card */}
      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3"><ScrambleText text="04 YOUR JOB CARD" className="font-mono text-xs tracking-widest text-signal" /></p>
        <WordReveal text="Send your job card on WhatsApp" className="text-4xl font-extrabold leading-[1.05] md:text-5xl" mark={["WhatsApp"]} />
            <p className="mt-4 text-xl text-silver">A few quick answers and your generator is in our queue. If the power is out, call us as well.</p>
          </div>
          <JobCard />
        </div>
      </section>

      {/* Maintenance */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <p className="mb-3"><ScrambleText text="05 PREVENT IT" className="font-mono text-xs tracking-widest text-chrome" /></p>
        <WordReveal text="Service it before the next outage" className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" mark={["before"]} />
        <p className="mt-4 max-w-2xl text-lg text-graphite">A generator that has been serviced starts first time. This is what a proper service covers.</p>
        <div className="mt-10"><MaintenanceSteps /></div>
        <div className="mt-8"><LinkButton href="/services/generator-servicing-and-maintenance" look="dark">See servicing and maintenance</LinkButton></div>
      </section>

      <BrandTicker />

      {/* Brands graphic and photos */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm">
          <Image src="/generator-brands-and-engines-logos.jpg" alt="Engine and alternator brands we repair: Volvo, Deutz, Perkins, Cummins, John Deere, Yanmar, Caterpillar, Marelli Motori, Mecc Alte and Leroy Somer" width={669} height={457} className="h-auto w-full" />
        </div>
        <div>
          <WordReveal text="Engines and alternators we know" className="text-4xl font-extrabold leading-[1.05] md:text-5xl" />
          <p className="mt-4 max-w-lg text-lg text-graphite">We repair generator sets built on the engines and alternators found in Gauteng homes and businesses. Find your brand to see how we help.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <LinkButton href="/brands/perkins" look="outline" size="md">Perkins</LinkButton>
            <LinkButton href="/brands/cummins" look="outline" size="md">Cummins</LinkButton>
            <LinkButton href="/brands" look="dark" size="md">All brands</LinkButton>
          </div>
        </div>
      </section>

      <section className="pb-20" aria-labelledby="work">
        <WordReveal as="h2" text="On the job" className="mx-auto mb-8 max-w-7xl px-5 text-4xl font-extrabold md:text-5xl" />
        <PhotoStrip />
      </section>

      {/* Areas */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-3"><ScrambleText text="06 NEAR YOU" className="font-mono text-xs tracking-widest text-chrome" /></p>
        <WordReveal text="Generator repairs near you in Gauteng" className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" />
          <p className="mt-4 max-w-2xl text-lg text-graphite">We operate across Gauteng and its outskirts. Find your area to see how we help.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`} className="rounded-full border-2 border-ink px-6 py-2.5 font-display text-xl font-semibold transition hover:bg-signal">{a.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <WordReveal text="Common questions" className="mb-10 text-4xl font-extrabold md:text-5xl" />
        <Faq items={faqs} />
      </section>

      <CtaBand />
    </>
  )
}
