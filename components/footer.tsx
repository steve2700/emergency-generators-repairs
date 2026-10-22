import Link from "next/link"
import { Logo } from "@/components/logo"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"
import { SITE, WA_LINK } from "@/lib/site"

export function Footer() {
  const h = "font-display text-xl font-bold text-white"
  const a = "block py-1 text-silver transition hover:text-signal"
  return (
    <footer className="bg-ink pb-24 pt-16 text-silver md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs leading-relaxed">Generator repairs, maintenance and servicing for homes and businesses across {SITE.region}.</p>
          <div className="mt-6 flex gap-3">
            <a href={`tel:${SITE.phoneTel}`} aria-label="Call Emergency Generator Repairs" className="flex h-12 w-12 items-center justify-center rounded-full bg-signal text-ink transition hover:bg-signal-dark"><PhoneIcon className="h-5 w-5" /></a>
            <a href={WA_LINK("Hi Emergency Generator Repairs, I need help with my generator.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Emergency Generator Repairs" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-ink transition hover:bg-[#1fbd5b]"><WhatsAppIcon className="h-6 w-6" /></a>
          </div>
        </div>
        <div>
          <h3 className={h}>Services</h3>
          <div className="mt-3">{SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className={a}>{s.name}</Link>)}</div>
        </div>
        <div>
          <h3 className={h}>Areas we cover</h3>
          <div className="mt-3 grid grid-cols-2 gap-x-4">{AREAS.map((s) => <Link key={s.slug} href={`/service-areas/${s.slug}`} className={a}>{s.name}</Link>)}</div>
          <h3 className={`${h} mt-8`}>Engines and alternators</h3>
          <div className="mt-3 grid grid-cols-2 gap-x-4">{BRANDS.map((b) => <Link key={b.slug} href={`/brands/${b.slug}`} className={a}>{b.name}</Link>)}</div>
        </div>
        <div>
          <h3 className={h}>Contact</h3>
          <div className="mt-3">
            <a href={`tel:${SITE.phoneTel}`} className={a}>{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className={a}>{SITE.email}</a>
            <Link href="/contact#job-card" className={a}>Send a job card</Link>
            <Link href="/home-generator-repairs" className={a}>Home generators</Link>
            <Link href="/business-generator-repairs" className={a}>Business generators</Link>
            <Link href="/gallery" className={a}>Gallery</Link>
            <Link href="/about" className={a}>About</Link>
            <Link href="/faq" className={a}>FAQ</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-5 pt-6 text-sm md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Emergency Generator Repairs. All rights reserved.</p>
        <p className="flex gap-5"><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></p>
      </div>
    </footer>
  )
}
