import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import AttorneyCard from "@/components/AttorneyCard";
import aboutHero from "@/assets/about-hero.jpg";
// import attorney1 from "@/assets/attorney-1.jpg";
// import attorney2 from "@/assets/attorney-2.jpg";
// import attorney3 from "@/assets/attorney-3.jpg";
// import attorney4 from "@/assets/attorney-4.jpg";
import attorney5 from "@/assets//placeholder.png";
import { CheckCircle } from "lucide-react";

const values = [
  { title: "Integrity", description: "We uphold the highest ethical standards in every case we take on." },
  { title: "Excellence", description: "Our pursuit of legal excellence drives us to deliver outstanding results." },
  { title: "Compassion", description: "We treat every client with empathy, respect, and understanding." },
  { title: "Innovation", description: "We embrace modern legal strategies while honoring time-tested practices." },
];

const attorneys = [
  {
   image: attorney5,
    name: "MADUVHAHAFANI KASHANE",
    specialization: "Director | Attorney — Corporate Law",
    experience: "20+ Years Experience",
    bio: "Founder and lead attorney with extensive expertise in corporate law, mergers, and business strategy. Dedicated to providing exceptional legal guidance.",
  },
  {
    image: attorney5,
    name: "John Doe",
    specialization: "Partner — Family Law",
    experience: "15+ Years Experience",
    bio: "Experienced family law attorney specializing in divorce, custody, and adoption cases. Committed to achieving fair outcomes for clients.",
  },
  {
    image: attorney5,
    name: "Jane Smith",
    specialization: "Partner — Labour Law",
    experience: "12+ Years Experience",
    bio: "Labour law expert helping clients navigate workplace disputes, employment contracts, and compliance issues.",
  },
  {
    image: attorney5,
    name: "Alex Johnson",
    specialization: "Partner — Estate Planning",
    experience: "10+ Years Experience",
    bio: "Dedicated to guiding clients through estate planning, wills, and administration of estates with clarity and care.",
  },
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
         <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mt-2">
  Our Story & Mission
</h1>
<p className="text-cream/70 max-w-2xl mx-auto mt-4">
  At Khashane Attorneys Inc. we are committed to delivering reliable legal guidance and strong representation, built on the principles of integrity, professionalism, and dedication to every client we serve.
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
                Khashane Attorneys Inc. was established with a commitment to delivering exceptional legal services with integrity, professionalism, and dedication. What began as a focused legal practice has grown into a respected firm offering a comprehensive range of legal services, trusted by individuals, families, and businesses alike.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
  Today, Khashane Attorneys continues to uphold the principles of excellence, integrity, and client-focused service that define our practice. With a dedicated team of legal professionals and support staff, we remain committed to delivering reliable legal solutions and strong representation for our clients.
</p>
              <p className="text-muted-foreground leading-relaxed">
  At Khashane Attorneys, our legal professionals combine knowledge, experience, and dedication to provide trusted guidance and strong representation. We approach every matter with care and professionalism, striving to achieve the best possible results for our clients.
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
