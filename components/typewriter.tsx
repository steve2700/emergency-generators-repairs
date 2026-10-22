"use client"

import { useEffect, useState } from "react"

/** Types out each line, pauses, deletes it and moves to the next. */
export function Typewriter({ lines, className = "" }: { lines: string[]; className?: string }) {
  const [n, setN] = useState(0)
  const [len, setLen] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setLen(lines[0].length); return }
    const line = lines[n]
    let t: ReturnType<typeof setTimeout>
    if (!del && len < line.length) t = setTimeout(() => setLen(len + 1), 45)
    else if (!del) t = setTimeout(() => setDel(true), 1700)
    else if (len > 0) t = setTimeout(() => setLen(len - 1), 22)
    else { setDel(false); setN((n + 1) % lines.length) }
    return () => clearTimeout(t)
  }, [len, del, n, lines])
  return (
    <p className={className} aria-label={lines.join(". ")}>
      <span aria-hidden="true">{lines[n].slice(0, len)}</span>
      <span aria-hidden="true" className="caret ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] bg-current" />
    </p>
  )
}
