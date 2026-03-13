import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <nav className="container-narrow mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
       <Link to="/" className="flex items-center gap-2">
  {/* Logo Container */}
  <div >
  <img
  src={`${import.meta.env.BASE_URL}Logo1.png`}
  alt="Khashane Attorneys Logo"
  className="h-20 w-auto object-contain"
/>
</div>

  {/* Company Name */}
  {/* <div className="flex flex-col leading-tight">
    <span className="font-heading text-cream text-lg font-bold">Khashane</span>
    <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-body">
      Attorneys
    </span>
  </div> */}
</Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 relative pb-1",
                location.pathname === link.href
                  ? "text-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold"
                  : "text-cream/80 hover:text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+27822166675"  className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm">
            <Phone className="w-4 h-4" />
            
          </a>
          <Button variant="gold" size="sm" asChild>
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-gold/20 animate-fade-in">
          <div className="container-narrow mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  location.pathname === link.href ? "text-gold" : "text-cream/80 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="gold" className="mt-2" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Free Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
