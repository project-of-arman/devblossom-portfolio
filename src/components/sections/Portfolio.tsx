
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import { projects } from '@/data/projectsData';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { useIsMobile } from '@/hooks/use-mobile';

const Portfolio: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="My Work"
          title="Recent Projects"
          description="A selection of my recent web development projects showcasing my technical skills and design capabilities."
        />
        
        <div className="mt-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem 
                  key={index} 
                  className={isMobile ? "pl-4 basis-full" : "pl-4 md:basis-1/2 lg:basis-1/3"}
                >
                  <div className="p-1">
                    <ProjectCard {...project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8 md:mt-0">
              <CarouselPrevious className="relative static md:absolute left-0 mr-2 md:left-[-5%] h-8 w-8 md:h-10 md:w-10 rounded-full" />
              <div className="flex space-x-2 md:hidden">
                {Array.from({ length: Math.min(projects.length, 6) }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-gray-300" 
                  />
                ))}
              </div>
              <CarouselNext className="relative static md:absolute right-0 ml-2 md:right-[-5%] h-8 w-8 md:h-10 md:w-10 rounded-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
