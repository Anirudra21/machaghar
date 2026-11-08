import type { Metadata } from "next";
import { PageHeader } from "@/components/macha-ghar/PageHeader";
import { Contact } from "@/components/macha-ghar/Contact";
import { SocialMedia } from "@/components/macha-ghar/SocialMedia";
import { restaurant } from "@/config/restaurant";

export const metadata: Metadata = {
  title: "Contact — Visit Us in Butwal",
  description:
    "Contact Macha Ghar Cafe in Butwal-11, Naharpur, Rupandehi, Nepal. Call 9700063503, message us on WhatsApp, or follow us on Facebook.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        nepali={restaurant.taglineNp}
        title="Come Dine With Us"
        description={`${restaurant.name} — ${restaurant.contact.address}. Call us, message on WhatsApp, or follow our latest updates.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/images/gallery-interior.png"
      />
      <Contact />
      <SocialMedia />
    </>
  );
}
