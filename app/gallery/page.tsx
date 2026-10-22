import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { BeforeAfter } from "@/components/before-after"
import { CtaBand } from "@/components/cta-band"
import { CallButton, LinkButton } from "@/components/buttons"
import { BA_BOARD } from "@/lib/services"

export const metadata: Metadata = {
  title: "Generator Repair Gallery",
  description: "Photos of generator repairs, servicing and electrical work by Emergency Generator Repairs across Gauteng, including a distribution board before and after.",
  alternates: { canonical: "/gallery" },
}

const photos: [string, string][] = [
  ["/industrial-generator-exterior.jpg", "Silent industrial generator installed outside"],
  ["/technicians-servicing-nexus-generator.jpg", "Technicians servicing a generator engine"],
  ["/portable-generators-lineup.jpg", "Portable generators lined up in a yard"],
  ["/trailer-mounted-generator.jpg", "Trailer mounted generator"],
  ["/diesel-generator-fawde-engine-bay.jpg", "Diesel generator engine bay"],
  ["/refurbished-small-petrol-generator-engine.jpg", "Refurbished small petrol generator engine"],
  ["/residential-generator-unit.jpg", "Residential generator unit"],
  ["/technicians-testing-silent-diesel-generators.jpg", "Technicians testing silent diesel generators"],
  ["/diesel-engine-piston-carbon-buildup.jpg", "Diesel engine pistons with carbon build up"],
  ["/team-generator-engine-valve-adjustment.jpg", "Team adjusting engine valves"],
  ["/dismantled-portable-generator-frame-before-repair.jpg", "Portable generator frame dismantled for repair"],
  ["/on-site-generator-canopy-service.jpg", "Technician servicing a canopy generator"],
  ["/onsite-portable-generator-maintenance.jpg", "Portable generator maintenance at a home"],
  ["/generator-base-frame-and-gaskets-rebuild.jpg", "Generator base frame and gaskets during a rebuild"],
  ["/commercial-yellow-generator.jpg", "Yellow commercial canopy generator"],
  ["/generator-cylinder-head-overhaul.jpg", "Generator cylinder head overhaul"],
  ["/generator-electrical-panel.jpg", "Generator changeover contactors and wiring"],
  ["/disassembled-generator-repair-kit.jpg", "Disassembled generator parts laid out"],
]

export default function GalleryPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Gallery", href: "/gallery" }]} title="Our work, on site and in the workshop" mark={["work"]} image={{ src: "/team-generator-engine-valve-adjustment.jpg", alt: "Team adjusting engine valves on a generator" }} text="Real generators, real repairs. Every job here started with a call or a job card.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
          <div className="max-w-md"><BeforeAfter item={BA_BOARD} /></div>
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Before and after</h2>
            <p className="mt-4 max-w-lg text-lg text-graphite">A tangled distribution board, rebuilt so it is safe, neat and easy to work on. Drag the slider to compare.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map(([src, alt], i) => (
            <MovingImage key={src} src={src} alt={alt} variant={i} className={`mb-5 break-inside-avoid rounded-[2rem] ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
