import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JobCard } from "@/components/job-card"
import { MaintenanceSteps } from "@/components/maintenance-steps"
import { WordReveal } from "@/components/word-reveal"
import { SERVICES } from "@/lib/services"

export interface Audience {
  crumb: { name: string; href: string }
  site: "Home" | "Business"
  title: string
  mark: string[]
  text: string
  image: { src: string; alt: string }
  problemsTitle: string
  problems: { t: string; d: string }[]
  services: string[]
  planTitle: string
  planText: string
  faqs: { q: string; a: string }[]
}

export function AudiencePage({ a }: { a: Audience }) {
  const list = a.services.map((s) => SERVICES.find((x) => x.slug === s)!).filter(Boolean)
  return (
    <>
      <PageHero crumbs={[a.crumb]} title={a.title} mark={a.mark} text={a.text} image={a.image}>
        <CallButton />
        <WhatsAppButton message={`Hi Emergency Generator Repairs, I need help with a ${a.site.toLowerCase()} generator.`} />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <WordReveal text={a.problemsTitle} className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {a.problems.map((p, i) => (
            <div key={p.t} className="rounded-3xl bg-white p-7">
              <span className="font-mono text-sm text-chrome">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-2xl font-bold leading-tight">{p.t}</h3>
              <p className="mt-3 text-graphite">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <WordReveal text="How we fix it" className="text-4xl font-extrabold md:text-5xl" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block overflow-hidden rounded-[2rem] bg-steel transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="aspect-[4/3]" markWidth={36} sizes="(min-width: 1024px) 25vw, 100vw" />
                <div className="p-5">
                  <h3 className="text-xl font-bold leading-tight">{s.name}</h3>
                  <span className="mt-3 inline-block font-display font-bold underline decoration-signal decoration-4 underline-offset-4">View service</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <WordReveal text={a.planTitle} className="max-w-3xl text-4xl font-extrabold leading-[1.05] md:text-5xl" />
        <p className="mt-4 max-w-2xl text-lg text-graphite">{a.planText}</p>
        <div className="mt-10"><MaintenanceSteps /></div>
      </section>

      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <WordReveal text="Send a job card" className="mb-10 text-4xl font-extrabold md:text-5xl" />
          <JobCard defaultSite={a.site} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <WordReveal text="Your questions" className="mb-10 text-4xl font-extrabold md:text-5xl" />
        <Faq items={a.faqs} />
      </section>
      <CtaBand />
    </>
  )
}
