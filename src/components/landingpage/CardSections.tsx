import React from "react";
import type { LandingPageData, CardContent } from "../../types/landing";
import EasyIcon from "./IconRenderer";

interface CardSectionsProps {
  data: LandingPageData;
}

const CardSections: React.FC<CardSectionsProps> = ({ data }) => {
  const { card_sections, color_theme } = data;

  if (
    !card_sections ||
    !card_sections.cards ||
    card_sections.cards.length === 0
  )
    return null;

  const { heading, cards } = card_sections;
  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const accentColor = color_theme?.accent_color || "#10B981";
  const textColor = color_theme?.text_color || "#1F2937";
  const neutralColor = color_theme?.neutral_color || "#6B7280";
  const bgColor = color_theme?.background_color || "#FFFFFF";

  const renderCard = (card: CardContent) => {
    return (
      <div key={card.id} className="group relative h-full">
        {/* Card container */}
        <div
          className="relative h-full p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl border backdrop-blur-sm overflow-hidden"
          style={{
            backgroundColor: bgColor,
            borderColor: `${primaryColor}12`,
          }}
        >
          {/* Subtle hover gradient */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
            style={{
              background: `radial-gradient(circle at top right, ${primaryColor}05, transparent 60%)`,
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
            style={{
              background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
            }}
          />

          {/* Icon container */}
          {card.icon && (
            <div className="mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 relative overflow-hidden"
                style={{
                  backgroundColor: `${primaryColor}10`,
                }}
              >
                <EasyIcon
                  icon={card.icon}
                  size={26}
                  color={primaryColor}
                  className="relative z-10 transition-transform duration-500 group-hover:rotate-12"
                />

                {/* Shine effect */}
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${primaryColor}25, transparent)`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Title */}
          <h3
            className="text-2xl lg:text-3xl font-bold mb-4 leading-tight transition-colors duration-300"
            style={{ color: textColor }}
          >
            {card.title}
          </h3>

          {/* Description */}
          {card.description && (
            <p
              className="text-base lg:text-lg leading-relaxed mb-6"
              style={{ color: neutralColor }}
            >
              {card.description}
            </p>
          )}

          {/* Features List */}
          {card.features && card.features.length > 0 && (
            <ul className="space-y-3 mb-6">
              {card.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 group/item">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/item:scale-110"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <EasyIcon icon="FiCheck" size={12} color={accentColor} />
                  </div>
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: neutralColor }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Button */}
          {card.button_text && card.button_url && (
            <div className="mt-auto pt-6">
              <a
                href={card.button_url}
                className="inline-flex items-center gap-2 font-semibold text-base transition-all duration-300 hover:gap-3 group/btn"
                style={{ color: primaryColor }}
              >
                {card.button_text}
                <EasyIcon
                  icon="FiArrowRight"
                  size={16}
                  color={primaryColor}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </a>
            </div>
          )}

          {/* Bottom accent bar - appears on hover */}
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
    );
  };

  return (
    <section
      className="py-20 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${textColor} 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${primaryColor}, transparent 65%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-12 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor}, transparent 65%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        {heading && (
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border"
              style={{
                backgroundColor: `${primaryColor}08`,
                color: primaryColor,
                borderColor: `${primaryColor}20`,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: primaryColor }}
              />
              Features
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: textColor }}
            >
              {heading}
            </h2>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {cards.map((card) => renderCard(card))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <p
            className="text-lg lg:text-xl mb-8 leading-relaxed"
            style={{ color: neutralColor }}
          >
            Ready to get started with our comprehensive features?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                color: "#FFFFFF",
              }}
            >
              Get Started Today
              <EasyIcon
                icon="FiRocket"
                size={20}
                color="#FFFFFF"
                className="transition-transform duration-300 group-hover/btn:translate-y-[-2px]"
              />
            </a>
            <a
              href="#learn-more"
              className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: primaryColor,
                color: primaryColor,
                backgroundColor: "transparent",
              }}
            >
              Learn More
              <EasyIcon
                icon="FiBookOpen"
                size={20}
                color={primaryColor}
                className="transition-transform duration-300 group-hover/btn:translate-y-[-2px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSections;
