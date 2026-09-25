import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedGlassButtonProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  iconType?: 'play' | 'sparkle' | 'arrow-up-right' | 'none';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedGlassButton: React.FC<AnimatedGlassButtonProps> = ({
  href,
  onClick,
  children = 'Learn more',
  iconType = 'none',
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
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative inline-flex items-center justify-center font-sans-bobbin font-medium text-white rounded-full select-none cursor-pointer group bg-white/5 backdrop-blur-xl border border-white/20 hover:border-white/50 transition-colors duration-300 ${sizePadding[size]} ${className}`}
    >
      {/* Animated Gradient Glow Border Highlight on Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#EEF85B]/40 via-white/30 to-[#EEF85B]/40 blur-sm -z-10 pointer-events-none"
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Custom Animated SVG Icons */}
      {iconType !== 'none' && (
        <div className="relative z-10 flex items-center justify-center shrink-0">
          {iconType === 'play' && (
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-white stroke-none"
            >
              <motion.path
                d="M8 5v14l11-7z"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  x: isHovered ? 1.5 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </svg>
          )}

          {iconType === 'sparkle' && (
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-[#EEF85B] stroke-none"
            >
              <motion.path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                animate={{
                  rotate: isHovered ? 180 : 0,
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ transformOrigin: '12px 12px' }}
              />
            </svg>
          )}

          {iconType === 'arrow-up-right' && (
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-none stroke-white stroke-[2.5]"
            >
              <motion.path
                d="M7 17L17 7M17 7H7M17 7V17"
                animate={{
                  x: isHovered ? 1.5 : 0,
                  y: isHovered ? -1.5 : 0,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              />
            </svg>
          )}
        </div>
      )}
    </Component>
  );
};
