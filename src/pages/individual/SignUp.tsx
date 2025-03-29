
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, FileText, User, Shield } from "lucide-react";
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
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const IndividualSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  const handleSignUp = (values: FormValues) => {
    setLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to Taxasaurus! Let's get started with your tax filing.",
      });
      navigate("/dashboard/user");
    }, 1500);
  };

  const handleGoogleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Google sign-up successful",
        description: "Welcome to Taxasaurus! Let's get started with your tax filing.",
      });
      navigate("/dashboard/user");
    }, 1500);
  };

  const handleMicrosoftSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Microsoft sign-up successful",
        description: "Welcome to Taxasaurus! Let's get started with your tax filing.",
      });
      navigate("/dashboard/user");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white to-tax-lightBlue">
        <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-16">
          <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Create Your Individual Account</h1>
              <p className="mt-2 text-gray-500">Join thousands of users who simplify their tax filing</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSignUp)} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
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
                        <p className="mt-1 text-xs text-gray-500">
                          Min. 8 characters with at least 1 uppercase, 1 lowercase & 1 number
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-tax-primary focus:ring-tax-primary"
                            checked={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal">
                            I agree to the{" "}
                            <Link to="/terms" className="text-tax-primary hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link to="/privacy" className="text-tax-primary hover:underline">
                              Privacy Policy
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
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
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full justify-center gap-2"
                    onClick={handleGoogleSignUp}
                  >
                    <Mail className="h-4 w-4" />
                    Google
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full justify-center gap-2"
                    onClick={handleMicrosoftSignUp}
                  >
                    <FileText className="h-4 w-4" />
                    Microsoft
                  </Button>
                </div>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-500">Already have an account?</span>{" "}
              <Link to="/individual/signin" className="font-medium text-tax-primary hover:underline">
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

export default IndividualSignUp;
