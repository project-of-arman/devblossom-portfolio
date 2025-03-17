
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Qualifications from '@/components/sections/Qualifications';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { useSmoothScrollAnchor } from '@/utils/animations';

const Index = () => {
  // Enable smooth scrolling for anchor links
  useSmoothScrollAnchor();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Blob background decorations */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] blur-[100px] opacity-20 bg-primary rounded-full"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[500px] h-[500px] blur-[100px] opacity-20 bg-accent rounded-full"></div>
    </div>
  );
};

export default Index;
