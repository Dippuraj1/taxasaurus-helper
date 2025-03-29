
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

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
    <section className="bg-gradient-to-b from-slate-50 to-blue-50 py-24">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col justify-center space-y-8 lg:w-1/2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Position your <span className="text-blue-600">business for success</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                Simplified tax filing with AI guidance. Save time, maximize refunds, and file with confidence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl">Contact Us</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email ID</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={() => navigate("/booking")}
              >
                Book an Appointment
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/73440a6f-f450-4d2c-a064-83bb41d2d946.png" 
              alt="Tax professional with clipboard" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16 bg-slate-800 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-2/3">
              <blockquote className="text-xl italic">
                "Our AI-powered tax solution has made it incredibly easy to file taxes with absolute precision while ensuring professional service and fast turnaround times."
              </blockquote>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  RP
                </div>
                <div className="ml-4">
                  <p className="font-medium">Rahul Patel</p>
                  <p className="text-sm text-blue-300">Startup Founder</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">63%</div>
              <p className="text-center text-sm">Faster tax filing compared to traditional methods</p>
              <div className="w-full mt-3">
                <Progress value={63} className="h-2" indicatorClassName="bg-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Visa_logo.png" alt="Visa" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
