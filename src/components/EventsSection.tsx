import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { GalleryModal } from "./GalleryModal";
import yoga3 from "@/assets/yoga3.jpg";
import yoga4 from "@/assets/yoga4.jpg";
import yoga5 from "@/assets/yoga5.jpg";

const events = [
  {
    img: yoga5,
    title: "Yogasana Fest 2025",
    date: "01 Mar 2026",
    tag: "Event",
    folder: "2025"
  },
  {
    img: yoga4,
    title: "Yogasana Fest 2023",
    date: "2023",
    tag: "Event",
    folder: "2023"
  },
  {
    img: yoga3,
    title: "Yogasana Fest 2022",
    date: "19 Jun 2022",
    tag: "Event",
    folder: "2022"
  },
];

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<{ folder: string; title: string } | null>(null);

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label mb-4 inline-flex">Achievements &amp; World Record History</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3">
            Our Journey — 2022 to Present
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Relive the memories from our Yogasana festivals. Click 'View' to see the exclusive photo galleries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.article
              key={i}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedEvent({ folder: event.folder, title: event.title })}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                  {event.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between h-32">
                <h3 className="font-bold text-foreground text-sm leading-snug mb-3 line-clamp-2">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </div>
                  <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <GalleryModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        folder={selectedEvent?.folder || ""}
        title={selectedEvent?.title || ""}
      />
    </section>
  );
};

export default EventsSection;
