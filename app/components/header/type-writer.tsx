/**
 * Copyright (c) 2026 SUDS Technologies Ltd.
 *
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, or distribution
 * of this file is strictly prohibited.
 */

import { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}


export function Typewriter ({ phrases, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 1000 }: TypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    
    if (currentText === currentPhrase && !isDeleting && !isPaused) {
      setIsPaused(true);
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    
    if (isPaused) return;

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          
          setCurrentText((prev) => prev.slice(0, -1));
          
          
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        } else {
          
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {currentText}
      <span className="animate-pulse ml-1 text-emerald-400">|</span>
    </span>
  );
};

export default Typewriter;