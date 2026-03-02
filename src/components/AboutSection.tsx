import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import yoga2 from "@/assets/yoga2.jpg";

const checkItems = [
  "Promotion of Yoga as a Competitive Sport",
  "Development of a Clear & Effective Yoga Sports Policy",
  "Youth Transformation through Noble World Records & HRD",
  "Opportunities for Emerging Yoga Athletes",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label mb-4 inline-flex">Our Achievements</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Noble World Records
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Yoga is an essential part of human development, helping channel youth energy toward meaningful growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              NWR is dedicated to promoting yoga and martial arts worldwide,
              increasing awareness of its benefits and spiritual roots. With a clear vision
              for a strong Yoga Sports Policy, NWR aims to empower youth through showcasing
              achievements—building confidence, discipline, and capability.
            </p>
            <div className="space-y-3 mb-10">
              {checkItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
            <a
              href="#events"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 group"
            >
              Explore Our Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-violet-500/10 blur-2xl" />
            <img
              src={yoga2}
              alt="Yoga practice session"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
