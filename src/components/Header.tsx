
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, Home, User } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full border-b bg-white py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-tax-primary" />
          <span className="text-xl font-bold text-tax-primary">Taxasaurus</span>
        </div>

        <nav className="hidden items-center space-x-6 md:flex">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-tax-primary">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-tax-primary">
            Features
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-tax-primary">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-tax-primary">
            FAQs
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden bg-tax-primary hover:bg-tax-primary/90 md:inline-flex">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
