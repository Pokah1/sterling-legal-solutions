import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import AttorneyCard from "@/components/AttorneyCard";
// import attorney1 from "@/assets/placeholder.png";
// import attorney2 from "@/assets/placeholder.png";
// import attorney3 from "@/assets/placeholder.png";
import attorney4 from "@/assets/placeholder.png";

const attorneys = [
  {
    image: attorney4,
    name: "MADUVHAHAFANI KASHANE",
    specialization: "Director | Attorney — Corporate Law",
    experience: "20+ Years Experience",
    bio: "Founder and lead attorney with extensive expertise in corporate law, mergers, and business strategy. Dedicated to providing exceptional legal guidance.",
  },
  {
    image: attorney4,
    name: "John Doe",
    specialization: "Partner — Family Law",
    experience: "15+ Years Experience",
    bio: "Experienced family law attorney specializing in divorce, custody, and adoption cases. Committed to achieving fair outcomes for clients.",
  },
  {
    image: attorney4,
    name: "Jane Smith",
    specialization: "Partner — Labour Law",
    experience: "12+ Years Experience",
    bio: "Labour law expert helping clients navigate workplace disputes, employment contracts, and compliance issues.",
  },
  {
    image: attorney4,
    name: "Alex Johnson",
    specialization: "Partner — Estate Planning",
    experience: "10+ Years Experience",
    bio: "Dedicated to guiding clients through estate planning, wills, and administration of estates with clarity and care.",
  },
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
