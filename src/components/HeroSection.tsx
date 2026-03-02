import { motion } from "framer-motion";
import { ArrowRight, Trophy, Shield, Star } from "lucide-react";

const badges = [
  { icon: Trophy, label: "World Records" },
  { icon: Shield, label: "Martial Arts" },
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
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-violet-300">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Noble World Records
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Promoting World Records
            <br />
            in{" "}
            <span className="text-gradient-primary animate-gradient">
              Martial Arts & Yoga
            </span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Shaping confident, capable, and empowered youth through world-class
            events, discipline, and the celebration of extraordinary human potential.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#register"
              className="btn-primary-glow flex items-center gap-2 text-white text-sm font-semibold px-8 py-4 rounded-xl"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#events"
              className="flex items-center gap-2 rounded-xl border border-slate-600 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:border-slate-400 transition-all duration-300"
            >
              View Events
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
