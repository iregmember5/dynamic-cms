import React from "react";
import {
  type FeaturesPageData,
  type Theme,
} from "../../../types/features-page";
import { BulkWhatsAppHeader } from "./bulk-whatsapp/BulkWhatsAppHeader";
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
  <div className="overflow-x-hidden">
    {/* WhatsApp-themed header */}
    <BulkWhatsAppHeader data={data} />
    
    {/* Features section with WhatsApp green accents */}
    {data.features && data.features.length > 0 && (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <EnhancedFeatures
            features={data.features}
            theme={{...theme, primary_color: '#25D366'}}
            heading={data.features_intro_heading}
            description={data.features_intro_description}
          />
        </div>
      </div>
    )}
    
    {/* Benefits section with WhatsApp styling */}
    {data.benefits && data.benefits.length > 0 && (
      <div className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <EnhancedBenefits
            benefits={data.benefits}
            theme={{...theme, primary_color: '#075E54'}}
            heading={data.benefits_heading}
            description={data.benefits_description}
          />
        </div>
      </div>
    )}
    
    {/* How it works section with interactive WhatsApp chat */}
    {data.how_it_works_steps && data.how_it_works_steps.length > 0 && (
      <BulkWhatsAppHowItWorks
        steps={data.how_it_works_steps}
        heading={data.how_it_works_heading}
        description={data.how_it_works_description}
      />
    )}
    
    {/* Card sections with WhatsApp-inspired design */}
    {data.card_sections && data.card_sections.length > 0 && (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <CardSections
            cards={data.card_sections}
            theme={{...theme, primary_color: '#128C7E'}}
            heading={data.card_sections_heading}
            description={data.card_sections_description}
          />
        </div>
      </div>
    )}
    
    {/* Testimonials with WhatsApp green accents */}
    {data.testimonials && data.testimonials.length > 0 && (
      <div className="py-16 bg-[#ECE5DD]">
        <div className="container mx-auto px-4">
          <TestimonialsSection
            testimonials={data.testimonials}
            theme={{...theme, primary_color: '#25D366'}}
            heading={data.testimonials_heading}
            description={data.testimonials_description}
          />
        </div>
      </div>
    )}
    
    {/* Pricing section with WhatsApp styling */}
    {(data.pricing_heading ||
      data.pricing_widget_code ||
      data.show_pricing_cta) && (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <PricingSection
            heading={data.pricing_heading}
            description={data.pricing_description}
            widgetCode={data.pricing_widget_code}
            showCta={data.show_pricing_cta}
            ctaText={data.pricing_cta_text}
            ctaUrl={data.pricing_cta_url}
            theme={{...theme, primary_color: '#075E54'}}
          />
        </div>
      </div>
    )}
    
    {/* FAQ section with WhatsApp-inspired design */}
    {data.faqs && data.faqs.length > 0 && (
      <div className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <FAQSection
            faqs={data.faqs}
            theme={{...theme, primary_color: '#128C7E'}}
            heading={data.faq_section_heading}
            description={data.faq_section_description}
          />
        </div>
      </div>
    )}
    
    {/* CTA sections with WhatsApp green styling */}
    {data.primary_cta_sections &&
      data.primary_cta_sections.length > 0 &&
      data.primary_cta_sections.map((cta: any, i: number) => (
        <div key={i} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <CTASection
              heading={cta.heading}
              description={cta.description}
              buttonText={cta.button_text}
              buttonUrl={cta.button_url}
              backgroundImage={cta.background_image}
              theme={{...theme, primary_color: '#25D366'}}
              isPrimary={true}
            />
          </div>
        </div>
      ))}
  </div>
);