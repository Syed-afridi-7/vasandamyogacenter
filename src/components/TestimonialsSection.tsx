import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

const testimonials = [
  { name: "Mohan", text: "The Noble World Records events have transformed how I view competitive martial arts and yoga. The discipline and community spirit is unmatched." },
  { name: "Priya", text: "Being part of NWR gave me the confidence to pursue martial arts and yoga professionally. A life-changing experience." },
  { name: "Rajesh", text: "NWR's commitment to youth empowerment through world records is truly inspiring. It's more than just an event." },
  { name: "Anita", text: "The level of organization and passion behind NWR is remarkable. It truly promotes martial arts and yoga as competitive sports." },
  { name: "Vikram", text: "Participating in the Noble World Records events was the highlight of my career. An incredible platform for athletes." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 section-pink overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heart className="inline w-8 h-8 text-primary mr-2" />
          Love from India's Yoga Community
        </motion.h2>
      </div>

      <div className="flex animate-scroll-left gap-6" style={{ width: "max-content" }}>
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-6 w-80 flex-shrink-0 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary">{t.name[0]}</span>
              </div>
              <div>
                <p className="font-medium text-foreground">{t.name}</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
