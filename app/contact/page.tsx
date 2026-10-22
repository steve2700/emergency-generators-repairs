import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { JobCard } from "@/components/job-card"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { JsonLd } from "@/components/json-ld"
import { PhotoStrip } from "@/components/photo-strip"
import { SITE, WA_LINK } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Emergency Generator Repairs and Get a Free Quote",
  description: "Call Emergency Generator Repairs, send a WhatsApp job card or email us for generator repairs, servicing and maintenance across Gauteng and its outskirts.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE.url}/contact`, mainEntity: { "@id": `${SITE.url}/#business` } }} />
      <PageHero crumbs={[{ name: "Contact", href: "/contact" }]} title="Power out? Call us, or send a job card" mark={["Call"]} image={{ src: "/technicians-servicing-nexus-generator.jpg", alt: "Technicians repairing a generator on site" }} text="For a breakdown, call now. For a quote, the job card below is the fastest way." />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-4 rounded-[2rem] bg-signal p-6 text-ink transition hover:bg-signal-dark">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-signal"><PhoneIcon className="h-6 w-6" /></span>
            <span><span className="block font-display text-lg">Call Now</span><span className="font-display text-2xl font-extrabold">{SITE.phoneDisplay}</span></span>
          </a>
          <a href={WA_LINK("Hi Emergency Generator Repairs, I need help with my generator.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[2rem] bg-[#25D366] p-6 text-ink transition hover:bg-[#1fbd5b]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-[#25D366]"><WhatsAppIcon className="h-7 w-7" /></span>
            <span><span className="block font-display text-lg">WhatsApp</span><span className="font-display text-2xl font-extrabold">Chat with us</span></span>
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 rounded-[2rem] bg-ink p-6 text-white transition hover:bg-graphite">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white font-display text-2xl font-bold text-ink">@</span>
            <span className="min-w-0"><span className="block font-display text-lg">Email</span><span className="block break-words font-display text-lg font-bold">{SITE.email}</span></span>
          </a>
        </div>
      </section>
      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-4xl font-extrabold leading-[1.05] md:text-5xl">Your job card</h2>
          <JobCard />
        </div>
      </section>
      <section className="py-16">
        <p className="mx-auto mb-8 max-w-7xl px-5 font-display text-3xl font-bold">We operate across Gauteng and its outskirts</p>
        <PhotoStrip />
      </section>
    </>
  )
}
