import React from 'react';
import { FeaturesPageData } from '../../../../types/features-page';
import { getFullImageUrl } from '../../utils/imageUtils';

export const ESignatureHeader: React.FC<{ data: FeaturesPageData }> = ({ data }) => (
  <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6">{data.header_title}</h1>
        <p className="text-2xl mb-4 text-blue-100">{data.header_subtitle}</p>
        {data.header_description && <p className="text-lg mb-10 text-blue-50">{data.header_description}</p>}
        {data.header_cta_text && <a href={data.header_cta_url || '#'} className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full text-xl font-bold hover:bg-blue-50 transition-colors shadow-2xl">{data.header_cta_text}</a>}
      </div>
      {data.header_image && <div className="mt-16 max-w-5xl mx-auto"><img src={getFullImageUrl(data.header_image.url)} alt={data.header_image.title} className="w-full rounded-3xl shadow-2xl" /></div>}
    </div>
  </section>
);
