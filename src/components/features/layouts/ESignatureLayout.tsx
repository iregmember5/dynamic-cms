import React from "react";
import {
  type FeaturesPageData,
  type Theme,
} from "../../../types/features-page";
import { HeaderSection } from "../sections/HeaderSection";
import { EnhancedFeatures } from "../sections/EnhancedFeatures";
import { ESignatureHowItWorks } from "./esignature/ESignatureHowItWorks";
import { EnhancedBenefits } from "../sections/EnhancedBenefits";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { FAQSection } from "../sections/FAQSection";
import { CTASection } from "../sections/CTASection";

interface LayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const ESignatureLayout: React.FC<LayoutProps> = ({ data, theme }) => (
  <>
    <HeaderSection data={data} theme={theme} />
    {data.features && data.features.length > 0 && (
      <EnhancedFeatures
        features={data.features}
        theme={theme}
        heading={data.features_intro_heading}
        description={data.features_intro_description}
      />
    )}
    {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
      <ESignatureHowItWorks
        steps={data.how_it_works_steps}
        heading={data.how_it_works_heading}
        description={data.how_it_works_description}
      />
    )}
    {data.benefits && data.benefits.length > 0 && (
      <EnhancedBenefits
        benefits={data.benefits}
        theme={theme}
        heading={data.benefits_heading}
        description={data.benefits_description}
      />
    )}
    {data.testimonials && data.testimonials.length > 0 && (
      <TestimonialsSection
        testimonials={data.testimonials}
        theme={theme}
        heading={data.testimonials_heading}
        description={data.testimonials_description}
      />
    )}
    {data.faqs && data.faqs.length > 0 && (
      <FAQSection
        faqs={data.faqs}
        theme={theme}
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
