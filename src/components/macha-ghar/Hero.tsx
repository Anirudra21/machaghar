"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, UtensilsCrossed, ChevronDown } from "lucide-react";
import { restaurant, buildWhatsAppLink } from "@/config/restaurant";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      aria-label="Welcome to Macha Ghar Cafe"
    >
      {/* Background image */}
      <Image
        src="/images/hero-grilled-fish.png"
        alt="A whole grilled fish platter at Macha Ghar Cafe, garnished with fresh herbs and lemon"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={85}
      />
      {/* Overlays */}
      <div className="vignette absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,33,38,0.85) 0%, rgba(16,33,38,0.55) 45%, rgba(16,33,38,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-cream">
          <p className="animate-float-up mb-5 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-amber backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Welcome to Macha Ghar Cafe
          </p>

          {/* Nepali tagline — preserved verbatim */}
          <p
            className="animate-float-up mb-3 font-serif-display text-xl font-medium text-amber sm:text-2xl"
            lang="ne"
            dir="ltr"
          >
            {restaurant.taglineNp}
          </p>

          <h1 className="animate-float-up font-serif-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Fresh Fish,
            <br />
            <span className="text-amber">the Taste of Home.</span>
          </h1>

          <p className="animate-float-up mt-6 max-w-xl text-base leading-relaxed text-cream/85 text-pretty sm:text-lg">
            A fish-focused dining destination in Butwal, Rupandehi — bringing
            together delicious fish-based cuisine, authentic Nepali flavours,
            and a distinctive natural dining concept.
          </p>

          <div className="animate-float-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-ocean shadow-lg shadow-amber/20 transition-all hover:brightness-110 hover:shadow-amber/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
            >
              <UtensilsCrossed className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Explore Our Menu
            </Link>
            <a
              href={buildWhatsAppLink(
                `Hello ${restaurant.name}! I would like to place an order.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/35 bg-cream/5 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:border-amber hover:bg-amber/10 hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream/60 transition-colors hover:text-amber sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
