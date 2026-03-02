import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RegistrationSection from "@/components/RegistrationSection";

import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunitySection from "@/components/CommunitySection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import BlogsSection from "@/components/BlogsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RegistrationSection />

      <AboutSection />
      <TestimonialsSection />
      <CommunitySection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
      <BlogsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
