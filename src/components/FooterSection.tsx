import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="font-display text-primary-foreground font-bold text-lg">J</span>
          </div>
          <span className="font-display font-bold text-lg text-background">JYL India</span>
        </div>
        <p className="text-background/60 text-sm mb-4">
          Promoting Yoga as a global competitive sport.
        </p>
        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="#home" className="text-background/60 text-sm hover:text-background transition-colors">Home</a>
          <a href="#about" className="text-background/60 text-sm hover:text-background transition-colors">About</a>
          <a href="#events" className="text-background/60 text-sm hover:text-background transition-colors">Events</a>
          <a href="#contact" className="text-background/60 text-sm hover:text-background transition-colors">Contact</a>
        </div>
        <div className="h-px bg-background/10 mb-6" />
        <p className="text-background/40 text-xs flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-primary" /> by JYL India © 2025
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
