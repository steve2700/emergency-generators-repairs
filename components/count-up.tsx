"use client"

import { useEffect, useRef, useState } from "react"

/** Counts from 0 up to a number when it scrolls into view. */
export function CountUp({ to, className = "" }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [n, setN] = useState(to)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el) return
    setN(0)
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const k = Math.min((t - start) / 1400, 1)
        setN(Math.round(to * (1 - Math.pow(1 - k, 3))))
        if (k < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return <span ref={ref} className={className}>{n}</span>
}
