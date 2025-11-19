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
      className="py-20 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${textColor} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{
          background: `radial-gradient(circle, ${primaryColor}, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
        style={{
          background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          {benefits_head && (
            <div className="mb-6">
              <div
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{
                  backgroundColor: `${primaryColor}10`,
                  color: primaryColor,
                  border: `1px solid ${primaryColor}20`,
                }}
              >
                Benefits
              </div>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ color: textColor }}
              >
                {benefits_head}
              </h2>
            </div>
          )}

          {benefits_introduction && (
            <p
              className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ color: neutralColor }}
            >
              {benefits_introduction}
            </p>
          )}

          {(!benefits || benefits.length === 0) && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mt-6 border"
              style={{
                backgroundColor: `${primaryColor}08`,
                color: primaryColor,
                borderColor: `${primaryColor}20`,
              }}
            >
              <EasyIcon icon="FiInfo" size={16} color={primaryColor} />
              <span>Discover the benefits of our platform</span>
            </div>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="ggrid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {displayBenefits.map((benefit: Benefit) => (
            <div key={benefit.id} className="group relative">
              {/* Card */}
              <div
                className="relative h-full p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:shadow-xl border backdrop-blur-sm"
                style={{
                  backgroundColor: `${bgColor}`,
                  borderColor: `${primaryColor}15`,
                }}
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}03 0%, ${accentColor}03 100%)`,
                  }}
                />

                {/* Icon container */}
                <div className="flex items-start justify-between mb-6">
                  {benefit.icon && (
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 relative overflow-hidden"
                      style={{
                        backgroundColor: `${primaryColor}12`,
                      }}
                    >
                      <EasyIcon
                        icon={benefit.icon}
                        size={26}
                        color={primaryColor}
                        className="relative z-10 transition-transform duration-500 group-hover:rotate-6"
                      />

                      {/* Shine effect */}
                      <div
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${primaryColor}20, transparent)`,
                        }}
                      />
                    </div>
                  )}

                  {benefit.stats && (
                    <div
                      className="text-right font-bold text-2xl lg:text-3xl transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {benefit.stats}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300"
                  style={{ color: textColor }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base lg:text-lg leading-relaxed"
                  style={{ color: neutralColor }}
                >
                  {benefit.description}
                </p>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-3xl">
                  <div
                    className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out"
                    style={{
                      background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {(!benefits || benefits.length === 0) && (
          <div className="text-center mt-20">
            <p
              className="text-lg lg:text-xl mb-8"
              style={{ color: neutralColor }}
            >
              Ready to experience these benefits for your business?
            </p>
            <button
              className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                color: "#FFFFFF",
              }}
            >
              Start Saving Today
              <EasyIcon
                icon="FiArrowRight"
                size={20}
                color="#FFFFFF"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Benefits;
