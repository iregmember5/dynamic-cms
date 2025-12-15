import React from 'react';

export const ESignatureFeatures: React.FC<{ features: any[]; heading?: string; description?: string }> = ({ features, heading, description }) => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      {heading && <h2 className="text-5xl font-bold text-center mb-4 text-blue-900">{heading}</h2>}
      {description && <p className="text-xl text-center text-gray-600 mb-16 max-w-4xl mx-auto">{description}</p>}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((f: any, i: number) => (
          <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">✓</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{f.title}</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
