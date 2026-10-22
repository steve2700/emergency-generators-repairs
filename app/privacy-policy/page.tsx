import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SITE } from "@/lib/site"

export const metadata: Metadata = { title: "Privacy Policy", description: "How Emergency Generator Repairs collects, uses and protects your personal information.", alternates: { canonical: "/privacy-policy" } }

export default function Privacy() {
  const h = "mt-10 text-3xl font-semibold"
  const p = "mt-3 text-lg leading-relaxed text-graphite"
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]} title="Privacy Policy" />
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className={p}>Emergency Generator Repairs respects your privacy and handles personal information in line with the Protection of Personal Information Act (POPIA).</p>
        <h2 className={h}>What we collect</h2>
        <p className={p}>When you send a job card or contact us, we receive your name, your phone number or WhatsApp number, your generator details, your location and any photos or messages you send. The job card form does not store anything on our website. It prepares a WhatsApp message that you choose to send.</p>
        <h2 className={h}>How we use it</h2>
        <p className={p}>We use your information to quote, schedule and carry out repairs, to contact you about your job and to keep service records. We do not sell your information.</p>
        <h2 className={h}>Sharing</h2>
        <p className={p}>We only share information with suppliers or service providers where it is needed to complete your job, or where the law requires it.</p>
        <h2 className={h}>Analytics and cookies</h2>
        <p className={p}>We use privacy friendly analytics to understand how the website is used. This helps us improve the site.</p>
        <h2 className={h}>Your rights</h2>
        <p className={p}>You may ask to see, correct or delete the personal information we hold about you. Email {SITE.email} and we will respond.</p>
      </article>
    </>
  )
}
