import React from "react";
import type { Theme } from "../../../../types/features-page";
import EasyIcon from "../../../landingpage/IconRenderer";

interface DynamicListBlockProps {
  value: any;
  theme: Theme;
  getFullImageUrl: (url: string) => string;
}

export const DynamicListBlock: React.FC<DynamicListBlockProps> = ({
  value,
  theme,
  getFullImageUrl,
}) => {
  if (!value || !value.items) return null;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-6 mb-16">
          {value.heading && (
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: theme.textColor }}>
              {value.heading}
            </h2>
          )}
          {value.description && (
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: theme.neutralColor }}>
              {value.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {value.items.map((item: any, idx: number) => {
            if (item.type === "feature") {
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  {item.value.icon && (
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      <EasyIcon icon={item.value.icon} size={32} color={theme.primaryColor} />
                    </div>
                  )}
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: theme.textColor }}
                  >
                    {item.value.title}
                  </h3>
                  <p style={{ color: theme.neutralColor }}>
                    {item.value.description}
                  </p>
                </div>
              );
            }

            if (item.type === "benefit") {
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: theme.textColor }}
                  >
                    {item.value.title}
                  </h3>
                  {item.value.stat && (
                    <div
                      className="text-3xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: theme.primaryColor }}
                    >
                      {item.value.stat}
                    </div>
                  )}
                  <p style={{ color: theme.neutralColor }}>
                    {item.value.description}
                  </p>
                </div>
              );
            }

            if (item.type === "custom_item") {
              return (
                <div key={idx} className="group">
                  <div
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                    style={{ borderColor: theme.primaryColor + '20' }}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <h3
                        className="text-xl font-semibold transition-colors"
                        style={{ color: theme.textColor }}
                      >
                        {item.title}
                      </h3>
                      <div
                        className="leading-relaxed"
                        style={{ color: theme.neutralColor }}
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
};
