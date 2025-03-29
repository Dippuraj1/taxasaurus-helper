
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
      icon: <Bot className="h-8 w-8 text-tax-primary" />,
      title: "AI-Powered Filing",
      description:
        "Our Claude AI assistant guides you through every step of the tax filing process.",
    },
    {
      icon: <Shield className="h-8 w-8 text-tax-secondary" />,
      title: "100% Secure",
      description:
        "End-to-end encryption and compliance with GDPR & DPDP standards.",
    },
    {
      icon: <FileText className="h-8 w-8 text-tax-accent" />,
      title: "Smart Forms",
      description:
        "AI auto-fills your tax forms based on uploaded documents and prior filings.",
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-tax-primary" />,
      title: "Tax Optimization",
      description:
        "Intelligent suggestions to maximize your deductions and minimize tax liability.",
    },
    {
      icon: <Upload className="h-8 w-8 text-tax-secondary" />,
      title: "Document Storage",
      description:
        "Secure storage of all your tax-related documents with Digilocker integration.",
    },
    {
      icon: <Lock className="h-8 w-8 text-tax-accent" />,
      title: "Government Certified",
      description:
        "Authorized integration with official CBDT APIs for direct filing.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Why Choose Taxasaurus?</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
            Simplify your tax filing with our comprehensive suite of AI-powered tools.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="tax-feature-card flex flex-col items-start space-y-3 bg-white"
            >
              <div className="rounded-lg bg-gray-50 p-3">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
