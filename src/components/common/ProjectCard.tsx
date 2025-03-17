
import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className,
}) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl shadow-sm card-hover bg-card border border-border/50",
      className
    )}>
      <div className="aspect-video overflow-hidden bg-accent/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
          </div>
          
          <div className="flex gap-2 ml-2">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={18} />
              </a>
            )}
            
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="View live site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium rounded-md bg-accent/50 text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
          <ArrowUpRight size={16} className="text-primary" />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
