import React from 'react';
import { getFullImageUrl } from '../../utils/imageUtils';

export const ESignatureHowItWorks: React.FC<{ steps: any[]; heading?: string; description?: string }> = ({ steps, heading, description }) => (
  <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="container mx-auto px-4">
      {heading && <h2 className="text-5xl font-bold text-center mb-4 text-blue-900">{heading}</h2>}
      {description && <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">{description}</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step: any, i: number) => {
          const content = step.content?.[0] || {};
          return (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6">{step.step_number}</div>
              {step.image && <img src={getFullImageUrl(step.image.url)} alt={content.title} className="w-full h-48 object-cover rounded-xl mb-6" />}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{content.title}</h3>
              <p className="text-gray-600 leading-relaxed">{content.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
