import React from "react";
import type { FeaturesPageData } from "../../../../types/features-page";
import { getFullImageUrl } from "../../utils/imageUtils";

export const BulkEmailHeader: React.FC<{ data: FeaturesPageData }> = ({
  data,
}) => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
    {/* Geometric background pattern */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="email-geometric" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="50" height="50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="25" cy="25" r="20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <path d="M0,0 L50,50 M50,0 L0,50" stroke="white" strokeWidth="0.5" opacity="0.15"/>
            <polygon points="75,25 85,40 65,40" fill="white" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#email-geometric)"/>
      </svg>
    </div>

    {/* Animated geometric shapes */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-orange-400/20 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full border-4 border-red-400/20 animate-pulse delay-700"></div>
      <div className="absolute bottom-32 left-40 w-36 h-36" style={{clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'}}>
        <div className="w-full h-full border-4 border-pink-400/20 animate-pulse delay-1000"></div>
      </div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-orange-300/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
    </div>

    <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <svg className="w-4 h-4 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-sm font-medium text-white">Bulk Email Campaign Solution</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-center">
          <span className="block text-white mb-2">{data.header_title}</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-center mb-6 text-orange-100 font-light leading-relaxed max-w-4xl mx-auto">
          {data.header_subtitle}
        </p>

        {data.header_description && (
          <p className="text-lg md:text-xl text-center mb-12 text-orange-200/80 max-w-3xl mx-auto leading-relaxed">
            {data.header_description}
          </p>
        )}

        {data.header_cta_text && (
          <div className="flex justify-center mb-16">
            <a
              href={data.header_cta_url || "#"}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-900 rounded-2xl text-lg font-bold overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">{data.header_cta_text}</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
        )}

        {data.header_image && (
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-3xl blur-2xl transform translate-y-8"></div>
            <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-3xl border border-white/10">
              <img src={getFullImageUrl(data.header_image.url)} alt={data.header_image.title} className="w-full rounded-2xl shadow-2xl ring-1 ring-white/20" />
            </div>
          </div>
        )}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0">
      <svg className="w-full h-24" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,64 C360,20 720,20 1080,64 C1440,108 1440,108 1440,108 L1440,120 L0,120 Z" fill="white" fillOpacity="1" />
      </svg>
    </div>
  </section>
);
