import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Instagram, Facebook, Youtube } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800" />
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139,92,246,0.6) 0%, transparent 60%),
                               radial-gradient(circle at 80% 20%, rgba(99,102,241,0.5) 0%, transparent 50%)`,
            }}
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Community
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Follow Us on Social Media
            </h2>
            <p className="max-w-xl mx-auto text-white/70 text-base mb-8 leading-relaxed">
              Stay connected with our vibrant community dedicated to wellness and excellence.
              Follow us for updates, event highlights, and inspiring yoga journeys.
            </p>

            <div className="flex items-center justify-center gap-4 mb-10">
              <a href="https://www.instagram.com/salemyogasanafestival?utm_source=qr&igsh=aGdycHU4YW1lZDBx" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com/share/1LBr6tCXTV/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.youtube.com/@Salemyogasanafestival" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/salemyogasanafestival?utm_source=qr&igsh=aGdycHU4YW1lZDBx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 text-sm font-bold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
              >
                Follow on Instagram
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917092026756"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 text-white px-8 py-4 text-sm font-bold hover:bg-green-600 transition-all duration-200 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
              >
                Contact on WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
