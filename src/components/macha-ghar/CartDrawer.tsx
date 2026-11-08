"use client";

import { Minus, Plus, ShoppingBag, Trash2, X, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { restaurant } from "@/config/restaurant";
import { OrderCheckout } from "./OrderCheckout";

export function CartDrawer() {
  const {
    lines,
    isOpen,
    closeCart,
    increment,
    decrement,
    remove,
    clear,
    subtotal,
    count,
  } = useCart();

  const fmt = restaurant.currency.format;

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 border-ocean/10 bg-cream p-0 sm:max-w-md"
      >
        {/* Header */}
        <SheetHeader className="border-b border-ocean/10 bg-ocean px-5 py-4 text-cream">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber/20 text-amber">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <div>
                <SheetTitle className="font-serif-display text-lg font-semibold text-cream">
                  Your Order
                </SheetTitle>
                <SheetDescription className="text-xs text-cream/70">
                  {count > 0
                    ? `${count} item${count > 1 ? "s" : ""} • ${fmt(subtotal)}`
                    : "Your cart is empty"}
                </SheetDescription>
              </div>
            </div>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </SheetHeader>

        {/* Body */}
        <div className="scrollbar-premium flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-ocean/5 text-ocean/30">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif-display text-lg font-semibold text-ocean">
                No dishes yet
              </h3>
              <p className="text-sm text-charcoal/60">
                Browse the menu and add your favourite fish dishes to start
                your order.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {lines.map((line) => (
                <li
                  key={line.id}
                  className="rounded-xl border border-ocean/10 bg-white p-3 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-serif-display text-sm font-semibold text-ocean">
                        {line.name}
                      </p>
                      {line.unit && (
                        <p className="text-[11px] uppercase tracking-wide text-charcoal/50">
                          {line.unit}
                        </p>
                      )}
                      <p className="mt-0.5 text-xs text-charcoal/60">
                        {fmt(line.price)} each
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(line.id)}
                      aria-label={`Remove ${line.name}`}
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 rounded-full border border-amber/30 bg-amber/10 p-1">
                      <button
                        type="button"
                        onClick={() => decrement(line.id)}
                        aria-label={`Decrease ${line.name} quantity`}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-ocean transition-colors hover:bg-amber"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span
                        className="min-w-6 text-center text-sm font-bold text-ocean"
                        aria-live="polite"
                      >
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increment(line.id)}
                        aria-label={`Increase ${line.name} quantity`}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full text-ocean transition-colors hover:bg-amber"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="font-serif-display text-base font-bold text-amber">
                      {fmt(line.price * line.quantity)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-ocean/10 bg-white px-5 py-4">
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                onClick={clear}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal/55 transition-colors hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear cart
              </button>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wide text-charcoal/50">
                  Subtotal
                </p>
                <p className="font-serif-display text-2xl font-bold text-ocean">
                  {fmt(subtotal)}
                </p>
              </div>
            </div>
            <OrderCheckout>
              <button
                type="button"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-5 py-3.5 text-sm font-bold text-ocean shadow-md transition-all hover:brightness-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean"
              >
                Continue to Checkout
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </OrderCheckout>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
