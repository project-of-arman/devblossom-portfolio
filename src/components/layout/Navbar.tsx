
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/navLinks';
import dynamic from 'next/dynamic';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from '@/components/ui/drawer';

// Dynamically import icons
import * as LucideIcons from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  // Get Lucide icon by name
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={20} /> : null;
  };
  
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
  
  const closeDrawer = () => {
    setOpen(false);
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className={cn(
              "text-xl font-bold transition-all duration-300",
              isScrolled ? "text-lg" : "text-xl"
            )}
          >
            <span className="text-primary">Dev</span>Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                      activeSection === link.href.substring(1) 
                        ? "text-primary" 
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Hover effect background */}
                    <span className="absolute inset-0 bg-primary/10 rounded-md translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                    
                    {/* Active indicator */}
                    {activeSection === link.href.substring(1) && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-1 bg-primary rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Navigation Drawer Trigger */}
          <div className="md:hidden">
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button 
                  className="p-2 rounded-md hover:bg-secondary"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </DrawerTrigger>
              <DrawerContent className="h-[90vh] rounded-t-xl">
                <div className="px-4 py-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <a href="#home" className="text-xl font-bold">
                      <span className="text-primary">Dev</span>Portfolio
                    </a>
                    <DrawerClose asChild>
                      <button
                        className="rounded-full p-2 hover:bg-secondary"
                        aria-label="Close menu"
                      >
                        <X size={20} />
                      </button>
                    </DrawerClose>
                  </div>
                  
                  <nav className="flex-grow overflow-y-auto pb-10">
                    <ul className="space-y-2">
                      {navLinks.map((link, index) => (
                        <li 
                          key={link.name}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: 'fade-in 0.5s ease forwards'
                          }}
                          className="opacity-0"
                        >
                          <a 
                            href={link.href}
                            className={cn(
                              "flex items-center gap-3 p-4 rounded-lg transition-all",
                              activeSection === link.href.substring(1)
                                ? "bg-primary/10 text-primary font-medium"
                                : "hover:bg-secondary"
                            )}
                            onClick={closeDrawer}
                          >
                            {getIcon(link.icon)}
                            <span>{link.name}</span>
                            
                            {activeSection === link.href.substring(1) && (
                              <ChevronRight className="ml-auto text-primary" size={16} />
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      &copy; {new Date().getFullYear()} DevPortfolio
                    </p>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
