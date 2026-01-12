import { Button } from "@/components/ui/button";
import { ArrowRight, FileSearch, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setShowAuthModal } = useAuth();

  const handleProtectedNavigation = (path: string) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Campus Placement Intelligence
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Skill-based placement
            <br />
            <span className="text-gradient">intelligence for colleges</span>
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Identify skill gaps, track job trends, and improve placement readiness using data-driven insights.
          </p>

          <div className="animate-fade-up delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => handleProtectedNavigation("/student-dashboard")}
            >
              <FileSearch className="h-5 w-5" />
              Skill Gap Analysis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={() => handleProtectedNavigation("/job-trends")}
            >
              <TrendingUp className="h-5 w-5" />
              View Job Trends
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
