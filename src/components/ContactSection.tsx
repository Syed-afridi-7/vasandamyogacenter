import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Phone</p>
                  <p className="font-medium text-foreground">+91 9351889375</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email Address</p>
                  <p className="font-medium text-foreground">yogasanapremierleague@outlook.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Office Address</p>
                  <p className="font-medium text-foreground">380b, Meera Apartment, Devi Nagar, N.S. Road, Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Feel free to contact us for any kind of information
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Name" className="bg-muted" />
                <Input placeholder="Mobile Number" className="bg-muted" />
                <Input placeholder="Email Address" type="email" className="bg-muted" />
                <Textarea placeholder="Message" className="bg-muted min-h-[100px]" />
                <Button className="w-full">Submit</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
