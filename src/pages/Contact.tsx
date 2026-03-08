import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  const contactInfo = [
  { icon: Phone, label: "Phone", value: "+234 8011 11 2222", href: "tel:+2349136364360" },
  { icon: Mail, label: "Email", value: "info@prescottlaw.com", href: "mailto:info@prescottlaw.com" },
  { icon: MapPin, label: "Address", value: "12 Adeola Odeku Street, Victoria Island Lagos 101241, Nigeria" },
  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 2:00 PM" },
];

  return (
    <Layout>
      {/* Hero */}
      <section className="navy-gradient py-24 sm:py-32">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mt-2">Contact Us</h1>
          <p className="text-cream/70 max-w-2xl mx-auto mt-4">
            Ready to discuss your legal needs? Reach out for a free consultation with our experienced team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} maxLength={100} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} maxLength={255} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(234) 123-4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} maxLength={20} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Regarding..." value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} maxLength={200} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Describe your legal matter..." rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} maxLength={2000} required />
                </div>
                <Button variant="gold" size="lg" type="submit" disabled={loading} className="w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-1" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{label}</p>
                    {href ? (
                      <a href={href} className="text-muted-foreground text-sm hover:text-accent transition-colors">{value}</a>
                    ) : (
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  title="Office Location"
                   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3973.2157098511065!2d3.416483!3d6.430664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
