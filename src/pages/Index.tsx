
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SecurityBadges from "@/components/SecurityBadges";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Taxasaurus - AI-Powered Tax Solutions for Professionals</title>
        <meta name="description" content="Simplify tax filing with AI-powered guidance. Save time, maximize refunds, and file with confidence using Taxasaurus." />
        <meta name="keywords" content="tax filing, AI tax assistant, tax software, tax professional, tax preparation, digital tax solutions" />
        <meta property="og:title" content="Taxasaurus - AI-Powered Tax Solutions" />
        <meta property="og:description" content="Simplify tax filing with AI-powered guidance. Save time, maximize refunds, and file with confidence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taxasaurus.com" />
        <meta property="og:image" content="https://taxasaurus.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taxasaurus - AI-Powered Tax Solutions" />
        <meta name="twitter:description" content="Simplify tax filing with AI-powered guidance. Save time, maximize refunds, and file with confidence." />
        <meta name="twitter:image" content="https://taxasaurus.com/twitter-image.jpg" />
        <link rel="canonical" href="https://taxasaurus.com" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Taxasaurus",
              "url": "https://taxasaurus.com",
              "logo": "https://taxasaurus.com/logo.png",
              "description": "AI-powered tax filing solutions for individuals and businesses.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-TAX-HELP",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://facebook.com/taxasaurus",
                "https://twitter.com/taxasaurus",
                "https://linkedin.com/company/taxasaurus"
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
          <SecurityBadges />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <ChatbotButton />
      </div>
    </>
  );
};

export default Index;
