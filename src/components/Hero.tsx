
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
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
    <section 
      className="py-8 md:py-12 lg:py-16 xl:py-20 relative"
      style={{
        backgroundImage: `url('/lovable-uploads/24872857-0835-497e-8be6-a9ed8287cb3e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Text content - mobile first design */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 lg:w-3/5 z-10">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-h1 font-semibold tracking-tight text-metly-black">
                An AI-Powered Smartest Tax Assistant
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-metly-black/80 mt-2">
                File Taxes 90% Faster - Zero Stress, Maximum Security
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="gap-1 bg-metly-black text-white hover:bg-metly-black/90 rounded-full transform hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
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
                      <Label htmlFor="popup-name" className="text-sm font-medium">Full Name</Label>
                      <Input
                        id="popup-name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="popup-email" className="text-sm font-medium">Email Address</Label>
                      <Input
                        id="popup-email"
                        name="email"
                        type="email"
                        value={contactForm.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="popup-whatsapp" className="text-sm font-medium">WhatsApp</Label>
                      <Input
                        id="popup-whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={contactForm.whatsapp}
                        onChange={handleChange}
                        placeholder="Your WhatsApp number"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="popup-subject" className="text-sm font-medium">Subject</Label>
                      <Input
                        id="popup-subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="popup-message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="popup-message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="mt-1"
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
                className="gap-1 bg-white text-metly-black hover:bg-white/90 rounded-full border border-metly-black w-full sm:w-auto"
                onClick={() => navigate("/booking")}
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Empty space to maintain layout where the image used to be */}
          <div className="mt-8 lg:mt-0 lg:w-2/5 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
