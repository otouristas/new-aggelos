import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CarCategoriesSection from "@/components/car-categories-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <CarCategoriesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
