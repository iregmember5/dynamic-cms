import React from "react";
import type { FeaturesPageData, Theme } from "../../../types/features-page";
import { getFullImageUrl } from "../utils/imageUtils";

/* eslint-disable @typescript-eslint/no-unused-vars */

interface ProblemSolutionSectionProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({
  data,
}) => {
  if (!data.problem_solution_introduction && !data.problem_solution_stream) return null;

  return (
    <section
      className="py-16 sm:py-24"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <style>{`
        .solution-border { border-color: var(--accent-color); }
        .solution-bg { background-color: color-mix(in srgb, var(--accent-color) 20%, transparent); }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fadeInUp"
            style={{ color: "var(--text-color)" }}
          >
            {data.problem_solution_heading || "Problem & Solution"}
          </h2>
          {data.problem_solution_introduction && (
            <p
              className="text-xl max-w-3xl mx-auto animate-fadeInUp animation-delay-200"
              style={{ color: "var(--neutral-color)" }}
            >
              {data.problem_solution_introduction}
            </p>
          )}
        </div>

        {data.problem_solution_stream && data.problem_solution_stream.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {data.problem_solution_stream.map((item: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="prose prose-lg" style={{ color: "var(--neutral-color)" }}>
                  {item.value && <div dangerouslySetInnerHTML={{ __html: JSON.stringify(item.value) }} />}
                </div>
              </div>
            ))}
          </div>
        )}

        {data.problem_solution_image && (
          <div className="mt-12 max-w-4xl mx-auto animate-fadeInUp">
            <img
              src={getFullImageUrl(data.problem_solution_image.url)}
              alt={data.problem_solution_image.title}
              className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            />
          </div>
        )}
      </div>
    </section>
  );
};
