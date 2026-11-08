"use client";

import { Facebook, Instagram, ExternalLink, Music2 } from "lucide-react";
import { restaurant } from "@/config/restaurant";

/** Official-style TikTok glyph (lucide has no TikTok icon). */
function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.32 2.18 1.5 3.78 3.5 4v2.6c-1.2.02-2.36-.3-3.5-.94v5.9c0 3.05-2.2 5.44-5.16 5.44-2.9 0-5.34-2.1-5.34-5.16 0-3.06 2.45-5.16 5.34-5.16.3 0 .6.03.9.08v2.7a3.06 3.06 0 0 0-.9-.14c-1.5 0-2.7 1.1-2.7 2.5 0 1.4 1.2 2.5 2.7 2.5 1.6 0 2.86-1.1 2.86-2.78V3h2.6Z" />
    </svg>
  );
}

export function SocialMedia() {
  const { facebook, tiktok, instagram } = restaurant.social;

  const cards = [
    {
      label: "Facebook",
      handle: "facebook.com/machaghar11",
      href: facebook || null,
      cta: "Follow us on Facebook",
      icon: Facebook,
      accent: "#1877F2",
    },
    {
      label: "TikTok",
      handle: tiktok ? "Verified TikTok account" : "Verified account coming soon",
      href: tiktok || null,
      cta: "Follow us on TikTok",
      icon: TikTokIcon,
      accent: "#D9A441",
    },
    {
      label: "Instagram",
      handle: instagram ? "Verified Instagram account" : "Verified account coming soon",
      href: instagram || null,
      cta: "Follow us on Instagram",
      icon: Instagram,
      accent: "#C13584",
    },
  ];

  return (
    <section
      id="follow"
      className="relative bg-ocean py-20 text-cream sm:py-28"
      aria-label="Follow Macha Ghar Cafe on social media"
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #D9A441 0, transparent 40%), radial-gradient(circle at 80% 80%, #D9A441 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-px w-8 bg-amber" />
            Follow Macha Ghar
            <span className="h-px w-8 bg-amber" />
          </p>
          <h2 className="font-serif-display text-3xl font-bold leading-tight text-cream text-balance sm:text-4xl lg:text-5xl">
            Follow Us for More Delicious Moments
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 text-pretty sm:text-lg">
            Stay connected with Macha Ghar Cafe and discover our delicious food,
            latest updates, and special moments.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            const content = (
              <>
                <div
                  className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: card.accent }}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-cream">
                  {card.label}
                </h3>
                <p className="mt-1.5 text-sm text-cream/60">{card.handle}</p>
                <span
                  className={`mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    card.href
                      ? "bg-amber text-ocean"
                      : "cursor-not-allowed border border-cream/20 text-cream/40"
                  }`}
                >
                  {card.cta}
                  {card.href && (
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </span>
              </>
            );

            return card.href ? (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center rounded-2xl border border-cream/10 bg-navy/50 p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:bg-navy/70 hover:shadow-xl"
              >
                {content}
              </a>
            ) : (
              <div
                key={card.label}
                className="group relative flex flex-col items-center rounded-2xl border border-cream/10 bg-navy/30 p-7 text-center opacity-80"
                aria-disabled="true"
              >
                {content}
                <p className="mt-3 flex items-center gap-1 text-xs text-cream/40">
                  <Music2 className="h-3 w-3" />
                  Link will appear once verified
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
