import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import OverviewSection from "@/components/OverviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunitySection from "@/components/CommunitySection";
import EventsSection from "@/components/EventsSection";
import ExpertsSection from "@/components/ExpertsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import BlogsSection from "@/components/BlogsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <OverviewSection />
      <TestimonialsSection />
      <CommunitySection />
      <EventsSection />
      <ExpertsSection />
      <GallerySection />
      <ContactSection />
      <BlogsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
