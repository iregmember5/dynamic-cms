import React from "react";
import type { LandingPageData, CardContent } from "../types/landing";
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

  // Gradient styles
  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

  const renderCard = (card: CardContent, index: number) => {
    return (
      <div
        key={card.id}
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

        {/* Icon with Enhanced Gradient Background */}
        {card.icon && (
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
                icon={card.icon}
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
          className="text-xl font-bold mb-4 leading-tight transition-all duration-300 relative group-hover:scale-105"
          style={{ color: textColor }}
        >
          {card.title}
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
            {card.title}
          </span>
        </h3>

        {/* Description */}
        {card.description && (
          <p
            className="leading-relaxed mb-6 text-lg relative z-10 transition-colors duration-300"
            style={{ color: neutralColor }}
          >
            {card.description}
          </p>
        )}

        {/* Features List with EasyIcon check marks */}
        {card.features && card.features.length > 0 && (
          <ul className="space-y-4 relative z-10">
            {card.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4 group/feature">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/feature:scale-110"
                  style={{ backgroundColor: `${accentColor}20` }}
                >
                  <EasyIcon icon="FiCheck" size={12} color={accentColor} />
                </div>
                <span
                  className="text-base leading-relaxed transition-colors duration-300"
                  style={{ color: neutralColor }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

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

        {/* Button with EasyIcon arrow */}
        {card.button_text && card.button_url && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href={card.button_url}
              className="inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-3 group/btn relative"
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
    );
  };

  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
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
        {/* Section Header */}
        {heading && (
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="relative inline-block mb-6">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10 animate-fadeInUp"
                style={{ color: textColor }}
              >
                {heading}
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
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => renderCard(card, index))}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16 animate-fadeInUp animation-delay-400">
          <p
            className="text-lg mb-6 max-w-2xl mx-auto"
            style={{ color: neutralColor }}
          >
            Ready to get started with our comprehensive features?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group/btn px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto sm:mx-0"
              style={{ backgroundColor: primaryColor }}
            >
              <EasyIcon
                icon="FiRocket"
                size={20}
                color="#FFFFFF"
                className="transition-transform duration-300 group-hover/btn:translate-y-[-2px]"
              />
              Get Started Today
            </a>
            <a
              href="#learn-more"
              className="group/btn px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto sm:mx-0"
              style={{
                borderColor: primaryColor,
                color: primaryColor,
                backgroundColor: "transparent",
              }}
            >
              <EasyIcon
                icon="FiBookOpen"
                size={20}
                color={primaryColor}
                className="transition-transform duration-300 group-hover/btn:translate-y-[-2px]"
              />
              Learn More
            </a>
          </div>
        </div>
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

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default CardSections;
