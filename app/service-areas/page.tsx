import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { AREAS } from "@/lib/areas"

export const metadata: Metadata = {
  title: "Generator Repairs Across Gauteng, Areas We Cover",
  description: "Emergency Generator Repairs serves Johannesburg, Sandton, Pretoria, Centurion, Midrand, Randburg, Roodepoort, Krugersdorp, Germiston, Kempton Park, Boksburg and Benoni.",
  alternates: { canonical: "/service-areas" },
}

export default function AreasPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Areas", href: "/service-areas" }]} title="Generator repairs across Gauteng and its outskirts" mark={["Gauteng"]} image={{ src: "/industrial-generator-exterior.jpg", alt: "Silent industrial generator installed outside" }} text="Find your area to see how we help homes and businesses near you.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <Link key={a.slug} href={`/service-areas/${a.slug}`} className="group relative block overflow-hidden rounded-[2rem]">
              <MovingImage src={a.image} alt={a.imageAlt} variant={i} className="aspect-[4/3]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-20 text-white">
                <h2 className="text-3xl font-extrabold leading-none">{a.name}</h2>
                <p className="mt-1 text-silver">Generator repairs and servicing</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
