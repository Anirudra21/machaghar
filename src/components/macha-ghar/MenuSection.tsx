"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { menu, menuCategories } from "@/config/menu";
import type { MenuCategoryKey } from "@/types/menu";
import { MenuCard } from "./MenuCard";
import { restaurant } from "@/config/restaurant";

type Filter = "all" | MenuCategoryKey;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  ...menuCategories.map((c) => ({ key: c.key, label: c.label })),
];

export function MenuSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const visibleCategories = useMemo(
    () =>
      filter === "all"
        ? menuCategories
        : menuCategories.filter((category) => category.key === filter),
    [filter],
  );

  return (
    <section
      id="menu"
      className="relative bg-cream py-20 sm:py-28"
      aria-label="Our menu"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-px w-8 bg-amber" />
            Our Menu
            <span className="h-px w-8 bg-amber" />
          </p>
          <h2 className="font-serif-display text-3xl font-bold leading-tight text-ocean text-balance sm:text-4xl lg:text-5xl">
            The Complete Macha Ghar Menu
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75 text-pretty sm:text-lg">
            Explore fish recipes, Mo items, house specials, boneless platters,
            vegetarian dishes and extras.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div
            className="scrollbar-none snap-x-tabs flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-ocean/10 bg-white p-1.5 shadow-sm lg:scrollbar-premium"
            role="tablist"
            aria-label="Menu categories"
          >
            <span className="hidden pl-2 pr-1 text-charcoal/40 lg:inline-flex">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.key)}
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-all active:scale-95 lg:py-2 ${
                    active
                      ? "bg-amber text-ocean shadow-sm"
                      : "text-charcoal/70 hover:bg-ocean/5 hover:text-ocean"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category sections */}
        <div className="mt-10 lg:mt-12">
          {visibleCategories.map((category) => (
            <section
              key={category.key}
              className="mt-10 first:mt-0"
              aria-labelledby={`menu-category-${category.key}`}
            >
              <div className="mb-5 border-b border-ocean/10 pb-3">
                <h3
                  id={`menu-category-${category.key}`}
                  className="font-serif-display text-2xl font-bold text-ocean sm:text-3xl"
                >
                  {category.label}
                </h3>
                <p className="mt-1 text-sm text-charcoal/60">
                  {category.tagline}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {menu
                  .filter((item) => item.category === category.key)
                  .map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-charcoal/50">
          Prices in {restaurant.currency.label}. All items are prepared fresh to
          order. {restaurant.name} reserves the right to update the menu.
        </p>
      </div>
    </section>
  );
}
