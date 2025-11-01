import React, { useEffect, useState } from "react";
import { fetchLandingPageData, type LandingPageData } from "../types/landing";
import GlassNavbar from "../components/GlassNavbar";
import Header from "../components/Header";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import VideoSection from "../components/VideoSection";
import CardSections from "../components/CardSections";
import CTA from "../components/CTA";
import DynamicContentRenderer from "../components/DynamicContent";

const LandingPage: React.FC = () => {
  const [data, setData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const pageData = await fetchLandingPageData();
        setData(pageData);

        // Set dynamic meta tags
        if (pageData.meta_title || pageData.title) {
          document.title = pageData.meta_title || pageData.title;
        }

        // Set meta description
        const metaDescription = document.querySelector(
          'meta[name="description"]'
        );
        if (
          metaDescription &&
          (pageData.meta_description || pageData.header_description)
        ) {
          metaDescription.setAttribute(
            "content",
            pageData.meta_description || pageData.header_description || ""
          );
        }

        // Set OG image
        if (pageData.og_image) {
          let ogImage = document.querySelector('meta[property="og:image"]');
          if (!ogImage) {
            ogImage = document.createElement("meta");
            ogImage.setAttribute("property", "og:image");
            document.head.appendChild(ogImage);
          }
          ogImage.setAttribute("content", pageData.og_image.url);
        }

        setError(null);
      } catch (err) {
        console.error("Failed to load landing page:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load page data"
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-solid border-blue-500 border-t-transparent mb-4"></div>
          <p className="text-gray-600 text-xl font-medium">
            Loading amazing content...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
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

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600 text-xl">No page data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-page">
      {/* Apply color theme globally */}
      {data.color_theme && (
        <style>{`
          :root {
            --primary-color: ${data.color_theme.primary_color};
            --secondary-color: ${data.color_theme.secondary_color};
            --accent-color: ${data.color_theme.accent_color};
            --neutral-color: ${data.color_theme.neutral_color};
            --background-color: ${data.color_theme.background_color};
            --text-color: ${data.color_theme.text_color};
          }
        `}</style>
      )}

      {/* Navbar Section */}
      <GlassNavbar />

      {/* Header Section */}
      <Header data={data} />

      {/* Features Section */}
      {data.features && data.features.length > 0 && <Features data={data} />}

      {/* Video Section */}
      {data.video_section?.featured_video && <VideoSection data={data} />}

      {/* Benefits Section */}
      {data.benefits && data.benefits.length > 0 && <Benefits data={data} />}

      {/* Card Sections */}
      {data.card_sections?.cards && data.card_sections.cards.length > 0 && (
        <CardSections data={data} />
      )}

      {/* ===== DYNAMIC CONTENT SECTION ===== */}
      {data.dynamic_content && data.dynamic_content.length > 0 && (
        <section
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundColor: data.color_theme?.background_color || "#FFFFFF",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                Dynamic Content
              </div>
            </div>
            {data.dynamic_content.map((block) => (
              <DynamicContentRenderer key={block.id} block={block} />
            ))}
          </div>
        </section>
      )}
      {/* ===== END DYNAMIC CONTENT SECTION ===== */}

      {/* Testimonials Section */}
      {data.testimonials && data.testimonials.length > 0 && (
        <Testimonials data={data} />
      )}

      {/* CTA Section */}
      {(data.cta_head || data.cta_introduction || data.cta_primary_text) && (
        <CTA data={data} />
      )}

      {/* Footer */}
      <footer
        className="py-12 text-center border-t-2"
        style={{
          backgroundColor: data.color_theme?.background_color || "#FFFFFF",
          borderColor: data.color_theme?.neutral_color + "30" || "#6B728030",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <p
            className="text-lg"
            style={{ color: data.color_theme?.neutral_color || "#6B7280" }}
          >
            © {new Date().getFullYear()} {data.title}. All rights reserved.
          </p>
          {data.allowed_frontends && data.allowed_frontends.length > 0 && (
            <p
              className="mt-2 text-sm"
              style={{ color: data.color_theme?.neutral_color || "#6B7280" }}
            >
              Powered by Dynamic CMS
            </p>
          )}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
