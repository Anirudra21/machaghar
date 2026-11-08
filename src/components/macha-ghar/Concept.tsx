import { Fish, Droplets, Trees, Mountain } from "lucide-react";

const CONCEPTS = [
  {
    icon: Fish,
    title: "Fish-Based Cuisine",
    text: "A selection of fish dishes, snacks, meals, and specialty recipes — crafted around the freshest catch.",
    accent: "from-amber/20 to-amber/5",
  },
  {
    icon: Droplets,
    title: "Fresh Fish & Aquaculture",
    text: "A vision connecting fish production, local fish farmers, careful fish handling, and consumer food products.",
    accent: "from-sky-500/20 to-sky-500/5",
  },
  {
    icon: Trees,
    title: "Natural Dining Experience",
    text: "A welcoming environment inspired by greenery, natural materials, garden elements, water features, and aquarium displays.",
    accent: "from-green-600/20 to-green-600/5",
  },
  {
    icon: Mountain,
    title: "Local Nepali Identity",
    text: "Traditional Nepali flavours and hospitality presented through a modern cafe experience.",
    accent: "from-rose-500/20 to-rose-500/5",
  },
];

export function Concept() {
  return (
    <section
      id="concept"
      className="relative bg-cream py-20 sm:py-28"
      aria-label="Our concept"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-px w-8 bg-amber" />
            Our Concept
            <span className="h-px w-8 bg-amber" />
          </p>
          <h2 className="font-serif-display text-3xl font-bold leading-tight text-ocean text-balance sm:text-4xl lg:text-5xl">
            Four Ideas Behind Macha Ghar
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75 text-pretty sm:text-lg">
            Our concept brings together cuisine, aquaculture, nature, and Nepali
            identity into one dining experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {CONCEPTS.map(({ icon: Icon, title, text, accent }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-ocean/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-md"
            >
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-ocean transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="absolute right-5 top-5 font-serif-display text-3xl font-bold text-ocean/5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif-display text-lg font-semibold text-ocean">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
