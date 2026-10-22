export interface Brand {
  slug: string
  name: string
  kind: "engine" | "alternator"
  intro: string
}

const engine = (name: string, slug: string, extra: string): Brand => ({
  slug, name, kind: "engine",
  intro: `We repair, service and maintain generators powered by ${name} engines. ${extra}`,
})
const alt = (name: string, slug: string): Brand => ({
  slug, name, kind: "alternator",
  intro: `We test and repair generator sets fitted with ${name} alternators, including output faults, AVR problems and wiring faults.`,
})

export const BRANDS: Brand[] = [
  engine("Perkins", "perkins", "Diesel generator repairs, overhauls and servicing for homes and businesses."),
  engine("Cummins", "cummins", "Diesel generator repairs, servicing and maintenance plans."),
  engine("Volvo", "volvo", "Diesel generator repairs, servicing and fault finding."),
  engine("Deutz", "deutz", "Air and water cooled diesel generator repairs and servicing."),
  engine("John Deere", "john-deere", "Diesel generator repairs, servicing and engine work."),
  engine("Yanmar", "yanmar", "Small and medium diesel generator repairs and servicing."),
  engine("Caterpillar", "caterpillar", "CAT diesel generator repairs, servicing and fault finding."),
  alt("Mecc Alte", "mecc-alte"),
  alt("Marelli Motori", "marelli-motori"),
  alt("Leroy Somer", "leroy-somer"),
]

export function getBrand(slug: string) {
  return BRANDS.find((b) => b.slug === slug)
}
