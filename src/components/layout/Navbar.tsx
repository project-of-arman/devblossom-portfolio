
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Qualifications', href: '#qualifications' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold">
            <span className="text-primary">Dev</span>Portfolio
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors relative",
                      activeSection === link.href.substring(1) 
                        ? "text-primary" 
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-1 bg-primary rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className="md:hidden p-2 rounded-md hover:bg-secondary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-50 bg-white/95 backdrop-blur-md transition-transform duration-300 transform md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-end">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-secondary"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="mt-8">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={cn(
                      "block py-3 px-4 text-center text-lg font-medium rounded-lg transition-colors",
                      activeSection === link.href.substring(1) 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-secondary"
                    )}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
