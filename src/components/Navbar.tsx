import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import logoSvg from "@/assets/logocore.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Register", href: "#register" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 dark:bg-[#0a0d1a]/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <img
            src={logoSvg}
            alt="NWR India Logo"
            className="h-10 w-10 object-contain rounded-sm transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display font-bold text-lg text-foreground tracking-tight hidden sm:block">
            NWR <span className="text-gradient-primary">India</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/CERTIFICATE_Final.pdf"
            download="CERTIFICATE_Final.pdf"
            className="flex items-center gap-2 btn-primary-glow text-white text-sm"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white/95 dark:bg-[#0a0d1a]/95 backdrop-blur-xl px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/CERTIFICATE_Final.pdf"
              download="CERTIFICATE_Final.pdf"
              className="flex items-center justify-center gap-2 btn-primary-glow text-white text-sm w-full"
            >
              <Download className="w-4 h-4" />
              Download Certificate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
