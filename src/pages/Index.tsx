import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { IndividualUsersSection } from "@/components/IndividualUsersSection";
import { TeamsSection } from "@/components/TeamsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { EvolutionBanner } from "@/components/EvolutionBanner";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <IndividualUsersSection />
      <TeamsSection />
      <TestimonialsSection />
      <PricingSection />
      <EvolutionBanner />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
