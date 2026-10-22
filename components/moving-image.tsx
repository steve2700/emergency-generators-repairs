import Image from "next/image"

const drifts = ["drift-a", "drift-b", "drift-c"]

/** A photo with a slow camera drift and the EG mark stamped in the corner. */
export function MovingImage({
  src, alt, className = "", sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false, variant = 0, mark = true, markWidth = 44,
}: { src: string; alt: string; className?: string; sizes?: string; priority?: boolean; variant?: number; mark?: boolean; markWidth?: number }) {
  return (
    <div className={`relative isolate overflow-hidden bg-silver ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${drifts[variant % 3]}`} />
      {mark && (
        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center rounded-full bg-white/95 px-2.5 py-1.5 shadow-md shadow-black/20">
          <Image src="/logo-mark.svg" alt="" width={markWidth} height={Math.round(markWidth * 0.48)} />
        </span>
      )}
    </div>
  )
}
