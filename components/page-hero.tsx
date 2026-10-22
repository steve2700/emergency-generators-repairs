import type { ReactNode } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MovingImage } from "@/components/moving-image"
import { WordReveal } from "@/components/word-reveal"

export function PageHero({ crumbs, title, text, children, image, mark = [] }: { crumbs: { name: string; href: string }[]; title: string; text?: string; children?: ReactNode; image?: { src: string; alt: string }; mark?: string[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="hazard absolute inset-x-0 top-0 -z-10 h-3" />
      <div aria-hidden="true" className="absolute -right-16 top-0 -z-10 h-full w-[14%] skew-x-[-14deg] bg-signal" />
      <div className={`mx-auto max-w-7xl px-5 py-14 md:py-20 ${image ? "grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
        <div>
          <Breadcrumbs items={crumbs} tone="dark" />
          <WordReveal as="h1" text={title} mark={mark} className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.02] md:text-6xl" />
          {text && <p className="mt-5 max-w-2xl text-xl leading-relaxed text-silver">{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && <MovingImage src={image.src} alt={image.alt} priority className="aspect-[4/3] rounded-[2rem] shadow-2xl shadow-black/50" sizes="(min-width: 1024px) 38vw, 100vw" markWidth={64} />}
      </div>
    </section>
  )
}
