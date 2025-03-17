
import React from 'react';
import { Code, PenTool, Smartphone, Globe, Server, Lightbulb } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, performant, and accessible websites using modern frameworks like React and Next.js.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and various database technologies.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Developing cross-platform mobile applications with React Native that work seamlessly on iOS and Android.',
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and experiences that balance aesthetics with functionality.',
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimizing websites for speed, SEO, and accessibility to ensure the best possible user experience.',
    },
    {
      icon: Lightbulb,
      title: 'Technical Consultation',
      description: 'Providing expert advice on technology choices, architecture, and development strategies.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="What I Offer"
          title="My Services"
          description="Comprehensive web development services tailored to meet your specific needs and objectives."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
