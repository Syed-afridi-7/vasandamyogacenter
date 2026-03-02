import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import yoga1 from "@/assets/yoga1.jpg";
import yoga2 from "@/assets/yoga2.jpg";
import yoga3 from "@/assets/yoga3.jpg";
import yoga4 from "@/assets/yoga4.jpg";
import yoga5 from "@/assets/yoga5.jpg";
import yoga6 from "@/assets/yoga6.jpg";
import yoga7 from "@/assets/yoga7.jpg";
import yoga8 from "@/assets/yoga8.jpg";

const images = [
  { src: yoga1, alt: "Yoga Marathon Pose" },
  { src: yoga2, alt: "Group Yoga Session" },
  { src: yoga3, alt: "Yoga Championship" },
  { src: yoga4, alt: "Yoga Marathon Practice" },
  { src: yoga5, alt: "Martial Arts Performance" },
  { src: yoga6, alt: "Yoga Meditation" },
  { src: yoga7, alt: "Salem Yoga Marathon" },
  { src: yoga8, alt: "NWR Yoga Event" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label mb-4 inline-flex">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Academy Events Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`group relative rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-3">
                <span className="text-white text-xs font-medium">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Enlarged gallery view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
