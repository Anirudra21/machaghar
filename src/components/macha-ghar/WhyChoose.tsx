"use client";

import { Fish, CookingPot, Sparkles, Heart } from "lucide-react";

const REASONS = [
  {
    icon: Fish,
    title: "Fish-Focused Menu",
    text: "An entire menu built around fresh fish — from whole grilled catch to spiced achars.",
  },
  {
    icon: CookingPot,
    title: "Authentic Nepali Flavours",
    text: "Timur, mustard oil, sesame and garden herbs — recipes rooted in Nepali kitchens.",
  },
  {
    icon: Sparkles,
    title: "Delicious Food Selection",
    text: "Momo, snacks, main courses, pickles and sides — something memorable for every palate.",
  },
  {
    icon: Heart,
    title: "Memorable Dining Experience",
    text: "A warm, intimate ambiance where every plate is crafted to make a meal worth remembering.",
  },
];

export function WhyChoose() {
  return (
    <section
      className="relative bg-cream py-20 sm:py-28"
      aria-label="Why choose Macha Ghar"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-px w-8 bg-amber" />
            Why Macha Ghar
            <span className="h-px w-8 bg-amber" />
          </p>
          <h2 className="font-serif-display text-3xl font-bold leading-tight text-ocean text-balance sm:text-4xl lg:text-5xl">
            Crafted for Lovers of Good Fish
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-ocean/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-amber/0 transition-colors duration-300 group-hover:bg-amber" />
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber/12 text-amber transition-all duration-300 group-hover:scale-110 group-hover:bg-amber group-hover:text-ocean">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif-display text-lg font-semibold text-ocean">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
