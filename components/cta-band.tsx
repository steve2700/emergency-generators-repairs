import { CallButton, WhatsAppButton, LinkButton } from "@/components/buttons"

export function CtaBand({ title = "Generator down? Call us now.", text = "Tell us what it is doing and where you are. We will tell you what happens next." }: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white">
      <div aria-hidden="true" className="hazard absolute inset-x-0 top-0 -z-10 h-3" />
      <div aria-hidden="true" className="absolute -right-24 top-0 -z-10 h-full w-[34%] skew-x-[-14deg] bg-signal" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold leading-[1.02] md:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-silver">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <CallButton look="white" />
          <WhatsAppButton />
          <LinkButton href="/contact#job-card" look="dark">Get a Free Quote</LinkButton>
        </div>
      </div>
    </section>
  )
}
