import React from "react";
import { getFullImageUrl } from "../../utils/imageUtils";

export const ESignatureHowItWorks: React.FC<{
  steps: any[];
  heading?: string;
  description?: string;
}> = ({ steps, heading, description }) => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    {/* Sophisticated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60"></div>

    {/* Animated flowing lines in background */}
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q400,50 800,100 T1600,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="M0,100 Q400,50 800,100 T1600,100;
                    M0,100 Q400,150 800,100 T1600,100;
                    M0,100 Q400,50 800,100 T1600,100"
          />
        </path>
      </svg>
    </div>

    <div className="container mx-auto px-6 lg:px-8 relative z-10">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        {heading && (
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent">
              {heading}
            </h2>
          </div>
        )}
        {description && (
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Steps grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {steps.map((step: any, i: number) => {
          const content = step.content?.[0] || {};

          return (
            <div
              key={i}
              className="group relative"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Connecting line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-10 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 -ml-2 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
                </div>
              )}

              {/* Video placed outside of card */}
              {step.video && step.video.video_file_url && (
                <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <video 
                    src={getFullImageUrl({url: step.video.video_file_url})}
                    className="w-full h-48 object-cover"
                    controls
                  />
                </div>
              )}

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 h-full">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-indigo-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:via-indigo-50/30 group-hover:to-blue-50/50 transition-all duration-500"></div>

                <div className="relative z-10 p-6">
                  {/* Step number with elegant design */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <span className="text-xl font-bold text-white">
                          {step.step_number}
                        </span>
                      </div>
                    </div>

                    {/* Step indicator dots */}
                    <div className="flex gap-1.5">
                      {[...Array(steps.length)].map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === i
                              ? "bg-blue-500 w-6"
                              : idx < i
                              ? "bg-blue-300"
                              : "bg-gray-200"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Image with elegant frame (only shown if no video) */}
                  {!step.video?.video_file_url && step.image && (
                    <div className="mb-4 relative overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 group-hover:opacity-0 transition-opacity"></div>
                      <img
                        src={getFullImageUrl(step.image.url)}
                        alt={content.title}
                        className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-900 transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {content.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>Step {step.step_number}</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl text-white shadow-2xl">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <p className="text-xl font-semibold">Ready to get started?</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:scale-105 hover:shadow-xl transition-all">
            Start Signing Now
          </button>
        </div>
      </div>
    </div>
  </section>
);