export interface Area {
  slug: string
  name: string
  places: string[]
  context: string
  image: string
  imageAlt: string
}

export const AREAS: Area[] = [
  { slug: "johannesburg", name: "Johannesburg", places: ["Rosebank", "Melville", "Linden", "City Deep"],
    context: "In Johannesburg, a power cut can stop a business and a household at the same moment. We repair and service home and business generators across the city.",
    image: "/industrial-generator-exterior.jpg", imageAlt: "Silent industrial generator installed outside" },
  { slug: "sandton", name: "Sandton", places: ["Bryanston", "Morningside", "Rivonia", "Fourways"],
    context: "Sandton homes, offices and complexes depend on standby power. We repair, service and maintain generators and changeover systems.",
    image: "/residential-generator-unit.jpg", imageAlt: "Residential generator unit installed at a home" },
  { slug: "pretoria", name: "Pretoria", places: ["Menlo Park", "Brooklyn", "Silverton", "Waterkloof"],
    context: "From family homes in Waterkloof to workshops in Silverton, Pretoria runs on backup power when the grid fails.",
    image: "/technicians-servicing-nexus-generator.jpg", imageAlt: "Technicians servicing a generator engine" },
  { slug: "centurion", name: "Centurion", places: ["Irene", "Eldoraigne", "Lyttelton", "Samrand"],
    context: "Centurion estates, offices and industrial sites rely on generators. We keep them running with repairs and scheduled servicing.",
    image: "/technicians-testing-silent-diesel-generators.jpg", imageAlt: "Technicians testing silent diesel generators" },
  { slug: "midrand", name: "Midrand", places: ["Halfway House", "Kyalami", "Noordwyk", "Vorna Valley"],
    context: "Midrand businesses and homes cannot afford long outages. We repair and service diesel and petrol generators across Midrand.",
    image: "/diesel-generator-fawde-engine-bay.jpg", imageAlt: "Diesel generator engine bay" },
  { slug: "randburg", name: "Randburg", places: ["Northcliff", "Ferndale", "Fontainebleau", "Randpark Ridge"],
    context: "Randburg households use portable and standby generators every time the lights go out. We repair them fast and fairly.",
    image: "/portable-generators-lineup.jpg", imageAlt: "Portable generators lined up in a yard" },
  { slug: "roodepoort", name: "Roodepoort", places: ["Florida", "Constantia Kloof", "Weltevreden Park", "Wilgeheuwel"],
    context: "We repair petrol and diesel generators for homes and small businesses across Roodepoort and the West Rand.",
    image: "/refurbished-small-petrol-generator-engine.jpg", imageAlt: "Refurbished small petrol generator engine" },
  { slug: "krugersdorp", name: "Krugersdorp", places: ["Luipaardsvlei", "Chamdor", "Noordheuwel", "Krugersdorp West"],
    context: "Krugersdorp and the West Rand outskirts have many farms, workshops and homes that rely on their own power.",
    image: "/trailer-mounted-generator.jpg", imageAlt: "Trailer mounted generator" },
  { slug: "germiston", name: "Germiston", places: ["Wadeville", "Primrose", "Dinwiddie", "Elandsfontein"],
    context: "Germiston factories, workshops and homes use generators to keep working through outages. We repair and maintain them.",
    image: "/on-site-generator-canopy-service.jpg", imageAlt: "Technician servicing a canopy generator on site" },
  { slug: "kempton-park", name: "Kempton Park", places: ["Isando", "Rhodesfield", "Bonaero Park", "Birchleigh"],
    context: "Kempton Park businesses and households call us when the generator will not start or will not switch over.",
    image: "/team-generator-engine-valve-adjustment.jpg", imageAlt: "Team adjusting engine valves on a generator" },
  { slug: "boksburg", name: "Boksburg", places: ["Jet Park", "Parkrand", "Beyers Park", "Sunward Park"],
    context: "Boksburg warehouses, shops and homes depend on backup power. We repair and service generators of all sizes.",
    image: "/onsite-portable-generator-maintenance.jpg", imageAlt: "Technician maintaining a portable generator on site" },
  { slug: "benoni", name: "Benoni", places: ["Northmead", "Rynfield", "Lakefield", "Farrarmere"],
    context: "We repair and service home and business generators for Benoni and the East Rand.",
    image: "/dismantled-portable-generator-frame-before-repair.jpg", imageAlt: "Portable generator frame dismantled for repair" },
]

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug)
}

export const SITE_TYPES = ["Home", "Business"] as const
export const PROBLEMS = [
  "Will not start",
  "Starts then cuts out",
  "No power output",
  "Will not switch over",
  "Smoke or burning smell",
  "Noise or vibration",
  "Leak",
  "Service or maintenance",
  "Something else",
] as const
