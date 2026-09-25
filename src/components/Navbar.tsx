import React, { useState, useEffect } from 'react';
import { BobbinLogo } from './BobbinLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatedPrimaryButton } from './AnimatedPrimaryButton';
import { AnimatedGlassButton } from './AnimatedGlassButton';
import { TwistedSpiralNavLink } from './TwistedSpiralNavLink';

interface NavbarProps {
  onOpenDesignSystem?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string>('How it works');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Floating Glass Header Container with Translucent Bottom Blur Mask */}
      <div 
        className={`relative w-full px-4 sm:px-8 py-3.5 sm:py-4 transition-all duration-500 bg-[#080808]/40 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
          isScrolled ? 'bg-[#060606]/75 border-white/15' : 'bg-[#080808]/30'
        }`}
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Bobbin Logo with Scroll-reactive Shape Shift */}
          <a href="#" className="flex items-center">
            <BobbinLogo isScrolled={isScrolled} />
          </a>

          {/* Center: Desktop Navigation Links with Twisted Spiral Hover */}
          <nav className="hidden md:flex items-center gap-5 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg">
            {navLinks.map((link) => (
              <TwistedSpiralNavLink
                key={link.label}
                label={link.label}
                href={link.href}
                isSelected={selectedLink === link.label}
                onClick={() => setSelectedLink(link.label)}
              />
            ))}
          </nav>

          {/* Right: Floating Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Log in Button */}
            <AnimatedGlassButton href="#login" size="sm">
              Log in
            </AnimatedGlassButton>

            {/* Get Started Lime Yellow Button */}
            <AnimatedPrimaryButton href="#get-started" iconType="key" size="sm">
              Get started
            </AnimatedPrimaryButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-white hover:text-[#EEF85B] bobbin-glass-button focus:outline-none shadow-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 pt-4 pb-6 border border-white/15 px-4 space-y-3 bg-black/90 backdrop-blur-2xl rounded-2xl animate-in fade-in duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isSelected = selectedLink === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setSelectedLink(link.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                    isSelected
                      ? 'text-[#EEF85B] font-bold bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/40" />
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <AnimatedGlassButton
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center"
            >
              Log in
            </AnimatedGlassButton>

            <AnimatedPrimaryButton
              href="#get-started"
              iconType="key"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center"
            >
              Get started
            </AnimatedPrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
};
