import { JsonLd } from "@/components/json-ld"

export function Faq({ items, tone = "light" }: { items: { q: string; a: string }[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark"
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <div className="divide-y divide-chrome/40 rounded-3xl border border-chrome/40 bg-white">
        {items.map((f) => (
          <details key={f.q} className="group px-6 py-5 first:rounded-t-3xl last:rounded-b-3xl open:bg-steel">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-2xl font-semibold marker:hidden">
              {f.q}
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal text-xl text-ink transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-graphite">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  )
}
