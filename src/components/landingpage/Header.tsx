import React from "react";
import type { LandingPageData } from "../../types/landing";
import EasyIcon from "./IconRenderer";

interface HeaderProps {
  data: LandingPageData;
  onShowLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ data, onShowLogin }) => {
  const {
    header_title,
    header_subtitle,
    header_description,
    header_cta_primary,
    header_cta_primary_url,
    header_cta_secondary,
    header_cta_secondary_url,
    header_section_image,
    color_theme,
  } = data;

  const primaryColor = color_theme?.primary_color || "#3B82F6";
  const accentColor = color_theme?.accent_color || "#10B981";
  const textColor = color_theme?.text_color || "#1F2937";
  const neutralColor = color_theme?.neutral_color || "#6B7280";
  const bgColor = color_theme?.background_color || "#FFFFFF";

  // Gradient styles
  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

  const backendBaseUrl = "https://esign-admin.signmary.com";

  const backgroundImageUrl = data.header_background_image?.url
    ? data.header_background_image.url.startsWith("http")
      ? data.header_background_image.url
      : `${backendBaseUrl}${data.header_background_image.url}`
    : null;

  const rightImageUrl = header_section_image?.url?.startsWith("http")
    ? header_section_image.url
    : header_section_image?.url
    ? `${backendBaseUrl}${header_section_image.url}`
    : null;

  return (
    <header
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: bgColor,
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "6rem",
        minHeight: "calc(100vh - 6rem)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-float"
          style={{ background: gradientBg }}
        />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-5 blur-3xl animate-float-delayed"
          style={{ background: gradientHover }}
        />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20 animate-bounce"
            style={{
              background: primaryColor,
              top: `${15 + i * 10}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="max-w-2xl">
              {/* Subtitle */}
              {header_subtitle && (
                <div className="relative inline-block mb-6">
                  <p
                    className="text-sm sm:text-base font-semibold uppercase tracking-wider animate-fadeInUp"
                    style={{
                      color: primaryColor,
                    }}
                  >
                    {header_subtitle}
                  </p>
                  {/* Animated underline */}
                  <div
                    className="absolute -bottom-2 left-0 h-0.5 rounded-full animate-expandWidth"
                    style={{
                      background: gradientBg,
                      width: "60%",
                    }}
                  />
                </div>
              )}

              {/* Main Title */}
              {header_title && (
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fadeInUp animation-delay-200"
                  style={{
                    color: textColor,
                  }}
                >
                  {/* Gradient text effect */}
                  <span
                    className="block text-transparent bg-clip-text"
                    style={{
                      backgroundImage: gradientBg,
                    }}
                  >
                    {header_title}
                  </span>
                </h1>
              )}

              {/* Description */}
              {header_description && (
                <p
                  className="text-lg sm:text-xl lg:text-xl xl:text-2xl mb-8 leading-relaxed animate-fadeInUp animation-delay-400"
                  style={{
                    color: neutralColor,
                  }}
                >
                  {header_description}
                </p>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animation-delay-600">
                {header_cta_primary && (
                  <>
                    {header_cta_primary_url ? (
                      <a
                        href={header_cta_primary_url}
                        className="group/primary relative px-8 py-4 rounded-lg font-semibold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl transform cursor-pointer text-center overflow-hidden"
                        style={{
                          background: gradientBg,
                        }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/primary:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        <span className="relative z-10 flex items-center gap-2">
                          {header_cta_primary}
                          <EasyIcon
                            icon="FiArrowRight"
                            size={20}
                            color="#FFFFFF"
                            className="transition-transform duration-300 group-hover/primary:translate-x-1"
                          />
                        </span>
                      </a>
                    ) : (
                      <button
                        onClick={onShowLogin}
                        className="group/primary relative px-8 py-4 rounded-lg font-semibold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl transform cursor-pointer text-center overflow-hidden"
                        style={{
                          background: gradientBg,
                        }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/primary:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        <span className="relative z-10 flex items-center gap-2">
                          {header_cta_primary}
                          <EasyIcon
                            icon="FiArrowRight"
                            size={20}
                            color="#FFFFFF"
                            className="transition-transform duration-300 group-hover/primary:translate-x-1"
                          />
                        </span>
                      </button>
                    )}
                  </>
                )}

                {header_cta_secondary && (
                  <>
                    {header_cta_secondary_url &&
                    header_cta_secondary_url !== "#login" ? (
                      <a
                        href={header_cta_secondary_url}
                        className="group/secondary relative px-8 py-4 rounded-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl transform cursor-pointer text-center overflow-hidden border-2"
                        style={{
                          borderColor: primaryColor,
                          color: primaryColor,
                          backgroundColor: "transparent",
                        }}
                      >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover/secondary:opacity-100 transition-opacity duration-500 bg-white" />
                        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/secondary:text-gray-800">
                          {header_cta_secondary}
                          <EasyIcon
                            icon="FiExternalLink"
                            size={20}
                            color="currentColor"
                            className="transition-transform duration-300 group-hover/secondary:scale-110"
                          />
                        </span>
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          if (onShowLogin) {
                            onShowLogin();
                          }
                        }}
                        className="group/secondary relative px-8 py-4 rounded-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl transform cursor-pointer text-center overflow-hidden border-2"
                        style={{
                          borderColor: primaryColor,
                          color: primaryColor,
                          backgroundColor: "transparent",
                        }}
                      >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover/secondary:opacity-100 transition-opacity duration-500 bg-white" />
                        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/secondary:text-gray-800">
                          {header_cta_secondary}
                          <EasyIcon
                            icon="FiPlayCircle"
                            size={20}
                            color="currentColor"
                            className="transition-transform duration-300 group-hover/secondary:scale-110"
                          />
                        </span>
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* Additional Info/Stats */}
              <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start animate-fadeInUp animation-delay-800">
                {[
                  { value: "99%", label: "Success Rate", icon: "FiTrendingUp" },
                  { value: "24/7", label: "Support", icon: "FiHeadphones" },
                  { value: "1000+", label: "Happy Clients", icon: "FiUsers" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center lg:text-left group/stat"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover/stat:scale-110 group-hover/stat:rotate-6"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%)`,
                        }}
                      >
                        <EasyIcon
                          icon={stat.icon}
                          size={20}
                          color={primaryColor}
                          className="transition-all duration-500 group-hover/stat:scale-110"
                        />
                      </div>
                      <div
                        className="text-2xl font-bold transition-all duration-300 group-hover/stat:scale-110"
                        style={{ color: primaryColor }}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div
                      className="text-sm transition-colors duration-300"
                      style={{ color: neutralColor }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-2xl animate-fadeInUp animation-delay-300">
              {rightImageUrl ? (
                <div className="relative group">
                  {/* Main Image Container */}
                  <div
                    className="rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl relative"
                    style={{
                      border: `2px solid transparent`,
                      backgroundImage: `linear-gradient(white, white), ${gradientBg}`,
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                  >
                    <img
                      src={rightImageUrl}
                      alt="Header Visual"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ background: gradientBg }}
                    />
                  </div>

                  {/* Floating elements with enhanced animations */}
                  <div
                    className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-6"
                    style={{
                      background: gradientBg,
                      border: `2px solid ${primaryColor}30`,
                    }}
                  >
                    <span className="text-white font-bold text-sm text-center">
                      Easy to Use
                    </span>
                  </div>

                  <div
                    className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-2 group-hover:-rotate-6"
                    style={{
                      background: gradientHover,
                      border: `2px solid ${accentColor}30`,
                    }}
                  >
                    <span className="text-white font-bold text-xs text-center">
                      Fast & Secure
                    </span>
                  </div>

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
                </div>
              ) : (
                <div
                  className="group w-full h-80 lg:h-96 rounded-3xl flex flex-col items-center justify-center shadow-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-3xl relative overflow-hidden"
                  style={{
                    backgroundColor: `${primaryColor}08`,
                    border: `2px dashed ${primaryColor}30`,
                  }}
                >
                  {/* Animated background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: gradientBg }}
                  />

                  <EasyIcon
                    icon="FiImage"
                    size={64}
                    color={primaryColor}
                    className="mb-4 opacity-30 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50 relative z-10"
                  />
                  <p
                    className="relative z-10 transition-colors duration-500 group-hover:text-white"
                    style={{ color: primaryColor, opacity: 0.7 }}
                  >
                    Add an image to showcase your product
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 group/scroll">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover/scroll:scale-110 group-hover/scroll:bg-opacity-20"
          style={{ backgroundColor: `${primaryColor}10` }}
        >
          <svg
            className="w-6 h-6 transition-all duration-500 group-hover/scroll:scale-110"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            style={{ color: primaryColor }}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
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
            width: 60%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(20px, -20px) rotate(120deg);
          }
          66% {
            transform: translate(-15px, 15px) rotate(240deg);
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

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </header>
  );
};

export default Header;
