import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { restaurant } from "@/config/restaurant";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHeader({
  title,
  eyebrow,
  nepali,
  description,
  crumbs,
  image = "/images/hero-grilled-fish.png",
}: {
  title: string;
  eyebrow?: string;
  nepali?: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section
      className="relative flex items-end overflow-hidden bg-ocean pt-28 pb-12 text-cream sm:pt-32 sm:pb-16"
      aria-label={title}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={75}
      />
      <div className="vignette absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,33,38,0.92) 0%, rgba(16,33,38,0.7) 50%, rgba(16,33,38,0.5) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-amber"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-amber">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <ChevronRight className="h-3 w-3 text-cream/30" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {eyebrow}
          </p>
        )}

        {nepali && (
          <p
            className="mb-2 font-serif-display text-lg font-medium text-amber"
            lang="ne"
          >
            {nepali}
          </p>
        )}

        <h1 className="font-serif-display text-3xl font-bold leading-tight text-cream text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/80 text-pretty sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
