"use client";

import {
  MapPin,
  Phone,
  MessageCircle,
  Facebook,
  Music2,
  Navigation,
} from "lucide-react";
import { restaurant, buildWhatsAppLink } from "@/config/restaurant";

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.32 2.18 1.5 3.78 3.5 4v2.6c-1.2.02-2.36-.3-3.5-.94v5.9c0 3.05-2.2 5.44-5.16 5.44-2.9 0-5.34-2.1-5.34-5.16 0-3.06 2.45-5.16 5.34-5.16.3 0 .6.03.9.08v2.7a3.06 3.06 0 0 0-.9-.14c-1.5 0-2.7 1.1-2.7 2.5 0 1.4 1.2 2.5 2.7 2.5 1.6 0 2.86-1.1 2.86-2.78V3h2.6Z" />
    </svg>
  );
}

export function Contact() {
  const { contact, social, name, tagline, taglineNp } = restaurant;
  const hasMap = Boolean(contact.mapsEmbedSrc);
  const hasDirections = Boolean(contact.mapsDirectionsUrl);

  const items = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: contact.address,
      href: null,
      muted: false,
    },
    {
      icon: Phone,
      label: "Call Us",
      value: contact.phoneDisplay,
      href: `tel:${contact.phoneHref}`,
      muted: false,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.phoneDisplay,
      href: buildWhatsAppLink(
        `Hello ${name}! I would like to enquire about your menu.`,
      ),
      muted: false,
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-cream py-20 sm:py-28"
      aria-label="Contact Macha Ghar Cafe"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            <span className="h-px w-8 bg-amber" />
            Contact
            <span className="h-px w-8 bg-amber" />
          </p>
          <h2 className="font-serif-display text-3xl font-bold leading-tight text-ocean text-balance sm:text-4xl lg:text-5xl">
            Come Dine With Us
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75 text-pretty sm:text-lg">
            Reach out to reserve a table, place an order, or simply say hello.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2">
          {/* Contact details */}
          <div className="rounded-2xl border border-ocean/10 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-serif-display text-2xl font-semibold text-ocean">
              {name}
            </h3>
            <p
              className="mt-1 font-serif-display text-base font-medium text-amber"
              lang="ne"
            >
              {taglineNp}
            </p>
            <p className="mt-0.5 text-sm italic text-charcoal/60">{tagline}</p>

            <div className="mt-6 space-y-4">
              {items.map(({ icon: Icon, label, value, href, muted }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/45">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-ocean transition-colors hover:text-amber"
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className={`text-sm ${muted ? "text-charcoal/50" : "text-ocean"}`}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social row */}
            <div className="mt-7 border-t border-ocean/10 pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-charcoal/45">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ocean/15 px-4 py-2 text-sm font-medium text-ocean transition-colors hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
                {social.tiktok ? (
                  <a
                    href={social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ocean/15 px-4 py-2 text-sm font-medium text-ocean transition-colors hover:border-amber hover:bg-amber hover:text-ocean"
                  >
                    <TikTokIcon className="h-4 w-4" />
                    TikTok
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-ocean/15 px-4 py-2 text-sm font-medium text-charcoal/40">
                    <Music2 className="h-4 w-4" />
                    TikTok (soon)
                  </span>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {/* Click-to-call */}
              <a
                href={`tel:${contact.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-cream transition-all hover:bg-navy hover:shadow-md"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              {/* WhatsApp */}
              <a
                href={buildWhatsAppLink(
                  `Hello ${name}! I would like to place an order.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-105 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            {hasDirections && (
              <a
                href={contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ocean/20 px-5 py-2.5 text-sm font-medium text-ocean transition-colors hover:bg-ocean/5"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            )}
          </div>

          {/* Map / location */}
          <div className="overflow-hidden rounded-2xl border border-ocean/10 bg-white shadow-sm">
            {hasMap ? (
              <iframe
                title="Macha Ghar location map"
                src={contact.mapsEmbedSrc}
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 bg-ocean p-8 text-center text-cream">
                <MapPin className="h-10 w-10 text-amber" />
                <h3 className="font-serif-display text-xl font-semibold">
                  {contact.locality}
                </h3>
                <p className="text-sm text-cream/70">{contact.address}</p>
                <p className="mt-2 max-w-xs text-xs text-cream/55">
                  A Google Map will appear here once the official Google Maps
                  share link is provided. Until then, please call or message us
                  on WhatsApp for directions.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
