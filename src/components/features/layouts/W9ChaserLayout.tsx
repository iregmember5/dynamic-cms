import React from "react";
import {
  type FeaturesPageData,
  type Theme,
} from "../../../types/features-page";
import { HeaderSection } from "../sections/HeaderSection";
import { ProblemSolutionSection } from "../sections/ProblemSolutionSection";
import { W9ChaserHowItWorks } from "./w9-chaser/W9ChaserHowItWorks";
import { W9ChaserBenefits } from "./w9-chaser/W9ChaserBenefits";
import { W9ChaserFeatures } from "./w9-chaser/W9ChaserFeatures";
import { W9ChaserFAQ } from "./w9-chaser/W9ChaserFAQ";
import { CTASection } from "../sections/CTASection";

interface LayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const W9ChaserLayout: React.FC<LayoutProps> = ({ data, theme }) => (
  <>
    <HeaderSection data={data} theme={theme} />
    {(data.problem_solution_heading || data.problem_solution_introduction) && (
      <ProblemSolutionSection data={data} theme={theme} />
    )}
    {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
      <W9ChaserHowItWorks
        steps={data.how_it_works_steps}
        heading={data.how_it_works_heading}
        description={data.how_it_works_description}
      />
    )}
    {data.benefits && data.benefits.length > 0 && (
      <W9ChaserBenefits
        benefits={data.benefits}
        heading={data.benefits_heading}
        description={data.benefits_description}
      />
    )}
    {data.features && data.features.length > 0 && (
      <W9ChaserFeatures
        features={data.features}
        heading={data.features_intro_heading}
        description={data.features_intro_description}
      />
    )}
    {data.faqs && data.faqs.length > 0 && (
      <W9ChaserFAQ
        faqs={data.faqs}
        heading={data.faq_section_heading}
        description={data.faq_section_description}
      />
    )}
    {data.primary_cta_sections &&
      data.primary_cta_sections.length > 0 &&
      data.primary_cta_sections.map((cta: any, i: number) => (
        <CTASection
          key={i}
          heading={cta.heading}
          description={cta.description}
          buttonText={cta.button_text}
          buttonUrl={cta.button_url}
          backgroundImage={cta.background_image}
          theme={theme}
          isPrimary={true}
        />
      ))}
  </>
);
