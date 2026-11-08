/**
 * MACHA GHAR CAFE — centralized restaurant configuration.
 *
 * All contact details, social links and the developer portfolio URL live here.
 * Update ONLY this file to change information across the whole website.
 *
 * Verified business details (from the supplied business document):
 *  - Name:     Macha Ghar Cafe
 *  - Location: Butwal-11, Naharpur, Rupandehi, Nepal
 *  - Phone:    9700063503
 *  - Facebook: https://www.facebook.com/machaghar11/
 */

export const restaurant = {
  name: "Macha Ghar Cafe",
  /** Short brand name used in tight spaces / wordmarks */
  shortName: "Macha Ghar",
  /** Nepali tagline — preserved verbatim */
  taglineNp: "ताजा माछा, घरकै स्वादमा।",
  /** English tagline — interpretation of the Nepali tagline */
  tagline: "Fresh Fish, the Taste of Home.",
  /** Legacy hero subtitle retained for continuity */
  subtitle: "A Taste of the River. A Feast of Flavours.",

  shortDescription:
    "A fish-focused dining destination in Butwal, Rupandehi, Nepal — bringing together delicious fish-based cuisine, authentic Nepali flavours, and a distinctive natural dining concept.",

  /** Currency symbol + format used across the site */
  currency: {
    symbol: "Rs.",
    label: "NPR",
    format: (value: number) => `Rs. ${value.toLocaleString("en-IN")}`,
  },

  /**
   * Verified contact details.
   * Phone: 9700063503 (Nepal). For WhatsApp we use the full international
   * format WITHOUT "+" / leading zeros: 977 + 9700063503 = 9779700063503.
   *
   * NOTE: The WhatsApp button is shown subject to the owner confirming this
   * number is active on WhatsApp.
   */
  contact: {
    /** Full international WhatsApp number (country code 977 + number). */
    whatsapp: "9779700063503",
    /** Display phone number. */
    phoneDisplay: "+977 9700063503",
    /** tel: link value. */
    phoneHref: "+9779700063503",
    /** Verified address. */
    address: "Butwal-11, Naharpur, Rupandehi, Nepal",
    /** Short locality used in compact UI. */
    locality: "Butwal-11, Naharpur, Rupandehi",
    /**
     * Google Maps embed src. Leave empty until the official Google Maps
     * share link is provided — we do not invent a map location.
     */
    mapsEmbedSrc: "",
    /**
     * Google Maps directions link. Leave empty until the official share link
     * is provided — the "Get Directions" button only appears when this is set.
     */
    mapsDirectionsUrl: "",
  },

  /** Official social media — only verified URLs are used. */
  social: {
    /** Verified official Facebook page. */
    facebook: "https://www.facebook.com/machaghar11/",
    /**
     * Official TikTok URL. Replace with the restaurant's verified TikTok
     * account URL once provided. Do NOT invent a username.
     */
    tiktok: "",
    /**
     * Official Instagram URL. Replace with the restaurant's verified Instagram
     * account URL once provided. Do NOT invent a username.
     */
    instagram: "",
  },

  /** Dining tables available for in-restaurant ordering. */
  tables: Array.from({ length: 8 }, (_, i) => i + 1),

  /** Developer attribution — the only place this lives. */
  developer: {
    url: "https://anirudrachaudhary.com.np/",
    label: "Built with ♥ in Lumbini Province, Nepal",
    location: "Lumbini Province, Nepal",
  },

  /** Official logo asset (supplied by the owner). */
  logo: {
    src: "/images/logo.png",
    alt: "Macha Ghar Cafe Logo",
  },
} as const;

/** Convenience helper to build a WhatsApp deep link with an encoded message. */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${restaurant.contact.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}
