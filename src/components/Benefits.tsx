import React from "react";
import type { LandingPageData, Benefit } from "../types/landing";

interface BenefitsProps {
  data: LandingPageData;
}

const Benefits: React.FC<BenefitsProps> = ({ data }) => {
  const { benefits_head, benefits_introduction, benefits, color_theme } = data;

  // Show section if header/introduction exists OR if there are benefits
  if (
    !benefits_head &&
    !benefits_introduction &&
    (!benefits || benefits.length === 0)
  ) {
    return null;
  }

  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const secondaryColor = color_theme?.secondary_color || "#1E40AF";
  const accentColor = color_theme?.accent_color || "#10B981";
  const textColor = color_theme?.text_color || "#1F2937";
  const neutralColor = color_theme?.neutral_color || "#6B7280";
  const bgColor = color_theme?.background_color || "#FFFFFF";

  return (
    <section
      className="py-16 sm:py-24"
      style={{
        background: `linear-gradient(135deg, ${bgColor} 0%, ${primaryColor}10 100%)`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {benefits_head && (
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: textColor }}
            >
              {benefits_head}
            </h2>
          )}

          {benefits_introduction && (
            <p
              className="text-lg sm:text-xl leading-relaxed"
              style={{ color: neutralColor }}
            >
              {benefits_introduction}
            </p>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits?.map((benefit: Benefit, index: number) => (
            <div
              key={benefit.id}
              className="benefit-card relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Background Accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: accentColor }}
              ></div>

              <div className="relative z-10">
                {/* Icon & Stats Row */}
                <div className="flex items-start justify-between mb-6">
                  {benefit.icon && (
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                      }}
                    >
                      <span className="text-2xl text-white">
                        {benefit.icon}
                      </span>
                    </div>
                  )}

                  {benefit.stats && (
                    <div
                      className="text-right font-bold text-2xl"
                      style={{ color: accentColor }}
                    >
                      {benefit.stats}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-bold mb-4"
                  style={{ color: textColor }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed" style={{ color: neutralColor }}>
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Border Animation */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                style={{
                  background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes benefit-slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .benefit-card {
          animation: benefit-slide-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Benefits;
