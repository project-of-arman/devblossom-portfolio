
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
    <div className={`mb-12 ${alignmentClasses[alignment]}`}>
      {subtitle && (
        <div className="inline-block px-3 py-1 mb-3 text-xs font-medium uppercase rounded-full bg-accent text-accent-foreground animate-fade-in">
          {subtitle}
        </div>
      )}
      <h2 className="relative inline-block text-3xl font-bold md:text-4xl lg:text-5xl mb-4 animate-fade-in">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/50 rounded-full -z-10 transform"></span>
      </h2>
      {description && (
        <p className="max-w-2xl mx-auto text-muted-foreground animate-fade-in">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
