import React from "react";
import type { LandingPageData, Benefit } from "../../types/landing";
import EasyIcon from "./IconRenderer";

interface BenefitsProps {
  data: LandingPageData;
}

const Benefits: React.FC<BenefitsProps> = ({ data }) => {
  const { benefits_head, benefits_introduction, benefits, color_theme } = data;

  if (
    !benefits_head &&
    !benefits_introduction &&
    (!benefits || benefits.length === 0)
  ) {
    return null;
  }

  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const accentColor = color_theme?.accent_color || "#10B981";
  const textColor = color_theme?.text_color || "#1F2937";
  const neutralColor = color_theme?.neutral_color || "#6B7280";
  const bgColor = color_theme?.background_color || "#FFFFFF";

  // Gradient styles
  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

  const sampleBenefits = [
    {
      id: 1,
      title: "Save Time & Increase Efficiency",
      description:
        "Automate your tax form processes and reduce manual work by up to 80% with our streamlined platform.",
      stats: "80% Faster",
      icon: "FiZap",
      order: 1,
    },
    {
      id: 2,
      title: "Reduce Errors & Ensure Compliance",
      description:
        "Our built-in validation checks ensure IRS compliance and eliminate costly filing errors.",
      stats: "99% Accuracy",
      icon: "FiTarget",
      order: 2,
    },
    {
      id: 3,
      title: "Cost-Effective Solution",
      description:
        "Save up to 20% annually on tax preparation costs while improving service quality.",
      stats: "20% Savings",
      icon: "FiDollarSign",
      order: 3,
    },
    {
      id: 4,
      title: "Enhanced Security",
      description:
        "Enterprise-grade security protects your sensitive client data and tax information.",
      stats: "100% Secure",
      icon: "FiShield",
      order: 4,
    },
  ];

  const displayBenefits =
    benefits && benefits.length > 0 ? benefits : sampleBenefits;

  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${bgColor} 0%, ${primaryColor}08 100%)`,
      }}
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
          {benefits_head && (
            <div className="relative inline-block mb-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 animate-fadeInUp"
                style={{ color: textColor }}
              >
                {benefits_head}
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

          {benefits_introduction && (
            <p
              className="text-lg sm:text-xl leading-relaxed animate-fadeInUp animation-delay-200"
              style={{ color: neutralColor }}
            >
              {benefits_introduction}
            </p>
          )}

          {/* Show info message when using sample benefits */}
          {(!benefits || benefits.length === 0) && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mt-4 animate-fadeInUp animation-delay-400"
              style={{
                backgroundColor: `${primaryColor}15`,
                color: primaryColor,
              }}
            >
              <EasyIcon icon="FiInfo" size={16} color={primaryColor} />
              <span>Discover the benefits of our platform</span>
            </div>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayBenefits.map((benefit: Benefit, index: number) => (
            <div
              key={benefit.id}
              className="group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white overflow-hidden animate-fadeInUp"
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

              <div className="relative z-10">
                {/* Icon & Stats Row */}
                <div className="flex items-start justify-between mb-6">
                  {benefit.icon && (
                    <div className="relative">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden"
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
                          icon={benefit.icon}
                          size={24}
                          color={primaryColor}
                          className="relative z-10 transition-all duration-500 group-hover:scale-110"
                        />

                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      </div>

                      {/* Pulsing ring effect */}
                      <div
                        className="absolute inset-0 w-14 h-14 rounded-xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"
                        style={{
                          background: `radial-gradient(circle, ${primaryColor}20 0%, transparent 70%)`,
                        }}
                      />
                    </div>
                  )}

                  {benefit.stats && (
                    <div
                      className="text-right font-bold text-2xl transition-all duration-500 group-hover:scale-110"
                      style={{ color: accentColor }}
                    >
                      {benefit.stats}
                    </div>
                  )}
                </div>

                {/* Title with Gradient on Hover */}
                <h3
                  className="text-xl sm:text-2xl font-bold mb-4 transition-all duration-300 relative group-hover:scale-105"
                  style={{ color: textColor }}
                >
                  {benefit.title}
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
                    {benefit.title}
                  </span>
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed relative z-10 transition-colors duration-300"
                  style={{ color: neutralColor }}
                >
                  {benefit.description}
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

        {/* Additional CTA for empty state */}
        {(!benefits || benefits.length === 0) && (
          <div className="text-center mt-16 animate-fadeInUp animation-delay-600">
            <p className="text-lg mb-6" style={{ color: neutralColor }}>
              Ready to experience these benefits for your business?
            </p>
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto group/btn"
              style={{
                backgroundColor: primaryColor,
                color: "#FFFFFF",
              }}
            >
              <EasyIcon
                icon="FiArrowRight"
                size={20}
                color="#FFFFFF"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
              Start Saving Today
            </button>
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

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default Benefits;
