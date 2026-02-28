import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import eventImg from "@/assets/event-img.png";
import aboutYoga from "@/assets/about-yoga.png";

const images = [gallery1, gallery2, eventImg, aboutYoga, gallery1, gallery2, eventImg, aboutYoga];

const GallerySection = () => {
  return (
    <section className="py-20 section-pink">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Discover the Experience
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
