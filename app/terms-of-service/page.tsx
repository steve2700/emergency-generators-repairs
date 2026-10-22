import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for using the Emergency Generator Repairs website and requesting generator repair quotes.", alternates: { canonical: "/terms-of-service" } }

export default function Terms() {
  const h = "mt-10 text-3xl font-semibold"
  const p = "mt-3 text-lg leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Terms of Service", href: "/terms-of-service" }]} title="Terms of Service" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className={p}>By using this website you agree to these terms. They are a general guide and do not replace a written quote or work order.</p>
        <h2 className={h}>Quotes</h2>
        <p className={p}>Quotes given from photos or messages are estimates. The final price is confirmed after the generator is inspected and before extra work begins.</p>
        <h2 className={h}>Work and parts</h2>
        <p className={p}>Work is carried out on the terms of the signed quote or work order. Warranty on parts and labour is stated on that document.</p>
        <h2 className={h}>Website content</h2>
        <p className={p}>Information on this site is provided in good faith and may change without notice. Photos are for illustration.</p>
        <h2 className={h}>Liability</h2>
        <p className={p}>To the extent allowed by law, Emergency Generator Repairs is not liable for loss arising from the use of this website.</p>
        <h2 className={h}>Contact</h2>
        <p className={p}>Questions about these terms can be sent to us through the contact page.</p>
      </article>
    </>
  )
}
