import React from "react";
import {
  type FeaturesPageData,
  type Theme,
} from "../../../types/features-page";
import { DocumentMergeHeader } from "./document-merge/DocumentMergeHeader";
import { DocumentMergeHowItWorks } from "./document-merge/DocumentMergeHowItWorks";
import { DocumentMergeFeatures } from "./document-merge/DocumentMergeFeatures";
import { DocumentMergeBenefits } from "./document-merge/DocumentMergeBenefits";
import { CardSections } from "../sections/CardSections";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { DocumentMergeFAQ } from "./document-merge/DocumentMergeFAQ";
import { CTASection } from "../sections/CTASection";
import { DynamicContentRenderer } from "../dynamic-content/DynamicContentRenderer";
interface LayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const DocumentMergeLayout: React.FC<LayoutProps> = ({ data, theme }) => (
  <>
    <DocumentMergeHeader data={data} />
    {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
      <DocumentMergeHowItWorks
        steps={data.how_it_works_steps}
        heading={data.how_it_works_heading}
        description={data.how_it_works_description}
      />
    )}
    {data.features && data.features.length > 0 && (
      <DocumentMergeFeatures
        features={data.features}
        heading={data.features_intro_heading}
        description={data.features_intro_description}
      />
    )}
    {data.benefits && data.benefits.length > 0 && (
      <DocumentMergeBenefits
        benefits={data.benefits}
        heading={data.benefits_heading}
        description={data.benefits_description}
      />
    )}
    {/* DYNAMIC CONTENT */}
    {data.dynamic_content &&
      data.dynamic_content.length > 0 &&
      data.dynamic_content.map((block, index) => (
        <DynamicContentRenderer
          key={block.id || index}
          block={block}
          theme={theme}
        />
      ))}
    {data.card_sections && data.card_sections.length > 0 && (
      <CardSections
        cards={data.card_sections}
        theme={theme}
        heading={data.card_sections_heading}
        description={data.card_sections_description}
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
      <DocumentMergeFAQ
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
