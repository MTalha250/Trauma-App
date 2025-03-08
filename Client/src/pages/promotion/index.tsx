import FeaturesSection from "@/components/promotion/features";
import Hero from "@/components/promotion/hero";
import ContactInformation from "@/components/promotion/info";
import PricingPlans from "@/components/promotion/pricing";
import TestimonialsSection from "@/components/promotion/testimonials";
import WhyTherapistsChooseUs from "@/components/promotion/whyChooseUs";

const Promotion = () => {
  return (
    <div>
      <Hero />
      <WhyTherapistsChooseUs />
      <TestimonialsSection />
      <PricingPlans />
      <FeaturesSection />
      <ContactInformation />
    </div>
  );
};

export default Promotion;
