
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart4, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Contact request submitted",
      description: "We'll get back to you as soon as possible.",
    });
    setContactForm({ name: "", email: "" });
  };
  
  return (
    <section className="bg-metly-yellow py-20">
      <div className="metly-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <div className="flex flex-col justify-center space-y-6 lg:w-3/5">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-metly-black/80">
                TAX ANALYTICS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-metly-black">
                We Make & <ArrowRight className="inline-block h-10 w-10 -rotate-45" /> Your Business <span className="block">Different</span>
              </h1>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button 
                className="gap-1 bg-metly-black text-white hover:bg-metly-black/90 rounded-full"
                onClick={() => navigate("/booking")}
              >
                BOOK A CONSULTATION
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0 lg:w-2/5 relative">
            <img 
              src="/lovable-uploads/18c87cec-6660-4194-94a9-2ef78178ba73.png" 
              alt="Business professional with stylish yellow glasses" 
              className="rounded-full object-cover w-full max-w-md mx-auto"
            />
            <div className="absolute -right-4 bottom-1/3 animate-float hidden md:block">
              <div className="bg-metly-black text-white rounded-full p-2">
                <BarChart4 className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="metly-container mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-metly-black rounded-2xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium">Track Sales</p>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="h-36 flex items-center justify-center">
            <div className="w-full h-24 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-0.5 bg-gray-700"></div>
              </div>
              <div className="absolute inset-y-0 left-0 flex flex-col justify-between py-2">
                <span className="text-xs text-gray-400">600</span>
                <span className="text-xs text-gray-400">400</span>
                <span className="text-xs text-gray-400">200</span>
                <span className="text-xs text-gray-400">0</span>
              </div>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-16">
                  <svg className="w-full h-full" viewBox="0 0 300 60">
                    <path 
                      d="M0,30 C20,10 40,50 60,30 C80,10 100,50 120,30 C140,10 160,50 180,40 C200,30 220,20 240,35 C260,50 280,20 300,30" 
                      fill="none" 
                      stroke="#FFD100" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">342 items</p>
        </div>
        
        <div className="bg-metly-beige rounded-2xl p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Button variant="ghost" size="icon" className="rounded-full p-1">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-metly-black border-2 border-metly-beige"></div>
              <div className="w-8 h-8 rounded-full bg-metly-yellow border-2 border-metly-beige"></div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-sm text-metly-black">Business lectures</p>
            <h3 className="text-5xl font-bold text-metly-black mt-2">400+</h3>
          </div>
        </div>
        
        <div className="bg-metly-lightPurple rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-full flex items-center px-3 py-1 gap-2">
              <BarChart4 className="h-5 w-5" />
              <span className="text-sm font-medium">34 metrics</span>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-16">
            <h3 className="text-xl font-bold">Easily track business metrics</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
