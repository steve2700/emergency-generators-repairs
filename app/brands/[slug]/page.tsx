import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { JobCard } from "@/components/job-card"
import { BrandTicker } from "@/components/brand-ticker"
import { BRANDS, getBrand } from "@/lib/brands"
import { SERVICES } from "@/lib/services"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const b = getBrand(slug)
  if (!b) return {}
  const what = b.kind === "engine" ? `${b.name} generator repairs and servicing` : `${b.name} alternator and generator repairs`
  const title = `${what.charAt(0).toUpperCase()}${what.slice(1)} in Gauteng`
  const description = `${b.name} generator repairs, servicing and maintenance in Gauteng for homes and businesses. Fast diagnosis, clear quotes and repairs on site. Call Now or send a WhatsApp job card.`
  return {
    title, description,
    keywords: [`${b.name} generator repairs Gauteng`, `${b.name} generator service`, `${b.name} generator technician Johannesburg`, `${b.name} generator maintenance`],
    alternates: { canonical: `/brands/${b.slug}` },
    openGraph: { title, description, url: `${SITE.url}/brands/${b.slug}`, images: [{ url: "/og-image.png" }] },
  }
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const b = getBrand(slug)
  if (!b) notFound()
  const kind = b.kind === "engine" ? "engines" : "alternators"
  const faqs = [
    { q: `Do you repair generators with ${b.name} ${kind}?`, a: `Yes. Emergency Generator Repairs repairs, services and maintains generators with ${b.name} ${kind} for homes and businesses across Gauteng.` },
    { q: `Will you repair my ${b.name} generator on site?`, a: "In most cases yes. If a part must go to the workshop, we tell you first." },
    { q: `How do I get a quote for my ${b.name} generator?`, a: "Fill in the job card on this page. It opens in WhatsApp with your details ready to send. Add photos in the chat and we will come back with a quote." },
  ]
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: `${b.name} generator repairs`, url: `${SITE.url}/brands/${b.slug}`, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "AdministrativeArea", name: "Gauteng" }, brand: { "@type": "Brand", name: b.name } }} />
      <PageHero crumbs={[{ name: "Brands", href: "/brands" }, { name: b.name, href: `/brands/${b.slug}` }]} title={`${b.name} generator repairs in Gauteng`} mark={[b.name.split(" ")[0]]} text={b.intro} image={{ src: b.kind === "engine" ? "/diesel-generator-fawde-engine-bay.jpg" : "/generator-electrical-panel.jpg", alt: b.kind === "engine" ? "Diesel generator engine bay opened for service" : "Generator electrical panel and wiring" }}>
        <CallButton />
        <WhatsAppButton message={`Hi Emergency Generator Repairs, I need help with a ${b.name} generator.`} />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-3xl font-extrabold md:text-4xl">What we do for {b.name} generator owners</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-lg font-medium transition hover:bg-signal">
                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-ink" />{s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl">Send a job card for your {b.name} generator</h2>
          <JobCard defaultBrand={b.name} />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-extrabold">{b.name} generator repairs: your questions</h2>
        <Faq items={faqs} />
      </section>
      <BrandTicker title="Other engines and alternators we repair" />
      <CtaBand />
    </>
  )
}
