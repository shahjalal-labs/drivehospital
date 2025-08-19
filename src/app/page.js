/* import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <ServicesSection />
    </div>
  );
} */

import AboutSection from "./components/HomeSection/AboutSection";
import CallToAction from "./components/HomeSection/CallToAction";
import HeroSection from "./components/HomeSection/HeroSection";
import TestimonialsSection from "./components/HomeSection/TestimonialsSection";
import WhyChooseUs from "./components/HomeSection/WhyChooseUs";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 space-y-28">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}
