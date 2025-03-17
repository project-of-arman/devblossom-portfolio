
import React from 'react';
import { User, Award, Clock, Coffee } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import BlobImage from '../common/BlobImage';

const About: React.FC = () => {
  const stats = [
    { icon: User, count: '5+', label: 'Years Experience' },
    { icon: Award, count: '20+', label: 'Projects Completed' },
    { icon: Clock, count: '3K+', label: 'Hours Coded' },
    { icon: Coffee, count: '1K+', label: 'Cups of Coffee' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="About Me"
          title="My Introduction"
          description="Get to know more about me and my experience in web development and design."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-5 animate-fade-in">
              Full-stack Developer with a passion for creating <span className="text-primary">exceptional digital experiences</span>
            </h3>
            
            <p className="text-muted-foreground mb-6 animate-fade-in">
              Hello! I'm John, a passionate web developer with 5+ years of experience creating modern, 
              responsive websites and applications. I specialize in React, TypeScript, and Next.js, 
              focusing on creating clean, efficient code with excellent user experiences.
            </p>
            
            <p className="text-muted-foreground mb-8 animate-fade-in">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in continuous learning 
              and staying ahead of industry trends.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="p-3 mx-auto mb-3 inline-flex items-center justify-center rounded-xl bg-accent/50 text-primary">
                    <stat.icon size={24} />
                  </div>
                  <h4 className="text-2xl font-bold">{stat.count}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Let's Talk
            </a>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <BlobImage
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="About John Doe"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
