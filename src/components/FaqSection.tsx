import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'How does Scribe transcribe live tutoring sessions?',
      answer: 'Scribe connects seamlessly to Zoom, Google Meet, Teams, or your in-person microphone. It processes background audio with 99.4% speech-to-text accuracy tuned specifically for STEM subjects, humanities, and complex academic vocabulary.',
    },
    {
      id: '2',
      question: 'How does Scribe create automated quizzes from lessons?',
      answer: 'As you teach, Scribe continuously identifies core themes, definitions, equations, and problem types. Upon lesson completion, Scribe produces a ready-to-assign interactive quiz or printable worksheet matching the exact class discussion.',
    },
    {
      id: '3',
      question: 'Can I edit the AI-generated tests before sending them to students?',
      answer: 'Absolutely! Scribe provides an intuitive editor where you can tweak questions, change difficulty levels, convert formats (multiple choice, short answer, fill-in-the-blank), or add custom teacher feedback in seconds.',
    },
    {
      id: '4',
      question: 'Is student voice data and session audio secure?',
      answer: 'Yes. All session audio is encrypted in transit and at rest using enterprise AES-256 standard. Your lesson audio is processed strictly for your account and is never shared or sold.',
    },
    {
      id: '5',
      question: 'Can I try Scribe for free without entering a credit card?',
      answer: 'Yes, we offer a 14-day full feature free trial. No credit card is required to sign up and start generating AI lesson notes and quizzes immediately.',
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 px-4 sm:px-8 bg-black text-white relative border-t border-white/10">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bobbin-glass-pill text-[#EEF85B] border border-[#EEF85B]/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans-bobbin font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Everything you need to know about testing and transcribing with Bobbin.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bobbin-glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans-bobbin font-semibold text-base sm:text-lg text-white"
                >
                  <span>{faq.question}</span>
                  <div className={`p-2 rounded-full bobbin-glass-pill transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#EEF85B] text-black' : 'text-white/70'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-white/70 font-sans-bobbin leading-relaxed border-t border-white/10 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
