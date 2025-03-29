
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-tax-primary">
            <FileText className="h-6 w-6" />
            <span>Taxasaurus</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex md:items-center md:gap-5">
          <Link to="/" className="text-sm font-medium hover:text-tax-primary">
            Home
          </Link>
          <Link to="/features" className="text-sm font-medium hover:text-tax-primary">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-tax-primary">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-tax-primary">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-tax-primary">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="ghost" onClick={() => navigate("/auth")}>
            Sign In
          </Button>
          <Button className="bg-tax-primary hover:bg-tax-primary/90" onClick={() => navigate("/auth")}>
            Get Started
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
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
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-sm font-medium hover:text-tax-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium hover:text-tax-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium hover:text-tax-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium hover:text-tax-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-tax-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button 
                variant="ghost" 
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/auth");
                }}
              >
                Sign In
              </Button>
              <Button 
                className="w-full justify-center bg-tax-primary hover:bg-tax-primary/90"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/auth");
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
