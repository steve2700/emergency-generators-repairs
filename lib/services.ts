export interface BeforeAfterItem {
  title: string
  before: string
  after: string
  ratio: string
  caption: string
  alt: string
}

export interface Service {
  slug: string
  name: string
  short: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  image: string
  imageAlt: string
  headline: string
  intro: string
  answer: string
  problem: string
  includes: string[]
  signs: string[]
  process?: { src: string; alt: string; caption: string }[]
  gallery?: BeforeAfterItem[]
  faqs: { q: string; a: string }[]
}

export const BA_BOARD: BeforeAfterItem = {
  title: "Distribution board rewired",
  before: "/electrical-distribution-board-before.jpg",
  after: "/electrical-distribution-board-after.jpg",
  ratio: "5 / 8",
  caption: "A tangled board with loose wiring, rebuilt with neat, labelled and safe connections.",
  alt: "Electrical distribution board before and after rewiring",
}

export const SERVICES: Service[] = [
  {
    slug: "emergency-generator-repairs",
    name: "Emergency Generator Repairs",
    short: "Generator will not start, cuts out or gives no power? We find the fault and fix it.",
    metaTitle: "Emergency Generator Repairs in Gauteng",
    metaDescription:
      "Emergency generator repairs for homes and businesses in Gauteng. Generator will not start, cuts out or gives no power? Call Now or send a WhatsApp job card for a fast quote.",
    keywords: ["emergency generator repairs Gauteng", "generator repairs Johannesburg", "generator will not start", "generator technician near me", "generator breakdown repairs"],
    image: "/technicians-servicing-nexus-generator.jpg",
    imageAlt: "Technicians repairing a generator engine on site",
    headline: "Emergency generator repairs for homes and businesses",
    intro:
      "When the power is out and the generator will not run, every hour matters. We diagnose the fault, give you a clear quote and repair petrol and diesel generators of all sizes across Gauteng.",
    answer:
      "Emergency Generator Repairs fixes generators that will not start, cut out, give no power or will not switch over, for homes and businesses across Gauteng, with a clear quote before work begins.",
    problem: "Will not start",
    includes: [
      "Fault finding on petrol and diesel generators",
      "Starting, fuel and ignition repairs",
      "Carburettor and fuel pump work",
      "Battery, starter and charging repairs",
      "Overheating and cooling faults",
      "Repairs on site where possible",
    ],
    signs: ["Will not start", "Starts then cuts out", "No power at the sockets", "Smoke, noise or leaks", "Failed when the power went off"],
    process: [
      { src: "/team-generator-engine-valve-adjustment.jpg", alt: "Technicians adjusting engine valves on a generator", caption: "Valve adjustment" },
      { src: "/onsite-portable-generator-maintenance.jpg", alt: "Technician repairing a portable generator at a home", caption: "Repair at your home" },
      { src: "/technicians-testing-silent-diesel-generators.jpg", alt: "Technicians testing silent diesel generators", caption: "Testing under load" },
    ],
    faqs: [
      { q: "Do you repair generators at my home or business?", a: "Yes. In most cases we repair on site. If a part must go to the workshop we tell you first." },
      { q: "Which generators do you repair?", a: "Petrol and diesel generators, from small portable units to silent canopy sets, including sets with Perkins, Cummins, Volvo, Deutz, John Deere, Yanmar and Caterpillar engines." },
      { q: "How do I get a quote?", a: "Send a WhatsApp job card with the generator brand, what it is doing and your area. Add photos in the chat and we will come back with a quote." },
    ],
  },
  {
    slug: "diesel-generator-repairs-and-engine-overhauls",
    name: "Diesel Generator Repairs and Engine Overhauls",
    short: "Diesel engine repairs, valve work, cylinder heads and full overhauls.",
    metaTitle: "Diesel Generator Repairs and Engine Overhauls in Gauteng",
    metaDescription:
      "Diesel generator repairs and engine overhauls in Gauteng. Cylinder heads, pistons, valves, injectors and smoke or knocking faults repaired. Call Now or send a WhatsApp job card.",
    keywords: ["diesel generator repairs Gauteng", "generator engine overhaul", "diesel generator service Johannesburg", "Perkins generator repairs", "cylinder head overhaul generator"],
    image: "/diesel-generator-fawde-engine-bay.jpg",
    imageAlt: "Diesel generator engine bay opened for repair",
    headline: "Diesel generator repairs and engine overhauls",
    intro:
      "A diesel engine that smokes, knocks or loses power is telling you something. We strip, inspect and repair the engine so the generator is reliable the next time it is needed.",
    answer:
      "Emergency Generator Repairs repairs and overhauls diesel generator engines in Gauteng, including cylinder heads, pistons, valves and injectors, for sets with Perkins, Cummins, Volvo, Deutz and other engines.",
    problem: "Smoke or burning smell",
    includes: [
      "Cylinder head and valve work",
      "Piston, ring and liner repairs",
      "Injector and fuel pump repairs",
      "Turbo and cooling system repairs",
      "Full engine strip down and overhaul",
      "Gasket sets, seals and fresh fluids",
    ],
    signs: ["Blue, black or white smoke", "Heavy knocking", "Loss of power under load", "Oil use going up", "Hard starting when warm"],
    process: [
      { src: "/diesel-engine-piston-carbon-buildup.jpg", alt: "Diesel engine pistons with heavy carbon build up", caption: "Carbon build up found" },
      { src: "/generator-cylinder-head-overhaul.jpg", alt: "Generator cylinder head overhaul", caption: "Cylinder head overhaul" },
      { src: "/team-generator-engine-valve-adjustment.jpg", alt: "Team adjusting valves on a generator engine", caption: "Valve adjustment" },
    ],
    faqs: [
      { q: "Is an overhaul better than replacing the generator?", a: "Often yes. A properly overhauled engine costs far less than a new set. We inspect first and tell you honestly which option makes sense." },
      { q: "Which diesel engines do you work on?", a: "Perkins, Cummins, Volvo, Deutz, John Deere, Yanmar and Caterpillar, among others." },
    ],
  },
  {
    slug: "petrol-and-portable-generator-repairs",
    name: "Petrol and Portable Generator Repairs",
    short: "Portable and small petrol generators repaired, serviced and refurbished.",
    metaTitle: "Petrol and Portable Generator Repairs in Gauteng",
    metaDescription:
      "Petrol and portable generator repairs in Gauteng. Carburettors, spark plugs, recoil starters, engine rebuilds and refurbishments for home generators. Call Now or send a job card.",
    keywords: ["portable generator repairs Gauteng", "petrol generator repairs Johannesburg", "generator carburettor repair", "home generator service", "generator engine rebuild"],
    image: "/refurbished-small-petrol-generator-engine.jpg",
    imageAlt: "Refurbished small petrol generator engine",
    headline: "Petrol and portable generator repairs",
    intro:
      "Portable generators work hard during load shedding and they fail at the worst time. We repair carburettors, starters and engines, and we refurbish tired units so they run like they should.",
    answer:
      "Emergency Generator Repairs repairs and services petrol and portable generators for Gauteng homes, including carburettors, recoil starters, spark plugs, engine rebuilds and refurbishment.",
    problem: "Will not start",
    includes: [
      "Carburettor cleaning and repair",
      "Spark plug, coil and ignition faults",
      "Recoil and electric starter repairs",
      "Engine rebuilds and refurbishment",
      "Fuel system and tank cleaning",
      "Oil changes and full services",
    ],
    signs: ["Pull cord does nothing", "Runs rough or surges", "Will not hold a load", "Old fuel has gummed it up", "Smoking or leaking"],
    process: [
      { src: "/dismantled-portable-generator-frame-before-repair.jpg", alt: "Portable generator frame dismantled before repair", caption: "Stripped for repair" },
      { src: "/portable-generators-lineup.jpg", alt: "Portable generators lined up after service", caption: "Serviced and ready" },
      { src: "/onsite-portable-generator-maintenance.jpg", alt: "Technician servicing a portable generator at a home", caption: "Service at your home" },
    ],
    faqs: [
      { q: "Is it worth repairing an old petrol generator?", a: "Usually yes. Most petrol generator faults are fuel or ignition problems that cost far less to fix than a new generator." },
      { q: "Why will my generator not start after months in storage?", a: "Old petrol leaves gum in the carburettor. Cleaning or rebuilding the carburettor and replacing the fuel usually fixes it." },
    ],
  },
  {
    slug: "generator-servicing-and-maintenance",
    name: "Generator Servicing and Maintenance",
    short: "Scheduled services and maintenance plans so your generator works when the power fails.",
    metaTitle: "Generator Servicing and Maintenance in Gauteng",
    metaDescription:
      "Generator servicing and maintenance plans for homes and businesses in Gauteng. Oil, filters, battery, load testing and changeover tests. Call Now or send a WhatsApp job card.",
    keywords: ["generator servicing Gauteng", "generator maintenance plans", "generator service Johannesburg", "generator load test", "preventative generator maintenance"],
    image: "/technicians-testing-silent-diesel-generators.jpg",
    imageAlt: "Technicians servicing and testing silent diesel generators",
    headline: "Generator servicing and maintenance before the next outage",
    intro:
      "The best time to service a generator is before you need it. We service and load test generators, and we set up maintenance plans for homes, offices and businesses so nothing is left to chance.",
    answer:
      "Emergency Generator Repairs services and maintains generators across Gauteng, including oil and filters, battery checks, load testing and changeover tests, with maintenance plans for homes and businesses.",
    problem: "Service or maintenance",
    includes: [
      "Oil and filter changes",
      "Fuel system and air filter service",
      "Battery and starter test",
      "Coolant, hoses and belts check",
      "Load test and output check",
      "Changeover test and service record",
    ],
    signs: ["Service interval is due", "Has not run for months", "Load shedding season is coming", "New generator needs its first service", "You want a maintenance plan"],
    process: [
      { src: "/on-site-generator-canopy-service.jpg", alt: "Technician servicing a canopy generator on site", caption: "On site service" },
      { src: "/technicians-servicing-nexus-generator.jpg", alt: "Technicians servicing a generator engine", caption: "Full engine service" },
      { src: "/generator-engine-maintenance.jpg", alt: "Generator engine during maintenance", caption: "Engine maintenance" },
    ],
    faqs: [
      { q: "How often should a generator be serviced?", a: "Most generators should be serviced at least once a year, and more often if they run a lot. Follow the interval in the generator manual." },
      { q: "Do you offer maintenance plans for businesses?", a: "Yes. Tell us how many generators you have and how often they run, and we will set up a schedule that fits." },
      { q: "Do you load test generators?", a: "Yes. A load test shows whether the generator can really carry your load, which a simple start does not." },
    ],
  },
  {
    slug: "changeover-switches-and-electrical-repairs",
    name: "Changeover Switches and Electrical Repairs",
    short: "Changeover switches, distribution boards, alternator and AVR faults repaired.",
    metaTitle: "Generator Changeover and Electrical Repairs in Gauteng",
    metaDescription:
      "Generator changeover switch, distribution board and alternator repairs in Gauteng. Generator runs but no power or will not switch over? Call Now or send a WhatsApp job card.",
    keywords: ["generator changeover switch", "generator electrical repairs Gauteng", "alternator AVR repair", "distribution board repair", "generator will not switch over"],
    image: "/electrical-distribution-board-after.jpg",
    imageAlt: "Neatly rewired electrical distribution board",
    headline: "Changeover switches and electrical repairs",
    intro:
      "A generator that runs but does not power the building is an electrical fault. We test changeover switches, distribution boards, alternators and wiring, and repair what has failed.",
    answer:
      "Emergency Generator Repairs repairs changeover switches, distribution boards, alternators and AVRs across Gauteng, fixing generators that run but give no power or will not switch over.",
    problem: "Will not switch over",
    gallery: [BA_BOARD],
    includes: [
      "Changeover switch and contactor repairs",
      "Distribution board rewiring and upgrades",
      "Alternator and AVR testing and repair",
      "Control wiring and sensor faults",
      "Output and earth leakage checks",
      "Power cut simulation test",
    ],
    signs: ["Generator runs but nothing powers up", "Will not switch over automatically", "Trips the breaker", "Burning smell at the board", "Messy or unsafe wiring"],
    process: [
      { src: "/generator-electrical-panel.jpg", alt: "Generator changeover contactors and wiring", caption: "Changeover contactors" },
    ],
    faqs: [
      { q: "Why does my generator run but nothing works?", a: "It is usually the alternator, the AVR, a tripped breaker or a fault in the changeover or wiring. We test each one to find it." },
      { q: "Can you fix a messy distribution board?", a: "Yes. We rewire and tidy boards so they are safe and easy to work on. See the before and after photos on this page." },
    ],
  },
  {
    slug: "silent-canopy-and-industrial-generator-repairs",
    name: "Silent Canopy and Industrial Generator Repairs",
    short: "Repairs and servicing for silent canopy and industrial standby generators.",
    metaTitle: "Silent Canopy and Industrial Generator Repairs in Gauteng",
    metaDescription:
      "Silent canopy and industrial generator repairs in Gauteng. Standby generators for businesses, factories and estates repaired and serviced. Call Now or send a WhatsApp job card.",
    keywords: ["industrial generator repairs Gauteng", "silent generator repairs", "canopy generator service", "commercial generator maintenance", "standby generator repairs"],
    image: "/industrial-generator-exterior.jpg",
    imageAlt: "Silent industrial canopy generator installed outside a building",
    headline: "Silent canopy and industrial generator repairs",
    intro:
      "A standby generator protects your stock, your equipment and your income. We repair and maintain silent canopy and industrial generators so they start and carry the load when the grid fails.",
    answer:
      "Emergency Generator Repairs repairs and maintains silent canopy and industrial standby generators for businesses, factories and estates across Gauteng, including full services and load tests.",
    problem: "Service or maintenance",
    includes: [
      "Canopy generator repairs and servicing",
      "Controller and auto start faults",
      "Automatic changeover testing",
      "Diesel engine repairs and overhauls",
      "Proper load testing",
      "Service records for business owners",
    ],
    signs: ["Failed to start in an outage", "Controller showing a fault", "Overdue for a service", "Overheating under load", "Business cannot afford downtime"],
    process: [
      { src: "/commercial-yellow-generator.jpg", alt: "Yellow commercial canopy generator", caption: "Commercial canopy set" },
      { src: "/technicians-testing-silent-diesel-generators.jpg", alt: "Technicians testing silent diesel generators", caption: "Testing silent sets" },
      { src: "/on-site-generator-canopy-service.jpg", alt: "Technician servicing a canopy generator", caption: "Canopy service" },
    ],
    faqs: [
      { q: "Do you maintain generators for businesses?", a: "Yes. We service and maintain business generators and can set up regular schedules." },
      { q: "Can you repair auto start generators?", a: "Yes. We repair controllers, sensors and changeover systems that start the generator automatically." },
    ],
  },
  {
    slug: "trailer-mounted-and-mobile-generator-repairs",
    name: "Trailer Mounted and Mobile Generator Repairs",
    short: "Repairs for trailer mounted generators, frames, tanks and mountings.",
    metaTitle: "Trailer Mounted and Mobile Generator Repairs in Gauteng",
    metaDescription:
      "Trailer mounted and mobile generator repairs in Gauteng. Engines, frames, fuel tanks, mountings and wiring repaired. Call Now or send a WhatsApp job card for a quote.",
    keywords: ["trailer mounted generator repairs", "mobile generator repairs Gauteng", "generator frame repair", "generator fuel tank repair", "portable diesel generator trailer"],
    image: "/trailer-mounted-generator.jpg",
    imageAlt: "Trailer mounted generator parked at a home",
    headline: "Trailer mounted and mobile generator repairs",
    intro:
      "Mobile generators take a beating from the road and the work site. We repair the engine, the frame, the fuel tank and the mountings so your mobile power is ready to roll.",
    answer:
      "Emergency Generator Repairs repairs trailer mounted and mobile generators across Gauteng, including engines, frames, fuel tanks, mountings and wiring.",
    problem: "Something else",
    includes: [
      "Engine and alternator repairs",
      "Frame, bracket and mounting repairs",
      "Fuel tank, lines and gasket replacement",
      "Wiring, sockets and breaker panels",
      "Trailer lights and towing checks",
      "Full service and load test",
    ],
    signs: ["Cracked or damaged frame", "Fuel leaks from the tank", "Vibration on the mountings", "Sockets or breakers failing", "Needs a full service"],
    process: [
      { src: "/generator-base-frame-and-gaskets-rebuild.jpg", alt: "Generator base frame with gaskets laid out during a rebuild", caption: "Frame and gaskets" },
      { src: "/disassembled-generator-repair-kit.jpg", alt: "Disassembled generator parts laid out on the grass", caption: "Stripped for repair" },
    ],
    faqs: [
      { q: "Can you repair a trailer mounted generator at my site?", a: "Often yes. Tell us where it is and what the problem is, and we will confirm how we can help." },
      { q: "Do you repair generator frames and tanks?", a: "Yes. We repair frames and mountings and replace or repair fuel tanks, lines and gaskets." },
    ],
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
