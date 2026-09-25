import React, { useState } from 'react';
import { X, Copy, Check, Palette, Type, Sliders, Image as ImageIcon, Sparkles, Key, Code } from 'lucide-react';
import { BobbinLogo } from './BobbinLogo';

interface DesignSystemInspectorProps {
  isOpen: boolean;
  onClose: () => void;
  bgMode: 'black' | 'custom-image';
  setBgMode: (mode: 'black' | 'custom-image') => void;
  bgImageUrl: string;
  setBgImageUrl: (url: string) => void;
  onReplayPreloader?: () => void;
}

export const DesignSystemInspector: React.FC<DesignSystemInspectorProps> = ({
  isOpen,
  onClose,
  bgMode,
  setBgMode,
  bgImageUrl,
  setBgImageUrl,
  onReplayPreloader,
}) => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'tokens' | 'buttons' | 'glass' | 'bg'>('tokens');

  if (!isOpen) return null;

  const copyCode = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const sampleBackgrounds = [
    { label: 'Boy writing at wooden desk (Cloudinary optimized)', url: 'https://res.cloudinary.com/doujptiz/image/upload/f_auto,q_auto,w_1920/v1785239216/Boy_writing_at_wooden_desk_202607281245_wfjfna.jpg' },
    { label: 'Tutor Workspace (Studio style)', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop' },
    { label: 'Modern Classroom Desk', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Drawer Container */}
      <div className="w-full max-w-xl bg-[#0d0e12] border-l border-white/15 h-full overflow-y-auto p-6 text-white space-y-6 shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <BobbinLogo size="sm" />
            <div>
              <h3 className="text-lg font-sans-bobbin font-bold text-white">Scribe Design System</h3>
              <p className="text-xs text-[#EEF85B]">Design Tokens & Glassmorphic Inspector</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/70 hover:text-white bobbin-glass-button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'tokens' ? 'bg-[#EEF85B] text-black font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Tokens</span>
          </button>
          
          <button
            onClick={() => setActiveTab('buttons')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'buttons' ? 'bg-[#EEF85B] text-black font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>Buttons</span>
          </button>

          <button
            onClick={() => setActiveTab('glass')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'glass' ? 'bg-[#EEF85B] text-black font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Glass Specs</span>
          </button>

          <button
            onClick={() => setActiveTab('bg')}
            className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'bg' ? 'bg-[#EEF85B] text-black font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Bg Tester</span>
          </button>
        </div>

        {/* Tab 1: Tokens */}
        {activeTab === 'tokens' && (
          <div className="space-y-6">
            
            {/* Color Swatches */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#EEF85B]" />
                Brand Color Palette
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {/* Yellow Primary */}
                <div
                  onClick={() => copyCode('#EEF85B', 'Primary Yellow')}
                  className="p-3 rounded-2xl bg-[#EEF85B] text-black cursor-pointer hover:scale-[1.02] transition-transform space-y-2 shadow-lg"
                >
                  <div className="flex justify-between items-center text-xs font-extrabold">
                    <span>Bobbin Lime Yellow</span>
                    {copiedToken === 'Primary Yellow' ? <Check className="w-4 h-4" /> : <Copy className="w-3.5 h-3.5 opacity-70" />}
                  </div>
                  <div className="font-mono text-xs font-bold">#EEF85B</div>
                </div>

                {/* Plain Black */}
                <div
                  onClick={() => copyCode('#000000', 'Plain Black')}
                  className="p-3 rounded-2xl bg-black border border-white/20 text-white cursor-pointer hover:scale-[1.02] transition-transform space-y-2"
                >
                  <div className="flex justify-between items-center text-xs font-extrabold">
                    <span>Plain Black Background</span>
                    {copiedToken === 'Plain Black' ? <Check className="w-4 h-4" /> : <Copy className="w-3.5 h-3.5 opacity-70" />}
                  </div>
                  <div className="font-mono text-xs text-white/70">#000000</div>
                </div>

                {/* Translucent Glass Fill */}
                <div
                  onClick={() => copyCode('rgba(255,255,255,0.08)', 'Glass Fill')}
                  className="p-3 rounded-2xl bobbin-glass-pill text-white cursor-pointer hover:scale-[1.02] transition-transform space-y-2 col-span-2"
                >
                  <div className="flex justify-between items-center text-xs font-extrabold">
                    <span>Frosted Glass Overlay</span>
                    {copiedToken === 'Glass Fill' ? <Check className="w-4 h-4" /> : <Copy className="w-3.5 h-3.5 opacity-70" />}
                  </div>
                  <div className="font-mono text-xs text-white/70">rgba(255, 255, 255, 0.08)</div>
                </div>
              </div>
            </div>

            {/* Typography Stack */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-[#EEF85B]" />
                Typography Hierarchy
              </h4>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bobbin-glass-card space-y-1">
                  <div className="text-xs font-bold text-[#EEF85B]">Display Serif Headline</div>
                  <div className="text-2xl font-serif-bobbin text-white">"Built with Scribe."</div>
                  <div className="text-[11px] text-white/50 font-mono">Font: Instrument Serif (Italic/Regular)</div>
                </div>

                <div className="p-4 rounded-2xl bobbin-glass-card space-y-1">
                  <div className="text-xs font-bold text-[#EEF85B]">Body & UI Sans</div>
                  <div className="text-base font-sans-bobbin text-white font-semibold">Smarter lessons for educators</div>
                  <div className="text-[11px] text-white/50 font-mono">Font: Plus Jakarta Sans (400, 600, 800)</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Buttons */}
        {activeTab === 'buttons' && (
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider">
              Exact Replicated Button Components
            </h4>

            {/* Button 1: Primary Lime Yellow */}
            <div className="space-y-2">
              <div className="text-xs text-white/70 font-medium">1. Primary Brand CTA (Get Started)</div>
              <button className="px-5 py-2.5 rounded-full text-sm font-bold bg-[#EEF85B] text-black flex items-center gap-2 shadow-lg shadow-[#EEF85B]/20">
                <Key className="w-4 h-4 rotate-45" />
                <span>Get started</span>
              </button>
            </div>

            {/* Button 2: Secondary Glass Pill */}
            <div className="space-y-2">
              <div className="text-xs text-white/70 font-medium">2. Secondary Frosted Glass Pill</div>
              <button className="px-5 py-2.5 rounded-full text-sm font-medium text-white bobbin-glass-button">
                Learn more
              </button>
            </div>

            {/* Button 3: Translucent Login Pill */}
            <div className="space-y-2">
              <div className="text-xs text-white/70 font-medium">3. Header Log In Badge</div>
              <button className="px-4 py-2 rounded-full text-xs font-semibold text-white/90 bobbin-glass-pill border border-white/20">
                Log in
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Glass Specs */}
        {activeTab === 'glass' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider">
              CSS Glassmorphic Card Styling Rules
            </h4>

            <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs text-[#EEF85B] space-y-2">
              <div>.bobbin-glass-card &#123;</div>
              <div className="pl-4 text-white/80">background: linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));</div>
              <div className="pl-4 text-white/80">backdrop-filter: blur(20px);</div>
              <div className="pl-4 text-white/80">border: 1px solid rgba(255, 255, 255, 0.14);</div>
              <div className="pl-4 text-white/80">box-shadow: 0 20px 50px rgba(0,0,0,0.6);</div>
              <div>&#125;</div>
            </div>
          </div>
        )}

        {/* Tab 4: Background Tester */}
        {activeTab === 'bg' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white/50 uppercase tracking-wider">
                Background Canvas Settings
              </h4>
              <p className="text-xs text-white/70">
                User requested: <span className="text-[#EEF85B] font-bold">Default to plain black</span>. Use this panel to test how glass cards overlay over background photos.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setBgMode('black')}
                className={`w-full p-3.5 rounded-2xl text-xs font-bold flex items-center justify-between border transition-all ${
                  bgMode === 'black'
                    ? 'bg-[#EEF85B] text-black border-[#EEF85B]'
                    : 'bg-black text-white border-white/20 hover:border-white/40'
                }`}
              >
                <span>Plain Black (Default - Requested)</span>
                {bgMode === 'black' && <Check className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setBgMode('custom-image')}
                className={`w-full p-3.5 rounded-2xl text-xs font-bold flex items-center justify-between border transition-all ${
                  bgMode === 'custom-image'
                    ? 'bg-[#EEF85B] text-black border-[#EEF85B]'
                    : 'bg-black text-white border-white/20 hover:border-white/40'
                }`}
              >
                <span>Image Background Overlay Mode</span>
                {bgMode === 'custom-image' && <Check className="w-4 h-4" />}
              </button>
            </div>

            {bgMode === 'custom-image' && (
              <div className="space-y-4 pt-2">
                <div className="text-xs font-semibold text-white/80">Select Sample Tutor Image:</div>
                <div className="grid grid-cols-1 gap-2">
                  {sampleBackgrounds.map((bg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setBgImageUrl(bg.url)}
                      className={`p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                        bgImageUrl === bg.url
                          ? 'bg-white/20 border-[#EEF85B] text-[#EEF85B]'
                          : 'bobbin-glass-button text-white/80'
                      }`}
                    >
                      <span>{bg.label}</span>
                      {bgImageUrl === bg.url && <Check className="w-3.5 h-3.5 text-[#EEF85B]" />}
                    </button>
                  ))}
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs text-white/60">Or Paste Custom Image URL:</label>
                  <input
                    type="url"
                    value={bgImageUrl}
                    onChange={(e) => setBgImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-3 py-2 rounded-xl bg-black border border-white/20 text-xs text-white focus:outline-none focus:border-[#EEF85B]"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 text-center space-y-2">
          {onReplayPreloader && (
            <button
              onClick={() => {
                onReplayPreloader();
                onClose();
              }}
              className="w-full py-2.5 rounded-full text-xs font-bold bobbin-glass-button text-white border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EEF85B]" />
              <span>Replay Preloader Intro Animation</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full py-3 rounded-full text-xs font-bold bg-[#EEF85B] text-black"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
