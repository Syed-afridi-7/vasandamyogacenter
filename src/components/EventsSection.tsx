import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import eventImg from "@/assets/event-img.png";

const events = [
  { title: "Jaipur Yoga League Championship 8th Event", date: "12 Nov 2025" },
  { title: "Jaipur Yoga League Championship 8th Event", date: "12 Nov 2025" },
  { title: "Jaipur Yoga League Championship 8th Event", date: "12 Nov 2025" },
  { title: "Jaipur Yoga League Championship 8th Event", date: "12 Nov 2025" },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 section-pink">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Jaipur Yoga League Events
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={eventImg} alt={event.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h4 className="font-display font-bold text-foreground text-sm mb-2">{event.title}</h4>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{event.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
