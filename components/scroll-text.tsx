"use client"

import { useEffect, useRef, useState } from "react"

/** A statement whose words darken one by one as you scroll past it. */
export function ScrollText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const [p, setP] = useState(1)
  const words = text.split(" ")

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      setP(Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.25))))
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll) }
  }, [])

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="transition-opacity duration-300" style={{ opacity: i / words.length < p ? 1 : 0.16 }}>{w}{" "}</span>
      ))}
    </p>
  )
}
