import Link from "next/link";
import { UtensilsCrossed, MessageCircle } from "lucide-react";
import { restaurant, buildWhatsAppLink } from "@/config/restaurant";

export function AboutCta() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber to-[#C2872E] p-8 text-center shadow-xl sm:p-12">
          <div
            className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full opacity-20"
            aria-hidden="true"
            style={{
              background: "radial-gradient(circle, #102A32 0%, transparent 70%)",
            }}
          />
          <h2 className="relative font-serif-display text-2xl font-bold text-ocean text-balance sm:text-3xl">
            Ready to Taste the Flavours of Macha Ghar?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-ocean/75 sm:text-base">
            Explore the full menu and build your order, or message us directly on
            WhatsApp.
          </p>
          <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-cream shadow-md transition-all hover:bg-navy hover:shadow-lg"
            >
              <UtensilsCrossed className="h-4 w-4 transition-transform group-hover:rotate-12" />
              Explore Our Menu
            </Link>
            <a
              href={buildWhatsAppLink(
                `Hello ${restaurant.name}! I would like to place an order.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ocean/30 bg-white/20 px-6 py-3 text-sm font-semibold text-ocean backdrop-blur-sm transition-all hover:bg-white/30"
            >
              <MessageCircle className="h-4 w-4" />
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
