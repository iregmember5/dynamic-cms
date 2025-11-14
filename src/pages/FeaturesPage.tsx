import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { FeaturesPageData } from "../types/landing";
import { fetchFeaturesPageById } from "../types/landing";
import EasyIcon from "../components/IconRenderer";

interface FeaturesPageProps {
  pageId: number;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ pageId }) => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<FeaturesPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // In a real app, you'd fetch by slug, but for now we'll use ID
        // You may need to modify your API to support slug-based lookup
        const pageData = await fetchFeaturesPageById(pageId);
        setData(pageData);

        // Set meta tags
        if (pageData.seo_title || pageData.title) {
          document.title = pageData.seo_title || pageData.title;
        }

        setError(null);
      } catch (err) {
        console.error("Failed to load features page:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load page data"
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug, pageId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-solid border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-gray-600 text-xl font-medium">
            Loading features...
          </p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 mb-6">
            <svg
              className="w-20 h-20 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Unable to Load Page
          </h2>
          <p className="text-gray-600 mb-8 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const primaryColor = data.color_theme?.primary_color || "#3B82F6";
  const accentColor = data.color_theme?.accent_color || "#10B981";
  const textColor = data.color_theme?.text_color || "#1F2937";
  const neutralColor = data.color_theme?.neutral_color || "#6B7280";
  const bgColor =
    data.color_theme?.background_color === "#6B7280"
      ? "#FFFFFF"
      : data.color_theme?.background_color || "#FFFFFF";

  const gradientBg = `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`;
  const gradientHover = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;

  const getFullImageUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `https://esign-admin.signmary.com${url}`;
  };

  return (
    <div className="features-page" style={{ backgroundColor: bgColor }}>
      {/* Apply color theme */}
      <style>{`
        :root {
          --primary-color: ${primaryColor};
          --secondary-color: ${data.color_theme?.secondary_color || "#1E40AF"};
          --accent-color: ${accentColor};
          --neutral-color: ${neutralColor};
          --background-color: ${bgColor};
          --text-color: ${textColor};
        }
        
        body {
          background-color: var(--background-color) !important;
          color: var(--text-color);
        }
        
        .features-page {
          background-color: var(--background-color);
          min-height: 100vh;
        }
        
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
      `}</style>

      {/* Header Section */}
      <section
        className="relative py-20 sm:py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}10 0%, ${accentColor}10 100%)`,
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: gradientBg }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: gradientHover }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp"
              style={{ color: textColor }}
            >
              {data.header_title}
            </h1>
            <p
              className="text-xl sm:text-2xl mb-8 animate-fadeInUp animation-delay-200"
              style={{ color: neutralColor }}
            >
              {data.header_subtitle}
            </p>
            {data.header_description && (
              <p
                className="text-lg mb-10 max-w-3xl mx-auto animate-fadeInUp"
                style={{ color: neutralColor, animationDelay: "0.3s" }}
              >
                {data.header_description}
              </p>
            )}
            {data.header_cta_text && (
              <a
                href={data.header_cta_url}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group animate-fadeInUp"
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Features Overview Section */}
      {data.features && data.features.length > 0 && (
        <section
          className="py-16 sm:py-24"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              {data.features_intro_heading && (
                <div className="relative inline-block mb-6">
                  <h2
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10"
                    style={{ color: textColor }}
                  >
                    {data.features_intro_heading}
                  </h2>
                  <div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full"
                    style={{
                      background: gradientBg,
                      width: "80%",
                      boxShadow: `0 4px 12px ${primaryColor}40`,
                    }}
                  />
                </div>
              )}
              {data.features_intro_description && (
                <p
                  className="text-lg sm:text-xl leading-relaxed"
                  style={{ color: neutralColor }}
                >
                  {data.features_intro_description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-white overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    border: `2px solid transparent`,
                    backgroundImage: `linear-gradient(white, white), ${gradientBg}`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: gradientBg }}
                  />

                  {feature.icon && (
                    <div className="relative mb-6">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}15 0%, ${accentColor}15 100%)`,
                        }}
                      >
                        <EasyIcon
                          icon={feature.icon}
                          size={28}
                          color={primaryColor}
                          className="relative z-10 transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  )}

                  <h3
                    className="text-xl sm:text-2xl font-bold mb-4 transition-all duration-300 relative group-hover:scale-105"
                    style={{ color: textColor }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="leading-relaxed relative z-10"
                    style={{ color: neutralColor }}
                  >
                    {feature.description}
                  </p>

                  <div className="relative mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                      style={{
                        background: gradientBg,
                        boxShadow: `0 0 12px ${primaryColor}60`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {data.features_cta_heading && (
        <section
          className="py-20 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}95 0%, ${accentColor}95 100%)`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {data.features_cta_heading}
              </h2>
              {data.features_cta_description && (
                <p className="text-xl text-white/90 mb-10">
                  {data.features_cta_description}
                </p>
              )}
              {data.features_cta_button_text && (
                <a
                  href={data.features_cta_button_url}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ color: primaryColor }}
                >
                  {data.features_cta_button_text}
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FeaturesPage;
