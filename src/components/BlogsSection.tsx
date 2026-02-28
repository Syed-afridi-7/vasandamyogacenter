import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import blogImg from "@/assets/blog-img.png";

const blogs = [
  {
    title: "Watch top Yogasana athletes compete for glory on national television.",
    date: "April 25, 2025",
    readTime: "6 min read",
    excerpt: "Discover how competitive yoga is transforming lives and creating new opportunities for athletes across India.",
  },
  {
    title: "The Rise of Yogasana as a Competitive Sport in India",
    date: "April 20, 2025",
    readTime: "5 min read",
    excerpt: "Explore the growing movement of Yogasana sport and how India is leading the global charge.",
  },
  {
    title: "How JPL Empowers Youth Through Yoga Discipline",
    date: "April 15, 2025",
    readTime: "4 min read",
    excerpt: "Learn how the Jaipur Premier League builds confidence and capability in young practitioners.",
  },
  {
    title: "Behind the Scenes of the Yogasana Premier League",
    date: "April 10, 2025",
    readTime: "7 min read",
    excerpt: "An inside look at what makes the YPL one of India's most exciting sporting events.",
  },
];

const BlogsSection = () => {
  return (
    <section className="py-20 section-pink">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Blogs
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="overflow-hidden">
                <img
                  src={blogImg}
                  alt={blog.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-display font-bold text-foreground text-sm mb-2 line-clamp-2">{blog.title}</h4>
                <p className="text-muted-foreground text-xs mb-3">
                  By Admin | {blog.date} | {blog.readTime}
                </p>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{blog.excerpt}</p>
                <a href="#" className="text-primary text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
