import React, { useState } from 'react';
import type { LandingPageData } from '../types/landing';

interface TestimonialsProps {
  data: LandingPageData;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const { testimonials_head, testimonials_introduction, testimonials, color_theme } = data;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const primaryColor = color_theme?.primary_color || '#3B82F6';
  const accentColor = color_theme?.accent_color || '#10B981';
  const textColor = color_theme?.text_color || '#1F2937';
  const neutralColor = color_theme?.neutral_color || '#6B7280';
  const bgColor = color_theme?.background_color || '#FFFFFF';

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {testimonials_head && (
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: textColor }}
            >
              {testimonials_head}
            </h2>
          )}
          
          {testimonials_introduction && (
            <p 
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: neutralColor }}
            >
              {testimonials_introduction}
            </p>
          )}
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div 
              className="absolute top-8 left-8 text-6xl opacity-10 font-serif"
              style={{ color: primaryColor }}
            >
              "
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Quote */}
              <blockquote 
                className="text-xl sm:text-2xl leading-relaxed mb-8 italic"
                style={{ color: textColor }}
              >
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-6">
                {/* Photo */}
                {testimonials[activeIndex].photo && (
                  <img
                    src={testimonials[activeIndex].photo!.url}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4"
                    style={{ borderColor: `${primaryColor}30` }}
                  />
                )}

                {/* Details */}
                <div>
                  <p 
                    className="font-bold text-lg"
                    style={{ color: textColor }}
                  >
                    {testimonials[activeIndex].name}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: neutralColor }}
                  >
                    {testimonials[activeIndex].title}
                  </p>
                  <p 
                    className="text-sm font-semibold"
                    style={{ color: accentColor }}
                  >
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-16 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                style={{ backgroundColor: primaryColor }}
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-16 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                style={{ backgroundColor: primaryColor }}
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Navigation */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === activeIndex ? primaryColor : `${neutralColor}40`,
                    transform: index === activeIndex ? 'scale(1.2)' : 'scale(1)'
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;