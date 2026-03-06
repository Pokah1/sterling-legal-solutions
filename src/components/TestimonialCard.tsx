import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 relative">
      <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{content}"</p>
      <div>
        <p className="font-heading font-semibold text-foreground">{name}</p>
        <p className="text-muted-foreground text-xs">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
