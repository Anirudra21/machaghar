import { Hero } from "@/components/macha-ghar/Hero";
import { About } from "@/components/macha-ghar/About";
import { FeaturedDishes } from "@/components/macha-ghar/FeaturedDishes";
import { MenuSection } from "@/components/macha-ghar/MenuSection";
import { Gallery } from "@/components/macha-ghar/Gallery";
import { WhyChoose } from "@/components/macha-ghar/WhyChoose";
import { SocialMedia } from "@/components/macha-ghar/SocialMedia";
import { Contact } from "@/components/macha-ghar/Contact";
import { Vision } from "@/components/macha-ghar/Vision";
import { Concept } from "@/components/macha-ghar/Concept";
import { Experience } from "@/components/macha-ghar/Experience";
import { FutureVision } from "@/components/macha-ghar/FutureVision";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedDishes />
      <MenuSection />
      <Vision />
      <Concept />
      <Experience />
      <Gallery />
      <FutureVision />
      <WhyChoose />
      <SocialMedia />
      <Contact />
    </>
  );
}
