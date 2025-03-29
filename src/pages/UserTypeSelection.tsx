
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UserTypeSelection = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white to-tax-lightBlue">
        <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-16">
          <div className="w-full max-w-5xl">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold">Choose Your Account Type</h1>
              <p className="mt-2 text-gray-500">Select the account type that best fits your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto p-3 rounded-full bg-tax-lightBlue mb-2">
                    <User className="h-12 w-12 text-tax-primary" />
                  </div>
                  <CardTitle className="text-2xl">Individual</CardTitle>
                  <CardDescription>For personal tax filing and management</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <ul className="space-y-2 text-left mx-auto max-w-xs">
                    <li className="flex items-start">
                      <span className="text-tax-primary mr-2">✓</span>
                      <span>File your own taxes with AI assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tax-primary mr-2">✓</span>
                      <span>Secure document storage options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tax-primary mr-2">✓</span>
                      <span>Track your filing status and history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tax-primary mr-2">✓</span>
                      <span>AI-powered tax advice and recommendations</span>
                    </li>
                  </ul>
                  <Link to="/individual/signup">
                    <Button className="w-full bg-tax-primary hover:bg-tax-primary/90">
                      Register as Individual
                    </Button>
                  </Link>
                  <div className="text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/individual/signin" className="text-tax-primary hover:underline">
                      Sign in
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto p-3 rounded-full bg-tax-lightBlue mb-2">
                    <Users className="h-12 w-12 text-tax-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Agency</CardTitle>
                  <CardDescription>For managing multiple clients' tax filings</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <ul className="space-y-2 text-left mx-auto max-w-xs">
                    <li className="flex items-start">
                      <span className="text-tax-secondary mr-2">✓</span>
                      <span>Manage multiple clients efficiently</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tax-secondary mr-2">✓</span>
                      <span>Bulk tax filings (ITR & GST)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tax-secondary mr-2">✓</span>
                      <span>Client dashboard access with secure login</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-tax-secondary mr-2">✓</span>
                      <span>AI tax assistance for multiple accounts</span>
                    </li>
                  </ul>
                  <Link to="/agency/signup">
                    <Button className="w-full bg-tax-secondary hover:bg-tax-secondary/90">
                      Register as Agency
                    </Button>
                  </Link>
                  <div className="text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/agency/signin" className="text-tax-secondary hover:underline">
                      Sign in
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserTypeSelection;
