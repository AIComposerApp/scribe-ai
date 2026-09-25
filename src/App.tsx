import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DesignSystemInspector } from './components/DesignSystemInspector';
import { CustomPreloader } from './components/CustomPreloader';

export default function App() {
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(false);
  const [preloaderKey, setPreloaderKey] = useState(0);
  const [bgMode, setBgMode] = useState<'black' | 'custom-image'>('black');
  const [bgImageUrl, setBgImageUrl] = useState<string>(
    'https://res.cloudinary.com/doujptiz/image/upload/f_auto,q_auto,w_1920/v1785239216/Boy_writing_at_wooden_desk_202607281245_wfjfna.jpg'
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans-bobbin relative selection:bg-[#EEF85B] selection:text-black overflow-x-hidden">
      
      {/* Custom Preloader Animation */}
      <CustomPreloader key={preloaderKey} />

      {/* Optional Background Image Layer for testing (defaults to plain black as requested) */}
      {bgMode === 'custom-image' && (
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500">
          <img
            src={bgImageUrl}
            alt="Tutor workspace background"
            className="w-full h-full object-cover opacity-85 transition-opacity"
          />
          {/* Subtle gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50"></div>
        </div>
      )}

      {/* Main Content Content Container */}
      <div className="relative z-10">
        {/* Navigation Header */}
        <Navbar onOpenDesignSystem={() => setIsDesignSystemOpen(true)} />

        {/* Hero Section */}
        <main>
          <HeroSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Design System & UI Inspector Drawer */}
      <DesignSystemInspector
        isOpen={isDesignSystemOpen}
        onClose={() => setIsDesignSystemOpen(false)}
        bgMode={bgMode}
        setBgMode={setBgMode}
        bgImageUrl={bgImageUrl}
        setBgImageUrl={setBgImageUrl}
        onReplayPreloader={() => setPreloaderKey((prev) => prev + 1)}
      />
    </div>
  );
}
