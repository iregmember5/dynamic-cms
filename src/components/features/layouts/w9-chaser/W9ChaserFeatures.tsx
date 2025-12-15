import React from 'react';

export const W9ChaserFeatures: React.FC<{ features: any[]; heading?: string; description?: string }> = ({ features, heading, description }) => (
  <section className="py-24 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      {heading && <h2 className="text-5xl font-bold text-center mb-4">{heading}</h2>}
      {description && <p className="text-xl text-center text-gray-300 mb-16 max-w-4xl mx-auto">{description}</p>}
      <div className="space-y-8 max-w-5xl mx-auto">
        {features.map((f: any, i: number) => (
          <div key={i} className="bg-gray-800 border-l-4 border-green-500 p-8 rounded-r-2xl hover:bg-gray-750 transition-colors">
            <h3 className="text-3xl font-bold mb-4 text-green-400">{f.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
