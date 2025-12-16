import React from 'react';
import { getFullImageUrl } from '../../utils/imageUtils';

export const W9ChaserFeatures: React.FC<{ features: any[]; heading?: string; description?: string }> = ({ features, heading, description }) => (
  <section className="py-24 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      {heading && <h2 className="text-5xl font-bold text-center mb-4">{heading}</h2>}
      {description && <p className="text-xl text-center text-gray-300 mb-16 max-w-4xl mx-auto">{description}</p>}
      <div className="space-y-20">
        {features.map((f: any, i: number) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
              <div className="lg:w-1/2">
                {f.image ? (
                  <img src={getFullImageUrl(f.image.url)} alt={f.title} className="w-full rounded-2xl shadow-2xl" />
                ) : (
                  <div className="w-full h-80 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-500">Image not available</p>
                  </div>
                )}
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-green-400">{f.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{f.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
