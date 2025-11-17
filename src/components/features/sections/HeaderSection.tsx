import React from "react";
import type { FeaturesPageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";
import { getGradientBg, getGradientHover } from "../utils/themeUtils";

interface HeaderSectionProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  data,
  theme,
}) => {
  const gradientBg = getGradientBg(theme.primaryColor, theme.accentColor);
  const gradientHover = getGradientHover(theme.primaryColor, theme.accentColor);

  return (
    <section
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.primaryColor}10 0%, ${theme.accentColor}10 100%)`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: gradientBg }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: gradientHover, animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp"
            style={{ color: theme.textColor }}
          >
            {data.header_title}
          </h1>
          <p
            className="text-xl sm:text-2xl mb-8 animate-fadeInUp animation-delay-200"
            style={{ color: theme.neutralColor }}
          >
            {data.header_subtitle}
          </p>
          {data.header_description && (
            <p
              className="text-lg mb-10 max-w-3xl mx-auto animate-fadeInUp"
              style={{ color: theme.neutralColor, animationDelay: "0.3s" }}
            >
              {data.header_description}
            </p>
          )}
          {data.header_cta_text && (
            <a
              href={data.header_cta_url}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group animate-fadeInUp animate-pulse-glow"
              style={{
                background: gradientBg,
                animationDelay: "0.4s",
              }}
            >
              <span className="relative z-10">{data.header_cta_text}</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: gradientHover }}
              />
            </a>
          )}
        </div>

        {data.header_image && (
          <div
            className="mt-16 max-w-5xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105"
              style={{
                boxShadow: `0 20px 60px ${theme.primaryColor}30`,
              }}
            >
              <img
                src={getFullImageUrl(data.header_image.url)}
                alt={data.header_image.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
