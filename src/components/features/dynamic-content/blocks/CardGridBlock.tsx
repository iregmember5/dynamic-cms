import React from "react";
import type { Theme } from "../../../../types/features-page";

/* eslint-disable @typescript-eslint/no-unused-vars */

interface CardGridBlockProps {
  value: any;
  theme: Theme;
  getFullImageUrl: (url: string) => string;
}

export const CardGridBlock: React.FC<CardGridBlockProps> = ({
  value,
  theme: _theme,
  getFullImageUrl,
}) => {
  if (!value || !value.cards) return null;

  const columns = parseInt(value.columns) || 3;
  const gridCols =
    {
      1: "grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-2 lg:grid-cols-3",
      4: "md:grid-cols-2 lg:grid-cols-4",
    }[columns] || "md:grid-cols-3";

  return (
    <section className="py-20 sm:py-28 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        {value.heading && (
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-theme-text">
            {value.heading}
          </h2>
        )}
        {value.subheading && (
          <p className="text-xl text-center mb-12 lg:mb-20 text-theme-neutral max-w-3xl mx-auto">
            {value.subheading}
          </p>
        )}

        <div className={`grid ${gridCols} gap-8`}>
          {value.cards.map((card: any, idx: number) => {
            const getCardImage = () => {
              if (card.card_content?.card_image) {
                const img = card.card_content.card_image;
                if (typeof img === "string") return img;
                if (img?.url) return getFullImageUrl(img.url);
              }
              return null;
            };

            const cardImageUrl = getCardImage();

            const title = card.custom_title || card.card_content?.title || "";
            let icon = "";
            let text = title;

            if (title.startsWith("❌")) {
              icon = "❌";
              text = title.substring(1).trim();
            } else if (title.startsWith("✔️")) {
              icon = "✔️";
              text = title.substring(1).trim();
            }

            const cardBaseClasses =
              "rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 flex flex-col";
            
            let cardStyle = "bg-white dark:bg-gray-900";
            if (icon === "❌") {
              cardStyle = "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800";
            } else if (icon === "✔️") {
              cardStyle = "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800";
            }

            return (
              <div
                key={idx}
                className={`${cardBaseClasses} ${cardStyle}`}
              >
                {cardImageUrl && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={cardImageUrl}
                      alt={text}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 flex-grow">
                  <div className="flex items-start">
                    {icon && (
                      <span className="text-3xl mr-4 mt-1">{icon}</span>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-theme-text">
                        {text}
                      </h3>
                      {card.custom_description || card.card_content?.description ? (
                        <p className="text-theme-neutral">
                          {card.custom_description ||
                            card.card_content?.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
