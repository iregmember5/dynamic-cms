import React from 'react';

export const W9ChaserBenefits: React.FC<{ benefits: any[]; heading?: string; description?: string }> = ({ benefits, heading, description }) => (
  <section className="py-24 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
    <div className="container mx-auto px-4">
      {heading && <h2 className="text-5xl font-bold text-center mb-4">{heading}</h2>}
      {description && <p className="text-xl text-center text-green-100 mb-16 max-w-4xl mx-auto">{description}</p>}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {benefits.map((b: any, i: number) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 hover:border-green-400 transition-colors">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold mb-3 text-green-300">{b.title}</h3>
            <p className="text-green-100">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
