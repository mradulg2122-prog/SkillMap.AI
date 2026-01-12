import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg hero-gradient">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SkillMap AI</span>
          </div>
          
          <p className="max-w-md text-sm text-muted-foreground">
            Skill-based placement intelligence for colleges. Helping students and institutions bridge the gap between education and industry.
          </p>

          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-foreground">HackCentrix – GDG on Campus</p>
            <p className="text-sm text-muted-foreground">Team Hacknova</p>
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} SkillMap AI. Built for hackathon demonstration.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
