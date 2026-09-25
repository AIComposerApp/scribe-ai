import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedPrimaryButtonProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  iconType?: 'arrow' | 'key' | 'sparkle';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedPrimaryButton: React.FC<AnimatedPrimaryButtonProps> = ({
  href,
  onClick,
  children = 'Get started',
  iconType = 'arrow',
  className = '',
  size = 'md',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizePadding = {
    sm: 'px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm gap-1.5 sm:gap-2',
    md: 'px-4.5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base gap-2 sm:gap-2.5',
    lg: 'px-4.5 py-2.5 sm:px-6 sm:py-3.5 md:px-7 md:py-3.5 text-sm sm:text-base md:text-lg gap-2 sm:gap-2.5 md:gap-3',
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative inline-flex items-center justify-center font-sans-bobbin font-bold bg-[#EEF85B] text-black rounded-full overflow-hidden select-none cursor-pointer group shadow-[0_0_20px_rgba(238,248,91,0.25)] hover:shadow-[0_0_35px_rgba(238,248,91,0.5)] transition-shadow duration-300 ${sizePadding[size]} ${className}`}
    >
      {/* Liquid Sweep Light Highlight across button */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '200%' : '-100%' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
      />

      {/* Button Text with subtle spring lift */}
      <motion.span
        animate={{ y: isHovered ? -1 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="relative z-10 flex items-center gap-1"
      >
        {children}
      </motion.span>

      {/* Custom Animated SVG Icon */}
      <div className="relative z-10 flex items-center justify-center shrink-0">
        {iconType === 'arrow' && (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-black stroke-[2.8]"
          >
            {/* Arrow Stem with Dash Animation */}
            <motion.line
              x1="4"
              y1="12"
              x2="16"
              y2="12"
              animate={{
                x2: isHovered ? 18 : 16,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
            {/* Arrow Head */}
            <motion.path
              d="M13 6l6 6-6 6"
              animate={{
                x: isHovered ? 3 : 0,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
          </svg>
        )}

        {iconType === 'key' && (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-none stroke-black stroke-[2.5]"
          >
            {/* Rotating & Unlocking Key SVG */}
            <motion.g
              animate={{
                rotate: isHovered ? 45 : 0,
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              style={{ transformOrigin: '9px 9px' }}
            >
              <circle cx="9" cy="9" r="5" />
              <line x1="12.5" y1="12.5" x2="20" y2="20" />
              <line x1="17" y1="17" x2="19" y2="15" />
              <line x1="19" y1="19" x2="21" y2="17" />
            </motion.g>
          </svg>
        )}

        {iconType === 'sparkle' && (
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 sm:w-5 sm:h-5 fill-black stroke-none"
          >
            <motion.path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              animate={{
                rotate: isHovered ? 90 : 0,
                scale: isHovered ? [1, 1.25, 1.1] : 1,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ transformOrigin: '12px 12px' }}
            />
          </svg>
        )}
      </div>
    </Component>
  );
};
