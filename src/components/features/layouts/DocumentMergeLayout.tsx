import React from "react";
import type { FeaturesPageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";

interface DocumentMergeLayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const DocumentMergeLayout: React.FC<DocumentMergeLayoutProps> = ({
  data,
}) => {
  return (
    <div className="document-merge-layout">
      {/* Hero - Professional Document Theme */}
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-2xl">📄</span>
                  <span className="font-semibold">Document Automation</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {data.header_title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {data.header_description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={data.header_cta_url}
                    className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl"
                  >
                    {data.header_cta_text}
                  </a>
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition">
                    Learn More
                  </button>
                </div>
              </div>
              {data.header_image && (
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-3xl"></div>
                  <img
                    src={getFullImageUrl(data.header_image.url)}
                    alt={data.header_title}
                    className="relative rounded-2xl shadow-2xl border border-white/10"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features - Document Grid */}
      {data.features && data.features.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                {data.features_intro_heading || "Powerful Document Features"}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.features_intro_description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {data.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center">
                      <i className={`${feature.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works - Process Flow */}
      {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
              {data.how_it_works_heading || "Simple 3-Step Process"}
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {data.how_it_works_steps.map((step, idx) => (
                  <div key={idx} className="relative">
                    {idx < data.how_it_works_steps!.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-slate-300 -translate-x-1/2 z-0">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-400 rounded-full"></div>
                      </div>
                    )}
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                      <div className="w-14 h-14 bg-slate-800 text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-6">
                        {idx + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits - Icon List */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {data.benefits_heading || "Key Benefits"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {data.benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <i
                        className={`${benefit.icon} text-xl text-green-600`}
                      ></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                    {benefit.stats && (
                      <div className="mt-2 text-2xl font-bold text-slate-800">
                        {benefit.stats}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      {data.card_sections && data.card_sections.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {data.card_sections_heading || "Use Cases"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.card_sections.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  {card.card_image && (
                    <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                      <img
                        src={getFullImageUrl(card.card_image.url)}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    {card.button_url && (
                      <a
                        href={card.button_url}
                        className="inline-flex items-center text-slate-800 font-semibold hover:underline"
                      >
                        {card.button_text || "Learn More"} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - Professional */}
      {data.primary_cta_heading && (
        <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-6">
                {data.primary_cta_heading}
              </h2>
              <p className="text-2xl mb-10 text-gray-300">
                {data.primary_cta_description}
              </p>
              <a
                href={data.primary_cta_button_url}
                className="inline-block px-12 py-5 bg-white text-slate-900 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-2xl"
              >
                {data.primary_cta_button_text}
              </a>
              <p className="mt-8 text-gray-400">
                Trusted by 10,000+ businesses worldwide
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
