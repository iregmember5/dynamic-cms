import React from "react";
import type { FeaturesPageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";

interface BulkEmailLayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const BulkEmailLayout: React.FC<BulkEmailLayoutProps> = ({ data }) => {
  return (
    <div className="bulk-email-layout">
      {/* Hero - Email Marketing Theme */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur rounded-full">
                <span className="text-2xl">✉️</span>
                <span className="font-semibold">Email Marketing Platform</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
                {data.header_title}
              </h1>
              <p className="text-2xl opacity-95 leading-relaxed">
                {data.header_description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={data.header_cta_url}
                  className="px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  {data.header_cta_text}
                </a>
                <button className="px-10 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition">
                  View Demo
                </button>
              </div>
            </div>
            {data.header_image && (
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-30"></div>
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

      {/* Features - Email Card Style */}
      {data.features && data.features.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                {data.features_intro_heading || "Everything You Need"}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.features_intro_description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-indigo-300 transition-all hover:shadow-xl"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl opacity-10 group-hover:opacity-20 transition"></div>
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                      <i className={`${feature.icon} text-2xl text-white`}></i>
                    </div>
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

      {/* Stats Section */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              {data.benefits_heading || "Trusted by Thousands"}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {data.benefits.map((benefit) => (
                <div key={benefit.id} className="text-center">
                  <div className="text-6xl font-extrabold mb-3">
                    {benefit.stats}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm opacity-90">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works - Visual Steps */}
      {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
              {data.how_it_works_heading || "How It Works"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.how_it_works_steps.map((step, idx) => (
                <div key={idx} className="relative">
                  {idx < data.how_it_works_steps!.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-indigo-300 to-purple-300 -translate-x-1/2"></div>
                  )}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
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
        </section>
      )}

      {/* Testimonials */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {data.testimonials_heading || "What Our Customers Say"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonial.photo && (
                      <img
                        src={getFullImageUrl(testimonial.photo.url)}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full border-2 border-indigo-200"
                      />
                    )}
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.title} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {data.primary_cta_heading && (
        <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-6xl font-bold mb-6">
                {data.primary_cta_heading}
              </h2>
              <p className="text-2xl mb-10 opacity-95">
                {data.primary_cta_description}
              </p>
              <a
                href={data.primary_cta_button_url}
                className="inline-block px-14 py-6 bg-white text-indigo-600 rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-2xl"
              >
                {data.primary_cta_button_text}
              </a>
              <p className="mt-8 text-lg opacity-90">
                ✨ No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
