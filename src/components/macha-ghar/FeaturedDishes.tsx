"use client";

import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { featuredDishes } from "@/config/menu";
import { restaurant } from "@/config/restaurant";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function FeaturedDishes() {
  const { add } = useCart();

  return (
    <section
      id="specialties"
      className="relative bg-ocean py-20 text-cream sm:py-28"
      aria-label="Signature dishes"
    >
      {/* subtle top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-px w-8 bg-amber" />
            Specialties
            <span className="h-px w-8 bg-amber" />
          </p>
          <h2 className="font-serif-display text-3xl font-bold leading-tight text-cream text-balance sm:text-4xl lg:text-5xl">
            Signature Dishes Worth the Journey
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 text-pretty sm:text-lg">
            Four preparations that define Macha Ghar — each crafted to be
            remembered long after the last bite.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {featuredDishes.map((dish, i) => (
            <FeatureCard
              key={dish.id}
              dish={dish}
              index={i}
              onAdd={() => {
                add(dish, 1);
                toast({
                  title: "Added to order",
                  description: `${dish.name} • ${restaurant.currency.format(
                    dish.price,
                  )}`,
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  dish,
  index,
  onAdd,
}: {
  dish: (typeof featuredDishes)[number];
  index: number;
  onAdd: () => void;
}) {
  const [added, setAdded] = useState(false);
  const fmt = restaurant.currency.format;

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-navy/60 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image ?? "/images/dish-grilled-fish.png"}
          alt={dish.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          quality={80}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,33,38,0) 40%, rgba(16,33,38,0.7) 100%)",
          }}
        />
        {dish.badges?.[0] && (
          <span className="absolute left-3 top-3 rounded-full bg-amber px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-ocean shadow">
            {dish.badges[0]}
          </span>
        )}
        <div className="absolute bottom-3 right-3 rounded-lg bg-ocean/80 px-3 py-1.5 text-sm font-bold text-amber backdrop-blur-sm">
          {fmt(dish.price)}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif-display text-xl font-semibold text-cream">
          {dish.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">
          {dish.description}
        </p>
        <button
          type="button"
          onClick={() => {
            onAdd();
            setAdded(true);
            setTimeout(() => setAdded(false), 1400);
          }}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-2.5 text-sm font-semibold text-amber transition-all hover:bg-amber hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          aria-label={`Add ${dish.name} to order`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> Added
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" /> Add to Order
            </>
          )}
        </button>
      </div>
    </article>
  );
}
