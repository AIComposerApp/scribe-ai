import React, { useState } from 'react';
import { TypewriterHeadline } from './TypewriterHeadline';
import { AnimatedPrimaryButton } from './AnimatedPrimaryButton';
import { AnimatedGlassButton } from './AnimatedGlassButton';

export const HeroSection: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-[100dvh] pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-12 flex flex-col justify-between md:justify-center overflow-hidden bg-black text-white">
      {/* Optimized Hero Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Instant Poster Frame (Frame 0 of Cloudinary Video) for Zero Load Delay */}
        <img
          src="https://res.cloudinary.com/divndlntm/video/upload/f_auto,q_auto,so_0,w_1280/Woman_watching_online_lesson_1080p_202607290037_su3o87.jpg"
          alt="Woman watching online lesson"
          fetchPriority="high"
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* HTML5 Native Video Player with Cloudinary Fast Stream URLs */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/divndlntm/video/upload/f_auto,q_auto,so_0,w_1280/Woman_watching_online_lesson_1080p_202607290037_su3o87.jpg"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* WebM Next-Gen Format for modern browser fast loading */}
          <source
            src="https://res.cloudinary.com/divndlntm/video/upload/f_webm,q_auto,w_1280/Woman_watching_online_lesson_1080p_202607290037_su3o87.webm"
            type="video/webm"
          />
          {/* Fast MP4 Fallback */}
          <source
            src="https://res.cloudinary.com/divndlntm/video/upload/f_mp4,q_auto,w_1280/Woman_watching_online_lesson_1080p_202607290037_su3o87.mp4"
            type="video/mp4"
          />
        </video>

        {/* Soft Gradient Vignette for vivid video background with high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Grid container: flex-col on mobile with flex-1 to push buttons to the bottom */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-end lg:items-center z-10 my-auto">
        
        {/* Hero Copy & Calls to Action */}
        <div className="lg:col-span-9 max-w-3xl space-y-4 sm:space-y-6 md:space-y-8 text-left flex flex-col justify-end min-h-[55vh] md:min-h-0">
          
          {/* Main Title Stack */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans-bobbin font-bold tracking-tight text-white leading-[1.1] min-h-[1.2em]">
              <TypewriterHeadline
                phrases={[
                  'Smarter lessons',
                  'Instant AI quizzes',
                  'Auto lesson notes',
                  'Effortless grading',
                ]}
              />
            </h1>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-bobbin font-normal text-[#EEF85B] tracking-tight leading-[1.05] drop-shadow-sm">
              Built with Scribe.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl font-sans-bobbin font-normal text-white/90 max-w-xl md:max-w-2xl leading-relaxed">
            The AI intelligence platform for modern tutors & educators
          </p>

          {/* Action Button Row - Proportionate & Responsive on all device sizes */}
          <div className="flex items-center gap-2.5 sm:gap-4 pt-1 sm:pt-3">
            <AnimatedPrimaryButton href="#get-started" iconType="arrow" size="lg">
              Get started
            </AnimatedPrimaryButton>

            <AnimatedGlassButton href="#learn-more" iconType="arrow-up-right" size="lg">
              Learn more
            </AnimatedGlassButton>
          </div>

        </div>

      </div>
    </section>
  );
};
