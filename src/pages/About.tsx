import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import AttorneyCard from "@/components/AttorneyCard";
import aboutHero from "@/assets/about-hero.jpg";
import attorney1 from "@/assets/attorney-1.jpg";
import attorney2 from "@/assets/attorney-2.jpg";
import attorney3 from "@/assets/attorney-3.jpg";
import attorney4 from "@/assets/attorney-4.jpg";
import { CheckCircle } from "lucide-react";

const values = [
  { title: "Integrity", description: "We uphold the highest ethical standards in every case we take on." },
  { title: "Excellence", description: "Our pursuit of legal excellence drives us to deliver outstanding results." },
  { title: "Compassion", description: "We treat every client with empathy, respect, and understanding." },
  { title: "Innovation", description: "We embrace modern legal strategies while honoring time-tested practices." },
];

const attorneys = [
  { image: attorney1, name: "James Prescott", specialization: "Managing Partner — Corporate Law", experience: "20+ Years Experience", bio: "A founding partner with expertise in corporate mergers, acquisitions, and business strategy. Harvard Law graduate." },
  { image: attorney2, name: "Elena Vasquez", specialization: "Senior Partner — Family Law", experience: "15+ Years Experience", bio: "Specializing in family law with a compassionate approach to divorce, custody, and adoption cases." },
  { image: attorney3, name: "Raj Patel", specialization: "Partner — Criminal Defense", experience: "12+ Years Experience", bio: "Former prosecutor turned defense attorney. Known for meticulous preparation and courtroom presence." },
  { image: attorney4, name: "Mei Lin Chen", specialization: "Partner — Immigration Law", experience: "10+ Years Experience", bio: "Passionate advocate for immigrants navigating the complex U.S. immigration system." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="Our legal team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-dark/85" />
        </div>
        <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">About Us</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mt-2">Our Story & Mission</h1>
          <p className="text-cream/70 max-w-2xl mx-auto mt-4">
            For over 25 years, Prescott & Associates has been a pillar of legal excellence, serving clients with unwavering dedication.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our History</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-6">A Legacy of Legal Excellence</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1998 by James Prescott Sr., our firm began as a small practice focused on corporate law. Over the decades, we have expanded to encompass a comprehensive range of legal services, growing into one of the most trusted law firms in the region.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, with over 20 attorneys and a dedicated support staff, we continue to uphold the founding principles of excellence, integrity, and client-first service that have defined our practice since day one.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our attorneys have been recognized by leading legal publications and have consistently achieved favorable outcomes for clients in high-stakes litigation, complex transactions, and sensitive personal matters.
              </p>
            </div>
            <div className="space-y-6">
              {values.map(({ title, description }) => (
                <div key={title} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <SectionHeading
            subtitle="Our Team"
            title="Meet Our Attorneys"
            description="Our diverse team of experienced attorneys is dedicated to delivering exceptional legal services."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attorneys.map((a) => (
              <AttorneyCard key={a.name} {...a} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
