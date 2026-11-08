"use client";

import Image from "next/image";
import Link from "next/link";
import { Fish, Leaf, Flame, ArrowRight } from "lucide-react";
import { restaurant } from "@/config/restaurant";

const PILLARS = [
  {
    icon: Fish,
    title: "Fish-Focused",
    text: "A menu built entirely around fresh, delicious fish.",
  },
  {
    icon: Leaf,
    title: "Authentic Nepali",
    text: "Recipes rooted in Nepali kitchens and timur-spiced traditions.",
  },
  {
    icon: Flame,
    title: "Freshly Prepared",
    text: "Every dish cooked to order over open flame and cast iron.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative bg-cream py-20 sm:py-28"
      aria-label="About Macha Ghar Cafe"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/about-chef.png"
                alt="A chef plating a delicate fish dish at Macha Ghar Cafe"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                quality={80}
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(16,33,38,0) 60%, rgba(16,33,38,0.45) 100%)",
                }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-ocean px-6 py-5 text-cream shadow-xl sm:block lg:-right-6">
              <p className="font-serif-display text-3xl font-bold text-amber">
                100%
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/80">
                Fish-Specialty
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              <span className="h-px w-8 bg-amber" />
              Our Story
            </p>
            <h2 className="font-serif-display text-3xl font-bold leading-tight text-ocean text-balance sm:text-4xl lg:text-5xl">
              More Than a Meal. It&apos;s a Love for Fish.
            </h2>
            {/* Nepali tagline */}
            <p
              className="mt-3 font-serif-display text-lg font-medium text-amber"
              lang="ne"
            >
              {restaurant.taglineNp}
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80 text-pretty sm:text-lg">
              <p>
                At {restaurant.name}, our passion for fish goes beyond the plate.
                We bring together fish-based cuisine, authentic Nepali food
                culture, and an enjoyable dining experience — inspired by the
                connection between fresh fish, aquaculture, local food culture,
                and natural surroundings.
              </p>
              <p>
                Based in Naharpur, Butwal-11, {restaurant.name} aims to become a
                recognizable fish-food destination in Butwal and the surrounding
                Rupandehi region — a welcoming space where customers enjoy
                delicious fish dishes and the warmth of Nepali hospitality.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-amber transition-colors hover:text-ocean"
            >
              Read our full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {PILLARS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-ocean/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber/15 text-amber transition-colors group-hover:bg-amber group-hover:text-ocean">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif-display text-base font-semibold text-ocean">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-charcoal/70">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
