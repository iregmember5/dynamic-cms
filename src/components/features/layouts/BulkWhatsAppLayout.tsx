import React from "react";
import type { FeaturesPageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";

interface BulkWhatsAppLayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const BulkWhatsAppLayout: React.FC<BulkWhatsAppLayoutProps> = ({
  data,
}) => {
  return (
    <div className="bulk-whatsapp-layout">
      {/* Hero - WhatsApp Green Theme */}
      <section className="relative bg-[#25D366] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">💬</div>
          <div className="absolute bottom-10 right-10 text-9xl">📱</div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur rounded-full">
              <span className="text-3xl">💚</span>
              <span className="font-bold text-lg">WhatsApp Business API</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
              {data.header_title}
            </h1>
            <p className="text-2xl opacity-95 max-w-2xl mx-auto">
              {data.header_description}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href={data.header_cta_url}
                className="px-10 py-5 bg-white text-[#25D366] rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                {data.header_cta_text}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Chat Bubble Style */}
      {data.features && data.features.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                {data.features_intro_heading || "Powerful Features"}
              </h2>
              <p className="text-xl text-gray-600">
                {data.features_intro_description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {data.features.map((feature, idx) => (
                <div
                  key={feature.id}
                  className={`flex gap-4 ${
                    idx % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-md p-6 rounded-2xl shadow-lg ${
                      idx % 2 === 0
                        ? "bg-white rounded-tl-none"
                        : "bg-[#DCF8C6] rounded-tr-none"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${feature.icon} text-xl text-white`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits - Icon Cards */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {data.benefits_heading || "Why WhatsApp Marketing?"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.benefits.map((benefit) => (
                <div key={benefit.id} className="text-center p-6">
                  <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className={`${benefit.icon} text-4xl text-white`}></i>
                  </div>
                  <div className="text-4xl font-bold text-[#25D366] mb-3">
                    {benefit.stats}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases - Card Grid */}
      {data.card_sections && data.card_sections.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {data.card_sections_heading || "Use Cases"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.card_sections.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  {card.card_image && (
                    <img
                      src={getFullImageUrl(card.card_image.url)}
                      alt={card.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    {card.button_url && (
                      <a
                        href={card.button_url}
                        className="inline-flex items-center text-[#25D366] font-semibold hover:underline"
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

      {/* CTA - WhatsApp Style */}
      {data.primary_cta_heading && (
        <section className="py-24 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl mb-6">💬</div>
              <h2 className="text-5xl font-bold mb-6">
                {data.primary_cta_heading}
              </h2>
              <p className="text-2xl mb-10 opacity-95">
                {data.primary_cta_description}
              </p>
              <a
                href={data.primary_cta_button_url}
                className="inline-block px-12 py-6 bg-white text-[#25D366] rounded-full font-bold text-xl hover:scale-110 transition-transform shadow-2xl"
              >
                {data.primary_cta_button_text}
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
