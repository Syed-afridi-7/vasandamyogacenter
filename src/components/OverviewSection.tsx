import { motion } from "framer-motion";
import overviewImg from "@/assets/overview-img.jpg";

const steps = [
  {
    num: 1,
    title: "World Record Event",
    desc: "Participate in our flagship World Record Event — a unique platform for advanced yoga performers to showcase their skills.",
  },
  {
    num: 2,
    title: "National Yoga Competition",
    desc: "Open to all levels — compete in our national-level yoga competition and win medals, certificates, and prizes.",
  },
  {
    num: 3,
    title: "Participation Benefits",
    desc: "Every participant receives a Certificate, Medal, Framed Certificate, and Organization Certificate. Top winners receive special prizes.",
  },
  {
    num: 4,
    title: "International Yoga Day Celebration",
    desc: "Results and winner announcements are made on June 21 — International Yoga Day — celebrating yoga's global impact.",
  },
];

const OverviewSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Salem Yoga Festival 2026 — Event Overview
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Two events, one celebration — promoting yoga awareness and competitive sports development for all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src={overviewImg} alt="Yoga competition overview" className="rounded-2xl shadow-xl w-full" />
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
