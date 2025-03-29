
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SecurityBadges from "@/components/SecurityBadges";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

const Index = () => {
  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Taxasaurus",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "INR"
    },
    "description": "AI-powered tax filing solution that simplifies the tax process with intelligent assistance.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-metly-black text-white">
      <Helmet>
        <title>Taxasaurus - AI-Powered Tax Filing Solution</title>
        <meta name="description" content="Simplify your tax filing with Taxasaurus - the AI-powered tax assistant that helps maximize returns and ensure compliance." />
        <meta name="keywords" content="tax filing, AI tax assistant, tax optimization, digital tax, tax compliance, tax software, income tax" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Taxasaurus - AI-Powered Tax Filing Solution" />
        <meta property="og:description" content="Simplify your tax filing with AI guidance. Save time, maximize refunds, and file with confidence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taxasaurus.com" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <SecurityBadges />
        <Pricing />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Index;
