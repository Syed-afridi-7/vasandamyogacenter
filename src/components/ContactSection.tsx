import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

// Backend endpoint for contact form (Vercel Serverless Function)
const API_ENDPOINT = "/api/contact";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 70920 26756", href: "tel:+917092026756" },
  { icon: Mail, label: "Email", value: "vasanthamyogainfo@gmail.com", href: "mailto:vasanthamyogainfo@gmail.com" },
  { icon: MapPin, label: "Office", value: "No. 71A/1, Sangari, Sankari Main Rd, Nethimedu, Salem, Tamil Nadu 636002, India", href: "#" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label mb-4 inline-flex">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Reach out to us for event inquiries, partnerships, or any information about
              Noble World Records programs and initiatives.
            </p>
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={i}
                href={href}
                className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300">
              <h3 className="font-bold text-foreground text-lg mb-6">Send a Message</h3>

              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Message Sent! 🎉</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      We'll reply to your email shortly. Check your inbox for a confirmation.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm text-primary font-semibold underline underline-offset-4"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="input-modern"
                    placeholder="Your Name"
                  />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="input-modern"
                    placeholder="Mobile Number"
                    type="tel"
                  />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="input-modern"
                    placeholder="Email Address"
                    type="email"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="input-modern min-h-[120px] resize-none"
                    placeholder="Your Message"
                  />
                  {status === "error" && (
                    <p className="text-red-500 text-sm">❌ Failed to send. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary-glow w-full flex items-center justify-center gap-2 text-white disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
