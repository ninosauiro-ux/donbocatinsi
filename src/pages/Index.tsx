import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Comidas } from "@/components/Comidas";
import { Reservation } from "@/components/Reservation";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingChatbot } from "@/components/FloatingChatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Specialties />
      <Comidas />
      <WhyUs />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Index;