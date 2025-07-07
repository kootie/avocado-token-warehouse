import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { Footer } from "@/components/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;