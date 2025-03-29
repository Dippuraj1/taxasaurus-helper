
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileText, Home, User, Calculator, Shield, MessageSquare, HelpCircle } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full border-b bg-white py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-tax-primary" />
          <span className="text-xl font-bold text-tax-primary">Taxasaurus</span>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={navigationMenuTriggerStyle()}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    href="/tax-filing"
                    title="AI Tax Filing"
                    icon={<Calculator className="h-4 w-4" />}
                  >
                    Simplified tax filing with AI guidance
                  </ListItem>
                  <ListItem
                    href="/document-storage"
                    title="Document Storage"
                    icon={<FileText className="h-4 w-4" />}
                  >
                    Secure document storage with Digilocker
                  </ListItem>
                  <ListItem
                    href="/tax-chat"
                    title="AI Tax Assistant"
                    icon={<MessageSquare className="h-4 w-4" />}
                  >
                    Get answers to your tax questions instantly
                  </ListItem>
                  <ListItem
                    href="/tax-optimization"
                    title="Tax Optimization"
                    icon={<Calculator className="h-4 w-4" />}
                  >
                    Maximize deductions and minimize tax liability
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    href="/help-center"
                    title="Help Center"
                    icon={<HelpCircle className="h-4 w-4" />}
                  >
                    Find answers to common questions
                  </ListItem>
                  <ListItem
                    href="/tax-guides"
                    title="Tax Guides"
                    icon={<FileText className="h-4 w-4" />}
                  >
                    Comprehensive guides on tax filing
                  </ListItem>
                  <ListItem
                    href="/security"
                    title="Security"
                    icon={<Shield className="h-4 w-4" />}
                  >
                    Learn about our security measures
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/pricing"
                className={navigationMenuTriggerStyle()}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:inline-flex"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="hidden bg-tax-primary hover:bg-tax-primary/90 md:inline-flex"
            onClick={() => navigate("/signup")}
          >
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { 
    icon?: React.ReactNode;
    title: string;
  }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
