import React from "react";
import type { FeaturesPageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";

interface ESignatureLayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const ESignatureLayout: React.FC<ESignatureLayoutProps> = ({ data }) => {
  return (
    <div className="esignature-layout">
      {/* Hero Section - Professional & Trustworthy */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
                Secure & Legal
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {data.header_title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {data.header_description}
              </p>
              <div className="flex gap-4">
                <a
                  href={data.header_cta_url}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  {data.header_cta_text}
                </a>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Watch Demo
                </button>
              </div>
            </div>
            {data.header_image && (
              <div className="animate-slideInRight">
                <img
                  src={getFullImageUrl(data.header_image.url)}
                  alt={data.header_title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid - Clean & Organized */}
      {data.features && data.features.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {data.features_intro_heading || "Powerful Features"}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {data.features_intro_description}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {data.features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${feature.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits - Trust Indicators */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {data.benefits_heading || "Why Choose Us"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.benefits.map((benefit) => (
                <div key={benefit.id} className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {benefit.stats}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {data.primary_cta_heading && (
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              {data.primary_cta_heading}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {data.primary_cta_description}
            </p>
            <a
              href={data.primary_cta_button_url}
              className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl"
            >
              {data.primary_cta_button_text}
            </a>
          </div>
        </section>
      )}
    </div>
  );
};
