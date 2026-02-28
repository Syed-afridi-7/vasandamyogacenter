import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 md:p-16 text-center text-primary-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-6xl mb-4 block">#</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join Our JYL Community
          </h2>
          <p className="max-w-xl mx-auto mb-6 opacity-90">
            Connect with a passionate community dedicated to wellness and Yogasana excellence. Share your journey,
            learn from others, and help us build the next era of Yoga sport.
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="w-5 h-5" />
            <span className="font-bold text-lg">128K followers</span>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="font-bold"
            asChild
          >
            <a href="https://www.facebook.com/yogasana.game/" target="_blank" rel="noopener noreferrer">
              Join Now
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
