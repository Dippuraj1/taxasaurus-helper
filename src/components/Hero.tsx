
import { Button } from "@/components/ui/button";
import { FileText, PieChart, Upload, MessageSquare } from "lucide-react";

const Hero = () => {
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
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <PieChart className="h-5 w-5 text-tax-primary" />
                <div className="text-left">
                  <div className="text-sm font-medium">Track My Filings</div>
                  <div className="text-xs text-gray-500">View previous returns</div>
                </div>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Upload className="h-5 w-5 text-tax-secondary" />
                <div className="text-left">
                  <div className="text-sm font-medium">Upload Documents</div>
                  <div className="text-xs text-gray-500">Secure document storage</div>
                </div>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] animate-float rounded-full bg-gradient-to-br from-tax-lightBlue to-tax-lightGreen p-4 shadow-xl lg:h-[450px] lg:w-[450px]">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
