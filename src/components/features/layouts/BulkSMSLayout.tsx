import React from "react";
import {
  type FeaturesPageData,
  type Theme,
} from "../../../types/features-page";
import { BulkSMSHeader } from "./bulk-sms/BulkSMSHeader";
import { BulkSMSFeatures } from "./bulk-sms/BulkSMSFeatures";
import { BulkSMSHowItWorks } from "./bulk-sms/BulkSMSHowItWorks";
import { BulkSMSBenefits } from "./bulk-sms/BulkSMSBenefits";
import { BulkSMSFAQ } from "./bulk-sms/BulkSMSFAQ";
import { CTASection } from "../sections/CTASection";

interface LayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const BulkSMSLayout: React.FC<LayoutProps> = ({ data, theme }) => (
  <>
    <BulkSMSHeader data={data} />
    {data.features && data.features.length > 0 && (
      <BulkSMSFeatures
        features={data.features}
        heading={data.features_intro_heading}
        description={data.features_intro_description}
      />
    )}
    {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
      <BulkSMSHowItWorks
        steps={data.how_it_works_steps}
        heading={data.how_it_works_heading}
        description={data.how_it_works_description}
      />
    )}
    {data.benefits && data.benefits.length > 0 && (
      <BulkSMSBenefits
        benefits={data.benefits}
        heading={data.benefits_heading}
        description={data.benefits_description}
      />
    )}
    {data.faqs && data.faqs.length > 0 && (
      <BulkSMSFAQ
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
