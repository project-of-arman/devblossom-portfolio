
import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px' }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  
  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);
  
  return { elementRef, isIntersecting };
}

export function useSmoothScrollAnchor() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            
            // Update URL without refreshing the page
            window.history.pushState(null, '', targetId);
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
}
