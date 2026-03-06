import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div
      className="group bg-card border border-border rounded-lg p-6 hover-lift cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <Link to="/practice-areas" className="inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
