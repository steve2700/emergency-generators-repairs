import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CtaBand } from "@/components/cta-band"
import { BrandTicker } from "@/components/brand-ticker"
import { PhotoStrip } from "@/components/photo-strip"
import { WordReveal } from "@/components/word-reveal"
import { CallButton, LinkButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "About Emergency Generator Repairs",
  description: "Emergency Generator Repairs repairs, services and maintains generators for homes and businesses across Gauteng. Learn how we work and what to expect.",
  alternates: { canonical: "/about" },
}

const points = [
  { t: "Diagnose first", d: "We find the real fault before we quote, so you only pay for what the generator needs." },
  { t: "Quote before work", d: "Every job starts with a clear price. No surprises when the technician packs up." },
  { t: "Repair on site", d: "Most repairs are done at your home or business, so you do not have to move a heavy generator." },
  { t: "Honest advice", d: "If a repair does not make sense, we say so and help you decide what to do next." },
]

export default function AboutPage() {
  return (
    <>
      {/* TODO: replace the copy below with the owner's real story, years in business and team details. */}
      <PageHero crumbs={[{ name: "About", href: "/about" }]} title="Generator technicians you can call when the power is out" mark={["call"]} image={{ src: "/technicians-servicing-nexus-generator.jpg", alt: "Technicians servicing a generator engine" }} text="Emergency Generator Repairs repairs, services and maintains generators for homes and businesses across Gauteng.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <WordReveal text="We built this around one problem: the power is out and the generator will not run" className="text-3xl font-extrabold leading-[1.1] md:text-4xl" />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            A generator that fails in an outage is worse than no generator at all, because you were counting on it. We repair petrol and diesel generators, service them before they fail, and keep homes and businesses running.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            Our technicians work on engines, alternators, changeover switches and distribution boards, so one call covers the whole system.
          </p>
        </div>
        <MovingImage src="/technicians-testing-silent-diesel-generators.jpg" alt="Technicians testing silent diesel generators" className="aspect-square max-h-[540px] w-full rounded-[2rem]" priority markWidth={52} />
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          {points.map((p) => (
            <div key={p.t} className="border-l-4 border-signal pl-6">
              <h3 className="text-2xl font-bold">{p.t}</h3>
              <p className="mt-2 max-w-md text-lg text-graphite">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <BrandTicker />
      <section className="py-20"><PhotoStrip /></section>
      <CtaBand />
    </>
  )
}
