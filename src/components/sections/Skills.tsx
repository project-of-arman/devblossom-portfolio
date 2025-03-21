
import React from 'react';
import { CircleCheck } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { cn } from '@/lib/utils';
import { skillGroups } from '@/data/skillsData';

interface SkillGroupProps {
  title: string;
  skills: string[];
  level: 'expert' | 'comfortable' | 'familiar' | 'tools';
  className?: string;
  style?: React.CSSProperties;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills, level, className, style }) => {
  const levelColors = {
    expert: 'bg-primary/10 border-primary/30',
    comfortable: 'bg-accent/20 border-accent/40',
    familiar: 'bg-secondary/80 border-border',
    tools: 'bg-muted border-muted-foreground/20',
  };
  
  return (
    <div 
      className={cn(
        "p-6 rounded-xl border shadow-sm transition-all hover:shadow-md",
        levelColors[level],
        className
      )}
      style={style}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2">
            <CircleCheck size={18} className="text-primary flex-shrink-0" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="My Abilities"
          title="My Skills & Tools"
          description="A comprehensive overview of my technical skills and proficiency levels across various technologies."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={index}
              title={group.title}
              skills={group.skills}
              level={group.level}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
