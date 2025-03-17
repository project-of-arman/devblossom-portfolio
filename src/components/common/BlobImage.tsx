
import React from 'react';
import { cn } from '@/lib/utils';

interface BlobImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  isPulsing?: boolean;
}

const BlobImage: React.FC<BlobImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '',
  isPulsing = false 
}) => {
  return (
    <div className={cn(
      "relative w-full max-w-sm mx-auto", 
      className
    )}>
      <div className="absolute top-0 -left-4 w-full h-full bg-primary/20 rounded-[42%_58%_38%_62%/42%_55%_45%_58%] blur-2xl opacity-60 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-full h-full bg-accent/40 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] blur-2xl opacity-60 animate-blob animation-delay-2"></div>
      <div className="absolute -bottom-8 left-20 w-full h-full bg-primary/30 rounded-[45%_55%_70%_30%/30%_30%_70%_70%] blur-2xl opacity-60 animate-blob animation-delay-4"></div>
      
      <div className={cn(
        "relative z-10 overflow-hidden rounded-xl backdrop-blur-sm glass",
        isPulsing && "animate-pulse-slow"
      )}>
        <img 
          src={src} 
          alt={alt} 
          className={cn(
            "w-full h-full object-cover", 
            imgClassName
          )} 
        />
      </div>
    </div>
  );
};

export default BlobImage;
