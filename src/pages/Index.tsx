import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import {
  Building2, Users, Shield, Home, Globe, Scale,
  Award, CheckCircle, Clock, Heart, ArrowRight, Phone
} from "lucide-react";

const practiceAreas = [
  { icon: Building2, title: "Corporate Law", description: "Strategic counsel for businesses of all sizes, from formation to complex mergers and acquisitions." },
  { icon: Users, title: "Family Law", description: "Compassionate guidance through divorce, custody, adoption, and other family matters." },
  { icon: Shield, title: "Criminal Defense", description: "Vigorous defense protecting your rights and freedom in all criminal proceedings." },
  { icon: Home, title: "Real Estate Law", description: "Expert handling of property transactions, disputes, zoning, and development projects." },
  { icon: Globe, title: "Immigration Law", description: "Navigating visa applications, green cards, citizenship, and deportation defense." },
  { icon: Scale, title: "Civil Litigation", description: "Skilled advocacy in disputes, negotiations, and courtroom representation." },
];

const stats = [
  { icon: Award, value: "25+", label: "Years of Experience" },
  { icon: CheckCircle, value: "5,000+", label: "Cases Won" },
  { icon: Users, value: "20+", label: "Expert Attorneys" },
  { icon: Heart, value: "98%", label: "Client Satisfaction" },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, TechVentures Inc.", content: "Prescott & Associates handled our corporate restructuring with exceptional professionalism. Their attention to detail and strategic insight saved us millions.", rating: 5 },
  { name: "David Chen", role: "Real Estate Developer", content: "I've worked with many law firms, but none match the dedication and expertise of this team. They turned a complex property dispute into a swift resolution.", rating: 5 },
  { name: "Maria Rodriguez", role: "Immigration Client", content: "They guided my family through the entire immigration process with care and expertise. We are forever grateful for their unwavering support.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Modern law firm office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-dark/80" />
        </div>
        <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-wider uppercase mb-4 animate-fade-in">Trusted Legal Excellence Since 1998</span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-tight mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Justice. Integrity.<br />
            <span className="text-gold-gradient">Results.</span>
          </h1>
          <p className="text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            A premier law firm providing exceptional legal representation with a proven track record of success across all major practice areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Button variant="heroPrimary" size="lg" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">About Our Firm</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Decades of Legal Excellence & Unwavering Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1998, Prescott & Associates has grown into one of the most respected law firms in the region. Our team of seasoned attorneys brings deep expertise across multiple practice areas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe in building lasting relationships with our clients, understanding their unique needs, and delivering results that exceed expectations.
              </p>
              <Button variant="gold" asChild>
                <Link to="/about">Learn More About Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
            </div>
            <div className="relative">
              <img src={aboutHero} alt="Our legal team in conference" className="rounded-lg shadow-2xl w-full" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 bg-accent rounded-lg p-6 shadow-xl hidden sm:block">
                <p className="font-heading text-3xl font-bold text-accent-foreground">25+</p>
                <p className="text-accent-foreground/80 text-sm">Years of Practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <SectionHeading
            subtitle="Our Expertise"
            title="Practice Areas"
            description="We offer comprehensive legal services across a wide range of practice areas to meet all your legal needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, i) => (
              <ServiceCard key={area.title} {...area} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="navy-gradient section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Proven Track Record of Success"
            description="Our numbers speak for themselves. We are committed to achieving the best possible outcomes for our clients."
            light
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-heading text-3xl sm:text-4xl font-bold text-cream">{value}</p>
                <p className="text-cream/60 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Hear from the people we've helped navigate their legal challenges successfully."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="navy-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-cream/70 max-w-xl mx-auto mb-8">
            Schedule a free consultation with one of our experienced attorneys today. We're here to help you navigate your legal challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroPrimary" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:+15551234567">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
