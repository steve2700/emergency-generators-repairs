import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { MovingImage } from "@/components/moving-image"
import { BrandTicker } from "@/components/brand-ticker"
import { CallButton, WhatsAppButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "Generator Repair FAQ",
  description: "Answers to common questions about generator repairs, servicing, maintenance plans, quotes and areas covered by Emergency Generator Repairs in Gauteng.",
  alternates: { canonical: "/faq" },
}

const items = [
  { q: "What areas do you cover?", a: "We operate across Gauteng and its outskirts, including Johannesburg, Sandton, Pretoria, Centurion, Midrand, Randburg, Roodepoort, Krugersdorp, Germiston, Kempton Park, Boksburg and Benoni." },
  { q: "How do I get a quote?", a: "Complete the job card on our website. It opens in WhatsApp, ready to send. Add photos of the generator and the fault and we will come back with a quote." },
  { q: "My generator will not start. What should I check?", a: "Check that there is fuel, that the fuel is fresh, and that the battery is charged on electric start models. If it still will not start, call us. Please do not keep cranking it." },
  { q: "Do you repair generators at my home or business?", a: "Yes. In most cases we repair on site. If a part must go to the workshop, we tell you before we take it." },
  { q: "Which generators do you repair?", a: "Petrol and diesel generators, from small portable units to silent canopy and industrial sets, with engines such as Perkins, Cummins, Volvo, Deutz, John Deere, Yanmar and Caterpillar." },
  { q: "Do you offer maintenance plans?", a: "Yes. Tell us how many generators you have and how often they run and we will set up a schedule that fits your home or business." },
  { q: "How often should a generator be serviced?", a: "At least once a year, and more often if it runs a lot. Always follow the interval in your generator manual." },
  { q: "My generator runs but nothing powers up. Why?", a: "It is usually the alternator, the AVR, a tripped breaker or a fault in the changeover or wiring. We test each one to find it." },
  { q: "Is it worth repairing an old generator?", a: "Often yes. We diagnose first and give you an honest opinion, including when a repair does not make sense." },
]

export default function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} title="Generator repair questions, answered" mark={["answered"]} image={{ src: "/onsite-portable-generator-maintenance.jpg", alt: "Technician maintaining a portable generator at a home" }} text="Quick answers for homeowners and business owners.">
        <CallButton />
        <WhatsAppButton />
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
        <Faq items={items} />
        <div className="grid gap-5 self-start sm:grid-cols-2 lg:sticky lg:top-32 lg:grid-cols-1">
          <MovingImage src="/portable-generators-lineup.jpg" alt="Portable generators lined up in a yard" className="aspect-[4/3] rounded-[2rem]" />
          <MovingImage src="/refurbished-small-petrol-generator-engine.jpg" alt="Refurbished small petrol generator engine" className="aspect-[4/3] rounded-[2rem]" variant={1} />
        </div>
      </section>
      <BrandTicker />
      <CtaBand />
    </>
  )
}
