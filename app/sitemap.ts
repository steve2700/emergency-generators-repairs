import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({ url: `${SITE.url}${path}`, lastModified: now, changeFrequency, priority })
  return [
    page("", 1, "weekly"),
    page("/home-generator-repairs", 0.9),
    page("/business-generator-repairs", 0.9),
    page("/services", 0.9),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/service-areas", 0.8),
    ...AREAS.map((a) => page(`/service-areas/${a.slug}`, 0.8)),
    page("/brands", 0.7),
    ...BRANDS.map((b) => page(`/brands/${b.slug}`, 0.8)),
    page("/gallery", 0.6),
    page("/about", 0.6),
    page("/faq", 0.6),
    page("/contact", 0.8),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-of-service", 0.2, "yearly"),
  ]
}
