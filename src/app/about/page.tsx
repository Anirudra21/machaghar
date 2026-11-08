import type { Metadata } from "next";
import { PageHeader } from "@/components/macha-ghar/PageHeader";
import { About } from "@/components/macha-ghar/About";
import { Vision } from "@/components/macha-ghar/Vision";
import { Concept } from "@/components/macha-ghar/Concept";
import { Experience } from "@/components/macha-ghar/Experience";
import { FutureVision } from "@/components/macha-ghar/FutureVision";
import { SocialMedia } from "@/components/macha-ghar/SocialMedia";
import { AboutCta } from "@/components/macha-ghar/AboutCta";

export const metadata: Metadata = {
  title: "About — Our Story, Vision & Concept",
  description:
    "Learn about Macha Ghar Cafe in Butwal, Rupandehi — our passion for fish-based cuisine, authentic Nepali flavours, aquaculture, and a natural dining experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        nepali="ताजा माछा, घरकै स्वादमा।"
        title="Our Story, Vision & Concept"
        description="A fish-focused dining destination in Butwal, Rupandehi, Nepal — bringing together delicious fish-based cuisine, authentic Nepali flavours, and a distinctive natural dining concept."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image="/images/about-chef.png"
      />
      <About />
      <Vision />
      <Concept />
      <Experience />
      <FutureVision />
      <AboutCta />
      <SocialMedia />
    </>
  );
}
