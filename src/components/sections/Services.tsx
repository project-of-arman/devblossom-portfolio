
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';
import { services } from '@/data/servicesData';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="What I Offer"
          title="My Services"
          description="I provide a range of web development services tailored to meet your specific needs and business objectives."
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
