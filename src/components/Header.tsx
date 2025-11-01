import React from "react";
import type { LandingPageData } from "../types/landing";

interface HeaderProps {
  data: LandingPageData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const {
    header_title,
    header_subtitle,
    header_description,
    header_cta_primary,
    header_cta_primary_url,
    header_cta_secondary,
    header_cta_secondary_url,
    header_background_image,
    color_theme,
  } = data;

  const primaryColor = color_theme?.primary_color || "#3B82F6";
  //   const secondaryColor = color_theme?.secondary_color || '#1E40AF';
  const textColor = color_theme?.text_color || "#1F2937";

  return (
    <header
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: color_theme?.background_color || "#FFFFFF",
      }}
    >
      {/* Background Image */}
      {header_background_image && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${header_background_image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          {header_subtitle && (
            <p
              className="text-sm sm:text-base font-semibold uppercase tracking-wider mb-4 animate-fade-in"
              style={{
                color: header_background_image ? "#FFFFFF" : primaryColor,
              }}
            >
              {header_subtitle}
            </p>
          )}

          {/* Main Title */}
          {header_title && (
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up"
              style={{
                color: header_background_image ? "#FFFFFF" : textColor,
              }}
            >
              {header_title}
            </h1>
          )}

          {/* Description */}
          {header_description && (
            <p
              className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-200"
              style={{
                color: header_background_image
                  ? "#F3F4F6"
                  : color_theme?.neutral_color || "#6B7280",
              }}
            >
              {header_description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            {header_cta_primary && header_cta_primary_url && (
              <a
                href={header_cta_primary_url}
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                {header_cta_primary}
              </a>
            )}

            {header_cta_secondary && header_cta_secondary_url && (
              <a
                href={header_cta_secondary_url}
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
                style={{
                  borderColor: header_background_image
                    ? "#FFFFFF"
                    : primaryColor,
                  color: header_background_image ? "#FFFFFF" : primaryColor,
                  backgroundColor: "transparent",
                }}
              >
                {header_cta_secondary}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke={header_background_image ? "#FFFFFF" : textColor}
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
