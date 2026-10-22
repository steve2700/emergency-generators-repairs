"use client"

import { useEffect, useState } from "react"

/** Cycles through words with a slide in. Screen readers get the full list once. */
export function RotatingWord({ words, interval = 2400, className = "" }: { words: string[]; interval?: number; className?: string }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <span className="sr-only">{words.join(", ")}</span>
      <span key={i} aria-hidden="true" className="word-in inline-block">{words[i]}</span>
    </span>
  )
}
