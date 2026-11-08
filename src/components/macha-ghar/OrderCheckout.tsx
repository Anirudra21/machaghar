"use client";

import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, ShoppingBag, AlertCircle, CheckCircle2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { restaurant } from "@/config/restaurant";
import { useIsDesktop } from "@/hooks/use-desktop";
import { TableSelector } from "./TableSelector";
import {
  buildOrderWhatsAppLink,
  validateCheckout,
} from "@/lib/whatsapp";
import { toast } from "@/hooks/use-toast";

export function OrderCheckout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { lines, subtotal, count, clear, closeCart } = useCart();
  const isDesktop = useIsDesktop();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [instructions, setInstructions] = useState("");
  const [table, setTable] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const fmt = restaurant.currency.format;

  const validation = useMemo(
    () =>
      validateCheckout(lines, { name, phone, instructions, table }),
    [lines, name, phone, instructions, table],
  );

  const handleOpenChange = (next: boolean) => {
    if (next) setSent(false);
    setOpen(next);
  };

  const handleSendWhatsApp = () => {
    setError(null);
    if (!validation.ok) {
      setError(validation.reason ?? "Please complete the form.");
      toast({
        title: "Almost there",
        description: validation.reason,
        variant: "destructive",
      });
      return;
    }

    const link = buildOrderWhatsAppLink(lines, {
      name,
      phone,
      instructions,
      table,
    });

    window.open(link, "_blank", "noopener,noreferrer");
    setSent(true);
    toast({
      title: "Opening WhatsApp…",
      description:
        "Your order is ready in WhatsApp. Please press send to confirm with the restaurant.",
    });
  };

  const handleCloseAndReset = () => {
    setOpen(false);
    setError(null);
    closeCart();
  };

  const handleStartNewOrder = () => {
    clear();
    setName("");
    setPhone("");
    setInstructions("");
    setTable(null);
    setSent(false);
    setError(null);
    setOpen(false);
    closeCart();
  };

  const headerTitle = (
    <>
      <ShoppingBag className="h-5 w-5 text-amber" />
      Review &amp; Place Order
    </>
  );
  const headerDesc =
    count > 0
      ? `${count} item${count > 1 ? "s" : ""} • ${fmt(subtotal)}`
      : "Your cart is empty.";

  // Shared body — rendered inside either the desktop Dialog or mobile Sheet.
  const body = sent ? (
    <div className="px-5 py-8 text-center">
      <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <h3 className="font-serif-display text-xl font-semibold text-ocean">
        Order sent to WhatsApp
      </h3>
      <p className="mt-2 text-sm text-charcoal/70">
        We&apos;ve opened WhatsApp with your complete order. Please press{" "}
        <strong>send</strong> to confirm with the restaurant. Your order is{" "}
        <strong>not confirmed</strong> until the restaurant replies.
      </p>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={handleStartNewOrder}
          className="inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-semibold text-ocean transition-all hover:brightness-110 active:scale-95 sm:py-2.5"
        >
          Start a new order
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="inline-flex items-center justify-center rounded-full border border-ocean/20 px-5 py-3 text-sm font-medium text-ocean transition-colors hover:bg-ocean/5 active:scale-95 sm:py-2.5"
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    <div className="space-y-5 px-5 py-5">
      {lines.length === 0 ? (
        <div className="rounded-xl border border-dashed border-ocean/20 bg-white px-4 py-8 text-center">
          <p className="text-sm text-charcoal/60">
            Your cart is empty. Add a few dishes from the menu first.
          </p>
        </div>
      ) : (
        <>
          {/* Order summary */}
          <div className="rounded-xl border border-ocean/10 bg-white p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-charcoal/50">
              Order Details
            </p>
            <ul className="space-y-2">
              {lines.map((l, i) => (
                <li
                  key={l.id}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <span className="min-w-0 text-charcoal/80">
                    <span className="text-charcoal/40">{i + 1}. </span>
                    {l.name}
                    <span className="ml-1 text-xs text-charcoal/50">
                      × {l.quantity}
                    </span>
                  </span>
                  <span className="shrink-0 font-medium text-ocean">
                    {fmt(l.price * l.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 border-t border-ocean/10 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal/60">Subtotal</span>
                <span className="font-serif-display text-lg font-bold text-ocean">
                  {fmt(subtotal)}
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm text-charcoal/60">Grand Total</span>
                <span className="font-serif-display text-lg font-bold text-amber">
                  {fmt(subtotal)}
                </span>
              </div>
            </div>
          </div>

          {/* Customer details */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/50">
              Customer Details
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="cust-name" className="text-sm text-ocean">
                  Name <span className="text-amber">*</span>
                </Label>
                <Input
                  id="cust-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className="h-12 border-ocean/15 bg-white text-base lg:h-9 lg:text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cust-phone" className="text-sm text-ocean">
                  Phone <span className="text-amber">*</span>
                </Label>
                <Input
                  id="cust-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="98XXXXXXXX"
                  inputMode="tel"
                  autoComplete="tel"
                  className="h-12 border-ocean/15 bg-white text-base lg:h-9 lg:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Table selection */}
          <TableSelector value={table} onChange={setTable} />

          {/* Special instructions */}
          <div className="space-y-1.5">
            <Label htmlFor="cust-instructions" className="text-sm text-ocean">
              Special Instructions
            </Label>
            <Textarea
              id="cust-instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Spice level, allergies, or any notes for the kitchen…"
              rows={3}
              className="resize-none border-ocean/15 bg-white text-base lg:text-sm"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2.5 text-sm text-destructive">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Note */}
          <p className="text-xs leading-relaxed text-charcoal/55">
            By continuing, your order opens in WhatsApp. The order is{" "}
            <strong>not confirmed</strong> until the restaurant confirms it.
          </p>

          {/* Actions */}
          <div className="flex flex-col gap-2 pt-1">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-base font-bold text-white shadow-md transition-all hover:brightness-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 active:scale-95 lg:py-3.5 lg:text-sm"
            >
              <MessageCircle className="h-5 w-5" />
              Continue to WhatsApp
            </button>
            <button
              type="button"
              onClick={handleCloseAndReset}
              className="inline-flex w-full items-center justify-center rounded-full border border-ocean/20 px-5 py-3.5 text-base font-medium text-ocean transition-colors hover:bg-ocean/5 active:scale-95 lg:py-2.5 lg:text-sm"
            >
              Back to menu
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <span onClick={() => handleOpenChange(true)}>{children}</span>

      {isDesktop ? (
        // Desktop — centered dialog (unchanged from original design)
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogContent className="max-h-[92svh] w-[calc(100vw-1.5rem)] overflow-y-auto rounded-2xl border-ocean/15 bg-cream p-0 sm:max-w-lg scrollbar-premium">
            <DialogHeader className="border-b border-ocean/10 bg-ocean px-5 py-4 text-cream">
              <DialogTitle className="flex items-center gap-2 font-serif-display text-lg text-cream">
                {headerTitle}
              </DialogTitle>
              <DialogDescription className="text-cream/70">
                {headerDesc}
              </DialogDescription>
            </DialogHeader>
            {body}
          </DialogContent>
        </Dialog>
      ) : (
        // Mobile / tablet — app-like bottom sheet
        <Sheet open={open} onOpenChange={handleOpenChange}>
          <SheetContent
            side="bottom"
            className="sheet-bottom-app flex w-full flex-col gap-0 border-t border-ocean/15 bg-cream p-0"
          >
            <div className="flex justify-center pt-2.5" aria-hidden="true">
              <span className="h-1.5 w-10 rounded-full bg-ocean/15" />
            </div>
            <SheetHeader className="border-b border-ocean/10 bg-ocean px-5 py-4 text-cream">
              <SheetTitle className="flex items-center gap-2 font-serif-display text-lg text-cream">
                {headerTitle}
              </SheetTitle>
              <SheetDescription className="text-cream/70">
                {headerDesc}
              </SheetDescription>
            </SheetHeader>
            <div className="scrollbar-premium max-h-[72svh] overflow-y-auto">
              {body}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
