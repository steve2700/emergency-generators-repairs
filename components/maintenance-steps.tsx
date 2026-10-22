"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  { t: "Check oil and coolant", d: "Levels, colour and leaks, so the engine is protected." },
  { t: "Change oil and filters", d: "Fresh oil, oil filter, air filter and fuel filter." },
  { t: "Test battery and starter", d: "A weak battery is the number one reason a generator will not start." },
  { t: "Inspect fuel system", d: "Hoses, lines, tank and water in the fuel." },
  { t: "Run under load", d: "We prove the generator carries your load, not just that it starts." },
  { t: "Test the changeover", d: "We simulate a power cut to see that power switches over." },
]

export function MaintenanceSteps() {
  const ref = useRef<HTMLOListElement | null>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <ol ref={ref} className={`steps ${on ? "in" : ""} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
      {steps.map((s, i) => (
        <li key={s.t} className="step rounded-3xl bg-white p-6" style={{ "--i": i } as React.CSSProperties}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-signal font-mono text-lg font-bold text-ink">{i + 1}</span>
          <h3 className="mt-4 text-2xl font-bold leading-tight">{s.t}</h3>
          <p className="mt-2 text-graphite">{s.d}</p>
        </li>
      ))}
    </ol>
  )
}
