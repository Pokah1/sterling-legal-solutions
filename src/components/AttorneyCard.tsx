import { Linkedin, Mail } from "lucide-react";

interface AttorneyCardProps {
  image: string;
  name: string;
  specialization: string;
  experience: string;
  bio: string;
}

const AttorneyCard = ({ image, name, specialization, experience, bio }: AttorneyCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover-lift">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${specialization}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground">{name}</h3>
        <p className="text-accent font-medium text-sm mt-1">{specialization}</p>
        <p className="text-muted-foreground text-xs mt-1">{experience}</p>
        <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-3">{bio}</p>
        <div className="flex gap-2 mt-4">
          <a href="#" className="w-8 h-8 rounded bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors" aria-label={`Email ${name}`}>
            <Mail className="w-4 h-4 text-muted-foreground" />
          </a>
          <a href="#" className="w-8 h-8 rounded bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors" aria-label={`LinkedIn profile of ${name}`}>
            <Linkedin className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AttorneyCard;
