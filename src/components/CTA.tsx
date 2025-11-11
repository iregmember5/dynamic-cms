import React from "react";
import type { LandingPageData } from "../types/landing";
import EasyIcon from "./IconRenderer";

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
  const accentColor = color_theme?.accent_color || "#10B981";

  // Gradient styles
  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

  return (
    <section
      className="py-20 sm:py-32 relative overflow-hidden"
      style={{
        background: gradientBg,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: gradientHover }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float-delayed"
          style={{ background: gradientHover }}
        />
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full opacity-30 animate-bounce"
            style={{
              background: `radial-gradient(circle, white 30%, transparent 70%)`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          {cta_head && (
            <div className="relative inline-block mb-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp relative z-10">
                {cta_head}
              </h2>
              {/* Text glow effect */}
              <div
                className="absolute inset-0 opacity-50 blur-xl animate-pulse"
                style={{
                  background: gradientHover,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {cta_head}
              </div>
            </div>
          )}

          {/* Introduction */}
          {cta_introduction && (
            <p className="text-xl sm:text-2xl text-white opacity-90 mb-8 leading-relaxed animate-fadeInUp animation-delay-200">
              {cta_introduction}
            </p>
          )}

          {/* Offer Badge */}
          {cta_offer && (
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 animate-bounce group/offer"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <EasyIcon
                icon="FiGift"
                size={20}
                color="#FFFFFF"
                className="group-hover/offer:scale-110 transition-transform duration-300"
              />
              <p className="text-white font-semibold text-sm sm:text-base">
                {cta_offer}
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-400">
            {cta_primary_text && cta_primary_url && (
              <a
                href={cta_primary_url}
                className="group/primary inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform bg-white relative overflow-hidden"
                style={{ color: primaryColor }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/primary:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <EasyIcon
                  icon="FiRocket"
                  size={20}
                  color={primaryColor}
                  className="relative z-10 transition-transform duration-300 group-hover/primary:translate-y-[-2px]"
                />
                <span className="relative z-10">{cta_primary_text}</span>
              </a>
            )}

            {cta_secondary_text && cta_secondary_url && (
              <a
                href={cta_secondary_url}
                className="group/secondary inline-flex items-center gap-2 px-10 py-5 rounded-xl font-bold text-lg border-2 border-white text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl transform relative overflow-hidden"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover/secondary:opacity-100 transition-opacity duration-500 bg-white" />
                <EasyIcon
                  icon="FiPlayCircle"
                  size={20}
                  color="currentColor"
                  className="relative z-10 transition-transform duration-300 group-hover/secondary:scale-110"
                />
                <span className="relative z-10 transition-colors duration-300 group-hover/secondary:text-gray-800">
                  {cta_secondary_text}
                </span>
              </a>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80 animate-fadeInUp animation-delay-600">
            <div className="flex items-center gap-2 text-white group/trust">
              <EasyIcon
                icon="FiCreditCard"
                size={20}
                color="#FFFFFF"
                className="group-hover/trust:scale-110 transition-transform duration-300"
              />
              <span className="text-sm sm:text-base">
                No credit card required
              </span>
            </div>
            <div className="flex items-center gap-2 text-white group/trust">
              <EasyIcon
                icon="FiXCircle"
                size={20}
                color="#FFFFFF"
                className="group-hover/trust:scale-110 transition-transform duration-300"
              />
              <span className="text-sm sm:text-base">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-white group/trust">
              <EasyIcon
                icon="FiHeadphones"
                size={20}
                color="#FFFFFF"
                className="group-hover/trust:scale-110 transition-transform duration-300"
              />
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
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 25s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 30s ease-in-out infinite;
          animation-delay: -7s;
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

export default CTA;
