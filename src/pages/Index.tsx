
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
  );
};

export default Index;
