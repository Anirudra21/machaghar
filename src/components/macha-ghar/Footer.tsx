"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
  ArrowUpRight,
  MapPin,
  Phone,
} from "lucide-react";
import { restaurant, buildWhatsAppLink } from "@/config/restaurant";
import { Logo } from "./Logo";

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.32 2.18 1.5 3.78 3.5 4v2.6c-1.2.02-2.36-.3-3.5-.94v5.9c0 3.05-2.2 5.44-5.16 5.44-2.9 0-5.34-2.1-5.34-5.16 0-3.06 2.45-5.16 5.34-5.16.3 0 .6.03.9.08v2.7a3.06 3.06 0 0 0-.9-.14c-1.5 0-2.7 1.1-2.7 2.5 0 1.4 1.2 2.5 2.7 2.5 1.6 0 2.86-1.1 2.86-2.78V3h2.6Z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/#specialties", label: "Specialties" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { social, contact, developer, name, tagline, taglineNp, shortDescription } =
    restaurant;

  return (
    <footer className="relative mt-auto bg-navy text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pb-28 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="grid gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* Official logo — navigates to homepage, never the portfolio */}
            <Link
              href="/"
              aria-label="Macha Ghar Cafe — Home"
              className="inline-block rounded-md transition-transform hover:scale-[1.02]"
            >
              <Logo variant="light" />
            </Link>
            {/* Nepali tagline */}
            <p
              className="mt-5 font-serif-display text-base font-medium text-amber"
              lang="ne"
            >
              {taglineNp}
            </p>
            <p className="mt-1 text-sm italic text-cream/70">{tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
              {shortDescription}
            </p>

            {/* Address & phone */}
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-start gap-2 text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                {contact.address}
              </p>
              <a
                href={`tel:${contact.phoneHref}`}
                className="flex items-center gap-2 text-cream/70 transition-colors hover:text-amber"
              >
                <Phone className="h-4 w-4 shrink-0 text-amber" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif-display text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-cream/75 transition-colors hover:text-amber"
                  >
                    <span className="h-px w-0 bg-amber transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="font-serif-display text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Follow Us
            </h3>
            <div className="mt-5 space-y-2.5">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center gap-3 rounded-lg border border-cream/10 bg-cream/5 px-4 py-2.5 text-sm text-cream/85 transition-all hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:text-white"
              >
                <Facebook className="h-5 w-5 text-[#1877F2]" />
                <span className="flex-1">Facebook</span>
                <ArrowUpRight className="h-4 w-4 text-cream/40 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {social.tiktok ? (
                <a
                  href={social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center gap-3 rounded-lg border border-cream/10 bg-cream/5 px-4 py-2.5 text-sm text-cream/85 transition-all hover:border-amber/50 hover:bg-amber/10 hover:text-amber"
                >
                  <TikTokIcon className="h-5 w-5 text-amber" />
                  <span className="flex-1">TikTok</span>
                  <ArrowUpRight className="h-4 w-4 text-cream/40 transition-all group-hover:text-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <div className="inline-flex w-full items-center gap-3 rounded-lg border border-cream/10 bg-cream/5 px-4 py-2.5 text-sm text-cream/40">
                  <TikTokIcon className="h-5 w-5" />
                  <span className="flex-1">TikTok (soon)</span>
                </div>
              )}
              {social.instagram ? (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center gap-3 rounded-lg border border-cream/10 bg-cream/5 px-4 py-2.5 text-sm text-cream/85 transition-all hover:border-[#C13584]/50 hover:bg-[#C13584]/10 hover:text-white"
                >
                  <Instagram className="h-5 w-5 text-[#C13584]" />
                  <span className="flex-1">Instagram</span>
                  <ArrowUpRight className="h-4 w-4 text-cream/40 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <div className="inline-flex w-full items-center gap-3 rounded-lg border border-cream/10 bg-cream/5 px-4 py-2.5 text-sm text-cream/40">
                  <Instagram className="h-5 w-5" />
                  <span className="flex-1">Instagram (soon)</span>
                </div>
              )}
              <a
                href={buildWhatsAppLink(
                  `Hello ${name}! I would like to place an order.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center gap-3 rounded-lg border border-cream/10 bg-cream/5 px-4 py-2.5 text-sm text-cream/85 transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-white"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                <span className="flex-1">WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 text-cream/40 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/55">
            © {year} {name}. All Rights Reserved.
          </p>

          {/* Developer attribution — only the heart is clickable */}
          <p className="inline-flex items-center gap-1 text-xs text-cream/55">
            Built with
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Developer Portfolio"
              className="group inline-flex items-center"
            >
              <Heart className="h-3.5 w-3.5 fill-amber text-amber transition-all duration-300 hover:scale-150 hover:drop-shadow-[0_0_6px_rgba(217,164,65,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded-sm" />
            </a>
            in {developer.location}
          </p>
        </div>

        {/* Optional designer line — name is clickable */}
        <p className="mt-3 text-center text-[11px] text-cream/35 sm:text-right">
        
          <a
            href={developer.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Developer Portfolio"
            className="font-medium text-cream/50 underline-offset-2 transition-colors hover:text-amber hover:underline"
          >
            {developer.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
