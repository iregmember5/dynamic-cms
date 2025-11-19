import React, { useState } from "react";
import type { LandingPageData } from "../../types/landing";

interface TestimonialsProps {
  data: LandingPageData;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const {
    testimonials_head,
    testimonials_introduction,
    testimonials,
    color_theme,
  } = data;
  const [activeIndex, setActiveIndex] = useState(0);

  // Only hide if there's absolutely no content
  if (
    !testimonials_head &&
    !testimonials_introduction &&
    (!testimonials || testimonials.length === 0)
  ) {
    return null;
  }

  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const accentColor = color_theme?.accent_color || "#10B981";
  const textColor = color_theme?.text_color || "#1F2937";
  const neutralColor = color_theme?.neutral_color || "#6B7280";
  const bgColor = color_theme?.background_color || "#FFFFFF";

  // const handleNext = () => {
  //   if (testimonials && testimonials.length > 0) {
  //     setActiveIndex((prev) => (prev + 1) % testimonials.length);
  //   }
  // };

  // const handlePrev = () => {
  //   if (testimonials && testimonials.length > 0) {
  //     setActiveIndex(
  //       (prev) => (prev - 1 + testimonials.length) % testimonials.length
  //     );
  //   }
  // };

  // Sample testimonials for when the array is empty
  const sampleTestimonials = [
    {
      id: 1,
      quote:
        "This platform has completely transformed how we handle tax forms. The efficiency and accuracy are unmatched!",
      name: "Sarah Johnson",
      title: "Tax Manager",
      company: "Financial Solutions Inc.",
      photo: null,
      order: 1,
    },
    {
      id: 2,
      quote:
        "As a tax professional, I appreciate the attention to detail and IRS compliance features. It saves us hours of work each week.",
      name: "Michael Chen",
      title: "CPA",
      company: "Chen & Associates",
      photo: null,
      order: 2,
    },
    {
      id: 3,
      quote:
        "The user-friendly interface combined with powerful features makes this the best tax form solution we've ever used.",
      name: "Emily Rodriguez",
      title: "Tax Consultant",
      company: "QuickTax Pro",
      photo: null,
      order: 3,
    },
  ];

  const displayTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : sampleTestimonials;

  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: gradientBg }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full" style={{ background: gradientBg }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {testimonials_head && (
            <div className="relative inline-block mb-4">
              <h2
                className="text-3xl sm:text-4xl font-bold relative z-10"
                style={{ color: textColor }}
              >
                {testimonials_head}
              </h2>
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full w-20"
                style={{ background: gradientBg }}
              />
            </div>
          )}

          {testimonials_introduction && (
            <p
              className="text-lg leading-relaxed"
              style={{ color: neutralColor }}
            >
              {testimonials_introduction}
            </p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative p-6 rounded-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-white overflow-hidden"
              style={{
                border: `1px solid ${primaryColor}20`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: gradientBg }}
              />

              {/* Quote Icon */}
              <div
                className="absolute top-4 right-4 text-4xl opacity-10 font-serif"
                style={{ color: primaryColor }}
              >
                "
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Quote */}
                <blockquote
                  className="text-base leading-relaxed mb-6 italic"
                  style={{ color: textColor }}
                >
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: `${primaryColor}20` }}>
                  {/* Photo Placeholder */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: gradientBg }}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </div>

                  {/* Details */}
                  <div>
                    <p className="font-bold text-sm" style={{ color: textColor }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs" style={{ color: neutralColor }}>
                      {testimonial.title}
                    </p>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: accentColor }}
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated corner accent */}
              <div
                className="absolute bottom-0 right-0 w-0 h-0.5 group-hover:w-16 transition-all duration-500"
                style={{ background: gradientBg }}
              />
            </div>
          ))}
        </div>

          {/* Navigation Buttons */}
          {/* {displayTestimonials.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center z-20"
                style={{ backgroundColor: primaryColor }}
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center z-20"
                style={{ backgroundColor: primaryColor }}
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )} */}


        </div>

        {/* Call to add testimonials */}
        {(!testimonials || testimonials.length === 0) && (
          <div className="text-center mt-12">
            <p className="text-lg mb-6" style={{ color: neutralColor }}>
              Have experience with our platform? We'd love to hear from you!
            </p>
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: primaryColor,
                color: "#FFFFFF",
              }}
            >
              Share Your Experience
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
