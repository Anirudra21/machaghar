"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";
import { restaurant } from "@/config/restaurant";

/**
 * Floating cart button (desktop) + sticky order bar (mobile).
 * The mobile bar appears once the user scrolls past the hero and has items.
 */
export function FloatingCart() {
  const { count, subtotal, openCart } = useCart();
  const [showMobileBar, setShowMobileBar] = useState(false);
  const fmt = restaurant.currency.format;

  useEffect(() => {
    const onScroll = () => {
      // Show after roughly one viewport of scroll
      setShowMobileBar(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating cart FAB */}
      <button
        type="button"
        onClick={openCart}
        aria-label={`Open cart, ${count} items`}
        className={`fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-amber text-ocean shadow-xl shadow-amber/30 transition-all duration-300 hover:scale-110 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean lg:flex ${
          count > 0 ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <ShoppingBag className="h-6 w-6" />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-ocean px-1 text-xs font-bold text-amber ring-2 ring-cream">
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>

      {/* Mobile sticky order bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 lg:hidden ${
          showMobileBar && count > 0
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="mx-auto max-w-md px-3 pb-3">
          <button
            type="button"
            onClick={openCart}
            className="flex w-full items-center justify-between gap-3 rounded-full bg-ocean px-4 py-3 text-cream shadow-xl ring-1 ring-amber/30"
          >
            <span className="flex items-center gap-2.5">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber text-ocean">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-cream px-1 text-[10px] font-bold text-ocean ring-2 ring-ocean">
                  {count > 99 ? "99+" : count}
                </span>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-wide text-cream/60">
                  View order
                </span>
                <span className="text-sm font-bold text-amber">
                  {fmt(subtotal)}
                </span>
              </span>
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-cream">
              Checkout
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
