
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, FileText, User, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to Taxasaurus! Let's get started with your tax filing.",
      });
      // In a real app, you would redirect to the dashboard after successful registration
      // navigate("/dashboard/user");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white to-tax-lightBlue">
        <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-16">
          <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Create Your Account</h1>
              <p className="mt-2 text-gray-500">Join thousands of users who simplify their tax filing</p>
            </div>

            <form onSubmit={handleSignUp} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Min. 8 characters with at least 1 uppercase, 1 lowercase & 1 number
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-tax-primary focus:ring-tax-primary"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{" "}
                    <Link to="/terms" className="text-tax-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-tax-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-tax-primary hover:bg-tax-primary/90"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Sign up with Email"}
              </Button>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 flex-shrink text-gray-600">Or continue with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" className="w-full justify-center gap-2">
                  <FileText className="h-4 w-4" />
                  Microsoft
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-500">Already have an account?</span>{" "}
              <Link to="/signin" className="font-medium text-tax-primary hover:underline">
                Sign in
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-2 pt-4 text-xs text-gray-500">
              <Shield className="h-3 w-3" />
              <span>100% Secure | End-to-End Encryption | GDPR & DPDP Compliant</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
