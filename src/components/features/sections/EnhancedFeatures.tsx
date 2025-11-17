import React from "react";
import type { Feature, Theme } from "../../../types/features-page";
import EasyIcon from "../../landingpage/IconRenderer";

interface EnhancedFeaturesProps {
  features: Feature[];
  theme: Theme;
  heading?: string;
  description?: string;
}

export const EnhancedFeatures: React.FC<EnhancedFeaturesProps> = ({
  features,
  theme,
  heading,
  description,
}) => {
  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: theme.bgColor }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-72 h-72 rounded-full"
          style={{ backgroundColor: theme.primaryColor }}
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full"
          style={{ backgroundColor: theme.accentColor }}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative p-8 rounded-3xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 bg-white overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}08 0%, ${theme.accentColor}08 100%)`,
                }}
              />

              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  boxShadow: `0 0 0 2px ${theme.primaryColor}20`,
                }}
              />

              {feature.icon && (
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.accentColor} 100%)`,
                    }}
                  >
                    <EasyIcon icon={feature.icon} size={32} color="#FFFFFF" />
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>
              )}

              <h3
                className="text-2xl font-bold mb-4 relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                style={{ color: theme.textColor }}
              >
                {feature.title}
              </h3>

              <p
                className="text-lg leading-relaxed relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                style={{ color: theme.neutralColor }}
              >
                {feature.description}
              </p>

              <div
                className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.accentColor} 100%)`,
                }}
              >
                {index + 1}
              </div>

              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: theme.primaryColor }}
                />
                <div
                  className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: theme.accentColor }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
