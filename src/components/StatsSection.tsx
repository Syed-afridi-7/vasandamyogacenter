import { motion } from "framer-motion";

const stats = [
  { number: "65", label: "Awards Won" },
  { number: "65", label: "Awards Won" },
  { number: "65", label: "Awards Won" },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-8 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-5xl font-bold text-primary mb-2">{stat.number}</h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
