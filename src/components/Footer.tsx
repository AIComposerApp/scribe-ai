import React from 'react';
import { BobbinLogo } from './BobbinLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Col 1 & 2: Brand info */}
          <div className="md:col-span-2 space-y-4">
            <BobbinLogo size="lg" />
            
            <p className="text-sm text-white/60 max-w-sm leading-relaxed font-sans-bobbin">
              The AI intelligence platform for tutors & educators. Capture live session audio, generate custom quizzes automatically, and track student mastery effortlessly.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bobbin-glass-pill text-white/80 border border-white/15">
              <span>Next-Gen Educator Tools</span>
            </div>
          </div>

          {/* Col 3: Product Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white/40 uppercase tracking-wider">Product</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#how-it-works" className="hover:text-[#EEF85B] transition-colors">How it works</a></li>
              <li><a href="#testimonials" className="hover:text-[#EEF85B] transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-[#EEF85B] transition-colors">Pricing</a></li>
              <li><a href="#faqs" className="hover:text-[#EEF85B] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 4: Integrations */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white/40 uppercase tracking-wider">Integrations</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-[#EEF85B] transition-colors">LMS & Dashboard Sync</a></li>
              <li><a href="#" className="hover:text-[#EEF85B] transition-colors">Zoom Audio Integration</a></li>
              <li><a href="#" className="hover:text-[#EEF85B] transition-colors">Google Meet Add-on</a></li>
              <li><a href="#" className="hover:text-[#EEF85B] transition-colors">Microsoft Teams</a></li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white/40 uppercase tracking-wider">Company</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-[#EEF85B] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#EEF85B] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#EEF85B] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#EEF85B] transition-colors">Contact Support</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © {new Date().getFullYear()} Scribe AI Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
