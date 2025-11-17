import React from "react";
import type { LandingPageData, Feature } from "../../types/landing";
import EasyIcon from "./IconRenderer";

interface FeaturesProps {
  data: LandingPageData;
}

const Features: React.FC<FeaturesProps> = ({ data }) => {
  const { features_head, features_introduction, features, color_theme } = data;

  // Only hide if there's absolutely no content
  if (
    !features_head &&
    !features_introduction &&
    (!features || features.length === 0)
  ) {
    return null;
  }

  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const accentColor = color_theme?.accent_color || "#10B981";
  const textColor = color_theme?.text_color || "#1F2937";
  const neutralColor = color_theme?.neutral_color || "#6B7280";

  // Gradient styles
  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

  return (
    <section
      id="features"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: color_theme?.background_color || "#FFFFFF" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl animate-float"
          style={{ background: gradientBg }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl animate-float-delayed"
          style={{ background: gradientHover }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Gradient Animation */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {features_head && (
            <div className="relative inline-block mb-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 animate-fadeInUp"
                style={{ color: textColor }}
              >
                {features_head}
              </h2>
              {/* Gradient underline */}
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full animate-expandWidth"
                style={{
                  background: gradientBg,
                  width: "80%",
                  boxShadow: `0 4px 12px ${primaryColor}40`,
                }}
              />
            </div>
          )}

          {features_introduction && (
            <p
              className="text-lg sm:text-xl leading-relaxed animate-fadeInUp animation-delay-200"
              style={{ color: neutralColor }}
            >
              {features_introduction}
            </p>
          )}
        </div>

        {/* Features Grid */}
        {features && features.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: Feature, index: number) => (
              <div
                key={feature.id}
                id={`feature-${feature.id}`}
                className="group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white overflow-hidden animate-fadeInUp scroll-mt-24"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  border: `2px solid transparent`,
                  backgroundImage: `linear-gradient(white, white), ${gradientBg}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: gradientBg }}
                />

                {/* Animated corner accents */}
                <div
                  className="absolute top-0 left-0 w-0 h-0.5 group-hover:w-12 transition-all duration-500"
                  style={{ background: gradientBg }}
                />
                <div
                  className="absolute top-0 left-0 w-0.5 h-0 group-hover:h-12 transition-all duration-500"
                  style={{ background: gradientBg }}
                />
                <div
                  className="absolute bottom-0 right-0 w-0 h-0.5 group-hover:w-12 transition-all duration-500"
                  style={{ background: gradientHover }}
                />
                <div
                  className="absolute bottom-0 right-0 w-0.5 h-0 group-hover:h-12 transition-all duration-500"
                  style={{ background: gradientHover }}
                />

                {/* Icon with Enhanced Gradient Background */}
                {feature.icon && (
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%)`,
                      }}
                    >
                      {/* Gradient border effect */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: gradientBg,
                          padding: "2px",
                          WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />

                      <EasyIcon
                        icon={feature.icon}
                        size={28}
                        color={primaryColor}
                        className="relative z-10 transition-all duration-500 group-hover:scale-110"
                      />

                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </div>

                    {/* Pulsing ring effect */}
                    <div
                      className="absolute inset-0 w-16 h-16 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"
                      style={{
                        background: `radial-gradient(circle, ${primaryColor}20 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                )}

                {/* Title with Gradient on Hover */}
                <h3
                  className="text-xl sm:text-2xl font-bold mb-4 transition-all duration-300 relative group-hover:scale-105"
                  style={{ color: textColor }}
                >
                  {feature.title}
                  {/* Gradient text effect on hover */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: gradientBg,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {feature.title}
                  </span>
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed relative z-10 transition-colors duration-300"
                  style={{ color: neutralColor }}
                >
                  {feature.description}
                </p>

                {/* Animated Gradient Line */}
                <div className="relative mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                    style={{
                      background: gradientBg,
                      boxShadow: `0 0 12px ${primaryColor}60`,
                    }}
                  />
                </div>

                {/* Floating number badge */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                  style={{
                    background: gradientBg,
                    boxShadow: `0 4px 12px ${primaryColor}40`,
                  }}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty state with gradient styling
          <div className="text-center py-12">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%)`,
              }}
            >
              <div
                className="absolute inset-0 animate-spin-slow"
                style={{
                  background: `conic-gradient(from 0deg, ${primaryColor}40, ${accentColor}40, ${primaryColor}40)`,
                  opacity: 0.3,
                }}
              />
              <EasyIcon
                icon="FiSettings"
                size={48}
                color={primaryColor}
                className="relative z-10"
              />
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: textColor }}
            >
              Features Coming Soon
            </h3>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: neutralColor }}
            >
              We're working on adding amazing features to enhance your
              experience. Check back soon for updates!
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0%;
          }
          to {
            width: 80%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out forwards;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 25s ease-in-out infinite;
          animation-delay: -5s;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }

        /* Scroll margin for fixed navbar */
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
      `}</style>
    </section>
  );
};

export default Features;
