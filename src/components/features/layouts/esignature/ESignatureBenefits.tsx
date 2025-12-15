import React from 'react';

export const ESignatureBenefits: React.FC<{ benefits: any[]; heading?: string; description?: string }> = ({ benefits, heading, description }) => (
  <section className="py-24 bg-gradient-to-br from-indigo-100 to-blue-100">
    <div className="container mx-auto px-4">
      {heading && <h2 className="text-5xl font-bold text-center mb-4 text-indigo-900">{heading}</h2>}
      {description && <p className="text-xl text-center text-gray-700 mb-16 max-w-4xl mx-auto whitespace-pre-line">{description}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {benefits.map((b: any, i: number) => (
          <div key={i} className="bg-white p-6 rounded-2xl text-center shadow-xl hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">📋</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{b.title}</h3>
            <p className="text-gray-600">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
