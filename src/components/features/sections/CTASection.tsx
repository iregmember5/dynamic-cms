import React from "react";
import type { ImageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";
import { getGradientBg } from "../utils/themeUtils";

interface CTASectionProps {
  heading: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  backgroundImage?: ImageData;
  theme: Theme;
  isPrimary?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  heading,
  description,
  buttonText,
  buttonUrl,
  backgroundImage,
  theme,
  isPrimary = false,
}) => {
  const gradientBg = getGradientBg(theme.primaryColor, theme.accentColor);

  if (isPrimary) {
    return (
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: backgroundImage
            ? `url(${getFullImageUrl(backgroundImage.url)})`
            : gradientBg,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${theme.primaryColor}95 0%, ${theme.accentColor}95 100%)`,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fadeInUp">
              {heading}
            </h2>
            {description && (
              <p className="text-xl text-white/90 mb-10 animate-fadeInUp animation-delay-200">
                {description}
              </p>
            )}
            {buttonText && (
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-400 animate-pulse-glow"
                style={{ color: theme.primaryColor }}
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-16 sm:py-24"
      style={{ backgroundColor: theme.bgColor }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6 animate-fadeInUp"
            style={{ color: theme.textColor }}
          >
            {heading}
          </h2>
          {description && (
            <p
              className="text-xl mb-10 animate-fadeInUp animation-delay-200"
              style={{ color: theme.neutralColor }}
            >
              {description}
            </p>
          )}
          {buttonText && (
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-400"
              style={{ background: gradientBg }}
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
