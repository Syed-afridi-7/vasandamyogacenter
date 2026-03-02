import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import yoga1 from "@/assets/yoga1.jpg";
import yoga6 from "@/assets/yoga6.jpg";
import yoga7 from "@/assets/yoga7.jpg";
import yoga8 from "@/assets/yoga8.jpg";

const blogs = [
  {
    img: yoga8,
    tag: "Martial Arts",
    title: "Watch top martial arts and yoga athletes compete for glory on national television.",
    date: "April 25, 2025",
    readTime: "6 min read",
    excerpt: "Discover how competitive yoga is transforming lives and creating new opportunities for athletes across India.",
  },
  {
    img: yoga7,
    tag: "Yoga Sports",
    title: "The Rise of Martial Arts and Yoga as Competitive Sports in India",
    date: "April 20, 2025",
    readTime: "5 min read",
    excerpt: "Explore the growing movement of martial arts and yoga sports and how India is leading the global charge.",
  },
  {
    img: yoga6,
    tag: "Youth",
    title: "How NWR Empowers Youth Through Discipline and World Records",
    date: "April 15, 2025",
    readTime: "4 min read",
    excerpt: "Learn how the Noble World Records builds confidence and capability in young practitioners.",
  },
  {
    img: yoga1,
    tag: "Events",
    title: "Behind the Scenes of the Noble World Records Events",
    date: "April 10, 2025",
    readTime: "7 min read",
    excerpt: "An inside look at what makes the NWR one of India's most exciting sporting events.",
  },
];

const BlogsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label mb-4 inline-flex">Blog</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Latest Insights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <motion.article
              key={i}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                  {blog.tag}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-foreground text-sm leading-snug mb-3 line-clamp-2">
                  {blog.title}
                </h4>
                <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {blog.readTime}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs mb-4 line-clamp-2">{blog.excerpt}</p>
                <a
                  href="#"
                  className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
