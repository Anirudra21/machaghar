import Image from "next/image";
import { restaurant } from "@/config/restaurant";

/**
 * MACHA GHAR CAFE — official logo.
 *
 * Uses the exact logo asset supplied by the owner, preserving its original
 * appearance, proportions and colours. The asset is a circular emblem, so it
 * is presented inside a circular frame to integrate cleanly on both the
 * transparent hero header and the solid scrolled header / footer.
 *
 * Clicking the logo always navigates to the homepage — it never points to the
 * developer portfolio.
 */
export function Logo({
  variant = "light",
  className = "",
  size = 44,
}: {
  variant?: "light" | "dark";
  className?: string;
  /** Logo height in px (width follows the square aspect ratio). */
  size?: number;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={restaurant.logo.alt}
    >
      <span
        className="relative inline-block shrink-0 overflow-hidden rounded-full ring-1 ring-amber/30"
        style={{ height: size, width: size }}
      >
        <Image
          src={restaurant.logo.src}
          alt={restaurant.logo.alt}
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-serif-display text-base font-bold tracking-[0.14em] sm:text-lg"
          style={{ color: variant === "light" ? "#F8F4EA" : "#102A32" }}
        >
          MACHA GHAR
        </span>
        <span
          className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.28em] sm:text-[10px]"
          style={{ color: "#D9A441" }}
        >
          Cafe &amp; Fresh Fish
        </span>
      </span>
    </span>
  );
}
