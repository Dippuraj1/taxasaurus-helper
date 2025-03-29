
import { Button } from "@/components/ui/button";
import { Mail, FileText, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AuthButtons = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-white py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-md space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-gray-500">
              Create your account in seconds and start simplifying your tax filing
            </p>
          </div>
          <div className="space-y-3">
            <Button 
              className="w-full justify-center gap-2 bg-tax-primary hover:bg-tax-primary/90"
              onClick={() => navigate("/signup")}
            >
              <User className="h-4 w-4" />
              Sign Up with Email
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-center gap-2"
              onClick={() => navigate("/signup")}
            >
              <Mail className="h-4 w-4" />
              Continue with Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-center gap-2"
              onClick={() => navigate("/signup")}
            >
              <FileText className="h-4 w-4" />
              Sign In with PAN
            </Button>
          </div>
          <p className="text-center text-sm text-gray-500">
            By signing up, you agree to our{" "}
            <a href="#" className="text-tax-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-tax-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthButtons;
