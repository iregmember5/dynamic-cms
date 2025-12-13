import React from "react";
import type { FeaturesPageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";

interface BulkSMSLayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const BulkSMSLayout: React.FC<BulkSMSLayoutProps> = ({ data }) => {
  return (
    <div className="bulk-sms-layout">
      {/* Hero - Mobile-First Design */}
      <section className="relative bg-gradient-to-br from-green-400 to-teal-600 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full">
                <span className="text-2xl">📱</span>
                <span className="font-semibold">SMS Marketing</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {data.header_title}
              </h1>
              <p className="text-xl opacity-95">{data.header_description}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={data.header_cta_url}
                  className="px-8 py-4 bg-white text-green-600 rounded-lg font-bold hover:shadow-2xl transition"
                >
                  {data.header_cta_text}
                </a>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition">
                  See Pricing
                </button>
              </div>
            </div>
            {data.header_image && (
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl"></div>
                <img
                  src={getFullImageUrl(data.header_image.url)}
                  alt={data.header_title}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {data.benefits.slice(0, 4).map((benefit) => (
                <div key={benefit.id}>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {benefit.stats}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {benefit.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features - Icon Grid */}
      {data.features && data.features.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {data.features_intro_heading || "Everything You Need"}
              </h2>
              <p className="text-xl text-gray-600">
                {data.features_intro_description}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                    <i
                      className={`${feature.icon} text-3xl text-green-600`}
                    ></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works - Timeline */}
      {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {data.how_it_works_heading || "How It Works"}
            </h2>
            <div className="max-w-4xl mx-auto">
              {data.how_it_works_steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 mb-12 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - Conversion Focused */}
      {data.primary_cta_heading && (
        <section className="py-20 bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-6">
                {data.primary_cta_heading}
              </h2>
              <p className="text-2xl mb-10 opacity-95">
                {data.primary_cta_description}
              </p>
              <a
                href={data.primary_cta_button_url}
                className="inline-block px-12 py-5 bg-white text-green-600 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
              >
                {data.primary_cta_button_text}
              </a>
              <p className="mt-6 text-sm opacity-80">
                No credit card required • Free trial
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
