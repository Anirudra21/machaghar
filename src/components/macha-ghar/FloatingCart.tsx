"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

/**
 * Desktop floating cart button (bottom-right FAB).
 *
 * On mobile/tablet the cart is reachable via the elevated cart tab in the
 * BottomTabBar, so no floating element is shown there — keeping the mobile
 * viewport clean and app-like.
 */
export function FloatingCart() {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart, ${count} items`}
      className={`fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-amber text-ocean shadow-xl shadow-amber/30 transition-all duration-300 hover:scale-110 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean lg:flex ${
        count > 0
          ? "scale-100 opacity-100"
          : "pointer-events-none scale-90 opacity-0"
      }`}
    >
      <ShoppingBag className="h-6 w-6" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-ocean px-1 text-xs font-bold text-amber ring-2 ring-cream">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
