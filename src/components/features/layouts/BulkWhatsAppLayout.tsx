import React from "react";
import {
  type FeaturesPageData,
  type Theme,
} from "../../../types/features-page";
import { HeaderSection } from "../sections/HeaderSection";
import { EnhancedFeatures } from "../sections/EnhancedFeatures";
import { EnhancedBenefits } from "../sections/EnhancedBenefits";
import { BulkWhatsAppHowItWorks } from "./bulk-whatsapp/BulkWhatsAppHowItWorks";
import { CardSections } from "../sections/CardSections";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { PricingSection } from "../sections/PricingSection";
import { FAQSection } from "../sections/FAQSection";
import { CTASection } from "../sections/CTASection";

interface LayoutProps {
  data: FeaturesPageData;
  theme: Theme;
}

export const BulkWhatsAppLayout: React.FC<LayoutProps> = ({ data, theme }) => (
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
    {data.benefits && data.benefits.length > 0 && (
      <EnhancedBenefits
        benefits={data.benefits}
        theme={theme}
        heading={data.benefits_heading}
        description={data.benefits_description}
      />
    )}
    {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
      <BulkWhatsAppHowItWorks
        steps={data.how_it_works_steps}
        heading={data.how_it_works_heading}
        description={data.how_it_works_description}
      />
    )}
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
    {(data.pricing_heading ||
      data.pricing_widget_code ||
      data.show_pricing_cta) && (
      <PricingSection
        heading={data.pricing_heading}
        description={data.pricing_description}
        widgetCode={data.pricing_widget_code}
        showCta={data.show_pricing_cta}
        ctaText={data.pricing_cta_text}
        ctaUrl={data.pricing_cta_url}
        theme={theme}
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
