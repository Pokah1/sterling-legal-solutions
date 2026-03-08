import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-cream">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded gold-gradient flex items-center justify-center">
                <span className="font-heading text-navy font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-cream text-lg font-bold leading-tight">Prescott</span>
                <span className="text-gold text-[10px] tracking-[0.2em] uppercase">& Associates</span>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              A premier law firm dedicated to providing exceptional legal services with integrity, expertise, and personalized attention.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors" aria-label="Social media">
                  <Icon className="w-4 h-4 text-cream/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/practice-areas", label: "Practice Areas" },
                { to: "/attorneys", label: "Our Attorneys" },
                { to: "/contact", label: "Contact Us" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-cream/60 hover:text-gold transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-gold">Practice Areas</h3>
            <ul className="space-y-3">
              {["Corporate Law", "Family Law", "Criminal Defense", "Real Estate Law", "Immigration Law", "Civil Litigation"].map((area) => (
                <li key={area}>
                  <Link to="/practice-areas" className="text-cream/60 hover:text-gold transition-colors text-sm">{area}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-cream/60 text-sm">12 Adeola Odeku Street, Victoria Island Lagos 101241, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+2348031234567" className="text-cream/60 hover:text-gold transition-colors text-sm">+234 8011 11 2222</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@prescottlaw.com" className="text-cream/60 hover:text-gold transition-colors text-sm">info@prescottlaw.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">© {new Date().getFullYear()} Prescott & Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/40 hover:text-cream/60 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream/40 hover:text-cream/60 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
