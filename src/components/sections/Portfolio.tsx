
import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import { cn } from '@/lib/utils';

const Portfolio: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online stores with real-time analytics and inventory management.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social networking application with real-time messaging, post sharing, and user interactions.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks, projects, and deadlines with collaborative features.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Redux', 'Express', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with detailed forecasts, interactive maps, and personalized alerts.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'JavaScript', 'API Integration'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'AI Content Generator',
      description: 'An intelligent content creation tool powered by machine learning for generating articles, social media posts, and more.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'OpenAI', 'TailwindCSS', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Cryptocurrency Dashboard',
      description: 'A real-time cryptocurrency tracking platform with portfolio management and market analysis tools.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Web3.js', 'D3.js', 'Node.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];
  
  const scrollNext = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
      setActiveIndex(prev => Math.min(prev + 1, projects.length - 3));
    }
  };
  
  const scrollPrev = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
      setActiveIndex(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="My Work"
          title="Recent Projects"
          description="A selection of my recent web development projects showcasing my technical skills and design capabilities."
        />
        
        <div className="relative mt-12">
          <div 
            className="overflow-x-auto scrollbar-none snap-x snap-mandatory flex gap-6 pb-8 px-2"
            ref={carouselRef}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="min-w-[280px] md:min-w-[340px] lg:min-w-[380px] snap-start"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button 
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={cn(
                "p-3 rounded-full bg-white shadow-md transition-all",
                activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-primary hover:text-white"
              )}
              aria-label="Previous projects"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button 
              onClick={scrollNext}
              disabled={activeIndex >= projects.length - 3}
              className={cn(
                "p-3 rounded-full bg-white shadow-md transition-all",
                activeIndex >= projects.length - 3 ? "opacity-50 cursor-not-allowed" : "hover:bg-primary hover:text-white"
              )}
              aria-label="Next projects"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.max(1, projects.length - 2) }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  activeIndex === index ? "bg-primary w-5" : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => {
                  if (carouselRef.current) {
                    const containerWidth = carouselRef.current.clientWidth;
                    carouselRef.current.scrollTo({ 
                      left: containerWidth * index, 
                      behavior: 'smooth' 
                    });
                    setActiveIndex(index);
                  }
                }}
                aria-label={`Go to project set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
