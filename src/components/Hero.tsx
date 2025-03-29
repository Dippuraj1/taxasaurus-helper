
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
      <div className="metly-container px-5 md:px-[30px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <div className="flex flex-col justify-center space-y-6 lg:w-3/5">
            <div className="space-y-2">
              <h1 className="text-h1 font-anton font-normal tracking-tight text-metly-black">
                An AI-Powered Smartest Tax Assistant
              </h1>
              <p className="text-xl md:text-2xl font-medium text-metly-black/80 mt-2">
                File Taxes 90% Faster - Zero Stress, Maximum Security
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button 
                className="gap-1 bg-metly-black text-white hover:bg-metly-black/90 rounded-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
              <Button 
                className="gap-1 bg-white text-metly-black hover:bg-white/90 rounded-full border border-metly-black"
                onClick={() => navigate("/booking")}
              >
                Book an Appointment
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
