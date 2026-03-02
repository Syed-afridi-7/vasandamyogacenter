import { Facebook, Instagram, Twitter, Linkedin, Trophy } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-[#070b14] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/5">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">NWR India</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Empowering youth through world records in martial arts and yoga.
              Join us in celebrating extraordinary human potential.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/nobleworldrecords", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
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
              <li>+91 9351889375</li>
              <li>
                <a href="mailto:info@nobleworldrecords.net" className="hover:text-white transition-colors">
                  info@nobleworldrecords.net
                </a>
              </li>
              <li>
                <a href="https://www.nobleworldrecords.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  nobleworldrecords.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Noble World Records. All rights reserved.</p>
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
