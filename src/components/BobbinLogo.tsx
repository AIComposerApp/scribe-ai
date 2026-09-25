import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface BobbinLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  isScrolled?: boolean;
}

export const BobbinLogo: React.FC<BobbinLogoProps> = ({ 
  size = 'md', 
  className = '',
  animated = true,
  isScrolled: externalIsScrolled
}) => {
  const [internalIsScrolled, setInternalIsScrolled] = useState(false);

  useEffect(() => {
    if (externalIsScrolled !== undefined) return;

    const handleScroll = () => {
      setInternalIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [externalIsScrolled]);

  const scrolled = externalIsScrolled !== undefined ? externalIsScrolled : internalIsScrolled;

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13'
  };

  const svgSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon: Asymmetric Squircle Emblem Housing that morphs shape on scroll and hover */}
      <motion.div 
        animate={{
          borderRadius: scrolled 
            ? '8px 24px 8px 24px' // Inverse squircle shape when scrolled down
            : '22px 8px 22px 22px', // Default top-right cut squircle
          rotate: scrolled ? -8 : 0,
          scale: scrolled ? 0.95 : 1,
        }}
        whileHover={{
          borderRadius: '16px 16px 16px 16px', // Rounded circle-squircle on hover
          rotate: scrolled ? 12 : -6,
          scale: 1.1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 22,
        }}
        className={`relative ${sizeClasses[size]} bg-gradient-to-br from-[#f2fb6d] via-[#EEF85B] to-[#d3e330] flex items-center justify-center text-black shadow-[0_4px_20px_rgba(238,248,91,0.35)] ring-1 ring-white/30 shrink-0 cursor-pointer group overflow-hidden`}
      >
        
        {/* Subtle Top Inner Specular Highlight Line */}
        <div className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-white/45 to-transparent pointer-events-none"></div>

        {/* Outer Glow Halo Ring */}
        <div className="absolute -inset-1 bg-[#EEF85B]/30 rounded-[inherit] blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>

        {/* Custom Animated Bobbin Tape Reel SVG */}
        <svg 
          viewBox="0 0 32 32" 
          className={`${svgSizes[size]} fill-none`} 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Expanding Radar Soundwave Ring */}
          {animated && (
            <circle cx="16" cy="16" r="12" className="stroke-black/60 animate-pulse-ring fill-none" />
          )}

          {/* Top & Bottom Connecting Tape Lines with Motion Dash */}
          <line x1="9" y1="11" x2="23" y2="11" className="stroke-black stroke-[2] animate-tape" />
          <line x1="9" y1="21" x2="23" y2="21" className="stroke-black stroke-[2] animate-tape" />

          {/* Left Spool Reel Group (Clockwise Rotation) */}
          <g className={animated ? "animate-spool" : ""} style={{ transformOrigin: '10px 16px' }}>
            <circle cx="10" cy="16" r="5" className="fill-black stroke-none" />
            <circle cx="10" cy="16" r="2" className="fill-[#EEF85B] stroke-none" />
            {/* 3 Spool Spokes */}
            <line x1="10" y1="11.5" x2="10" y2="13.5" className="stroke-[#EEF85B] stroke-[1.2]" />
            <line x1="6.1" y1="18.25" x2="7.8" y2="17.25" className="stroke-[#EEF85B] stroke-[1.2]" />
            <line x1="13.9" y1="18.25" x2="12.2" y2="17.25" className="stroke-[#EEF85B] stroke-[1.2]" />
          </g>

          {/* Right Spool Reel Group (Counter-Clockwise Rotation) */}
          <g className={animated ? "animate-spool-reverse" : ""} style={{ transformOrigin: '22px 16px' }}>
            <circle cx="22" cy="16" r="5" className="fill-black stroke-none" />
            <circle cx="22" cy="16" r="2" className="fill-[#EEF85B] stroke-none" />
            {/* 3 Spool Spokes */}
            <line x1="22" y1="11.5" x2="22" y2="13.5" className="stroke-[#EEF85B] stroke-[1.2]" />
            <line x1="18.1" y1="18.25" x2="19.8" y2="17.25" className="stroke-[#EEF85B] stroke-[1.2]" />
            <line x1="25.9" y1="18.25" x2="24.2" y2="17.25" className="stroke-[#EEF85B] stroke-[1.2]" />
          </g>

          {/* Center Sound Hub Dot */}
          <circle cx="16" cy="16" r="1.8" className="fill-black stroke-none" />
        </svg>
      </motion.div>

      {/* Brand Text */}
      <span className="font-outfit font-extrabold tracking-tight text-white text-xl sm:text-2xl leading-none">
        Scribe
      </span>
    </div>
  );
};


