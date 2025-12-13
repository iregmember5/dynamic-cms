import React from "react";
import type { FeaturesPageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";

interface W9ChaserLayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const W9ChaserLayout: React.FC<W9ChaserLayoutProps> = ({ data }) => {
  return (
    <div className="w9-chaser-layout">
      {/* Hero - Bold & Action-Oriented */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight animate-fadeInUp">
              {data.header_title}
            </h1>
            <p className="text-2xl opacity-95 animate-fadeInUp animation-delay-200">
              {data.header_description}
            </p>
            <div className="flex justify-center gap-4 animate-fadeInUp animation-delay-400">
              <a
                href={data.header_cta_url}
                className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                {data.header_cta_text}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Problem/Solution - Side by Side */}
      {(data.problem_description || data.solution_description) && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-red-50 p-10 rounded-2xl">
                <div className="text-red-600 text-5xl mb-4">❌</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  The Problem
                </h3>
                <p className="text-lg text-gray-700">
                  {data.problem_description}
                </p>
              </div>
              <div className="bg-green-50 p-10 rounded-2xl">
                <div className="text-green-600 text-5xl mb-4">✅</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Solution
                </h3>
                <p className="text-lg text-gray-700">
                  {data.solution_description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features - Card Style */}
      {data.features && data.features.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
              {data.features_intro_heading || "Features That Save Time"}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature) => (
                <div
                  key={feature.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials - Carousel Style */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white/10 backdrop-blur p-8 rounded-2xl"
                >
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    {testimonial.photo && (
                      <img
                        src={getFullImageUrl(testimonial.photo.url)}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm opacity-80">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - Urgent */}
      {data.primary_cta_heading && (
        <section className="py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-6">
              {data.primary_cta_heading}
            </h2>
            <p className="text-2xl mb-10 opacity-95">
              {data.primary_cta_description}
            </p>
            <a
              href={data.primary_cta_button_url}
              className="inline-block px-12 py-6 bg-white text-purple-600 rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-2xl"
            >
              {data.primary_cta_button_text} →
            </a>
          </div>
        </section>
      )}
    </div>
  );
};
