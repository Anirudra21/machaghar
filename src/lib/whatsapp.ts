import { restaurant, buildWhatsAppLink } from "@/config/restaurant";
import type { CartLine, CustomerDetails } from "@/types/menu";

/**
 * Builds the formatted WhatsApp order message exactly as specified,
 * then returns a ready-to-open wa.me link with encodeURIComponent applied.
 */
export function buildOrderMessage(
  lines: CartLine[],
  customer: CustomerDetails,
): string {
  const subtotal = lines.reduce((acc, l) => acc + l.price * l.quantity, 0);
  const fmt = restaurant.currency.format;

  const itemLines = lines
    .map((l, i) => {
      const lineTotal = l.price * l.quantity;
      const parts = [
        `${i + 1}. ${l.name}`,
        `Quantity: ${l.quantity}`,
        `Unit Price: ${fmt(l.price)}`,
        `Total: ${fmt(lineTotal)}`,
      ];
      return parts.join("\n");
    })
    .join("\n\n");

  const tableLabel = customer.table
    ? `Table ${customer.table}`
    : "Not selected";

  const instructionsBlock = customer.instructions.trim()
    ? `\nSpecial Instructions:\n${customer.instructions.trim()}\n`
    : `\nSpecial Instructions:\n— None —\n`;

  const message = [
    `Hello ${restaurant.name}! I would like to place an order.`,
    "",
    "CUSTOMER DETAILS",
    `Name: ${customer.name.trim() || "—"}`,
    `Phone: ${customer.phone.trim() || "—"}`,
    "",
    "TABLE DETAILS",
    `Table: ${tableLabel}`,
    "",
    "ORDER DETAILS",
    "",
    itemLines || "— No items —",
    "",
    "ORDER SUMMARY",
    `Subtotal: ${fmt(subtotal)}`,
    `Grand Total: ${fmt(subtotal)}`,
    instructionsBlock,
    "Please confirm my order. Thank you!",
  ].join("\n");

  return message;
}

/** Returns the full wa.me deep link with the encoded message. */
export function buildOrderWhatsAppLink(
  lines: CartLine[],
  customer: CustomerDetails,
): string {
  return buildWhatsAppLink(buildOrderMessage(lines, customer));
}

export interface CheckoutValidation {
  ok: boolean;
  reason?: string;
}

export function validateCheckout(
  lines: CartLine[],
  customer: CustomerDetails,
): CheckoutValidation {
  if (lines.length === 0) {
    return { ok: false, reason: "Your cart is empty. Add a few dishes first." };
  }
  if (!customer.table) {
    return { ok: false, reason: "Please select your dining table." };
  }
  if (!customer.name.trim()) {
    return { ok: false, reason: "Please enter your name." };
  }
  if (!customer.phone.trim()) {
    return { ok: false, reason: "Please enter your phone number." };
  }
  return { ok: true };
}
