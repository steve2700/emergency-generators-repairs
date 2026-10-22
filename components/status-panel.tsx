"use client"

import { useEffect, useState } from "react"

type Line = { text: string; tone?: "bad" | "ok" | "info" }
const STORIES: { title: string; lines: Line[] }[] = [
  { title: "HOME GENERATOR", lines: [
    { text: "Power cut. Generator will not start.", tone: "bad" },
    { text: "Job card sent on WhatsApp.", tone: "info" },
    { text: "Fault found: blocked carburettor.", tone: "info" },
    { text: "Quote approved. Repair done.", tone: "ok" },
    { text: "Status: RUNNING", tone: "ok" },
  ] },
  { title: "BUSINESS GENERATOR", lines: [
    { text: "Shop is dark. Will not switch over.", tone: "bad" },
    { text: "Called. Technician briefed.", tone: "info" },
    { text: "Fault found: changeover contactor.", tone: "info" },
    { text: "Contactor replaced. Power cut test passed.", tone: "ok" },
    { text: "Status: RUNNING", tone: "ok" },
  ] },
]
const colour = { bad: "text-[#ff6b5e]", ok: "text-[#6ee7a0]", info: "text-white" }

/** Control panel style readout that plays out a breakdown from call to repair. */
export function StatusPanel({ className = "" }: { className?: string }) {
  const [story, setStory] = useState(0)
  const [shown, setShown] = useState(1)
  const s = STORIES[story]
  const done = shown >= s.lines.length

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(s.lines.length); return }
    const t = setTimeout(() => {
      if (done) { setStory((story + 1) % STORIES.length); setShown(1) } else setShown(shown + 1)
    }, done ? 3200 : 1400)
    return () => clearTimeout(t)
  }, [shown, done, story, s.lines.length])

  return (
    <div className={`rounded-2xl border border-white/10 bg-ink/95 p-4 font-mono text-[13px] leading-relaxed text-white shadow-2xl shadow-black/40 backdrop-blur sm:text-sm ${className}`} aria-label="Example of a generator repair from call to finished">
      <div className="mb-3 flex items-center justify-between text-[11px] tracking-widest text-chrome">
        <span>{s.title}</span>
        <span className="flex items-center gap-2"><span className={`pulse-dot h-2 w-2 rounded-full ${done ? "bg-[#6ee7a0]" : "bg-[#ff6b5e]"}`} />{done ? "RUNNING" : "FAULT"}</span>
      </div>
      <ul className="min-h-[7.5rem] space-y-1">
        {s.lines.slice(0, shown).map((l, i) => (
          <li key={`${story}-${i}`} className={`swap ${colour[l.tone ?? "info"]}`}><span className="text-signal">&gt; </span>{l.text}</li>
        ))}
      </ul>
    </div>
  )
}
