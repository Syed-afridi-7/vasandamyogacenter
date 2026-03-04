import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import SalemYogasanaSection from "@/components/SalemYogasanaSection";
import RegistrationSection from "@/components/RegistrationSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunitySection from "@/components/CommunitySection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import BlogsSection from "@/components/BlogsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* 1. Main Highlight */}
      <HeroSection />
      {/* 2. Event Overview */}
      <OverviewSection />
      {/* 3. Event 1 Schedule */}
      <SalemYogasanaSection />
      {/* 4. Registrations — Two Sections */}
      <RegistrationSection />
      {/* 5. Achievements & World Record History */}
      <EventsSection />
      {/* 6. Awareness Content */}
      <AboutSection />
      {/* 7. Social Proof */}
      <TestimonialsSection />
      <CommunitySection />
      <GallerySection />
      <ContactSection />
      <BlogsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
