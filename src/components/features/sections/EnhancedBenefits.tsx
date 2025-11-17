import React from "react";
import type { Benefit, Theme } from "../../../types/features-page";

interface EnhancedBenefitsProps {
  benefits: Benefit[];
  theme: Theme;
  heading?: string;
  description?: string;
}

export const EnhancedBenefits: React.FC<EnhancedBenefitsProps> = ({
  benefits,
  theme,
  heading,
  description,
}) => {
  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.primaryColor}03 0%, ${theme.accentColor}03 100%)`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-5 animate-float"
          style={{ backgroundColor: theme.primaryColor }}
        />
        <div
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full opacity-5 animate-float"
          style={{
            backgroundColor: theme.accentColor,
            animationDelay: "2s",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-3 animate-pulse"
          style={{ backgroundColor: theme.primaryColor }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {heading && (
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fadeInUp"
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
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.accentColor} 100%)`,
                }}
              />

              <div className="relative z-10">
                {benefit.icon && (
                  <div className="text-5xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {benefit.icon}
                  </div>
                )}

                <h3
                  className="text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:translate-x-2"
                  style={{ color: theme.textColor }}
                >
                  {benefit.title}
                </h3>

                {benefit.stats && (
                  <div
                    className="text-4xl font-bold mb-4 transform transition-all duration-500 group-hover:scale-110"
                    style={{ color: theme.primaryColor }}
                  >
                    {benefit.stats}
                  </div>
                )}

                <p
                  className="text-lg leading-relaxed transform transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: theme.neutralColor }}
                >
                  {benefit.description}
                </p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                <div
                  className="absolute top-2 right-2 w-16 h-16 rounded-full"
                  style={{ backgroundColor: theme.primaryColor }}
                />
                <div
                  className="absolute bottom-2 left-2 w-12 h-12 rounded-full"
                  style={{ backgroundColor: theme.accentColor }}
                />
              </div>

              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
