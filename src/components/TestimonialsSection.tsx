import React from 'react';
import { Star, Quote, UserCheck } from 'lucide-react';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Dr. Sarah Jenkins',
      role: 'Head Physics Tutor',
      company: 'Cambridge Prep Academy',
      content: 'Scribe has saved me at least 5 hours every week on creating tailored physics quizzes. The transcription picks up complex terms like angular momentum seamlessly.',
      studentsCount: '34 active students',
      rating: 5,
    },
    {
      id: '2',
      name: 'Marcus Vance',
      role: 'Independent Math Educator',
      company: 'Vance Tutoring Group',
      content: 'My students love getting tested on the EXACT problems we discussed during our lesson. Retention rates have jumped by 40% since adopting Scribe.',
      studentsCount: '52 active students',
      rating: 5,
    },
    {
      id: '3',
      name: 'Elena Rostova',
      role: 'Language & Humanities Lead',
      company: 'Oxford Learning Hub',
      content: 'The automated lesson notes and instant quiz generator are flawless. As soon as my online class ends, Scribe categorizes key topics and drafts test questions.',
      studentsCount: '28 active students',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-8 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bobbin-glass-pill text-[#EEF85B] border border-[#EEF85B]/30">
            <Star className="w-3.5 h-3.5 fill-[#EEF85B]" />
            <span>Loved by 2,500+ Tutors</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans-bobbin font-bold tracking-tight">
            Loved by tutors worldwide.
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            See how top educators are transforming lesson retention with Scribe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bobbin-glass-card rounded-3xl p-8 flex flex-col justify-between space-y-6 relative hover:border-[#EEF85B]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#EEF85B]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EEF85B]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-white/20" />

                <p className="text-sm sm:text-base text-white/85 font-sans-bobbin leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold font-sans-bobbin text-white">{item.name}</div>
                  <div className="text-xs text-white/60">{item.role} • {item.company}</div>
                </div>

                <div className="px-2.5 py-1 rounded-full text-[11px] font-medium bobbin-glass-pill text-[#EEF85B]">
                  {item.studentsCount}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
