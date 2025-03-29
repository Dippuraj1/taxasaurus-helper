
import {
  Bot,
  Lock,
  FileText,
  BarChart4,
  Upload,
  Shield,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-metly-yellow" />,
      title: "AI-Powered Filing",
      description:
        "Our Claude AI assistant guides you through every step of the tax filing process.",
    },
    {
      icon: <Shield className="h-8 w-8 text-metly-yellow" />,
      title: "100% Secure",
      description:
        "End-to-end encryption and compliance with GDPR & DPDP standards.",
    },
    {
      icon: <FileText className="h-8 w-8 text-metly-yellow" />,
      title: "Smart Forms",
      description:
        "AI auto-fills your tax forms based on uploaded documents and prior filings.",
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-metly-yellow" />,
      title: "Tax Optimization",
      description:
        "Intelligent suggestions to maximize your deductions and minimize tax liability.",
    },
    {
      icon: <Upload className="h-8 w-8 text-metly-yellow" />,
      title: "Document Storage",
      description:
        "Secure storage of all your tax-related documents with Digilocker integration.",
    },
    {
      icon: <Lock className="h-8 w-8 text-metly-yellow" />,
      title: "Government Certified",
      description:
        "Authorized integration with official CBDT APIs for direct filing.",
    },
  ];

  return (
    <section id="features" className="bg-metly-black py-16 text-white">
      <div className="metly-container px-5 md:px-[30px]">
        <div className="mb-12 text-center">
          <h2 className="mb-2">Why Choose Taxasaurus?</h2>
          <p className="mx-auto max-w-[700px] text-gray-300">
            Simplify your tax filing with our comprehensive suite of AI-powered tools.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-3 bg-gray-900 rounded-2xl p-6 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="rounded-lg bg-gray-800 p-3">{feature.icon}</div>
              <h3 className="font-medium">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
