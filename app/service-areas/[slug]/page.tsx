import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { JobCard } from "@/components/job-card"
import { AREAS, getArea } from "@/lib/areas"
import { SERVICES } from "@/lib/services"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = getArea(slug)
  if (!a) return {}
  const title = `Generator Repairs and Servicing in ${a.name}`
  const description = `Generator repairs, servicing and maintenance in ${a.name} for homes and businesses. Petrol, diesel, portable and canopy generators. Call Now or send a WhatsApp job card for a quote.`
  return {
    title, description,
    keywords: [`generator repairs ${a.name}`, `generator servicing ${a.name}`, `emergency generator repairs ${a.name}`, `generator technician ${a.name}`],
    alternates: { canonical: `/service-areas/${a.slug}` },
    openGraph: { title, description, url: `${SITE.url}/service-areas/${a.slug}`, images: [{ url: a.image }] },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = getArea(slug)
  if (!a) notFound()
  const nearby = AREAS.filter((x) => x.slug !== a.slug).slice(0, 6)
  const faqs = [
    { q: `Do you repair generators in ${a.name}?`, a: `Yes. Emergency Generator Repairs repairs, services and maintains petrol and diesel generators for homes and businesses in ${a.name} and the surrounding areas.` },
    { q: `How do I get a quote in ${a.name}?`, a: "Fill in the job card on this page. It opens in WhatsApp with your details ready to send. Add photos in the chat and we will come back with a quote." },
    { q: `Which suburbs near ${a.name} do you cover?`, a: `We cover ${a.places.join(", ")} and the wider Gauteng area, including ${nearby.slice(0, 3).map((n) => n.name).join(", ")}.` },
  ]
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: `Generator repairs in ${a.name}`, url: `${SITE.url}/service-areas/${a.slug}`, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "City", name: a.name, containedInPlace: { "@type": "AdministrativeArea", name: "Gauteng" } } }} />
      <PageHero crumbs={[{ name: "Areas", href: "/service-areas" }, { name: a.name, href: `/service-areas/${a.slug}` }]} title={`Generator repairs and servicing in ${a.name}`} mark={[a.name.split(" ")[0]]} text={a.context}>
        <CallButton />
        <WhatsAppButton message={`Hi Emergency Generator Repairs, I need help with a generator in ${a.name}.`} />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1fr]">
        <MovingImage src={a.image} alt={a.imageAlt} priority className="min-h-[360px] rounded-[2rem] lg:aspect-[4/5]" sizes="(min-width: 1024px) 40vw, 100vw" markWidth={52} />
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">Repairs and servicing in {a.name}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            When the power fails in {a.name}, a generator that will not run is a real problem. Send a job card, get a clear quote and a technician will repair it, usually on site.
          </p>
          <h3 className="mt-8 text-2xl font-bold">Suburbs we serve around {a.name}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {a.places.map((p) => <span key={p} className="rounded-full bg-white px-4 py-2 font-display text-lg font-semibold">{p}</span>)}
          </div>
          <h3 className="mt-8 text-2xl font-bold">What we do in {a.name}</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-base font-medium transition hover:bg-signal">
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-ink" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl">Send a job card from {a.name}</h2>
          <JobCard defaultArea={a.name} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-extrabold">Generator repairs in {a.name}: your questions</h2>
        <Faq items={faqs} />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-extrabold">Nearby areas</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {nearby.map((n) => <Link key={n.slug} href={`/service-areas/${n.slug}`} className="rounded-full border-2 border-ink px-5 py-2 font-display text-lg font-semibold transition hover:bg-signal">{n.name}</Link>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
