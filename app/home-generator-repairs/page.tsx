import type { Metadata } from "next"
import { AudiencePage, type Audience } from "@/components/audience-page"

export const metadata: Metadata = {
  title: "Home Generator Repairs and Servicing in Gauteng",
  description: "Home generator repairs, servicing and maintenance in Gauteng. Petrol, portable and standby generators fixed for load shedding and power cuts. Call Now or send a WhatsApp job card.",
  keywords: ["home generator repairs Gauteng", "load shedding generator repairs", "residential generator service", "portable generator repairs", "standby generator for home"],
  alternates: { canonical: "/home-generator-repairs" },
}

const a: Audience = {
  crumb: { name: "Home generators", href: "/home-generator-repairs" },
  site: "Home",
  title: "Home generator repairs for when the lights go out",
  mark: ["lights"],
  text: "Load shedding and power cuts are stressful enough. We repair and service portable and standby generators at your home, so your fridge, lights and internet keep running.",
  image: { src: "/residential-generator-unit.jpg", alt: "Residential generator unit installed at a home" },
  problemsTitle: "The problems we hear from homeowners",
  problems: [
    { t: "It will not start", d: "It sat all winter or all year and now the pull cord does nothing. Old fuel, a blocked carburettor or a flat battery is usually the cause." },
    { t: "It starts but nothing works", d: "The engine runs but the sockets are dead. That points to the alternator, a breaker or the wiring, and we test each one." },
    { t: "The changeover does not work", d: "The power goes off and the generator runs, but the house stays dark. We repair the changeover switch and distribution board." },
  ],
  services: ["petrol-and-portable-generator-repairs", "emergency-generator-repairs", "generator-servicing-and-maintenance", "changeover-switches-and-electrical-repairs"],
  planTitle: "Service it before the next outage",
  planText: "A yearly service is what separates a generator that starts first time from one that does not. This is what we do on every home service.",
  faqs: [
    { q: "Do you repair generators at my home?", a: "Yes. Most home generator repairs are done at your home. If a part must go to the workshop, we tell you first." },
    { q: "My generator has not run for months. Will it start?", a: "Often not. Old fuel gums up the carburettor. We clean or rebuild it, replace the fuel and service the generator." },
    { q: "How often should a home generator be serviced?", a: "At least once a year, and before load shedding season. Heavy use means more often." },
    { q: "Can you help me connect a generator safely?", a: "Yes. We repair changeover switches and distribution boards so a generator feeds your home safely. Please never plug a generator into a wall socket." },
  ],
}

export default function Page() {
  return <AudiencePage a={a} />
}
