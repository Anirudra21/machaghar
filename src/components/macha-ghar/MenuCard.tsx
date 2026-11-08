"use client";

import Image from "next/image";
import { Plus, Minus, Check } from "lucide-react";
import type { MenuItem } from "@/types/menu";
import { restaurant } from "@/config/restaurant";
import { useCart } from "@/lib/cart";

export function MenuCard({ item }: { item: MenuItem }) {
  const { add, increment, decrement, lines } = useCart();
  const line = lines.find((l) => l.id === item.id);
  const fmt = restaurant.currency.format;
  const hasImage = Boolean(item.image);

  return (
    <article
      className={`group relative flex overflow-hidden rounded-2xl border border-ocean/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/40 hover:shadow-md ${
        hasImage ? "flex-row" : "flex-col"
      }`}
    >
      {hasImage && (
        <div className="relative h-28 w-28 shrink-0 overflow-hidden sm:h-32 sm:w-32">
          <Image
            src={item.image!}
            alt={item.name}
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={75}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-serif-display text-base font-semibold text-ocean sm:text-lg">
                {item.name}
              </h3>
              {item.unit && (
                <span className="rounded-full bg-ocean/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-charcoal/60">
                  {item.unit}
                </span>
              )}
              {item.badges?.map((b) => (
                <span
                  key={b}
                  className="rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber"
                >
                  {b}
                </span>
              ))}
            </div>
            {item.description && (
              <p className="mt-1.5 text-sm leading-snug text-charcoal/65 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <span className="font-serif-display text-lg font-bold text-amber sm:text-xl">
            {fmt(item.price)}
          </span>

          {line ? (
            <div className="inline-flex items-center gap-1 rounded-full border border-amber/40 bg-amber/10 p-1">
              <button
                type="button"
                onClick={() => decrement(item.id)}
                aria-label={`Decrease ${item.name} quantity`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ocean transition-colors hover:bg-amber hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span
                className="min-w-6 text-center text-sm font-bold text-ocean"
                aria-live="polite"
              >
                {line.quantity}
              </span>
              <button
                type="button"
                onClick={() => increment(item.id)}
                aria-label={`Increase ${item.name} quantity`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ocean transition-colors hover:bg-amber hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => add(item, 1)}
              className="inline-flex items-center gap-1.5 rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-cream transition-all hover:bg-amber hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              aria-label={`Add ${item.name} to order`}
            >
              <Plus className="h-4 w-4" />
              Add
            </button>
          )}
        </div>
      </div>

      {/* In-cart ribbon */}
      {line && (
        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-amber px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ocean shadow-sm">
          <Check className="h-3 w-3" /> In order
        </span>
      )}
    </article>
  );
}
