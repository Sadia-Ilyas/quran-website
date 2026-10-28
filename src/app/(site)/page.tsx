import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { CoursesSection } from "@/components/sections/courses-section";
import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CoursesSection />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
