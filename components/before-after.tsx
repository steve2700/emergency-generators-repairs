"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import type { BeforeAfterItem } from "@/lib/services"

/** Drag (or use arrow keys) to compare before and after. Sweeps once when it scrolls into view. */
export function BeforeAfter({ item, className = "" }: { item: BeforeAfterItem; className?: string }) {
  const [pos, setPos] = useState(100)
  const box = useRef<HTMLDivElement>(null)
  const touched = useRef(false)

  useEffect(() => {
    const el = box.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setPos(50); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const step = (t: number) => {
        if (touched.current) return
        const k = Math.min((t - start) / 1400, 1)
        setPos(100 - 50 * (1 - Math.pow(1 - k, 3)))
        if (k < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <figure className={className}>
      <div ref={box} className="relative w-full select-none overflow-hidden rounded-[2rem] bg-graphite" style={{ aspectRatio: item.ratio }}>
        <Image src={item.after} alt={item.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={item.before} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/85 px-4 py-1 font-display text-xl font-bold text-white">Before</span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-signal px-4 py-1 font-display text-xl font-bold text-ink">After</span>
        <Image src="/logo-mark.svg" alt="" width={56} height={27} className="pointer-events-none absolute bottom-3 right-3 drop-shadow-[0_2px_6px_rgba(0,0,0,.6)]" />
        <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,.5)]" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-signal font-display text-2xl text-ink shadow-lg">&lsaquo;&rsaquo;</span>
        </div>
        <input
          type="range" min={0} max={100} step={0.5} value={pos}
          onChange={(e) => { touched.current = true; setPos(Number(e.target.value)) }}
          aria-label={`Compare before and after: ${item.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 px-2">
        <span className="font-display text-2xl font-semibold">{item.title}</span>
        <span className="block text-graphite">{item.caption}</span>
      </figcaption>
    </figure>
  )
}
