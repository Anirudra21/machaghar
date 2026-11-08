"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart";
import { restaurant, buildWhatsAppLink } from "@/config/restaurant";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/#specialties", label: "Specialties" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const pathname = usePathname();
  // Inner pages have no hero behind the header, so it is always solid there.
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Solid when: scrolled, mobile menu open, or on any inner (non-home) page.
  const solid = scrolled || mobileOpen || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-ocean/95 text-cream shadow-[0_8px_30px_rgba(16,33,38,0.25)] backdrop-blur-md"
          : "bg-transparent text-cream"
      }`}
      style={solid ? { backgroundColor: "rgba(16,42,50,0.96)" } : undefined}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo → always navigates to homepage (never the developer portfolio) */}
        <Link
          href="/"
          aria-label="Macha Ghar Cafe — Home"
          className="rounded-md transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          onClick={() => setMobileOpen(false)}
        >
          <Logo variant="light" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-3 py-2 text-sm font-medium tracking-wide text-cream/85 transition-colors hover:text-amber"
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} items`}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream transition-all hover:border-amber hover:bg-amber hover:text-ocean focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber px-1 text-[11px] font-bold text-ocean shadow ring-2 ring-ocean">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </button>

          {/* WhatsApp CTA */}
          <a
            href={buildWhatsAppLink(
              `Hello ${restaurant.name}! I would like to place an order.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-amber px-4 py-2.5 text-sm font-semibold text-ocean shadow-sm transition-all hover:brightness-110 hover:shadow-md sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Order Now
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream transition-all hover:border-amber hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-cream/10 bg-ocean/98 text-cream transition-[max-height,opacity] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "rgba(16,42,50,0.98)" }}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-cream/10 hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={buildWhatsAppLink(
              `Hello ${restaurant.name}! I would like to place an order.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-4 py-3 text-base font-semibold text-ocean shadow"
          >
            <MessageCircle className="h-5 w-5" />
            Order via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
