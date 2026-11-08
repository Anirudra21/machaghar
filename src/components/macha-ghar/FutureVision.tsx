import { Sparkles, Package } from "lucide-react";

// Future business possibilities — NOT currently available products.
const FUTURE_PRODUCTS = [
  "Fresh fish products",
  "Boneless fish fillets",
  "Frozen fish products",
  "Fish fingers",
  "Fish chips",
  "Fish keema",
  "Packaged fish products",
];

export function FutureVision() {
  return (
    <section
      id="future"
      className="relative bg-navy py-20 text-cream sm:py-28"
      aria-label="More than a cafe — our growing vision"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, #D9A441 0, transparent 35%), radial-gradient(circle at 85% 70%, #D9A441 0, transparent 35%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-px w-8 bg-amber" />
            Growing Vision
            <span className="h-px w-8 bg-amber" />
          </p>
          <h2 className="font-serif-display text-3xl font-bold leading-tight text-cream text-balance sm:text-4xl lg:text-5xl">
            More Than a Cafe — Our Growing Vision
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 text-pretty sm:text-lg">
            We envision Macha Ghar growing beyond the cafe — bringing fresh,
            quality fish products to more kitchens across the region.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-cream/10 bg-cream/5 p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber/20 text-amber">
              <Package className="h-5 w-5" />
            </span>
            <h3 className="font-serif-display text-lg font-semibold text-cream">
              Future product possibilities
            </h3>
          </div>
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {FUTURE_PRODUCTS.map((product) => (
              <li
                key={product}
                className="flex items-center gap-2 rounded-lg border border-cream/10 bg-ocean/40 px-3 py-2.5 text-sm text-cream/85"
              >
                <Sparkles className="h-4 w-4 shrink-0 text-amber" />
                {product}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-cream/45">
            These are future business possibilities, not currently available
            products. They will be offered once the owner confirms these
            services are operational.
          </p>
        </div>
      </div>
    </section>
  );
}
