
import { QuoteIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    content: "Taxasaurus simplified my business tax filing incredibly. What used to take days now takes hours!",
    avatar: "/placeholder.svg",
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "IT Professional",
    content: "The AI suggestions for deductions saved me over ₹25,000 this year. Best tax software I've ever used.",
    avatar: "/placeholder.svg",
    initials: "RK",
  },
  {
    name: "Anjali Patel",
    role: "Freelance Designer",
    content: "As a freelancer, tracking expenses was always a pain. Taxasaurus automated it all - highly recommended!",
    avatar: "/placeholder.svg",
    initials: "AP",
  },
  {
    name: "Vikram Singh",
    role: "Financial Advisor",
    content: "I recommend Taxasaurus to all my clients. The interface is intuitive and the AI guidance is spot-on.",
    avatar: "/placeholder.svg",
    initials: "VS",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-metly-yellow py-16">
      <div className="metly-container px-5 md:px-[30px]">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-metly-black">What Our Clients Say</h2>
          <p className="mx-auto max-w-[700px] text-metly-black/80">
            Join thousands of satisfied individuals and businesses who've transformed their tax filing experience.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <QuoteIcon className="h-8 w-8 text-metly-yellow mb-4" />
              <p className="mb-6 text-gray-700">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-metly-black text-white">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-metly-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
