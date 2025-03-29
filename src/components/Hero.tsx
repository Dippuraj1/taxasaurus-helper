
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-gradient-to-b from-white to-tax-lightBlue py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to Your AI-Powered <span className="tax-gradient-text">Tax Assistant</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Simplified tax filing with AI guidance. Save time, maximize refunds, and file with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1 bg-tax-primary hover:bg-tax-primary/90">
                <FileText className="h-4 w-4" />
                Start Tax Filing
              </Button>
              <Button variant="outline" className="gap-1">
                <MessageSquare className="h-4 w-4" />
                Chat with AI Tax Assistant
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-[350px] w-[350px] animate-float rounded-full bg-gradient-to-br from-tax-lightBlue to-tax-lightGreen p-4 shadow-xl lg:h-[450px] lg:w-[450px] mb-6">
              <div className="absolute inset-4 rounded-full bg-white/80 backdrop-blur-sm"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
                <div className="tax-glass-panel mb-4 p-4">
                  <div className="mb-2 text-lg font-bold">Your Tax Status</div>
                  <div className="text-sm text-gray-500">Filing due in: <span className="font-semibold text-tax-primary">31 days</span></div>
                </div>
                <div className="tax-glass-panel p-4">
                  <div className="mb-2 text-lg font-bold">Estimated Refund</div>
                  <div className="text-2xl font-bold text-tax-secondary">₹24,500</div>
                </div>
              </div>
            </div>
            <div className="space-y-4 w-full max-w-md">
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Ready to Get Started?</h3>
                <p className="text-gray-500">
                  Create your account in seconds and start simplifying your tax filing
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  className="w-full justify-center gap-2 bg-tax-primary hover:bg-tax-primary/90"
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 justify-center"
                    onClick={() => navigate("/individual/signup")}
                  >
                    Individual
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 justify-center"
                    onClick={() => navigate("/agency/signup")}
                  >
                    Agency
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
