import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import yoga3 from "@/assets/yoga3.jpg";
import yoga4 from "@/assets/yoga4.jpg";
import yoga5 from "@/assets/yoga5.jpg";

const events = [
  {
    img: yoga5,
    title: "Tamizharum Silambamum - Shadow Phoenix Martial Arts",
    date: "01 Mar 2026",
    tag: "Martial Arts",
  },
  {
    img: yoga4,
    title: "Salem Yoga Marathon 2023 — One Hour Non Stop Yoga Practice",
    date: "2023",
    tag: "Yoga Marathon",
  },
  {
    img: yoga3,
    title: "Yoga Marathon 2022 — International Yoga Day",
    date: "19 Jun 2022",
    tag: "Yoga",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label mb-4 inline-flex">Events</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Vasantham Yoga Center Events
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.article
              key={i}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
              <div className="p-5">
                <h3 className="font-bold text-foreground text-sm leading-snug mb-3 line-clamp-2">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between">
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
    </section>
  );
};

export default EventsSection;
