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
    header_description,
    header_cta_primary,
    header_cta_primary_url,
    header_cta_secondary,
    header_cta_secondary_url,
    header_section_image,
    color_theme,
  } = data;

  const primaryColor = color_theme?.primary_color || "#6366F1";
  const accentColor = color_theme?.accent_color || "#8B5CF6";
  const textColor = color_theme?.text_color || "#1F2937";
  const neutralColor = color_theme?.neutral_color || "#6B7280";
  const bgColor = color_theme?.background_color || "#FFFFFF";

  // Gradient styles
  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const subtleGradient = `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}08 100%)`;

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
      className="relative flex items-center justify-center overflow-hidden min-h-screen"
      style={{
        backgroundColor: bgColor,
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "6rem",
      }}
    >
      {/* Modern background with geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: gradientBg }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: gradientBg }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${primaryColor}20 1px, transparent 1px), linear-gradient(90deg, ${primaryColor}20 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="max-w-2xl">
              {/* AI Badge */}
              <div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border backdrop-blur-sm animate-fadeInUp"
                style={{
                  borderColor: `${primaryColor}30`,
                  background: `${primaryColor}08`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: gradientBg }}
                />
                <span
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: primaryColor }}
                >
                  Powered With AI Agents
                </span>
              </div>

              {/* Main Title */}
              {header_title && (
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp animation-delay-200"
                  style={{ color: textColor }}
                >
                  {header_title}
                </h1>
              )}

              {/* Description */}
              {header_description && (
                <p
                  className="text-xl lg:text-2xl mb-8 leading-relaxed font-light animate-fadeInUp animation-delay-400"
                  style={{ color: neutralColor }}
                >
                  {header_description}
                </p>
              )}

              {/* CTAs with modern layout */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-fadeInUp animation-delay-600">
                {header_cta_primary && (
                  <>
                    {header_cta_primary_url ? (
                      <a
                        href={header_cta_primary_url}
                        className="group/primary relative px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl transform cursor-pointer text-center overflow-hidden"
                        style={{ background: gradientBg }}
                      >
                        <span className="relative z-10 flex items-center gap-3">
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
                        className="group/primary relative px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl transform cursor-pointer text-center overflow-hidden"
                        style={{ background: gradientBg }}
                      >
                        <span className="relative z-10 flex items-center gap-3">
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
                  <div className="flex items-center gap-4">
                    <div
                      className="w-px h-6 opacity-30"
                      style={{ background: neutralColor }}
                    />
                    <>
                      {header_cta_secondary_url &&
                      header_cta_secondary_url !== "#login" ? (
                        <a
                          href={header_cta_secondary_url}
                          className="group/secondary px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2 border"
                          style={{
                            borderColor: `${primaryColor}20`,
                            color: primaryColor,
                            backgroundColor: `${primaryColor}05`,
                          }}
                        >
                          {header_cta_secondary}
                          <EasyIcon
                            icon="FiPlay"
                            size={18}
                            color={primaryColor}
                          />
                        </a>
                      ) : (
                        <button
                          onClick={onShowLogin}
                          className="group/secondary px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-2 border"
                          style={{
                            borderColor: `${primaryColor}20`,
                            color: primaryColor,
                            backgroundColor: `${primaryColor}05`,
                          }}
                        >
                          {header_cta_secondary}
                          <EasyIcon
                            icon="FiPlay"
                            size={18}
                            color={primaryColor}
                          />
                        </button>
                      )}
                    </>
                  </div>
                )}
              </div>

              {/* Trial Info */}
              <div className="animate-fadeInUp animation-delay-800">
                <div
                  className="flex items-center justify-center lg:justify-start gap-4 text-sm"
                  style={{ color: neutralColor }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: accentColor }}
                    />
                    Free 14-day trial
                  </div>
                  <div
                    className="w-px h-4 opacity-30"
                    style={{ background: neutralColor }}
                  />
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: accentColor }}
                    />
                    No credit card required
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp animation-delay-1000">
                {[
                  { value: "2,476", label: "engagement", icon: "FiMail" },
                  {
                    value: "AI Automation",
                    label: "Save & Work Smart",
                    icon: "FiZap",
                  },
                  { value: "99.9%", label: "Uptime", icon: "FiServer" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center lg:text-left group/stat p-4 rounded-2xl transition-all duration-300 hover:scale-105"
                    style={{ background: subtleGradient }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}20 0%, ${accentColor}20 100%)`,
                        }}
                      >
                        <EasyIcon
                          icon={stat.icon}
                          size={18}
                          color={primaryColor}
                        />
                      </div>
                      <div
                        className="text-lg font-bold"
                        style={{ color: textColor }}
                      >
                        {stat.value}
                      </div>
                    </div>
                    <div
                      className="text-xs uppercase tracking-wider font-medium"
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
            <div className="relative w-full max-w-2xl">
              {rightImageUrl ? (
                <div className="relative group animate-fadeInUp animation-delay-500">
                  {/* Main Image Container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <img
                      src={rightImageUrl}
                      alt="Header Visual"
                      className="w-full h-auto object-cover"
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}10 0%, ${accentColor}05 100%)`,
                      }}
                    />
                  </div>

                  {/* Floating Cards */}
                  <div
                    className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl flex flex-col items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}10 100%)`,
                      border: `1px solid ${primaryColor}20`,
                    }}
                  >
                    <EasyIcon icon="FiMail" size={24} color={primaryColor} />
                    <span
                      className="text-sm font-semibold mt-2"
                      style={{ color: textColor }}
                    >
                      Email Campaigns
                    </span>
                    <span className="text-xs" style={{ color: accentColor }}>
                      +2476 engagement
                    </span>
                  </div>

                  <div
                    className="absolute -bottom-6 -left-6 w-36 h-36 rounded-2xl flex flex-col items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-2 backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}15 0%, ${primaryColor}10 100%)`,
                      border: `1px solid ${accentColor}20`,
                    }}
                  >
                    <EasyIcon icon="FiZap" size={28} color={accentColor} />
                    <span
                      className="text-sm font-semibold mt-2"
                      style={{ color: textColor }}
                    >
                      AI Automation
                    </span>
                    <span
                      className="text-xs text-center"
                      style={{ color: primaryColor }}
                    >
                      Save & Work Smart
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="group w-full h-96 rounded-3xl flex flex-col items-center justify-center shadow-2xl p-8 text-center transition-all duration-500 hover:scale-105 relative overflow-hidden"
                  style={{
                    background: subtleGradient,
                    border: `2px dashed ${primaryColor}20`,
                  }}
                >
                  <EasyIcon
                    icon="FiImage"
                    size={64}
                    color={primaryColor}
                    className="mb-4 opacity-30 transition-all duration-500 group-hover:scale-110"
                  />
                  <p
                    className="transition-colors duration-500"
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

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-sm uppercase tracking-wider"
            style={{ color: neutralColor }}
          >
            Scroll to explore
          </span>
          <div
            className="w-px h-8 bg-gradient-to-b"
            style={{
              background: `linear-gradient(to bottom, ${primaryColor}, transparent)`,
            }}
          />
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </header>
  );
};

export default Header;
