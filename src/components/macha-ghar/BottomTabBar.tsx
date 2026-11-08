"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UtensilsCrossed, ShoppingBag, Info, Phone } from "lucide-react";
import { useCart } from "@/lib/cart";

const TABS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/contact", label: "Contact", icon: Phone },
  { href: "/about", label: "About", icon: Info },
] as const;

export function BottomTabBar() {
  const pathname = usePathname();
  const { count, openCart } = useCart();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
    >
      {/* top hairline + backdrop */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />
      <div
        className="relative border-t border-ocean/10 bg-ocean/95 backdrop-blur-xl"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="mx-auto flex max-w-md items-stretch justify-around px-1">
          {/* Home */}
          <TabLink
            href="/"
            label="Home"
            active={isActive("/")}
            icon={Home}
          />
          {/* Menu */}
          <TabLink
            href="/menu"
            label="Menu"
            active={isActive("/menu")}
            icon={UtensilsCrossed}
          />

          {/* Cart — elevated center action */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} items`}
            className="group relative -mt-5 flex flex-col items-center justify-end"
          >
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-amber text-ocean shadow-lg shadow-amber/30 ring-4 ring-ocean transition-transform active:scale-90">
              <ShoppingBag className="h-6 w-6" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-ocean px-1 text-[10px] font-bold text-amber ring-2 ring-ocean">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-cream/70">
              Cart
            </span>
          </button>

          {/* Contact */}
          <TabLink
            href="/contact"
            label="Contact"
            active={isActive("/contact")}
            icon={Phone}
          />
          {/* About */}
          <TabLink
            href="/about"
            label="About"
            active={isActive("/about")}
            icon={Info}
          />
        </div>
      </div>
    </nav>
  );
}

function TabLink({
  href,
  label,
  active,
  icon: Icon,
}: {
  href: string;
  label: string;
  active: boolean;
  icon: typeof Home;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
        active ? "text-amber" : "text-cream/55"
      }`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all active:scale-90 ${
          active ? "bg-amber/15" : ""
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-[10px] font-medium leading-none">{label}</span>
    </Link>
  );
}
