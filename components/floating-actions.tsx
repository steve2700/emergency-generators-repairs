"use client"

import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { SITE, WA_LINK } from "@/lib/site"
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics"

export function FloatingActions() {
  return (
    <>
      {/* Desktop: round WhatsApp button */}
      <a href={WA_LINK("Hi Emergency Generator Repairs, I need help with my generator.")} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} aria-label="Chat with Emergency Generator Repairs on WhatsApp" className="group fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-xl shadow-black/30 transition hover:scale-105 md:flex">
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className="relative h-8 w-8" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-4 py-2 font-display text-lg text-white opacity-0 transition group-hover:opacity-100">Send a job card</span>
      </a>
      {/* Mobile: sticky call and WhatsApp bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(20,22,26,.15)] backdrop-blur md:hidden">
        <a href={`tel:${SITE.phoneTel}`} onClick={trackCallClick} className="flex h-12 items-center justify-center gap-2 rounded-full bg-signal font-display text-xl font-bold text-ink active:scale-95"><PhoneIcon className="h-5 w-5" />Call Now</a>
        <a href={WA_LINK("Hi Emergency Generator Repairs, I need help with my generator.")} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] font-display text-xl font-semibold text-ink active:scale-95"><WhatsAppIcon className="h-6 w-6" />WhatsApp</a>
      </div>
    </>
  )
}
