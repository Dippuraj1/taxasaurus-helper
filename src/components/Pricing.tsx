
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  
  const pricingPlans = [
    {
      name: "Pay As You Go",
      description: "Perfect for individuals filing their own taxes",
      price: "₹499",
      billing: "per filing",
      features: [
        "Single tax filing",
        "AI-powered form filling",
        "Document storage",
        "Compliance checking",
        "Digital signature",
        "24/7 AI assistance"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for agencies managing multiple clients",
      price: "₹1,999",
      billing: "per month",
      features: [
        "Unlimited tax filings",
        "Multi-client management",
        "Agency dashboard",
        "Client access sharing",
        "Bulk processing",
        "Analytics & reporting",
        "Priority support"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For large firms with advanced needs",
      price: "Custom",
      billing: "contact for pricing",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom API integrations",
        "Advanced compliance tools",
        "Team collaboration",
        "Audit protection",
        "White-labeling options"
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-white py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Transparent Pricing</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
            Pay only for what you use with no hidden fees or commitments. Choose the option that works best for you.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg flex flex-col ${
                plan.highlighted ? "border-2 border-tax-primary relative" : "border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tax-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.billing}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-tax-secondary flex-shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? "bg-tax-primary hover:bg-tax-primary/90" 
                    : "bg-white text-tax-primary border border-tax-primary hover:bg-tax-primary/10"
                }`}
                onClick={() => navigate("/auth")}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>All plans include secure DigiLocker integration, GDPR & DPDP compliance, and end-to-end encryption.</p>
          <p className="mt-2">Need a custom solution? <a href="#contact" className="text-tax-primary hover:underline">Contact us</a> for enterprise pricing.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
