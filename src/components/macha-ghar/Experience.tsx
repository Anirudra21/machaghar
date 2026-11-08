import Image from "next/image";
import {
  Trees,
  Armchair,
  Waves,
  Droplets,
  Leaf,
  Fish,
  Construction,
} from "lucide-react";

// Features marked as completed vs planned. Only show genuine completed
// facilities as existing; planned ones are clearly labelled as upcoming.
const FEATURES: {
  icon: typeof Trees;
  label: string;
  status: "existing" | "planned";
}[] = [
  { icon: Trees, label: "Garden-inspired surroundings", status: "existing" },
  { icon: Armchair, label: "Natural wood-inspired interior", status: "existing" },
  { icon: Fish, label: "Reception & service counter", status: "existing" },
  { icon: Waves, label: "Aquarium displays", status: "planned" },
  { icon: Droplets, label: "Water features", status: "planned" },
  { icon: Leaf, label: "Greenery & outdoor dining", status: "existing" },
  { icon: Fish, label: "Fish-inspired decorative elements", status: "existing" },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-ocean py-20 text-cream sm:py-28"
      aria-label="The Macha Ghar experience"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/gallery-interior.png"
                alt="Natural, warm interior inspired by greenery and wood at Macha Ghar Cafe"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                quality={80}
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(16,33,38,0) 55%, rgba(16,33,38,0.55) 100%)",
                }}
              />
              <p className="absolute bottom-4 left-4 right-4 font-serif-display text-sm font-medium text-cream/90">
                Illustrative dining ambiance — actual interiors may vary.
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
              <span className="h-px w-8 bg-amber" />
              The Experience
            </p>
            <h2 className="font-serif-display text-3xl font-bold leading-tight text-cream text-balance sm:text-4xl lg:text-5xl">
              Dining Surrounded by Nature
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream/75 text-pretty sm:text-lg">
              The Macha Ghar experience is inspired by the connection between
              fresh fish and the natural world — a welcoming space where
              greenery, natural materials, and water meet the warmth of Nepali
              hospitality.
            </p>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {FEATURES.map(({ icon: Icon, label, status }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-lg border border-cream/10 bg-cream/5 px-3 py-2.5"
                >
                  <Icon className="h-4 w-4 shrink-0 text-amber" />
                  <span className="flex-1 text-sm text-cream/85">{label}</span>
                  {status === "planned" ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-cream/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cream/60">
                      <Construction className="h-3 w-3" />
                      Upcoming
                    </span>
                  ) : (
                    <span className="rounded-full bg-amber/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber">
                      Now
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs leading-relaxed text-cream/45">
              Only completed facilities are shown as existing. Planned features
              are marked as upcoming and may be added as the concept grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
