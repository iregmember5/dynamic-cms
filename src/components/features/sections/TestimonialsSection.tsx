import React from "react";
import type { Testimonial, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  theme: Theme;
  heading?: string;
  description?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  theme,
  heading,
  description,
}) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      className="py-16 sm:py-24"
      style={{
        background: `linear-gradient(135deg, ${theme.primaryColor}05 0%, ${theme.accentColor}05 100%)`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {heading && (
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fadeInUp"
              style={{ color: theme.textColor }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p
              className="text-xl max-w-3xl mx-auto animate-fadeInUp animation-delay-200"
              style={{ color: theme.neutralColor }}
            >
              {description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                {testimonial.photo && (
                  <img
                    src={getFullImageUrl(testimonial.photo.url)}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div>
                  <h4
                    className="font-bold text-lg group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: theme.textColor }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: theme.neutralColor }}>
                    {testimonial.title}
                  </p>
                  <p
                    className="text-sm group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: theme.primaryColor }}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p
                className="italic group-hover:translate-x-1 transition-transform duration-300"
                style={{ color: theme.neutralColor }}
              >
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
