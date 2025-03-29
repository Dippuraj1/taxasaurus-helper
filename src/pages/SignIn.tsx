
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, FileText, User, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Sign in successful",
        description: "Welcome back to your tax dashboard!",
      });
      // In a real app, you would redirect to the dashboard after successful authentication
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
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="mt-2 text-gray-500">Sign in to continue to your tax dashboard</p>
            </div>

            <form onSubmit={handleSignIn} className="mt-8 space-y-6">
              <div className="space-y-4">
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
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-tax-primary focus:ring-tax-primary"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-tax-primary hover:text-tax-primary/80">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-tax-primary hover:bg-tax-primary/90"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in with Email"}
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
              <span className="text-gray-500">Don't have an account?</span>{" "}
              <Link to="/signup" className="font-medium text-tax-primary hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
