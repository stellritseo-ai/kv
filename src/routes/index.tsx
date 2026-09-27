import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { WelcomeSection } from "@/components/welcome-section";
import { ServicesSection } from "@/components/services-section";
import { GallerySection } from "@/components/gallery-section";
import { WhyChooseSection } from "@/components/why-choose";
import { Process } from "@/components/process";
import { StatsSection } from "@/components/stats-section";
import { ReviewsSection } from "@/components/reviews-section";
import { QuoteSection } from "@/components/quote-section";
import { CTASection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { getFAQSchema } from "@/lib/seo-schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Remodeling & Construction in Neptune, NJ | KV Property Inc" },
      {
        name: "description",
        content:
          "Transforming homes and commercial spaces with professional remodeling, construction, handyman, and property improvement services in Neptune, NJ and surrounding 25-mile area. 20+ Years Experience. Call (732) 677-6674.",
      },
      { property: "og:title", content: "KV Property Inc | Built With Purpose. Crafted To Last." },
      {
        property: "og:description",
        content:
          "Professional remodeling, construction, handyman, and property improvement services in Neptune, NJ. 20+ years of craftsmanship. Licensed, insured, financing available.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kvpropertyinc.com/" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kvpropertyinc.com/",
      },
    ],
  }),
  component: Index,
});

const HOMEPAGE_FAQS = [
  {
    question: "Do you provide free estimates?",
    answer: "Contact KV Property Inc to discuss your project and request an estimate.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Neptune, NJ and surrounding communities within approximately a 25-mile radius.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. KV Property Inc is licensed and insured.",
  },
  {
    question: "Do you work on commercial properties?",
    answer: "Yes. We provide both residential and commercial construction, remodeling, repair, and property improvement services.",
  },
  {
    question: "Do you offer financing?",
    answer: "Yes. Financing is available. Contact us to learn more about available options.",
  },
  {
    question: "Do you provide emergency service?",
    answer: "Yes. We offer 24/7 emergency service for urgent property needs.",
  },
  {
    question: "How much experience do you have?",
    answer: "KV Property Inc has more than 20 years of experience in construction, remodeling, handyman services, and property improvements.",
  },
  {
    question: "What types of projects do you handle?",
    answer: "We handle kitchen and bathroom remodeling, general contracting, home additions, decks and outdoor living, painting, flooring, handyman services, property maintenance, custom builds, and commercial improvements.",
  },
  {
    question: "How do I get started?",
    answer: "Call (732) 677-6674 or complete our contact form to discuss your project and request an estimate.",
  },
];

function Index() {
  const faqSchema = getFAQSchema(HOMEPAGE_FAQS);

  return (
    <div className="min-h-screen bg-[#f4f3ef] overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <HeroSection />
      <TrustSection />
      <WelcomeSection />
      <ServicesSection />
      <WhyChooseSection />
      <GallerySection />
      <ReviewsSection />
      <Process />
      <StatsSection />
      <QuoteSection />
      <CTASection />
      <SiteFooter />
      {/* <FloatingChat /> */}
    </div>
  );
}
