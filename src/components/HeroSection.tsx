import { motion } from "framer-motion";
import { ArrowRight, Trophy, Shield, Star } from "lucide-react";

const badges = [
  { icon: Trophy, label: "World Records" },
  { icon: Star, label: "Yoga Sports" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/15 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/15 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Salem Yoga Festival 2026
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Salem Yoga Festival 2026
          </motion.h1>



          {/* Sub-heading */}
          <motion.p
            className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Organized by Vasantham Yoga Center
          </motion.p>

          <motion.div
            className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="mb-2"><strong className="text-white">World Record Details:</strong> [Placeholder for New Content]</p>
            <p><strong className="text-white">Our Mission:</strong> Promoting World Record in Martial Arts and Yoga.</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#register"
              className="btn-primary-glow flex flex-col items-center gap-1 text-white text-sm px-6 py-4 rounded-xl text-center"
            >
              <span className="font-bold text-base flex items-center gap-2">Register for World Record Event <ArrowRight className="w-4 h-4" /></span>
              <span className="text-xs font-normal opacity-90">(Fee: ₹850 - Includes Certificate & Medal)</span>
            </a>
            <a
              href="#register"
              className="flex flex-col items-center gap-1 rounded-xl border border-amber-500/50 bg-amber-500/10 backdrop-blur-sm px-6 py-4 text-sm text-white hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 text-center"
            >
              <span className="font-bold text-base flex items-center gap-2">Register for National Yoga Competition <ArrowRight className="w-4 h-4" /></span>
              <span className="text-xs font-normal opacity-90">(Fee: ₹1200 - Includes Framed Certificate & Medal)</span>
            </a>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {badges.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-sm text-slate-300 backdrop-blur-sm"
              >
                <Icon className="w-4 h-4 text-violet-400" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
