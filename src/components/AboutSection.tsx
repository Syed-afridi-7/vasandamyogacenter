import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutYoga from "@/assets/about-yoga.png";

const checkItems = [
  "Promotion of Yoga as a Competitive Sport",
  "Development of a Clear & Effective Yoga Sports Policy",
  "Youth Transformation through Yogasana & HRD",
  "Opportunities for Emerging Yoga Athletes",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-pink">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Yoga is an essential part of human development, helping channel youth energy toward meaningful growth.
          </p>
        </motion.div>

        <div className="h-px bg-border mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Jaipur Premier League
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              JPL is dedicated to promoting Yoga as a competitive sport in India and across the globe,
              increasing awareness of its benefits and spiritual roots. With a clear vision for a strong Yoga Sports Policy,
              JPL aims to empower youth through Yogasana—building confidence, discipline, and capability.
            </p>

            <div className="space-y-4 mb-8">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Read More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutYoga}
              alt="Yoga practitioners in a studio"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
