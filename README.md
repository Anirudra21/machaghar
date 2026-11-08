# Macha Ghar Cafe — Fish Restaurant in Butwal

A premium, fully responsive, multi-page restaurant website for **Macha Ghar Cafe**, a fish-focused dining destination in Butwal-11, Naharpur, Rupandehi, Nepal.

> **ताजा माछा, घरकै स्वादमा।** — Fresh Fish, the Taste of Home.

## Highlights

- **Official branding** — uses the supplied Macha Ghar Cafe logo in the header & footer.
- **Nepal national flag favicon** — correct double-pennant shape (crimson, blue border, white moon & sun).
- **Multi-page architecture** — Home, About, Menu, and Contact pages with a shared sticky navbar, footer, cart, and floating cart.
- **Interactive menu** — all 25 menu items across 5 categories with exact prices, category filtering, and quantity controls.
- **WhatsApp ordering** — multi-item cart, table selection (8 tables), customer details, special instructions, and a fully formatted order message sent via WhatsApp.
- **Premium design** — Playfair Display + Inter typography, Deep Ocean / Golden Amber / Warm Cream palette, lazy-loaded gallery, smooth animations.
- **Verified business info** — Butwal-11, Naharpur, Rupandehi; phone 9700063503; WhatsApp +9779700063503; official Facebook page.
- **Developer attribution** — a clickable ♥ in the footer opens https://anirudrachaudhary.com.np/ in a new tab.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui + Lucide icons
- React Context API for cart state (with localStorage persistence)
- 100% static / frontend-only — no backend, database, or auth

## Pages

| Route      | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `/`        | Hero, about preview, specialties, full menu, vision, concept, experience, gallery, future vision, social, contact |
| `/about`   | Full story, vision, concept (4 pillars), experience, future vision |
| `/menu`    | Signature dishes + full interactive menu with cart & WhatsApp checkout |
| `/contact` | Verified location, click-to-call, WhatsApp, Facebook, social media |

## Centralized Configuration

All business details live in **`src/config/restaurant.ts`** — update only this file to change:

- Restaurant name, taglines (Nepali + English), description
- Contact details (phone, WhatsApp, address, maps link)
- Social media URLs (Facebook verified; TikTok & Instagram configurable)
- Developer portfolio URL
- Official logo asset path

The full menu (25 items, exact prices) lives in **`src/config/menu.ts`**.

## WhatsApp Ordering

1. Browse the menu and add dishes to the cart.
2. Open the cart, adjust quantities, then **Continue to Checkout**.
3. Select a dining table (1–8), enter name & phone, add special instructions.
4. **Continue to WhatsApp** opens `wa.me/<number>` with a fully formatted order message (customer details, table, itemised order, subtotal, grand total, instructions).

The WhatsApp number is configured in `restaurant.ts` → `contact.whatsapp`.

## Getting Started

```bash
bun install
bun run dev      # http://localhost:3000
bun run lint     # code quality
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Select the Next.js framework (auto-detected).
4. Deploy — no environment variables required.
5. After deployment, update `src/config/restaurant.ts` with the final verified WhatsApp number, official TikTok / Instagram URLs, and the Google Maps share link once available.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout: fonts, SEO metadata, favicon, shared chrome
    page.tsx            # Home page
    about/page.tsx      # About page
    menu/page.tsx       # Menu page
    contact/page.tsx    # Contact page
    sitemap.ts          # SEO sitemap
    globals.css         # Brand design system
  components/
    macha-ghar/         # All website sections & components
  config/
    restaurant.ts       # Centralized business / contact / social config
    menu.ts             # Full menu (25 items, exact prices)
  lib/
    cart.tsx            # Cart context (add / remove / qty / persistence)
    whatsapp.ts         # Order message builder + validation
  types/
    menu.ts             # TypeScript types
```

## Credits

- **Restaurant:** Macha Ghar Cafe — Butwal-11, Naharpur, Rupandehi, Nepal
- **Facebook:** https://www.facebook.com/machaghar11/
- **Designed & Developed by:** [Anirudra Chaudhary](https://anirudrachaudhary.com.np/)

> Built with ♥ in Lumbini Province, Nepal
