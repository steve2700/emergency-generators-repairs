"use client"

import { useEffect, useMemo, useState } from "react"
import { WhatsAppIcon } from "@/components/icons"
import { AREAS, PROBLEMS, SITE_TYPES } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"
import { WA_LINK } from "@/lib/site"
import { trackWhatsAppClick } from "@/lib/analytics"

const field = "h-12 w-full rounded-2xl border-2 border-silver bg-white px-4 text-lg text-ink placeholder:text-chrome focus:border-ink focus:outline-none"
const chip = (on: boolean) =>
  `rounded-full border-2 px-4 py-2 font-display text-base font-semibold transition active:scale-95 ${on ? "border-ink bg-signal text-ink" : "border-silver bg-white text-ink hover:border-ink"}`
const label = "font-display text-xl font-bold"

export function JobCard({ defaultProblem = "", defaultArea = "", defaultSite = "", defaultBrand = "" }: { defaultProblem?: string; defaultArea?: string; defaultSite?: string; defaultBrand?: string }) {
  const [site, setSite] = useState(defaultSite)
  const [problem, setProblem] = useState(defaultProblem)
  const [urgency, setUrgency] = useState<"Power is out now" | "Planning ahead">("Power is out now")
  const [brand, setBrand] = useState(defaultBrand)
  const [size, setSize] = useState("")
  const [area, setArea] = useState(defaultArea)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [details, setDetails] = useState("")
  const [ref, setRef] = useState("EG000000")

  useEffect(() => setRef(`EG${Math.floor(100000 + Math.random() * 900000)}`), [])

  const ready = problem && name.trim()

  const message = useMemo(() => {
    const lines = [
      "*EMERGENCY GENERATOR REPAIRS JOB CARD*",
      `Ref: ${ref}`,
      `Name: ${name.trim() || "..."}`,
      `For a: ${site || "Not given"}`,
      `Problem: ${problem || "..."}`,
      `Urgency: ${urgency}`,
      `Generator: ${[brand.trim(), size.trim()].filter(Boolean).join(", ") || "Not given"}`,
      `Location: ${area || "Not given"}`,
    ]
    if (phone.trim()) lines.push(`Call me on: ${phone.trim()}`)
    if (details.trim()) lines.push(`Details: ${details.trim()}`)
    lines.push("", "I will send photos in this chat.")
    return lines.join("\n")
  }, [ref, name, site, problem, urgency, brand, size, area, phone, details])

  const send = () => {
    if (!ready) return
    trackWhatsAppClick()
    window.open(WA_LINK(message), "_blank", "noopener,noreferrer")
  }

  return (
    <div id="job-card" className="grid scroll-mt-28 gap-8 lg:grid-cols-[1fr_380px]">
      <div className="rounded-[2rem] bg-steel p-6 text-ink md:p-8">
        <fieldset>
          <legend className={label}>Is this for a home or a business?</legend>
          <div className="mt-3 flex gap-2">
            {SITE_TYPES.map((s) => <button key={s} type="button" aria-pressed={site === s} onClick={() => setSite(s)} className={chip(site === s)}>{s}</button>)}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className={label}>What is the generator doing?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {PROBLEMS.map((p) => <button key={p} type="button" aria-pressed={problem === p} onClick={() => setProblem(p)} className={chip(problem === p)}>{p}</button>)}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className={label}>Is the power out right now?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["Power is out now", "Planning ahead"] as const).map((s) => <button key={s} type="button" aria-pressed={urgency === s} onClick={() => setUrgency(s)} className={chip(urgency === s)}>{s}</button>)}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={label}>Engine or generator brand</span>
            <input className={`${field} mt-2`} list="engine-list" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Perkins, Honda, Cummins" autoComplete="off" />
            <datalist id="engine-list">{BRANDS.filter((b) => b.kind === "engine").map((b) => <option key={b.slug} value={b.name} />)}</datalist>
          </label>
          <label className="block">
            <span className={label}>Size or model</span>
            <input className={`${field} mt-2`} value={size} onChange={(e) => setSize(e.target.value)} placeholder="20 kVA diesel, 3 kVA petrol" autoComplete="off" />
          </label>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={label}>Where are you?</span>
            <select className={`${field} mt-2`} value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Choose an area</option>
              {AREAS.map((a) => <option key={a.slug} value={a.name}>{a.name}</option>)}
              <option value="Other Gauteng area">Other Gauteng area</option>
            </select>
          </label>
          <label className="block">
            <span className={label}>Your name</span>
            <input className={`${field} mt-2`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
          </label>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={label}>Best number to call</span>
            <input className={`${field} mt-2`} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" inputMode="tel" autoComplete="tel" />
          </label>
          <label className="block">
            <span className={label}>Anything else?</span>
            <input className={`${field} mt-2`} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Noises, lights, when it started" />
          </label>
        </div>

        <button type="button" onClick={send} disabled={!ready} className="mt-7 flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#25D366] font-display text-xl font-bold text-ink transition hover:bg-[#1fbd5b] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-silver disabled:text-graphite/70">
          <WhatsAppIcon className="h-7 w-7" />
          Send job card on WhatsApp
        </button>
        <p className="mt-3 text-center text-sm text-graphite">
          {ready ? "WhatsApp opens with your job card ready to send. Add photos in the chat." : "Choose the problem and add your name to send."}
        </p>
      </div>

      <aside aria-label="Job card preview" className="relative hidden self-start lg:block">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-white/30 bg-white/5 p-7 text-white backdrop-blur">
          <div aria-hidden="true" className="hazard absolute inset-x-0 top-0 h-2" />
          <div className="mt-2 flex items-baseline justify-between">
            <p className="font-display text-2xl font-extrabold tracking-wide">JOB CARD</p>
            <p className="font-mono text-lg text-signal">{ref}</p>
          </div>
          <dl className="mt-8 space-y-4 text-lg">
            {[["Name", name], ["For a", site], ["Problem", problem], ["Urgency", urgency], ["Generator", [brand, size].filter(Boolean).join(", ")], ["Location", area], ["Call me on", phone]].map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-white/10 pb-3">
                <dt className="w-24 shrink-0 text-silver">{k}</dt>
                <dd className={`min-w-0 break-words ${v ? "text-white" : "text-white/30"}`}>{v || "Waiting"}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-silver">This is exactly what lands in our WhatsApp.</p>
        </div>
      </aside>
    </div>
  )
}
