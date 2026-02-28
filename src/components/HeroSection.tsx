import { motion } from "framer-motion";
import { Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient pt-24 pb-16 relative overflow-hidden">
      {/* Decorative yoga silhouettes */}
      <div className="absolute left-0 bottom-0 w-32 md:w-48 h-full opacity-10">
        <svg viewBox="0 0 200 600" className="w-full h-full fill-primary">
          <circle cx="100" cy="150" r="20" />
          <path d="M100 170 L100 350 M60 250 L140 250 M100 350 L60 500 M100 350 L140 500" stroke="currentColor" strokeWidth="8" fill="none" className="stroke-primary" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 w-32 md:w-48 h-full opacity-10">
        <svg viewBox="0 0 200 600" className="w-full h-full fill-primary">
          <circle cx="100" cy="150" r="20" />
          <path d="M100 170 L100 300 M60 220 L140 280 M100 300 L50 450 M100 300 L150 450" stroke="currentColor" strokeWidth="8" fill="none" className="stroke-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block border border-border rounded-full px-6 py-2 text-sm font-medium text-foreground mb-6">
            Jaipur Yoga League
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Promoting Yoga as a global competitive sport. Shaping confident, capable, and{" "}
          <span className="text-primary">empowered youth.</span>
        </motion.h1>

        <motion.div
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={heroBanner} alt="Yogasana Premier League Championship" className="w-full h-auto" />
          <button className="absolute inset-0 flex items-center justify-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
