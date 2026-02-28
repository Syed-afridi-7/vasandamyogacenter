import { motion } from "framer-motion";

const experts = Array.from({ length: 10 }, (_, i) => ({
  name: "Harsh Jain",
  role: "Ekam Yoga, CEO",
  id: i,
}));

const ExpertsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by India's Yoga Experts
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-3">
                <span className="font-display text-xl font-bold text-accent-foreground">
                  {expert.name[0]}
                </span>
              </div>
              <p className="font-medium text-foreground text-sm">{expert.name}</p>
              <p className="text-muted-foreground text-xs">{expert.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
