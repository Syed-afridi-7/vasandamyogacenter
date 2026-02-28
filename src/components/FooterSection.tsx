import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground font-bold text-lg">C</span>
            </div>
            <div>
              <div className="font-display font-bold text-lg text-background">Your Company Name</div>
              <div className="text-sm text-background/60">Your Corporate Tagline</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#home" className="hover:text-background transition-colors">Home</a>
            <a href="#about-us" className="hover:text-background transition-colors">About</a>
            <a href="#services" className="hover:text-background transition-colors">Services</a>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex gap-4">
            <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="flex gap-6 text-background/60">
            <a href="/privacy" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-background/40">
          © 2026 Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
