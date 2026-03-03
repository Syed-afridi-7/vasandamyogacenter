import { motion } from "framer-motion";
import { Heart, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Priya R.",
    text: "Participating in the Salem Yoga Festival through Vasantham Yoga Center has been a life-changing experience. The sense of community and love for yoga here is unmatched.",
  },
  {
    name: "Karthik S.",
    text: "Vasantham Yoga Center's events have transformed how I view yoga as a competitive sport. The organization and passion behind every event is truly inspiring.",
  },
  {
    name: "Meena V.",
    text: "Being part of the world record event gave me the confidence to pursue yoga professionally. A wonderful platform for athletes of all levels.",
  },
  {
    name: "Arjun T.",
    text: "The International Yoga Day celebration on June 21 was unforgettable. Vasantham Yoga Center truly promotes love for yoga and wellness in our community.",
  },
  {
    name: "Sowmya D.",
    text: "The Salem Yoga Festival is more than just an event — it's a movement. Incredibly well-organized, inclusive, and full of positive energy.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 section-pink overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-4">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heart className="inline w-8 h-8 text-primary mr-2" />
          Google Reviews — Vasantham Yoga Center
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-sm mt-3 flex items-center justify-center gap-1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <MapPin className="w-4 h-4 text-primary" />
          Find us on Google Maps &amp; share your experience!
        </motion.p>
      </div>

      <div className="flex animate-scroll-left gap-6 mt-8" style={{ width: "max-content" }}>
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
