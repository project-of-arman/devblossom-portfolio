
import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  className = '',
  onComplete,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      const text = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(text.substring(0, currentText.length - 1));
        
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length + 1));
        
        if (currentText.length === text.length) {
          setIsWaiting(true);
          
          if (currentIndex === texts.length - 1 && onComplete) {
            onComplete();
          }
        }
      }
    }, isWaiting ? delayBetween : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentIndex,
    isDeleting,
    isWaiting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
    onComplete,
  ]);

  return (
    <span className={`relative ${className}`}>
      <span>{currentText}</span>
      <span className="absolute right-0 w-0.5 h-full bg-primary animate-typewriter-caret"></span>
    </span>
  );
};

export default TypewriterText;
