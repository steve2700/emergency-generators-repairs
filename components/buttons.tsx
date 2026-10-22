"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { SITE, WA_LINK } from "@/lib/site"
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics"

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-display font-bold transition duration-200 active:scale-95 focus-visible:outline-offset-4"
const sizes = { md: "h-12 px-7 text-lg", lg: "h-14 px-9 text-xl" }
const looks = {
  red: "bg-signal text-ink hover:bg-signal-dark hover:shadow-lg hover:shadow-signal/40",
  dark: "bg-ink text-white hover:bg-graphite",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  outlineLight: "border-2 border-white/70 text-white hover:bg-white hover:text-ink",
  white: "bg-white text-ink hover:bg-silver",
  green: "bg-[#25D366] text-ink hover:bg-[#1fbd5b] hover:shadow-lg hover:shadow-[#25D366]/30",
}

type Size = keyof typeof sizes
type Look = keyof typeof looks

export function CallButton({ size = "lg", look = "red", label = "Call Now", pulse = false, className = "" }: { size?: Size; look?: Look; label?: string; pulse?: boolean; className?: string }) {
  return (
    <a href={`tel:${SITE.phoneTel}`} onClick={trackCallClick} className={`${base} ${sizes[size]} ${looks[look]} ${pulse ? "ring" : ""} ${className}`}>
      <PhoneIcon className="h-5 w-5" />
      <span className="roll"><span>{label}</span><span aria-hidden="true">{label}</span></span>
    </a>
  )
}

export function WhatsAppButton({ size = "lg", look = "green", label = "WhatsApp Us", message = "Hi Emergency Generator Repairs, I need help with my generator.", className = "" }: { size?: Size; look?: Look; label?: string; message?: string; className?: string }) {
  return (
    <a href={WA_LINK(message)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className={`${base} ${sizes[size]} ${looks[look]} ${className}`}>
      <WhatsAppIcon className="h-6 w-6" />
      <span className="roll"><span>{label}</span><span aria-hidden="true">{label}</span></span>
    </a>
  )
}

export function LinkButton({ href, children, size = "lg", look = "dark", className = "" }: { href: string; children: ReactNode; size?: Size; look?: Look; className?: string }) {
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${looks[look]} ${className}`}>
      <span className="roll"><span>{children}</span><span aria-hidden="true">{children}</span></span>
    </Link>
  )
}

export function CircleCall({ className = "" }: { className?: string }) {
  return (
    <a href={`tel:${SITE.phoneTel}`} onClick={trackCallClick} aria-label={`Call Emergency Generator Repairs on ${SITE.phoneDisplay}`} className={`flex h-12 w-12 items-center justify-center rounded-full bg-signal text-ink transition hover:bg-signal-dark active:scale-95 ${className}`}>
      <PhoneIcon className="h-5 w-5" />
    </a>
  )
}
