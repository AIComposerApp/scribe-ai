import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomPreloaderProps {
  onComplete?: () => void;
}

export const CustomPreloader: React.FC<CustomPreloaderProps> = ({ onComplete }) => {
  // Animation phases: 'eyes' -> 'morphing' -> 'logo' -> finished
  const [phase, setPhase] = useState<'eyes' | 'morphing' | 'logo'>('eyes');
  const [isFinished, setIsFinished] = useState(false);

  // Pupil eye direction sequence: 'center' | 'left' | 'right' | 'up'
  const [eyeDirection, setEyeDirection] = useState<'center' | 'left' | 'right' | 'up'>('center');
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    // Eye movement & blinking sequence during 'eyes' phase
    const eyeMoveTimer1 = setTimeout(() => setEyeDirection('left'), 500);
    const blinkTimer1 = setTimeout(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 900);

    const eyeMoveTimer2 = setTimeout(() => setEyeDirection('right'), 1300);
    const blinkTimer2 = setTimeout(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 1800);

    const eyeMoveTimer3 = setTimeout(() => setEyeDirection('center'), 2200);

    // Trigger morphing phase to logo
    const morphTimer = setTimeout(() => {
      setPhase('morphing');
    }, 2500);

    // Trigger final logo shine phase
    const logoTimer = setTimeout(() => {
      setPhase('logo');
    }, 3600);

    // Complete loading curtain transition
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearTimeout(eyeMoveTimer1);
      clearTimeout(blinkTimer1);
      clearTimeout(eyeMoveTimer2);
      clearTimeout(blinkTimer2);
      clearTimeout(eyeMoveTimer3);
      clearTimeout(morphTimer);
      clearTimeout(logoTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  // Eye pupil offset mapping
  const eyeOffset = {
    center: { x: 0, y: 0 },
    left: { x: -7, y: 0 },
    right: { x: 7, y: 0 },
    up: { x: 0, y: -5 },
  }[eyeDirection];

  return (
    <AnimatePresence mode="wait">
      {!isFinished && (
        <>
          {/* Top & Bottom Aperture Reveal Curtains */}
          <motion.div
            key="preloader-top-curtain"
            initial={{ y: '0%' }}
            exit={{
              y: '-100%',
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-x-0 top-0 h-1/2 z-[100] bg-[#070707] border-b border-white/5"
          />
          <motion.div
            key="preloader-bottom-curtain"
            initial={{ y: '0%' }}
            exit={{
              y: '100%',
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-x-0 bottom-0 h-1/2 z-[100] bg-[#070707] border-t border-white/5"
          />

          {/* Main Creative Preloader Stage */}
          <motion.div
            key="preloader-stage"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.12,
              filter: 'blur(10px)',
              transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
            }}
            className="fixed inset-0 z-[101] flex flex-col items-center justify-between p-8 sm:p-12 overflow-hidden select-none pointer-events-none"
          >
            {/* Ambient Background Glow */}
            <motion.div
              animate={{
                scale: phase === 'logo' ? [1, 1.3, 1.1] : [1, 1.2, 1],
                opacity: phase === 'logo' ? 0.7 : 0.4,
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#EEF85B]/30 via-[#EEF85B]/10 to-transparent rounded-full blur-[150px] pointer-events-none"
            />

            {/* Top Brand Name - Exact match to Header Logo (Outfit Extrabold) */}
            <div className="w-full flex justify-center z-10 pt-2">
              <span className="font-outfit font-extrabold tracking-tight text-white text-2xl sm:text-3xl">
                Scribe<span className="text-[#EEF85B]">.</span>
              </span>
            </div>

            {/* Center Interactive Morphing Character / Logo Container */}
            <div className="relative flex flex-col items-center justify-center my-auto z-10 space-y-6 text-center">
              
              {/* Morphing Housing Container */}
              <motion.div
                animate={{
                  borderRadius:
                    phase === 'eyes'
                      ? '50px 50px 40px 40px' // Friendly face capsule shape
                      : phase === 'morphing'
                      ? '28px 12px 28px 28px' // Transitioning to squircle
                      : '22px 8px 22px 22px', // Final signature Bobbin logo squircle
                  rotate: phase === 'morphing' ? -6 : 0,
                  scale: phase === 'logo' ? 1.08 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 22,
                }}
                className="relative w-32 h-32 sm:w-36 sm:h-36 bg-gradient-to-br from-[#f5fc80] via-[#EEF85B] to-[#cbe024] flex items-center justify-center text-black shadow-[0_0_60px_rgba(238,248,91,0.55)] ring-1 ring-white/60 p-4 overflow-hidden"
              >
                {/* Specular Top Sheen */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

                {/* PHASE 1: Curious Eyes */}
                {phase === 'eyes' && (
                  <motion.div
                    key="curious-eyes"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center gap-6 z-10"
                  >
                    {/* Left Eye */}
                    <motion.div
                      animate={{
                        scaleY: isBlinking ? 0.08 : 1,
                      }}
                      transition={{ duration: 0.12 }}
                      className="relative w-8 h-8 sm:w-9 sm:h-9 bg-black rounded-full flex items-center justify-center shadow-inner"
                    >
                      {/* Pupil & Glint */}
                      <motion.div
                        animate={{
                          x: eyeOffset.x,
                          y: eyeOffset.y,
                        }}
                        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                        className="relative w-full h-full flex items-center justify-center"
                      >
                        <span className="absolute top-1.5 left-2 w-2.5 h-2.5 bg-white rounded-full opacity-90" />
                        <span className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full opacity-60" />
                      </motion.div>
                    </motion.div>

                    {/* Right Eye */}
                    <motion.div
                      animate={{
                        scaleY: isBlinking ? 0.08 : 1,
                      }}
                      transition={{ duration: 0.12 }}
                      className="relative w-8 h-8 sm:w-9 sm:h-9 bg-black rounded-full flex items-center justify-center shadow-inner"
                    >
                      {/* Pupil & Glint */}
                      <motion.div
                        animate={{
                          x: eyeOffset.x,
                          y: eyeOffset.y,
                        }}
                        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                        className="relative w-full h-full flex items-center justify-center"
                      >
                        <span className="absolute top-1.5 left-2 w-2.5 h-2.5 bg-white rounded-full opacity-90" />
                        <span className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full opacity-60" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {/* PHASE 2 & 3: Morphed Logo SVG (Spools & Tape) */}
                {(phase === 'morphing' || phase === 'logo') && (
                  <motion.div
                    key="morphed-logo"
                    initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                    className="relative w-full h-full flex items-center justify-center z-10"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="w-16 h-16 sm:w-20 sm:h-20 fill-none text-black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="16" cy="16" r="12" className="stroke-black/30 animate-pulse-ring fill-none" />
                      
                      {/* Connecting Tape Lines */}
                      <motion.line
                        x1="9"
                        y1="11"
                        x2="23"
                        y2="11"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4 }}
                        className="stroke-black stroke-[2]"
                      />
                      <motion.line
                        x1="9"
                        y1="21"
                        x2="23"
                        y2="21"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="stroke-black stroke-[2]"
                      />

                      {/* Left Spool Reel */}
                      <g className="animate-spool" style={{ transformOrigin: '10px 16px' }}>
                        <circle cx="10" cy="16" r="5" className="fill-black" />
                        <circle cx="10" cy="16" r="2" className="fill-[#EEF85B]" />
                        <line x1="10" y1="11.5" x2="10" y2="13.5" className="stroke-[#EEF85B] stroke-[1.2]" />
                        <line x1="6.1" y1="18.25" x2="7.8" y2="17.25" className="stroke-[#EEF85B] stroke-[1.2]" />
                        <line x1="13.9" y1="18.25" x2="12.2" y2="17.25" className="stroke-[#EEF85B] stroke-[1.2]" />
                      </g>

                      {/* Right Spool Reel */}
                      <g className="animate-spool-reverse" style={{ transformOrigin: '22px 16px' }}>
                        <circle cx="22" cy="16" r="5" className="fill-black" />
                        <circle cx="22" cy="16" r="2" className="fill-[#EEF85B]" />
                        <line x1="22" y1="11.5" x2="22" y2="13.5" className="stroke-[#EEF85B] stroke-[1.2]" />
                        <line x1="18.1" y1="18.25" x2="19.8" y2="17.25" className="stroke-[#EEF85B] stroke-[1.2]" />
                        <line x1="25.9" y1="18.25" x2="24.2" y2="17.25" className="stroke-[#EEF85B] stroke-[1.2]" />
                      </g>

                      <circle cx="16" cy="16" r="1.8" className="fill-black" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>

              {/* Welcoming Text Caption - Hero H2 Font (font-serif-bobbin text-[#EEF85B]) */}
              <div className="h-16 flex flex-col items-center justify-center px-4">
                <AnimatePresence mode="wait">
                  {phase === 'eyes' ? (
                    <motion.h2
                      key="hello-caption"
                      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                      transition={{ duration: 0.35 }}
                      className="text-3xl sm:text-5xl font-serif-bobbin font-normal text-white tracking-tight leading-none drop-shadow-sm"
                    >
                      Looking around...
                    </motion.h2>
                  ) : (
                    <motion.h2
                      key="ready-caption"
                      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.4 }}
                      className="text-3xl sm:text-5xl font-serif-bobbin font-normal text-[#EEF85B] tracking-tight leading-none drop-shadow-sm"
                    >
                      Built with Scribe.
                    </motion.h2>
                  )}
                </AnimatePresence>
              </div>

              {/* Visible Vertical Circles Loading Indicator */}
              <div className="flex flex-col items-center gap-2.5 py-2">
                {[0, 1, 2, 3].map((index) => {
                  // Determine active status based on loading phase
                  const activeIndex = phase === 'eyes' ? 1 : phase === 'morphing' ? 2 : 3;
                  const isActive = index <= activeIndex;
                  const isCurrent = index === activeIndex;

                  return (
                    <motion.div
                      key={`vertical-circle-${index}`}
                      animate={{
                        scale: isCurrent ? [1, 1.35, 1] : isActive ? 1 : 0.8,
                        opacity: isActive ? 1 : 0.25,
                      }}
                      transition={{
                        duration: isCurrent ? 1.2 : 0.4,
                        repeat: isCurrent ? Infinity : 0,
                        ease: 'easeInOut',
                      }}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border transition-colors duration-300 ${
                        isActive
                          ? 'bg-[#EEF85B] border-[#EEF85B] shadow-[0_0_12px_#EEF85B]'
                          : 'bg-white/10 border-white/20'
                      }`}
                    />
                  );
                })}
              </div>

            </div>

            {/* Bottom Gentle Subtitle */}
            <div className="w-full flex justify-center z-10 pb-2">
              <span className="text-sm sm:text-base font-serif-bobbin italic text-white/50 tracking-wider">
                Smarter lessons built for tutors
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
