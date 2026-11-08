import { Target } from "lucide-react";
import { restaurant } from "@/config/restaurant";

export function Vision() {
  return (
    <section
      id="vision"
      className="relative bg-cream py-20 sm:py-24"
      aria-label="Our vision"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-br from-ocean to-navy p-8 text-cream shadow-xl sm:p-12 lg:p-16">
          {/* decorative glow */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-20"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle, #D9A441 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber/20 text-amber">
              <Target className="h-6 w-6" />
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              Our Vision
            </p>
            <h2 className="font-serif-display text-2xl font-bold leading-tight text-cream text-balance sm:text-3xl lg:text-4xl">
              A Recognizable Fish-Food Brand for Nepal
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 text-pretty sm:text-lg">
              To develop a recognizable fish-food brand that promotes fish
              consumption, offers enjoyable fish-based meals, creates a
              distinctive dining experience, and builds stronger connections
              between aquaculture and consumers.
            </p>
            <p
              className="mt-6 font-serif-display text-lg font-medium text-amber"
              lang="ne"
            >
              {restaurant.taglineNp}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
