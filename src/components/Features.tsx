
import {
  Bot,
  Lock,
  FileText,
  BarChart4,
  Upload,
  Shield,
  ArrowRight,
  PieChart,
  BarChart,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container px-8 mx-auto">
        {/* First Feature Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Give your partners the tools they need</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600">
                Our AI-powered tax solutions help financial professionals save time, increase accuracy, and deliver exceptional service to their clients.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Bot className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">AI Tax Guidance</h3>
                    <p className="text-slate-600">Intelligent assistance for complex tax scenarios</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Smart Documentation</h3>
                    <p className="text-slate-600">Automated form generation and filing assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Government Certified</h3>
                    <p className="text-slate-600">Fully compliant with tax authority regulations</p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="group mt-4 border-blue-200 text-blue-700 hover:bg-blue-50">
                Explore all features
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" 
                alt="Tax professional with client" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-10 -right-10 bg-white rounded-lg shadow-xl p-4 w-48 h-48">
                <div className="flex justify-center items-center h-full">
                  <PieChart className="h-32 w-32 text-blue-500" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-600">12x</span>
            <p className="text-slate-600 mt-2 text-center">Faster tax processing than traditional methods</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-600">63k</span>
            <p className="text-slate-600 mt-2 text-center">Tax returns filed through our platform</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-600">$4M</span>
            <p className="text-slate-600 mt-2 text-center">Additional refunds secured for our clients</p>
          </div>
        </div>
        
        {/* 100% Hands-free Solution */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">100% hands-free solution for tax professionals</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI-powered Taxasaurus system can automatically extract data from uploaded documents,
            analyze deductions, and complete tax forms for you.
          </p>
        </div>
        
        {/* Why Choose Taxasaurus - Redesigned */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Why Choose Taxasaurus?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Distribute branded tax solutions at scale</h3>
              <p className="text-lg text-slate-600 mb-6">
                With our AI-powered platform, accountants and tax professionals can handle more clients 
                with the same resources while maintaining exceptional quality and accuracy.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our tools work at any scale—from individual practitioners to large accounting firms—providing 
                consistent results and superior client satisfaction.
              </p>
              <Button variant="outline" className="group border-blue-200 text-blue-700 hover:bg-blue-50">
                Partner with us today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Tax professionals meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional team working" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Brand consistency = brand recognition</h3>
              <p className="text-lg text-slate-600 mb-6">
                Our white-labeled tax solutions allow you to maintain consistent branding across all client 
                interactions, strengthening your professional identity and client trust.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                From documentation to client portals, every touchpoint reflects your brand, creating a 
                cohesive experience that sets your practice apart.
              </p>
              <Button variant="outline" className="group border-blue-200 text-blue-700 hover:bg-blue-50">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats with Percentages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-5xl font-bold text-blue-600">79%</span>
            </div>
            <p className="text-slate-600 mt-4">
              More clients report feeling secure using our AI-powered tax platform
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-5xl font-bold text-blue-600">55%</span>
            </div>
            <p className="text-slate-600 mt-4">
              Reduction in client questions after tax filing with a professional through our platform
            </p>
          </div>
        </div>
        
        {/* Security & Compliance Redesigned */}
        <div className="bg-slate-50 rounded-xl p-10 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Security & Compliance You Can Trust</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600">
                Your data security is our top priority. We employ multiple layers of protection to ensure your 
                financial information remains private and secure at all times.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Lock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">End-to-End Encryption</h3>
                    <p className="text-slate-600">All your data is protected with AES-256 encryption</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">GDPR & DPDP Compliant</h3>
                    <p className="text-slate-600">Full compliance with data protection regulations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <BarChart className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Regular Security Audits</h3>
                    <p className="text-slate-600">Continuous security testing and monitoring</p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="group mt-4 border-blue-200 text-blue-700 hover:bg-blue-50">
                Learn about our security
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <Shield className="h-10 w-10 text-blue-500 mb-3" />
                <h3 className="font-bold text-center">GDPR Compliant</h3>
                <p className="text-sm text-center text-slate-500 mt-2">
                  Full data protection standards
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <Lock className="h-10 w-10 text-blue-500 mb-3" />
                <h3 className="font-bold text-center">DPDP Certified</h3>
                <p className="text-sm text-center text-slate-500 mt-2">
                  Data protection and privacy
                </p>
              </div>
              <div className="col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <FileText className="h-7 w-7 text-blue-500" />
                  <LineChart className="h-7 w-7 text-blue-500" />
                </div>
                <h3 className="font-bold text-center">Government API Certified</h3>
                <p className="text-sm text-center text-slate-500 mt-2">
                  Official integration with tax authority systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
