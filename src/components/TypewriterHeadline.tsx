import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';

interface TypewriterHeadlineProps {
  phrases?: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const DEFAULT_PHRASES = [
  'Better testing',
  'Instant AI quizzes',
  'Smarter lesson notes',
  'Automated grading',
];

export const TypewriterHeadline: React.FC<TypewriterHeadlineProps> = ({
  phrases = DEFAULT_PHRASES,
  className = '',
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseTime = 2000,
}) => {
  // Memoize phrases array by joining strings so reference changes don't re-trigger timers
  const phraseList = useMemo(() => phrases, [phrases.join('||')]);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phraseList[phraseIndex] || '';

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause when full phrase is typed
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phraseList.length);
    } else {
      // Typing or deleting next character
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return currentPhrase.substring(0, prev.length - 1);
          } else {
            return currentPhrase.substring(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, phraseList, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="text-white whitespace-pre select-none font-bold">
        {displayedText}
      </span>

      {/* Glowing Bobbin Lime Pulsing Cursor - Scaled with font line height with zero layout jitter */}
      <motion.span
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 0.75, repeat: Infinity, ease: 'easeInOut' }}
        className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.82em] bg-[#EEF85B] ml-1.5 sm:ml-2 rounded-full shadow-[0_0_12px_rgba(238,248,91,0.9)] align-baseline shrink-0"
      />
    </span>
  );
};


