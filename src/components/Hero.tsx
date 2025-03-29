
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Contact request submitted",
        description: "We'll get back to you as soon as possible.",
      });
      setContactForm({ 
        name: "", 
        email: "", 
        whatsapp: "",
        subject: "",
        message: ""
      });
      setDialogOpen(false);
    }, 1500);
  };
  
  return (
    <section className="bg-metly-yellow py-8 md:py-12 lg:py-20">
      <div className="metly-container px-4 sm:px-5 md:px-[30px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Text content - mobile first design */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:w-3/5">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-h1 font-semibold tracking-tight text-metly-black">
                An AI-Powered Smartest Tax Assistant
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-metly-black/80 mt-2">
                File Taxes 90% Faster - Zero Stress, Maximum Security
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="gap-1 bg-metly-black text-white hover:bg-metly-black/90 rounded-full transform hover:scale-105 transition-all shadow-lg"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                    <div>
                      <label htmlFor="popup-name" className="text-sm font-medium">Full Name</label>
                      <Input
                        id="popup-name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="popup-email" className="text-sm font-medium">Email Address</label>
                      <Input
                        id="popup-email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="popup-whatsapp" className="text-sm font-medium">WhatsApp</label>
                      <Input
                        id="popup-whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={contactForm.whatsapp}
                        onChange={handleChange}
                        placeholder="Your WhatsApp number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="popup-subject" className="text-sm font-medium">Subject</label>
                      <Input
                        id="popup-subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="popup-message" className="text-sm font-medium">Message</label>
                      <Textarea
                        id="popup-message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Button 
                className="gap-1 bg-white text-metly-black hover:bg-white/90 rounded-full border border-metly-black"
                onClick={() => navigate("/booking")}
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Image container with fixed size */}
          <div className="mt-8 lg:mt-0 lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[608px] lg:h-[608px]">
              <img 
                src="/lovable-uploads/d3de3271-65da-45f6-86a3-7a5b67306e10.png" 
                alt="Lego figure with top hat and mustache" 
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
