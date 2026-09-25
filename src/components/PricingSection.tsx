import React, { useState } from 'react';
import { Check, Sparkles, Key } from 'lucide-react';
import { PricingPlan } from '../types';

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans: PricingPlan[] = [
    {
      id: 'solo',
      name: 'Solo Tutor',
      priceMonthly: 35,
      priceYearly: 28,
      description: 'Perfect for individual tutors running up to 15 lessons per week.',
      features: [
        'Up to 25 hours transcribed/mo',
        'Auto-generated tests & quizzes',
        'Basic topic extraction',
        'PDF test export',
        'Standard email support',
      ],
      ctaText: 'Start 14-day free trial',
    },
    {
      id: 'pro',
      name: 'Pro Tutor',
      priceMonthly: 69,
      priceYearly: 55,
      popular: true,
      description: 'Ideal for full-time professional tutors seeking automated workflows.',
      features: [
        'Unlimited lesson transcription',
        'Instant AI Quiz & Test Generator',
        'Auto student progress reports',
        'Multi-subject equation support',
        'Custom export formats',
        'Priority 24/7 tutor support',
      ],
      ctaText: 'Get started now',
    },
    {
      id: 'agency',
      name: 'Tutoring Agency',
      priceMonthly: 149,
      priceYearly: 119,
      description: 'Built for tutoring academies & agencies with multiple tutors.',
      features: [
        'Includes 10 tutor seats',
        'Agency-wide analytics dashboard',
        'Custom branded test headers',
        'Dedicated account manager',
        'Custom API & Webhook access',
        'Custom SLA & uptime guarantee',
      ],
      ctaText: 'Contact sales',
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-8 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bobbin-glass-pill text-[#EEF85B] border border-[#EEF85B]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple, Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans-bobbin font-bold tracking-tight">
            Plans built for tutors of all sizes.
          </h2>

          {/* Billing Switcher Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bobbin-glass-pill border border-white/15">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                !isAnnual
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-[#EEF85B] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-black text-[#EEF85B]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={plan.id}
                className={`bobbin-glass-card rounded-[32px] p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-[#EEF85B] shadow-2xl shadow-[#EEF85B]/10 scale-105 z-10'
                    : 'hover:border-white/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-[#EEF85B] text-black shadow-lg">
                    MOST POPULAR FOR TUTORS
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Title & Price */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-sans-bobbin font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-white/60 min-h-[36px]">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-outfit font-extrabold text-white">
                      £{price}
                    </span>
                    <span className="text-xs text-white/60">/month per tutor</span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10 w-full"></div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-white/40 uppercase tracking-wider">What's included</div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white/85">
                          <div className="p-1 rounded-full bg-[#EEF85B]/20 text-[#EEF85B] shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="pt-8">
                  <a
                    href="#get-started"
                    className={`w-full py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-[#EEF85B] hover:bg-[#e2f040] text-black shadow-xl shadow-[#EEF85B]/25'
                        : 'bobbin-glass-button text-white hover:text-white'
                    }`}
                  >
                    <Key className="w-4 h-4 rotate-45" />
                    <span>{plan.ctaText}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
