
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

interface SocialButtonsProps {
  className?: string;
  iconSize?: number;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ 
  className = '',
  iconSize = 18
}) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <a 
          key={index}
          href={social.href}
          aria-label={social.label}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm border border-white/10 text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
