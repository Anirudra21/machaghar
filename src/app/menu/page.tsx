import type { Metadata } from "next";
import { PageHeader } from "@/components/macha-ghar/PageHeader";
import { MenuSection } from "@/components/macha-ghar/MenuSection";
import { FeaturedDishes } from "@/components/macha-ghar/FeaturedDishes";
import { restaurant } from "@/config/restaurant";

export const metadata: Metadata = {
  title: "Menu — Fish Recipes, Mo Items, Platters & More",
  description:
    "Explore all 40 Macha Ghar Cafe menu items across fish recipes, Mo items, house specials, boneless platters, vegetarian dishes and extras. Build your order and checkout via WhatsApp.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Menu"
        nepali={restaurant.taglineNp}
        title="The Complete Macha Ghar Menu"
        description="Explore 40 menu items across fish recipes, Mo items, house specials, boneless platters, vegetarian dishes and extras."
        crumbs={[{ label: "Home", href: "/" }, { label: "Menu" }]}
      />
      <FeaturedDishes />
      <MenuSection />
    </>
  );
}
