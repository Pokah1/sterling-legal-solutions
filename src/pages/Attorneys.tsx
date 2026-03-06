import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import AttorneyCard from "@/components/AttorneyCard";
import attorney1 from "@/assets/attorney-1.jpg";
import attorney2 from "@/assets/attorney-2.jpg";
import attorney3 from "@/assets/attorney-3.jpg";
import attorney4 from "@/assets/attorney-4.jpg";

const attorneys = [
  { image: attorney1, name: "James Prescott", specialization: "Managing Partner — Corporate Law", experience: "20+ Years Experience", bio: "A founding partner with expertise in corporate mergers, acquisitions, and business strategy. Harvard Law School graduate with a track record of landmark corporate cases." },
  { image: attorney2, name: "Elena Vasquez", specialization: "Senior Partner — Family Law", experience: "15+ Years Experience", bio: "Specializing in family law with a compassionate approach to divorce, custody, and adoption. Known for achieving favorable outcomes while minimizing emotional impact." },
  { image: attorney3, name: "Raj Patel", specialization: "Partner — Criminal Defense", experience: "12+ Years Experience", bio: "Former federal prosecutor turned defense attorney. His inside knowledge of prosecution tactics gives clients a significant strategic advantage." },
  { image: attorney4, name: "Mei Lin Chen", specialization: "Partner — Immigration Law", experience: "10+ Years Experience", bio: "Passionate advocate helping individuals and families navigate the U.S. immigration system. Fluent in Mandarin and Cantonese, she bridges cultural and legal gaps." },
];

const Attorneys = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="navy-gradient py-24 sm:py-32">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Team</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mt-2">Our Attorneys</h1>
          <p className="text-cream/70 max-w-2xl mx-auto mt-4">
            Meet the experienced legal professionals who make up our dedicated team.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {attorneys.map((a) => (
              <AttorneyCard key={a.name} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <SectionHeading
            subtitle="Our Approach"
            title="What Sets Our Team Apart"
            description="We combine deep legal expertise with a genuine commitment to each client's success."
          />
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: "Client-First Philosophy", desc: "Every strategy is built around your specific goals and circumstances." },
              { title: "Collaborative Expertise", desc: "Our attorneys work together across practice areas for comprehensive solutions." },
              { title: "Proven Results", desc: "A consistent track record of successful outcomes in complex legal matters." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-6 text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Attorneys;
