"use client"

import Link from "next/link"
import { useState } from "react"
import { FAULTS } from "@/lib/faults"
import { SITE, WA_LINK } from "@/lib/site"
import { WhatsAppIcon, PhoneIcon } from "@/components/icons"
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics"

export function FaultFinder() {
  const [id, setId] = useState(FAULTS[0].id)
  const f = FAULTS.find((x) => x.id === id) ?? FAULTS[0]
  const msg = `Hi Emergency Generator Repairs, my generator problem: ${f.label.toLowerCase()}. Please can you help?`

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div role="tablist" aria-label="What is your generator doing?" className="grid gap-2 self-start">
        {FAULTS.map((x, i) => (
          <button key={x.id} role="tab" type="button" aria-selected={x.id === id} onClick={() => setId(x.id)}
            className={`flex items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left font-display text-xl font-semibold transition active:scale-[0.99] ${x.id === id ? "border-ink bg-signal text-ink" : "border-ink/10 bg-white text-ink hover:border-ink"}`}>
            <span className="font-mono text-sm text-ink/50">{String(i + 1).padStart(2, "0")}</span>
            {x.label}
          </button>
        ))}
      </div>
      <div key={f.id} role="tabpanel" className="swap rounded-[2rem] bg-ink p-7 text-white md:p-9">
        {f.urgent && (
          <p className="mb-5 flex items-center gap-3 rounded-xl bg-signal px-4 py-3 font-display text-lg font-bold text-ink">
            <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-signal">!</span>
            {f.urgent}
          </p>
        )}
        <p className="font-mono text-xs tracking-widest text-chrome">POSSIBLE CAUSES</p>
        <ul className="mt-3 space-y-2 text-lg">
          {f.causes.map((c) => (
            <li key={c} className="flex items-start gap-3"><span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-signal" />{c}</li>
          ))}
        </ul>
        <p className="mt-7 font-mono text-xs tracking-widest text-chrome">WHAT WE DO</p>
        <p className="mt-2 text-lg leading-relaxed text-silver">{f.action}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`tel:${SITE.phoneTel}`} onClick={trackCallClick} className="inline-flex h-12 items-center gap-2 rounded-full bg-signal px-6 font-display text-lg font-bold text-ink transition hover:bg-signal-dark active:scale-95"><PhoneIcon className="h-5 w-5" />Call Now</a>
          <a href={WA_LINK(msg)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 font-display text-lg font-bold text-ink transition hover:bg-[#1fbd5b] active:scale-95"><WhatsAppIcon className="h-6 w-6" />Send this on WhatsApp</a>
          <Link href={`/services/${f.service}`} className="inline-flex h-12 items-center rounded-full border-2 border-white/40 px-6 font-display text-lg font-bold transition hover:bg-white hover:text-ink">See the repair</Link>
        </div>
        <p className="mt-6 text-sm text-chrome">This is a guide, not a diagnosis. A technician has to inspect the generator to be sure.</p>
      </div>
    </div>
  )
}
