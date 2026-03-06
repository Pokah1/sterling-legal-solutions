import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, Shield, Home, Globe, Scale, ArrowRight } from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Our corporate law team advises businesses at every stage—from startup formation and contract negotiations to complex mergers, acquisitions, and regulatory compliance. We help companies navigate legal complexities so they can focus on growth.",
    services: ["Mergers & Acquisitions", "Contract Drafting & Review", "Corporate Governance", "Regulatory Compliance", "Business Formation", "Shareholder Agreements"],
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "When your freedom is at stake, you need an aggressive and experienced defense team. We handle all criminal matters, from misdemeanors to serious felony charges, ensuring your rights are protected throughout the legal process.",
    services: ["Felony Defense", "Misdemeanor Defense", "DUI/DWI Defense", "White-Collar Crime", "Appeals", "Expungements"],
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Family matters require sensitivity and expertise. Our family law attorneys guide clients through divorce, child custody, adoption, and other family-related legal issues with compassion and resolve.",
    services: ["Divorce & Separation", "Child Custody & Support", "Adoption", "Prenuptial Agreements", "Domestic Violence Protection", "Estate Planning"],
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "From residential purchases to major commercial developments, our real estate practice covers all aspects of property law. We ensure smooth transactions and resolve disputes efficiently.",
    services: ["Property Transactions", "Title Issues", "Zoning & Land Use", "Landlord-Tenant Disputes", "Construction Law", "Commercial Leasing"],
  },
  {
    icon: Globe,
    title: "Immigration Law",
    description: "Navigating the immigration system can be overwhelming. Our dedicated immigration team helps individuals and families with visa applications, green cards, citizenship, and deportation defense.",
    services: ["Visa Applications", "Green Card Petitions", "Citizenship & Naturalization", "Deportation Defense", "Asylum Cases", "Employment-Based Immigration"],
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "When disputes cannot be resolved through negotiation, our litigation team provides forceful courtroom advocacy. We handle complex commercial disputes, personal injury claims, and more.",
    services: ["Commercial Disputes", "Personal Injury", "Employment Litigation", "Insurance Claims", "Class Actions", "Arbitration & Mediation"],
  },
];

const PracticeAreas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="navy-gradient py-24 sm:py-32">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">What We Do</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mt-2">Practice Areas</h1>
          <p className="text-cream/70 max-w-2xl mx-auto mt-4">
            Comprehensive legal services tailored to your unique needs, backed by decades of experience and a commitment to results.
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto space-y-16">
          {areas.map(({ icon: Icon, title, description, services }, i) => (
            <div key={title} className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
                <Button variant="gold" asChild>
                  <Link to="/contact">Discuss Your Case <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">Our Services Include:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="navy-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-cream mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-cream/70 max-w-xl mx-auto mb-8">Contact us for a free consultation and we'll help you determine the best legal strategy for your situation.</p>
          <Button variant="heroPrimary" size="lg" asChild>
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PracticeAreas;
