import Link from "next/link"
import { BRANDS } from "@/lib/brands"

function Bolt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 40" className="h-8 w-5 shrink-0 text-signal" fill="currentColor"><path d="M14 0 0 22h8l-4 18 20-26h-9l5-14Z" /></svg>
  )
}

/** Endless ticker of engine and alternator brands. Pauses on hover. */
export function BrandTicker({ title = "Engines and alternators we repair" }: { title?: string }) {
  const row = (hidden: boolean) =>
    BRANDS.map((b) => (
      <span key={`${hidden}-${b.slug}`} className="flex items-center gap-8">
        <Link href={`/brands/${b.slug}`} tabIndex={hidden ? -1 : undefined} aria-hidden={hidden || undefined} className="font-display text-5xl font-extrabold tracking-tight text-white transition hover:text-signal md:text-6xl">{b.name}</Link>
        <Bolt />
      </span>
    ))
  return (
    <section aria-label={title} className="bg-ink py-10">
      <p className="mb-5 px-5 text-center font-mono text-xs tracking-widest text-chrome">{title.toUpperCase()}</p>
      <div className="overflow-hidden">
        <div className="strip-fast flex w-max items-center gap-8 pr-8">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  )
}
