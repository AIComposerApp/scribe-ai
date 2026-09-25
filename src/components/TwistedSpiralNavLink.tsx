import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TwistedSpiralNavLinkProps {
  label: string;
  href: string;
  isSelected?: boolean;
  className?: string;
  onClick?: () => void;
}

export const TwistedSpiralNavLink: React.FC<TwistedSpiralNavLinkProps> = ({
  label,
  href,
  isSelected = false,
  className = '',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Split string into array of individual characters
  const letters = label.split('');

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center text-sm font-sans-bobbin font-medium py-1.5 px-3 transition-colors duration-300 group cursor-pointer select-none ${
        isSelected ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
      } ${className}`}
    >
      {/* Text Characters with Twisted Spiral Hover Effect */}
      <span className="relative z-10 inline-flex items-center overflow-visible">
        {letters.map((char, index) => (
          <motion.span
            key={`${label}-${index}`}
            animate={
              isHovered
                ? {
                    rotateZ: [0, -180, -360],
                    scale: [1, 0.35, 1.15, 1],
                    color: ['rgba(255, 255, 255, 0.8)', '#EEF85B', '#ffffff'],
                    filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'],
                  }
                : {
                    rotateZ: 0,
                    scale: 1,
                    color: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                    filter: 'blur(0px)',
                  }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.035, // Staggered spiral effect
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="inline-block whitespace-pre"
            style={{ transformOrigin: 'center center' }}
          >
            {char}
          </motion.span>
        ))}
      </span>

      {/* Hover Underline Glow */}
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#EEF85B] rounded-full shadow-[0_0_10px_#EEF85B]"
      />
    </a>
  );
};
