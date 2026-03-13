import Layout from "@/components/layout/Layout";
// import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Users, Shield, Home, Globe, Scale, ArrowRight } from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Corporate & Commercial Law",
    description:
      "We provide strategic legal guidance to businesses of all sizes, assisting with corporate structures, commercial agreements, and regulatory compliance. Our goal is to help companies operate confidently while protecting their legal and financial interests.",
    services: [
      "Business Formation",
      "Commercial Agreements",
      "Contract Drafting & Review",
      "Corporate Governance",
      "Regulatory Compliance",
      "Business Advisory",
    ],
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Family legal matters often involve sensitive and emotional situations. Our attorneys provide compassionate guidance and practical legal solutions while protecting the best interests of our clients and their families.",
    services: [
      "Divorce & Separation",
      "Child Custody Matters",
      "Child Maintenance",
      "Parental Rights",
      "Family Dispute Resolution",
    ],
  },
  {
    icon: Scale,
    title: "Labour Law",
    description:
      "We assist both employers and employees in navigating workplace disputes and employment regulations. Our team provides clear legal advice and representation in labour-related matters.",
    services: [
      "Employment Contracts",
      "Unfair Dismissal Claims",
      "Workplace Disputes",
      "Disciplinary Hearings",
      "Labour Compliance Advice",
    ],
  },
  {
    icon: Home,
    title: "Estate Planning & Administration",
    description:
      "Planning for the future is essential to protecting your assets and loved ones. We assist clients with estate planning and guide families through the legal process of administering estates.",
    services: [
      "Drafting Wills",
      "Estate Planning",
      "Administration of Deceased Estates",
      "Estate Disputes",
      "Asset Distribution",
    ],
  },
  {
    icon: Shield,
    title: "Debt Collection & Third Party Claims",
    description:
      "We help individuals and businesses recover outstanding debts and pursue lawful compensation through third-party claims. Our legal team ensures that claims are handled efficiently and professionally.",
    services: [
      "Debt Recovery",
      "Commercial Debt Collection",
      "Third Party Claims",
      "Negotiated Settlements",
      "Legal Enforcement Procedures",
    ],
  },
  {
    icon: Globe,
    title: "Pension Law & Bail Applications",
    description:
      "Our firm provides legal support in pension-related matters as well as representation for bail applications, ensuring that clients receive fair legal consideration and proper guidance.",
    services: [
      "Pension Disputes",
      "Pension Benefit Claims",
      "Retirement Fund Matters",
      "Bail Applications",
      "Criminal Procedure Assistance",
    ],
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
