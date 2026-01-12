import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FutureScopeSection from "@/components/FutureScopeSection";
import MeshGradient from "@/components/MeshGradient";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MeshGradient />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FutureScopeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
