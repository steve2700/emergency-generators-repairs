import type { Metadata } from "next"
import { AudiencePage, type Audience } from "@/components/audience-page"

export const metadata: Metadata = {
  title: "Business Generator Repairs and Maintenance in Gauteng",
  description: "Business generator repairs, servicing and maintenance plans in Gauteng. Silent canopy and industrial standby generators kept ready for every outage. Call Now or send a WhatsApp job card.",
  keywords: ["business generator repairs Gauteng", "commercial generator maintenance", "industrial generator service Johannesburg", "standby generator maintenance plan", "silent canopy generator repairs"],
  alternates: { canonical: "/business-generator-repairs" },
}

const a: Audience = {
  crumb: { name: "Business generators", href: "/business-generator-repairs" },
  site: "Business",
  title: "Business generator repairs that keep your doors open",
  mark: ["open"],
  text: "When the grid fails, your generator is what keeps stock cold, tills running and staff working. We repair, service and maintain standby generators so they work when you need them.",
  image: { src: "/industrial-generator-exterior.jpg", alt: "Silent industrial generator installed outside a business" },
  problemsTitle: "The problems we hear from business owners",
  problems: [
    { t: "It did not start when the power failed", d: "Standby generators that are not maintained often fail in the first outage. We fix the cause and test the auto start so it does not happen again." },
    { t: "It started but the business stayed dark", d: "A faulty changeover or distribution board stops power reaching the building. We repair and prove it with a power cut test." },
    { t: "We cannot afford the downtime", d: "A maintenance plan costs far less than a day of lost trading. We service on a schedule and keep a record." },
  ],
  services: ["silent-canopy-and-industrial-generator-repairs", "generator-servicing-and-maintenance", "diesel-generator-repairs-and-engine-overhauls", "changeover-switches-and-electrical-repairs"],
  planTitle: "A maintenance routine that prevents the 2am call",
  planText: "We service business generators on a schedule and test them under load, so you find out about problems on a quiet Tuesday and not during an outage.",
  faqs: [
    { q: "Do you offer maintenance plans for businesses?", a: "Yes. Tell us how many generators you have and how often they run, and we will set up a schedule that fits." },
    { q: "Can you repair silent canopy and industrial generators?", a: "Yes. We repair diesel engines, controllers, auto start systems and changeover panels on canopy and industrial sets." },
    { q: "Do you provide a service record?", a: "Yes. We record what was done on every service so you can show insurers and auditors that the generator is maintained." },
    { q: "Do you cover more than one site?", a: "Yes, across Gauteng and its outskirts. Send the details of each site on a job card or call us." },
  ],
}

export default function Page() {
  return <AudiencePage a={a} />
}
