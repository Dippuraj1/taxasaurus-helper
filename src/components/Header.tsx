
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FileText, Menu, X, Download } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-metly-black text-white">
      <div className="metly-container flex h-16 items-center justify-between px-5 md:px-[30px]">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-metly-yellow">
            <FileText className="h-6 w-6" />
            <span>Taxasaurus</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link to="/" className="text-sm font-medium hover:text-metly-yellow transition-colors">
            Home
          </Link>
          <a 
            href="#features" 
            className="text-sm font-medium hover:text-metly-yellow transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium hover:text-metly-yellow transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('pricing');
            }}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium hover:text-metly-yellow transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </nav>
        
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="ghost" className="text-white hover:text-metly-yellow hover:bg-metly-black/20" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
          <Button 
            className="bg-metly-yellow text-metly-black hover:bg-metly-yellow/90 rounded-full" 
            onClick={() => navigate("/auth")}
          >
            <Download className="mr-2 h-4 w-4" /> Download App
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {mobileMenuOpen && (
        <div className="metly-container py-4 md:hidden bg-metly-black px-5 md:px-[30px]">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-sm font-medium hover:text-metly-yellow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#features"
              className="text-sm font-medium hover:text-metly-yellow"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-metly-yellow"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('pricing');
              }}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-metly-yellow"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button 
                variant="ghost" 
                className="w-full justify-center text-white hover:text-metly-yellow hover:bg-metly-black/20"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/auth");
                }}
              >
                Sign In
              </Button>
              <Button 
                className="w-full justify-center bg-metly-yellow text-metly-black hover:bg-metly-yellow/90 rounded-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/auth");
                }}
              >
                <Download className="mr-2 h-4 w-4" /> Download App
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
