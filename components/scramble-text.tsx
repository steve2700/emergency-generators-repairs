"use client"

import { useEffect, useRef, useState } from "react"

const CH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&"

/** Techy label that scrambles, then resolves letter by letter when it scrolls into view. */
export function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [out, setOut] = useState(text)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el) return
    const rand = () => text.split("").map((c) => (c === " " ? " " : CH[Math.floor(Math.random() * CH.length)])).join("")
    setOut(rand())
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const dur = 700 + text.length * 30
      const tick = (t: number) => {
        const k = Math.min((t - start) / dur, 1)
        const done = Math.floor(k * text.length)
        setOut(text.split("").map((c, i) => (c === " " || i < done ? c : CH[Math.floor(Math.random() * CH.length)])).join(""))
        if (k < 1) requestAnimationFrame(tick)
        else setOut(text)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [text])

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  )
}
