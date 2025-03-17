
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
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social, index) => (
        <a 
          key={index}
          href={social.href}
          aria-label={social.label}
          className="social-icon transition-all" 
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
