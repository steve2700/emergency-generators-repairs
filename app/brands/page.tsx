import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { BRANDS } from "@/lib/brands"

export const metadata: Metadata = {
  title: "Generator Engines and Alternators We Repair: Perkins, Cummins, Volvo and more",
  description: "We repair generators with Perkins, Cummins, Volvo, Deutz, John Deere, Yanmar and Caterpillar engines and Mecc Alte, Marelli Motori and Leroy Somer alternators across Gauteng.",
  alternates: { canonical: "/brands" },
}

export default function BrandsPage() {
  const engines = BRANDS.filter((b) => b.kind === "engine")
  const alts = BRANDS.filter((b) => b.kind === "alternator")
  const card = (b: (typeof BRANDS)[number]) => (
    <Link key={b.slug} href={`/brands/${b.slug}`} className="group rounded-[2rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="font-display text-4xl font-extrabold">{b.name}</p>
      <p className="mt-3 text-graphite">{b.intro}</p>
      <span className="mt-4 inline-block font-display text-lg font-bold underline decoration-signal decoration-4 underline-offset-4">Read more</span>
    </Link>
  )
  return (
    <>
      <PageHero crumbs={[{ name: "Brands", href: "/brands" }]} title="Generator engines and alternators we repair" mark={["repair"]} image={{ src: "/diesel-generator-fawde-engine-bay.jpg", alt: "Diesel generator engine bay opened for service" }} text="From small diesel sets to large canopy generators, we repair the engines and alternators in Gauteng homes and businesses.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] bg-white p-6"><Image src="/generator-brands-and-engines-logos.jpg" alt="Engine and alternator brands we repair" width={669} height={457} className="mx-auto h-auto w-full max-w-2xl" /></div>
        <h2 className="mt-16 text-3xl font-extrabold md:text-4xl">Engines</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{engines.map(card)}</div>
        <h2 className="mt-16 text-3xl font-extrabold md:text-4xl">Alternators</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{alts.map(card)}</div>
      </section>
      <CtaBand />
    </>
  )
}
