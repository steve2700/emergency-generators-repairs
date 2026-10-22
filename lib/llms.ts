import { SITE } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"

const head = `# Emergency Generator Repairs

> Emergency Generator Repairs repairs, services and maintains generators for homes and businesses across ${SITE.region}, South Africa. Services include emergency generator repairs, diesel generator repairs and engine overhauls, petrol and portable generator repairs, servicing and maintenance plans, changeover switch and electrical repairs, silent canopy and industrial generator repairs, and trailer mounted generator repairs. Engines and alternators: ${BRANDS.map((b) => b.name).join(", ")}.

Website: ${SITE.url}
Phone and WhatsApp: ${SITE.phoneDisplay}
Email: ${SITE.email}
Service area: ${SITE.region}
How to get a quote: send a WhatsApp job card from ${SITE.url}/contact with the generator brand and size, the problem, whether it is a home or business and the location, then add photos in the chat.
`

export function llmsShort() {
  let o = head + "\n## Services\n"
  for (const s of SERVICES) o += `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.short}\n`
  o += `\n## For homes and businesses\n- [Home generator repairs](${SITE.url}/home-generator-repairs)\n- [Business generator repairs](${SITE.url}/business-generator-repairs)\n`
  o += "\n## Engines and alternators\n"
  for (const b of BRANDS) o += `- [${b.name}](${SITE.url}/brands/${b.slug}): ${b.intro}\n`
  o += "\n## Areas\n"
  for (const a of AREAS) o += `- [Generator repairs in ${a.name}](${SITE.url}/service-areas/${a.slug})\n`
  o += `\n## Pages\n- [Contact and job card](${SITE.url}/contact)\n- [Gallery](${SITE.url}/gallery)\n- [About](${SITE.url}/about)\n- [FAQ](${SITE.url}/faq)\n- [Full content for AI](${SITE.url}/llms-full.txt)\n`
  return o
}

export function llmsFull() {
  let o = head + "\n## Services in detail\n"
  for (const s of SERVICES) {
    o += `\n### ${s.name}\nURL: ${SITE.url}/services/${s.slug}\n${s.answer}\n\n${s.intro}\n\nIncluded: ${s.includes.join("; ")}.\nCall us when: ${s.signs.join("; ")}.\n`
    for (const f of s.faqs) o += `\nQ: ${f.q}\nA: ${f.a}\n`
  }
  o += "\n## Engines and alternators\n"
  for (const b of BRANDS) o += `\n### ${b.name}\nURL: ${SITE.url}/brands/${b.slug}\n${b.intro}\n`
  o += "\n## Areas\n"
  for (const a of AREAS) o += `\n### Generator repairs in ${a.name}\nURL: ${SITE.url}/service-areas/${a.slug}\n${a.context} Suburbs: ${a.places.join(", ")}.\n`
  return o
}
