import type { Metadata } from "next";
import { PageHeader } from "@/components/macha-ghar/PageHeader";
import { MenuSection } from "@/components/macha-ghar/MenuSection";
import { FeaturedDishes } from "@/components/macha-ghar/FeaturedDishes";
import { restaurant } from "@/config/restaurant";

export const metadata: Metadata = {
  title: "Menu — Fish Dishes, Momo, Achars & More",
  description:
    "Explore the full Macha Ghar Cafe menu — fish tawa fry, fish momo, whole grilled fish, fish thali, achars, main courses and sides. Build your order and checkout via WhatsApp.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Menu"
        nepali={restaurant.taglineNp}
        title="The Complete Macha Ghar Menu"
        description="From crispy fish tawa fry to hand-folded momo, spiced achars and hearty main courses — explore every dish and build your order."
        crumbs={[{ label: "Home", href: "/" }, { label: "Menu" }]}
      />
      <FeaturedDishes />
      <MenuSection />
    </>
  );
}
