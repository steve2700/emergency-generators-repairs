import { MovingImage } from "@/components/moving-image"

const photos: [string, string][] = [
  ["/portable-generators-lineup.jpg", "Portable generators lined up in a yard"],
  ["/team-generator-engine-valve-adjustment.jpg", "Team adjusting engine valves"],
  ["/trailer-mounted-generator.jpg", "Trailer mounted generator"],
  ["/refurbished-small-petrol-generator-engine.jpg", "Refurbished petrol generator engine"],
  ["/technicians-testing-silent-diesel-generators.jpg", "Technicians testing silent diesel generators"],
  ["/diesel-engine-piston-carbon-buildup.jpg", "Diesel engine pistons with carbon build up"],
  ["/industrial-generator-exterior.jpg", "Silent industrial generator"],
  ["/onsite-portable-generator-maintenance.jpg", "Portable generator maintenance at a home"],
  ["/electrical-distribution-board-after.jpg", "Rewired distribution board"],
  ["/residential-generator-unit.jpg", "Residential generator unit"],
]

export function PhotoStrip() {
  const all = [...photos, ...photos]
  return (
    <div className="overflow-hidden" aria-label="Recent work">
      <div className="strip flex w-max gap-4">
        {all.map(([src, alt], i) => (
          <MovingImage key={i} src={src} alt={i < photos.length ? alt : ""} variant={i} sizes="320px" className="h-64 w-72 shrink-0 rounded-[2rem]" markWidth={40} />
        ))}
      </div>
    </div>
  )
}
