# Emergency Generator Repairs Website

Next.js (App Router), TypeScript, Tailwind CSS v4. Static export.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static site in /out
```

## Change contact details in one file
Phone, WhatsApp, email, domain and service area: `lib/site.ts`. Also update the domain in `public/robots.txt`.

## Where things are
| What | Where |
| --- | --- |
| Services, SEO copy, FAQs, before and after | `lib/services.ts` |
| Fault finder symptoms and causes | `lib/faults.ts` |
| Engine and alternator brands | `lib/brands.ts` |
| Areas and job card problem list | `lib/areas.ts` |
| Home and business pages | `app/home-generator-repairs`, `app/business-generator-repairs` |
| AI crawler files | `lib/llms.ts` (built from the data above) |
| Animated words | `components/word-reveal.tsx`, `rotating-word.tsx`, `typewriter.tsx`, `status-panel.tsx` |
| Colours and animations | `app/globals.css` |

Add a service, brand or area by adding one entry to its file. The page, menus, footer, sitemap, schema and llms files update automatically.
