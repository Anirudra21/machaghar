"use client";

import Image from "next/image";
import { Fish } from "lucide-react";

interface Shot {
  src: string;
  alt: string;
  caption: string;
  span?: "wide" | "tall" | "normal";
}

const SHOTS: Shot[] = [
  {
    src: "/images/dish-grilled-fish.png",
    alt: "Whole grilled fish garnished with herbs and lemon",
    caption: "Whole Grilled Fish",
    span: "wide",
  },
  {
    src: "/images/dish-momo.png",
    alt: "Steamed fish momo dumplings in a bamboo steamer",
    caption: "Fish Momo",
  },
  {
    src: "/images/dish-tawa-fry.png",
    alt: "Crispy fish tawa fry on cast iron pan",
    caption: "Fish Tawa Fry",
  },
  {
    src: "/images/dish-thali.png",
    alt: "Nepali fish thali platter with rice and curry",
    caption: "Fish Khana Set",
    span: "tall",
  },
  {
    src: "/images/gallery-tikka.png",
    alt: "Fish tikka skewers with mint chutney",
    caption: "Fish Tikka & Snacks",
  },
  {
    src: "/images/gallery-interior.png",
    alt: "Warm interior of the Macha Ghar restaurant",
    caption: "The Macha Ghar Ambiance",
    span: "wide",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-navy py-20 text-cream sm:py-28"
      aria-label="Gallery"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-px w-8 bg-amber" />
            Gallery
            <span className="h-px w-8 bg-amber" />
          </p>
          <h2 className="font-serif-display text-3xl font-bold leading-tight text-cream text-balance sm:text-4xl lg:text-5xl">
            A Visual Feast of Macha Ghar
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/70 text-pretty sm:text-lg">
            A glimpse of the dishes, textures, and atmosphere that await you.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-4 lg:auto-rows-[220px]">
          {SHOTS.map((shot, i) => (
            <figure
              key={shot.src + i}
              className={`group relative overflow-hidden rounded-2xl border border-cream/10 ${
                shot.span === "wide"
                  ? "col-span-2"
                  : shot.span === "tall"
                    ? "row-span-2"
                    : ""
              }`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={75}
              />
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(16,33,38,0) 50%, rgba(16,33,38,0.85) 100%)",
                }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Fish className="h-4 w-4 text-amber" />
                <span className="font-serif-display text-sm font-semibold text-cream">
                  {shot.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-cream/40">
          Food photography shown is illustrative of the dishes we serve.
        </p>
      </div>
    </section>
  );
}
