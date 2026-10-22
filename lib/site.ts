// Contact details for Emergency Generator Repairs. Change them here and the whole site updates.
export const SITE = {
  name: "Emergency Generator Repairs",
  url: "https://www.emergencygeneratorrepairs.co.za",
  phoneDisplay: "073 441 0501",
  phoneTel: "+27734410501",
  whatsapp: "27734410501",
  email: "info@emergencygeneratorrepairs.co.za",
  tagline: "Homes and businesses",
  region: "Gauteng and its outskirts",
}

export const WA_LINK = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
