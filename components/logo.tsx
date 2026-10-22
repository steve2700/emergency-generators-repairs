import Image from "next/image"
import Link from "next/link"

export function Logo({ tone = "light", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const onDark = tone === "dark"
  return (
    <Link href="/" aria-label="Emergency Generator Repairs home" className={`group flex items-center gap-3 ${className}`}>
      <Image src={onDark ? "/logo-mark-light.svg" : "/logo-mark.svg"} alt="" width={86} height={42} priority className="h-8 w-auto transition-transform duration-300 group-hover:-rotate-3 sm:h-10" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight sm:text-2xl ${onDark ? "text-white" : "text-ink"}`}>EMERGENCY</span>
        <span className={`mt-1 inline-block rounded-sm px-1.5 py-0.5 font-display text-[10px] font-bold tracking-[0.2em] sm:text-xs ${onDark ? "bg-signal text-ink" : "bg-ink text-signal"}`}>GENERATOR REPAIRS</span>
      </span>
    </Link>
  )
}
