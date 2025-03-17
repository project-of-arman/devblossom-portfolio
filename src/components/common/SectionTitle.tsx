
import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  alignment = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-16 ${alignmentClasses[alignment]}`}>
      {subtitle && (
        <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase rounded-full bg-accent/80 text-accent-foreground backdrop-blur-sm shadow-sm animate-fade-in">
          {subtitle}
        </div>
      )}
      <h2 className="relative inline-block text-3xl font-bold md:text-4xl lg:text-5xl mb-5 animate-fade-in">
        {title}
        <span className="absolute -bottom-3 left-0 w-full h-2 bg-accent/60 rounded-full -z-10 transform"></span>
      </h2>
      {description && (
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed animate-fade-in">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
