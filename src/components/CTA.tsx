import React from "react";
import type { LandingPageData } from "../types/landing";
import EasyIcon from "./IconRenderer"; // Add this import

interface CTAProps {
  data: LandingPageData;
}

const CTA: React.FC<CTAProps> = ({ data }) => {
  const {
    cta_head,
    cta_introduction,
    cta_primary_text,
    cta_primary_url,
    cta_secondary_text,
    cta_secondary_url,
    cta_offer,
    color_theme,
  } = data;

  if (!cta_head && !cta_introduction && !cta_primary_text) return null;

  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const secondaryColor = color_theme?.secondary_color || "#1E40AF";
  const accentColor = color_theme?.accent_color || "#10B981";

  return (
    <section
      className="py-20 sm:py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ backgroundColor: accentColor }}
        ></div>
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            backgroundColor: accentColor,
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          {cta_head && (
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              {cta_head}
            </h2>
          )}

          {/* Introduction */}
          {cta_introduction && (
            <p className="text-xl sm:text-2xl text-white opacity-90 mb-8 leading-relaxed animate-fade-in animation-delay-200">
              {cta_introduction}
            </p>
          )}

          {/* Offer Badge */}
          {cta_offer && (
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 animate-bounce"
              style={{ backgroundColor: accentColor }}
            >
              <EasyIcon icon="FiGift" size={20} color="#FFFFFF" />
              <p className="text-white font-semibold text-sm sm:text-base">
                {cta_offer}
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
            {cta_primary_text && cta_primary_url && (
              <a
                href={cta_primary_url}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform bg-white"
                style={{ color: primaryColor }}
              >
                <EasyIcon icon="FiRocket" size={20} color={primaryColor} />
                {cta_primary_text}
              </a>
            )}

            {cta_secondary_text && cta_secondary_url && (
              <a
                href={cta_secondary_url}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg border-2 border-white text-white transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-2xl transform"
                style={
                  {
                    "--hover-text-color": primaryColor,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = primaryColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                <EasyIcon icon="FiPlayCircle" size={20} color="currentColor" />
                {cta_secondary_text}
              </a>
            )}
          </div>

          {/* Trust Indicators with EasyIcon */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="flex items-center gap-2 text-white">
              <EasyIcon icon="FiCreditCard" size={20} color="#FFFFFF" />
              <span className="text-sm sm:text-base">
                No credit card required
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <EasyIcon icon="FiXCircle" size={20} color="#FFFFFF" />
              <span className="text-sm sm:text-base">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <EasyIcon icon="FiHeadphones" size={20} color="#FFFFFF" />
              <span className="text-sm sm:text-base">24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
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
    </section>
  );
};

export default CTA;
