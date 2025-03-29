
import { Shield, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileText } from "@/components/ui/fileText";

const SecurityBadges = () => {
  return (
    <section className="bg-white py-24">
      <div className="container px-8 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Partners who trust our platform</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center mb-20">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Samsung_Logo.svg" alt="Samsung" className="h-8 mx-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 mx-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8 mx-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-8 mx-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 mx-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" className="h-8 mx-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
        </div>
        
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">We integrate with your current tech stack</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Our system integrates seamlessly with the tools you already use, making the transition smooth and efficient.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-4 bg-slate-50 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Xero_software_logo.svg" alt="Xero" className="h-8" />
            </div>
            <div className="p-4 bg-slate-50 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Quickbooks_logo.svg" alt="QuickBooks" className="h-8" />
            </div>
            <div className="p-4 bg-slate-50 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Zoho_Corporation_logo.svg" alt="Zoho" className="h-8" />
            </div>
            <div className="p-4 bg-slate-50 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="h-8" />
            </div>
            <div className="p-4 bg-slate-50 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="h-8" />
            </div>
            <div className="p-4 bg-slate-50 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Dropbox_Icon.svg" alt="Dropbox" className="h-8" />
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Discover the latest content from our resource hub</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-pink-50 p-8 rounded-lg">
              <div className="w-full h-40 bg-pink-200 rounded-lg mb-6 flex items-center justify-center">
                <FileText className="w-16 h-16 text-pink-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tax Form Advisor Field Manual</h3>
              <p className="text-slate-600 mb-4">Essential guide for tax professionals</p>
              <Button variant="link" className="group p-0 text-pink-600 hover:text-pink-700">
                Download
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="w-full h-40 bg-blue-200 rounded-lg mb-6 flex items-center justify-center">
                <FileText className="w-16 h-16 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Monthly Tax Case Insights</h3>
              <p className="text-slate-600 mb-4">Latest tax rulings and implications</p>
              <Button variant="link" className="group p-0 text-blue-600 hover:text-blue-700">
                Read more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="w-full h-40 bg-purple-200 rounded-lg mb-6 flex items-center justify-center">
                <FileText className="w-16 h-16 text-purple-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">7 Steps to Build a Solid Tax Practice</h3>
              <p className="text-slate-600 mb-4">Growth strategies for tax professionals</p>
              <Button variant="link" className="group p-0 text-purple-600 hover:text-purple-700">
                Download
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="group border-blue-200 text-blue-700 hover:bg-blue-50">
              Browse all resources
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBadges;
