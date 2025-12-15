import React from 'react';
import { getFullImageUrl } from '../../utils/imageUtils';

export const BulkWhatsAppHowItWorks: React.FC<{ steps: any[]; heading?: string; description?: string }> = ({ steps, heading, description }) => (
  <section className="py-24 bg-gradient-to-br from-green-50 to-teal-50">
    <div className="container mx-auto px-4">
      {heading && <h2 className="text-5xl font-bold text-center mb-4 text-green-900">{heading}</h2>}
      {description && <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">{description}</p>}
      <div className="max-w-4xl mx-auto space-y-8">
        {steps.map((step: any, i: number) => {
          const content = step.content?.[0] || {};
          return (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-xl flex items-center gap-8 hover:shadow-2xl transition-shadow">
              <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">{step.step_number}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{content.title}</h3>
                <p className="text-gray-600">{content.description}</p>
              </div>
              {step.image && <img src={getFullImageUrl(step.image.url)} alt={content.title} className="w-32 h-32 object-cover rounded-2xl" />}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
