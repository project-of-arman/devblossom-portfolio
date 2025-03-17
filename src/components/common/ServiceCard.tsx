
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn(
      "group relative p-6 rounded-xl shadow-sm border border-border/50 card-hover bg-card",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-5">
          <div className="p-3 inline-flex items-center justify-center rounded-xl bg-accent/50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon size={28} />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm flex-grow">{description}</p>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-0 group-hover:h-1 bg-gradient-to-r from-primary to-accent transition-all duration-300"></div>
    </div>
  );
};

export default ServiceCard;
