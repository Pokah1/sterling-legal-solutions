interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={centered ? "text-center max-w-2xl mx-auto mb-12" : "mb-12"}>
      {subtitle && (
        <span className="text-accent text-sm font-semibold tracking-wider uppercase">{subtitle}</span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl font-bold mt-2 ${light ? "text-cream" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 leading-relaxed ${light ? "text-cream/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
