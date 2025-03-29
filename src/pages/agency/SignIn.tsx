
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, FileText, Building } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const AgencySignIn = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleSignIn = (values: FormValues) => {
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Sign in successful",
        description: "Welcome back to your agency dashboard!",
      });
      navigate("/dashboard/accountant");
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Google sign-in successful",
        description: "Welcome back to your agency dashboard!",
      });
      navigate("/dashboard/accountant");
    }, 1500);
  };

  const handleMicrosoftSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Microsoft sign-in successful",
        description: "Welcome back to your agency dashboard!",
      });
      navigate("/dashboard/accountant");
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
              <p className="mt-2 text-gray-500">Sign in to continue to your agency dashboard</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSignIn)} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="contact@yourcompany.com"
                            {...field}
                            className="mt-1"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            {...field}
                            className="mt-1"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center justify-between">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-tax-secondary focus:ring-tax-secondary"
                              checked={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Remember me</FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    <div className="text-sm">
                      <Link to="/agency/forgot-password" className="font-medium text-tax-secondary hover:text-tax-secondary/80">
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-tax-secondary hover:bg-tax-secondary/90"
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
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full justify-center gap-2"
                    onClick={handleGoogleSignIn}
                  >
                    <Mail className="h-4 w-4" />
                    Google
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full justify-center gap-2"
                    onClick={handleMicrosoftSignIn}
                  >
                    <FileText className="h-4 w-4" />
                    Microsoft
                  </Button>
                </div>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-500">Don't have an account?</span>{" "}
              <Link to="/agency/signup" className="font-medium text-tax-secondary hover:underline">
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

export default AgencySignIn;
