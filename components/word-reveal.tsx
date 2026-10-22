"use client"

import { useEffect, useRef, useState } from "react"

/** Heading that reveals word by word when it scrolls into view. Words listed in `mark` get a yellow highlight. */
export function WordReveal({ text, as: Tag = "h2", className = "", mark = [] }: { text: string; as?: "h1" | "h2" | "h3" | "p"; className?: string; mark?: string[] }) {
  const ref = useRef<HTMLElement | null>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const words = text.split(" ")
  const marks = mark.map((m) => m.toLowerCase())
  return (
    <Tag ref={ref as never} className={`wr ${on ? "in" : ""} ${className}`}>
      {words.map((w, i) => {
        const hit = marks.includes(w.toLowerCase().replace(/[^a-z]/g, ""))
        return (
          <span key={i}>
            <span className="w"><span style={{ "--i": i } as React.CSSProperties} className={hit ? "rounded-md bg-signal px-1.5 text-ink" : ""}>{w}</span></span>{" "}
          </span>
        )
      })}
    </Tag>
  )
}
