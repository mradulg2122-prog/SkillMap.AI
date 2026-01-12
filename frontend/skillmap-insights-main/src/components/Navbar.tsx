import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, setShowAuthModal, logout } = useAuth();

  const navLinks = [
    { path: "/", label: "Home", protected: false },
    { path: "/student-dashboard", label: "Analysis", protected: true },
    { path: "/job-trends", label: "Job Trends", protected: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string, isProtected: boolean) => {
    if (isProtected && !isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-card/60 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg hero-gradient">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SkillMap AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path, link.protected)}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Hi, {user?.name?.split(" ")[0]}
                </span>
                <Button size="sm" variant="outline" onClick={logout} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Log Out
                </Button>
              </>
            ) : (
              <Button size="sm" onClick={() => setShowAuthModal(true)} className="gap-2">
                <LogIn className="h-4 w-4" />
                Sign Up / Log In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path, link.protected)}
                  className={`text-sm font-medium transition-colors text-left ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              {isAuthenticated ? (
                <Button size="sm" variant="outline" onClick={logout} className="w-fit gap-2">
                  <LogOut className="h-4 w-4" />
                  Log Out
                </Button>
              ) : (
                <Button size="sm" onClick={() => setShowAuthModal(true)} className="w-fit gap-2">
                  <LogIn className="h-4 w-4" />
                  Sign Up / Log In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
