import Image from "next/image"
import { StatusPanel } from "@/components/status-panel"

const slides: [string, string][] = [
  ["/residential-generator-unit.jpg", "Residential generator unit installed at a home"],
  ["/industrial-generator-exterior.jpg", "Silent industrial generator outside a business"],
  ["/diesel-generator-fawde-engine-bay.jpg", "Diesel generator engine bay opened for service"],
  ["/technicians-servicing-nexus-generator.jpg", "Technicians servicing a generator engine"],
]

export function HeroStage() {
  return (
    <div className="relative pb-10 sm:pb-12">
      <div aria-hidden="true" className="hazard absolute -left-3 -top-3 h-28 w-44 rounded-3xl" />
      <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-ink shadow-2xl shadow-ink/30" aria-label="Generators we repair">
        {slides.map(([src, alt], i) => (
          <div key={src} className="slide absolute inset-0" style={{ animationDelay: `${i * 6}s` }}>
            <Image src={src} alt={alt} fill priority={i === 0} sizes="(min-width: 1024px) 45vw, 100vw" className={`object-cover ${["drift-a", "drift-b", "drift-c", "drift-a"][i]}`} />
          </div>
        ))}
        <span className="pointer-events-none absolute right-3 top-3 flex items-center rounded-full bg-white/95 px-3 py-1.5 shadow-md">
          <Image src="/logo-mark.svg" alt="" width={52} height={25} />
        </span>
      </div>
      <StatusPanel className="absolute bottom-0 left-4 right-4 sm:-left-6 sm:right-auto sm:w-[23rem]" />
    </div>
  )
}
