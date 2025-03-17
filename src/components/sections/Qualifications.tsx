
import React, { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { cn } from '@/lib/utils';

interface QualificationItem {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

const Qualifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');
  
  const education: QualificationItem[] = [
    {
      title: 'Master in Computer Science',
      organization: 'Massachusetts Institute of Technology',
      duration: '2020 - 2022',
      description: 'Research focused on advanced web technologies and user interface optimization.',
    },
    {
      title: 'Bachelor in Computer Engineering',
      organization: 'Harvard University',
      duration: '2016 - 2020',
      description: 'Specialized in software engineering with a focus on web and mobile application development.',
    },
    {
      title: 'Online Certifications',
      organization: 'Various Platforms',
      duration: '2018 - Present',
      description: 'Continuously expanding knowledge through courses on platforms like Coursera, Udemy, and FreeCodeCamp.',
    },
  ];
  
  const experience: QualificationItem[] = [
    {
      title: 'Senior Frontend Developer',
      organization: 'Tech Innovate Inc.',
      duration: '2022 - Present',
      description: 'Leading frontend development for enterprise SaaS applications with React and NextJS.',
    },
    {
      title: 'Frontend Developer',
      organization: 'Digital Solutions LLC',
      duration: '2020 - 2022',
      description: 'Developed responsive web applications and implemented UI/UX improvements that increased user engagement by 40%.',
    },
    {
      title: 'Junior Web Developer',
      organization: 'WebCraft Agency',
      duration: '2018 - 2020',
      description: 'Created and maintained websites for clients across various industries using modern web technologies.',
    },
  ];
  
  const activeData = activeTab === 'education' ? education : experience;

  return (
    <section id="qualifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="My Journey"
          title="Qualifications"
          description="My educational background and professional experience in the field of web development."
        />
        
        <div className="flex justify-center mt-12 mb-10">
          <div className="inline-flex p-1 rounded-lg bg-secondary">
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === 'education'
                  ? 'bg-white text-primary shadow-sm'
                  : 'hover:bg-white/50'
              )}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={18} />
              <span>Education</span>
            </button>
            
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeTab === 'experience'
                  ? 'bg-white text-primary shadow-sm'
                  : 'hover:bg-white/50'
              )}
              onClick={() => setActiveTab('experience')}
            >
              <Briefcase size={18} />
              <span>Experience</span>
            </button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-border transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {activeData.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-4 p-4 animate-fade-in",
                  index % 2 === 0 ? "md:text-right" : "md:text-left md:translate-x-full"
                )}
              >
                <div className={cn(
                  "md:col-span-1",
                  index % 2 !== 0 && "md:order-2"
                )}>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <h4 className="text-primary font-medium mt-1">{item.organization}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.duration}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
                
                <div className={cn(
                  "md:col-span-1",
                  index % 2 !== 0 && "md:order-1"
                )}>
                  {/* Empty space for timeline alignment */}
                </div>
                
                {/* Timeline dot */}
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
