import { Facebook, Instagram, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-[#070b14] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/5">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-1.5">
                <img src={logoImg} alt="Vasantham Yoga Center Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Vasantham Yoga Center</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Empowering youth through world records in martial arts and yoga.
              Join us in celebrating extraordinary human potential.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1LBr6tCXTV/", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/salemyogasanafestival?utm_source=qr&igsh=aGdycHU4YW1lZDBx", label: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/@Salemyogasanafestival", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-600/80 hover:border-violet-600 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Events", href: "#events" },
                { label: "Register", href: "#register" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-slate-400 text-sm hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>+91 70920 26756</li>
              <li>
                <a href="mailto:vasanthamyogainfo@gmail.com" className="hover:text-white transition-colors">
                  vasanthamyogainfo@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  No. 71A/1, Sangari, Sankari Main Rd, Nethimedu, Salem, Tamil Nadu 636002, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <div className="space-y-1">
            <p>&copy; {new Date().getFullYear()} Vasantham Yoga Center. All rights reserved.</p>
            <p>developed by:<a href="https://gcoretechnologies.in/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">G-Core Technologies</a></p>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
