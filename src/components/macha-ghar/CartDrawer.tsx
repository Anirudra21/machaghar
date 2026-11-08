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
import { useIsDesktop } from "@/hooks/use-desktop";
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
  const isDesktop = useIsDesktop();
  const fmt = restaurant.currency.format;

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent
        side={isDesktop ? "right" : "bottom"}
        className={
          isDesktop
            ? "flex w-full flex-col gap-0 border-ocean/10 bg-cream p-0 sm:max-w-md"
            : "sheet-bottom-app flex w-full flex-col gap-0 border-t border-ocean/10 bg-cream p-0"
        }
      >
        {/* Mobile grab handle (app-like) */}
        {!isDesktop && (
          <div className="flex justify-center pt-2.5" aria-hidden="true">
            <span className="h-1.5 w-10 rounded-full bg-ocean/15" />
          </div>
        )}

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
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream active:scale-90"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </SheetHeader>

        {/* Body */}
        <div className="scrollbar-premium flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 py-10 text-center">
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
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-charcoal/40 transition-colors hover:bg-destructive/10 hover:text-destructive active:scale-90 lg:h-7 lg:w-7"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between">
                    {/* Touch-friendly quantity stepper */}
                    <div className="inline-flex items-center gap-1 rounded-full border border-amber/30 bg-amber/10 p-1">
                      <button
                        type="button"
                        onClick={() => decrement(line.id)}
                        aria-label={`Decrease ${line.name} quantity`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ocean transition-colors hover:bg-amber active:scale-90 lg:h-7 lg:w-7"
                      >
                        <Minus className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
                      </button>
                      <span
                        className="min-w-7 text-center text-sm font-bold text-ocean lg:min-w-6"
                        aria-live="polite"
                      >
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increment(line.id)}
                        aria-label={`Increase ${line.name} quantity`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ocean transition-colors hover:bg-amber active:scale-90 lg:h-7 lg:w-7"
                      >
                        <Plus className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
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
          <div className="border-t border-ocean/10 bg-white px-4 py-4 sm:px-5">
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                onClick={clear}
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-medium text-charcoal/55 transition-colors hover:text-destructive active:scale-95"
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
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-5 py-4 text-sm font-bold text-ocean shadow-md transition-all hover:brightness-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean active:scale-95 lg:py-3.5"
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
