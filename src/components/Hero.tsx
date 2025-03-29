
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare } from "lucide-react";
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
    <section className="bg-gradient-to-b from-white to-amber-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <div className="flex flex-col justify-center space-y-6 lg:w-3/5">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to Your AI-Powered <span className="text-amber-600">Tax Assistant</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Simplified tax filing with AI guidance. Save time, maximize refunds, and file with confidence.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-1 bg-amber-500 hover:bg-amber-600 text-white">
                    <FileText className="h-4 w-4" />
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
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
                      className="w-full bg-amber-500 hover:bg-amber-600"
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button 
                variant="outline" 
                className="gap-1 border-amber-200 text-amber-700 hover:bg-amber-50"
                onClick={() => navigate("/booking")}
              >
                <MessageSquare className="h-4 w-4" />
                Book an Appointment
              </Button>
            </div>
          </div>
          
          <div className="mt-8 lg:mt-0 lg:w-2/5">
            <div className="space-y-4 w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-amber-100">
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold text-amber-800">Ready to Get Started?</h3>
                <p className="text-gray-600">
                  Create your account in seconds and start simplifying your tax filing
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  className="w-full justify-center gap-2 bg-amber-500 hover:bg-amber-600"
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 justify-center border-amber-200 text-amber-700 hover:bg-amber-50"
                    onClick={() => navigate("/individual/signup")}
                  >
                    Individual
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 justify-center border-amber-200 text-amber-700 hover:bg-amber-50"
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
