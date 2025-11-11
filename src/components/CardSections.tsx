import React from "react";
import type { LandingPageData, CardContent } from "../types/landing";
import EasyIcon from "./IconRenderer"; // Add this import

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

  const renderCard = (card: CardContent, index: number) => {
    return (
      <div
        key={card.id}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100"
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Icon with EasyIcon */}
        {card.icon && (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ backgroundColor: `${primaryColor}15` }}
          >
            <EasyIcon icon={card.icon} size={28} color={primaryColor} />
          </div>
        )}

        {/* Title */}
        <h3
          className="text-xl font-bold mb-4 leading-tight"
          style={{ color: textColor }}
        >
          {card.title}
        </h3>

        {/* Description */}
        {card.description && (
          <p
            className="leading-relaxed mb-6 text-lg"
            style={{ color: neutralColor }}
          >
            {card.description}
          </p>
        )}

        {/* Features List with EasyIcon check marks */}
        {card.features && card.features.length > 0 && (
          <ul className="space-y-4">
            {card.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accentColor}20` }}
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

        {/* Button with EasyIcon arrow */}
        {card.button_text && card.button_url && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href={card.button_url}
              className="inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-3 group/btn"
              style={{ color: primaryColor }}
            >
              {card.button_text}
              <EasyIcon icon="FiArrowRight" size={16} color={primaryColor} />
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {heading && (
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: textColor }}
            >
              {heading}
            </h2>
            {/* Optional subtitle can be added here */}
          </div>
        )}

        {/* Cards Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => renderCard(card, index))}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16">
          <p
            className="text-lg mb-6 max-w-2xl mx-auto"
            style={{ color: neutralColor }}
          >
            Ready to get started with our comprehensive features?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto sm:mx-0"
              style={{ backgroundColor: primaryColor }}
            >
              <EasyIcon icon="FiRocket" size={20} color="#FFFFFF" />
              Get Started Today
            </a>
            <a
              href="#learn-more"
              className="px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto sm:mx-0"
              style={{
                borderColor: primaryColor,
                color: primaryColor,
                backgroundColor: "transparent",
              }}
            >
              <EasyIcon icon="FiBookOpen" size={20} color={primaryColor} />
              Learn More
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes card-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: card-fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default CardSections;
