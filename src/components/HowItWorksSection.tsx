import React from 'react';
import { Mic, Cpu, FileCheck, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Automated Lesson Recording',
      description: 'Scribe listens continuously during online or in-person tutoring sessions, capturing live discussion with crystal-clear accuracy.',
      icon: Mic,
      badge: '99.4% Academic Speech Accuracy',
    },
    {
      num: '02',
      title: 'Instant AI Test Generation',
      description: 'As concepts are taught, Scribe extracts core topics, formulas, and vocabulary to instantly generate custom tests & quizzes.',
      icon: Cpu,
      badge: 'Real-time AI Synthesis',
    },
    {
      num: '03',
      title: 'Automated Student Insights',
      description: 'Students complete quizzes tailored precisely to what was taught. Detailed progress metrics sync seamlessly with your workflow.',
      icon: FileCheck,
      badge: 'Seamless Dashboard Sync',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-8 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bobbin-glass-pill text-[#EEF85B] border border-[#EEF85B]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How Scribe Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans-bobbin font-bold tracking-tight">
            From spoken lesson to <span className="font-serif-bobbin text-[#EEF85B] font-normal italic">custom assessment</span> in seconds.
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-sans-bobbin">
            Stop spending hours drafting homework and quiz sheets manually. Scribe captures live teaching and handles assessment automatically.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bobbin-glass-card rounded-3xl p-8 space-y-6 relative group hover:border-[#EEF85B]/40 transition-all duration-300"
              >
                {/* Top Badge & Step Number */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-outfit font-extrabold text-[#EEF85B]/50 group-hover:text-[#EEF85B] transition-colors">
                    {step.num}
                  </span>
                  <div className="p-3 rounded-2xl bg-[#EEF85B]/10 text-[#EEF85B] border border-[#EEF85B]/20 group-hover:bg-[#EEF85B] group-hover:text-black transition-all">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-sans-bobbin font-semibold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Stats Pill */}
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bobbin-glass-pill text-white/80 border border-white/10">
                    {step.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlight Box */}
        <div className="bobbin-glass-card rounded-[32px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/15">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#EEF85B] tracking-wider uppercase">
              <Zap className="w-4 h-4 fill-[#EEF85B]" />
              Built Exclusively for Tutors
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans-bobbin font-bold">
              Integrated directly with TutorCruncher workflow
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Export test results, track lesson topics, and store progress reports without leaving your current tutoring dashboard.
            </p>
          </div>

          <a
            href="#get-started"
            className="px-6 py-3.5 rounded-full text-sm font-bold bg-[#EEF85B] hover:bg-[#e2f040] text-black shrink-0 transition-all flex items-center gap-2 shadow-lg shadow-[#EEF85B]/20"
          >
            <span>Start 14-day free trial</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
