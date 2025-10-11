import React, { useState, useEffect } from 'react';

const TypingPlaceholder = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const baseText = 'Search for ';
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const words = [
      'cakes',
      'muffins', 
      'brownies',
      'cookies',
      'chocolate',
      'vanilla',
      'strawberry',
      'premium cakes',
      'chef specials'
    ];
    
    const currentWord = words[currentWordIndex];
    const fullText = baseText + currentWord + '...';

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > baseText.length) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, baseText, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingPlaceholder;
