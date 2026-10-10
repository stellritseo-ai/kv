import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Award,
  CircleDollarSign,
  Send,
  Home,
  Building2,
  Lock,
  Check,
  FileText,
  Hammer,
  ClipboardCheck,
  Search,
  MessageSquare,
  Wrench,
  Paintbrush,
  Droplets,
  Layers,
  Zap,
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import statsJobsite from "@/assets/stats-cleanup.png";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";
import kitchenImg from "@/assets/svc-kitchen-remodel.jpg";
import bathImg from "@/assets/svc-bathroom-remodel.jpg";
import poolImg from "@/assets/svc-pools-outdoor.jpg";
import paintingImg from "@/assets/svc-painting.jpg";
import maintenanceImg from "@/assets/svc-maintenance.png";

export const Route = createFileRoute("/free-estimate")({
  head: () => ({
    meta: [
      {
        title:
          "Request Your Free Estimate | KV Property Inc | Remodeling Neptune, NJ",
      },
      {
        name: "description",
        content:
          "Request a free, no-obligation estimate from KV Property Inc. 20+ years of expert remodeling, construction & property maintenance across Neptune, NJ. Call (732) 877-8614.",
      },
      {
        property: "og:title",
        content: "Free Estimate: Let's Bring Your Vision to Life | KV Property Inc.",
      },
      {
        property: "og:description",
        content:
          "Tell us about your project. Detailed written proposal, competitive pricing, zero pressure, and flexible financing in Neptune, NJ.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.kvpropertyinc.com/free-estimate",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kvpropertyinc.com/free-estimate",
      },
    ],
  }),
  component: FreeEstimatePage,
});

export function FreeEstimatePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    propertyClassification: "Residential",
    name: "",
    phone: "",
    email: "",
    category: "Kitchen Remodeling",
    address: "",
    details: "",
  });

  const projectCategories = [
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "General Contracting",
    "Roofing & Siding",
    "Flooring",
    "Interior & Exterior Painting",
    "Pool Construction",
    "Property Maintenance",
    "Handyman Services",
    "Custom Builds",
    "Commercial Services",
    "Other",
  ];

  const trustBadgesList = [
    "No Obligation",
    "20+ Years of Experience",
    "Fully Insured",
    "Financing Available",
    "24/7 Emergency Service",
  ];

  const whyEstimatePillars = [
    {
      title: "A Detailed, Written Proposal",
      desc: "No vague quotes. We provide a clear breakdown of scope, materials, and timelines.",
      icon: FileText,
      badge: "Transparent Scope",
    },
    {
      title: "Honest, Transparent Pricing",
      desc: "Competitive rates with no hidden fees or surprise charges.",
      icon: CircleDollarSign,
      badge: "No Hidden Costs",
    },
    {
      title: "A Real Conversation",
      desc: "We take the time to understand your goals, budget, and vision before recommending solutions.",
      icon: MessageSquare,
      badge: "Personalized Care",
    },
    {
      title: "Zero Pressure",
      desc: "Whether you're ready to book today or planning for next season, we're here to help you make an informed decision.",
      icon: ShieldCheck,
      badge: "100% Pressure-Free",
    },
  ];

  const processPhases = [
    {
      phase: "Phase 01",
      title: "Consultation",
      desc: "We listen to your goals, assess your space, and discuss your ideas and needs.",
      deliverables: [
        "Initial project scope & vision",
        "On-site property evaluation",
        "Budget development",
      ],
      icon: MessageSquare,
    },
    {
      phase: "Phase 02",
      title: "Estimate",
      desc: "We review your project and provide a detailed, transparent estimate.",
      deliverables: [
        "Transparent, itemized quote",
        "Clear timelines & expectations",
        "Material & finish selection support",
      ],
      icon: FileText,
    },
    {
      phase: "Phase 03",
      title: "Build & Remodel",
      desc: "Our skilled team gets to work with open communication and attention to detail.",
      deliverables: [
        "Experienced & insured professionals",
        "Quality materials & expert installation",
        "Clean, respectful job sites",
      ],
      icon: Hammer,
    },
    {
      phase: "Phase 04",
      title: "Final Walkthrough",
      desc: "We review the completed project with you to ensure everything meets your expectations.",
      deliverables: [
        "Comprehensive punch-list check",
        "100% satisfaction verification",
        "Warranty & maintenance guidance",
      ],
      icon: ClipboardCheck,
    },
  ];

  const afterSubmitSteps = [
    {
      num: "1",
      title: "We Review Your Request",
      desc: "Our team carefully reviews your project details within 24 hours.",
      icon: Search,
    },
    {
      num: "2",
      title: "We Reach Out",
      desc: "A member of our project team will contact you to confirm details and schedule a convenient time for an on-site consultation (if needed).",
      icon: Phone,
    },
    {
      num: "3",
      title: "You Receive Your Estimate",
      desc: "After the consultation, we provide a detailed, written estimate with no obligation.",
      icon: FileText,
    },
    {
      num: "4",
      title: "You Decide",
      desc: "Take your time. We're ready to answer questions and move forward whenever you are.",
      icon: CheckCircle2,
    },
  ];

  const requestedServices = [
    {
      title: "Kitchen Remodeling",
      desc: "Custom cabinets, granite countertops, tile & fixtures",
      image: kitchenImg,
      icon: Sparkles,
    },
    {
      title: "Bathroom Remodeling",
      desc: "Showers, vanities, plumbing & electrical",
      image: bathImg,
      icon: Droplets,
    },
    {
      title: "Roofing & Siding",
      desc: "Repairs, replacements, gutters & downspouts",
      image: statsJobsite,
      icon: ShieldCheck,
    },
    {
      title: "Flooring & Painting",
      desc: "Interior & exterior finishes",
      image: paintingImg,
      icon: Paintbrush,
    },
    {
      title: "Pool Construction & Outdoor Living",
      desc: "Custom builds, decks & patios",
      image: poolImg,
      icon: Layers,
    },
    {
      title: "Property Maintenance",
      desc: "Reliable care for homes & commercial properties",
      image: maintenanceImg,
      icon: Wrench,
    },
    {
      title: "Handyman Services",
      desc: "The small jobs that make a big difference",
      image: statsJobsite,
      icon: Hammer,
    },
  ];

  const faqs = [
    {
      q: "Is the estimate really free?",
      a: "Yes—100% free with no obligation. We believe in transparent pricing and giving you the information you need to make the right decision.",
    },
    {
      q: "How long does it take to receive my estimate?",
      a: "We respond to all estimate requests within 24 hours. For most projects, a detailed written estimate is provided within 2–3 business days after the on-site consultation.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes! We offer flexible financing options to help you manage your project budget. Ask us about it during your consultation.",
    },
    {
      q: "Do you handle both residential and commercial projects?",
      a: "Absolutely. We serve homeowners and business owners across Neptune, NJ, and surrounding communities within a 25-mile radius.",
    },
    {
      q: "Do you offer emergency services?",
      a: "Yes—we offer 24/7 emergency service for urgent repairs. Call us directly at (732) 877-8614.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      projectType: formData.category,
      description: `[${formData.propertyClassification}] ${formData.details}`,
      contactTime: "anytime",
      estimatedValue: 12000,
    });

    addWebEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.category,
      message: `Property: ${formData.propertyClassification} | Address: ${formData.address} | Details: ${formData.details}`,
      source: "Free Estimate Page Form",
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        propertyClassification: "Residential",
        name: "",
        phone: "",
        email: "",
        category: "Kitchen Remodeling",
        address: "",
        details: "",
      });
    }, 4500);
  };

  const structuredSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.kvpropertyinc.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Free Estimate",
            item: "https://www.kvpropertyinc.com/free-estimate",
          },
        ],
      },
      {
        "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
        "@id": "https://www.kvpropertyinc.com/#business",
        name: "KV Property Inc.",
        url: "https://www.kvpropertyinc.com/free-estimate",
        telephone: "+1-732-877-8614",
        email: "kvpropertyinc@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Neptune",
          addressRegion: "NJ",
          addressCountry: "US",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans text-neutral-900 selection:bg-[#ffa326]/30 selection:text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />

      <SiteHeader />

      {/* ── BREADCRUMB STRIP ── */}
      <div className="w-full bg-[#f4f3ef] pt-2 pb-1 px-3 sm:px-[15px]">
        <div className="mx-auto max-w-[1400px] w-full flex items-center justify-between text-xs py-2 px-4 rounded-lg bg-white/70 border border-[#eae6dd] text-neutral-600">
          <nav className="flex items-center gap-1.5 font-medium" aria-label="Breadcrumb">
            <Link to="/" className="text-neutral-500 hover:text-[#cc7e14] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#b86d0b] font-semibold">Free Estimate</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#b86d0b]">
            <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
            <span>100% Free &amp; No Obligation • Neptune, NJ</span>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION (INTRO) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_16px_50px_rgba(0,0,0,0.08)] min-h-[480px] sm:min-h-[540px] md:min-h-[580px] flex items-center justify-center text-center px-5 sm:px-10 md:px-14 lg:px-16 py-14 sm:py-18 md:py-20">
          {/* Background Image with Parallax Vibe */}
          <motion.div
            initial={{ scale: 1.06, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${welBg})` }}
          />

          {/* Luxury Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#120b06]/95 via-[#160f08]/88 to-[#120b06]/95 z-10" />

          {/* Warm Ambient Halo Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffa326]/15 rounded-full blur-[140px] pointer-events-none z-10" />

          {/* Centered Content Block */}
          <div className="relative z-20 max-w-4xl mx-auto w-full flex flex-col items-center text-center space-y-5 sm:space-y-6">
            {/* Top Identity Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border border-[#ffa326]/35 bg-[#ffa326]/15 backdrop-blur-md text-[#ffc570] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffa326] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffa326]"></span>
              </span>
              <span>Free Estimate: Let's Bring Your Vision to Life</span>
            </motion.div>

            {/* Headline with exact styling requested */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-white leading-[1.16] tracking-tight font-serif font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] text-center max-w-4xl"
              style={{
                fontSize: "clamp(32px, 5vw, 50px)",
                marginTop: "-15px",
                marginBottom: "10px",
              }}
            >
              Request Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] via-[#ffc570] to-[#ffa326]">
                Free Estimate
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-center"
            >
              Tell us about your project. Our estimator will review your details and respond promptly with next steps and a free estimate.
            </motion.p>

            {/* Trust Badges Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl pt-1 select-none"
            >
              {trustBadgesList.map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-medium"
                >
                  <Check className="w-3.5 h-3.5 text-[#ffa326] shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => {
                  const formEl = document.getElementById("estimate-form");
                  if (formEl) {
                    formEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_18px_rgba(255,163,38,0.38)] cursor-pointer text-center"
              >
                <span>Get My Free Estimate</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <a
                href="tel:7328778614"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white hover:text-neutral-950 px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                <Phone className="w-4 h-4 shrink-0 fill-current text-[#ffa326]" />
                <span>Call (732) 877-8614</span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── WHY REQUEST A FREE ESTIMATE WITH KV PROPERTY INC.? ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-white/70 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>Transparent &amp; Pressure-Free</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Why Request a Free Estimate With KV Property Inc.?
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              We understand that inviting a contractor into your home or business is a big decision. That's why we make the estimate process simple, transparent, and pressure-free. When you request a free estimate from KV Property Inc., you get:
            </p>
          </motion.div>

          {/* 4 Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
            {whyEstimatePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/70 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#ffa326]/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center shrink-0">
                    <PillarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d0b] block mb-1">
                      {pillar.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1.5 font-serif">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── OUR SIMPLE 4-STEP PROCESS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>Proven Project Execution</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Our Simple 4-Step Process
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              From idea to finished space, we make it easy to get started:
            </p>
          </motion.div>

          {/* 4 Phases Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {processPhases.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-[#fcfbf9] rounded-2xl border border-neutral-200/80 p-6 relative hover:shadow-lg hover:border-[#ffa326]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#b86d0b] bg-[#ffa326]/12 px-3 py-1 rounded-full border border-[#ffa326]/20">
                        {phase.phase}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#ffa326]/12 text-[#cc7e14] flex items-center justify-center">
                        <PhaseIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 mb-2 font-serif">
                      {phase.title}
                    </h3>

                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {phase.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-neutral-200/60">
                      {phase.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-[#cc7e14] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── REQUEST YOUR FREE ESTIMATE (FORM) ── */}
      <div id="estimate-form" className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffa326]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cc7e14]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-[#ffa326]" />
              <span>Get Started In 2 Minutes</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Request Your Free Estimate
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              Fill out the form below and our team will review your project details and respond promptly.
            </p>
          </motion.div>

          {/* Form Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-neutral-200/90 shadow-xl max-w-3xl mx-auto p-6 sm:p-10 text-left relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-neutral-900">
                  Estimate Request Received!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you! Our estimator is reviewing your details and will contact you within 24 hours to discuss your project.
                </p>
                <div className="pt-4">
                  <a
                    href="tel:7328778614"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b86d0b] hover:text-[#995906]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Need immediate assistance? Call (732) 877-8614</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Property Classification: Residential or Commercial */}
                <div>
                  <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
                    Property Classification
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Residential", "Commercial"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() =>
                          setFormData({ ...formData, propertyClassification: type })
                        }
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          formData.propertyClassification === type
                            ? "bg-[#ffa326]/15 border-[#ffa326] text-[#b86d0b] shadow-xs"
                            : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                        }`}
                      >
                        {type === "Residential" ? (
                          <Home className="w-4 h-4" />
                        ) : (
                          <Building2 className="w-4 h-4" />
                        )}
                        <span>{type}</span>
                        {formData.propertyClassification === type && (
                          <Check className="w-4 h-4 text-[#b86d0b] ml-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name, Phone, Email */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(732) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] transition-all"
                    />
                  </div>
                </div>

                {/* Project Category Dropdown */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Project Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm bg-white focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] transition-all cursor-pointer"
                    >
                      {projectCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Property / Project Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street, City, Zip (e.g. Neptune, NJ)"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] transition-all"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project scope, timeline, materials, or special requests..."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] transition-all"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] py-4 px-8 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_6px_25px_rgba(255,163,38,0.4)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Submit Free Estimate Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {/* Privacy Assurance */}
                <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#cc7e14]" />
                  <span>Your information is always confidential. We respect your privacy.</span>
                </div>
              </form>
            )}
          </motion.div>
        </section>
      </div>

      {/* ── WHAT HAPPENS AFTER YOU SUBMIT? ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>Clear Expectations</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              What Happens After You Submit?
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              We know your time is valuable. Here is our straightforward timeline once your request arrives:
            </p>
          </motion.div>

          {/* 4 Cards Progression */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {afterSubmitSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#ffa326]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-full bg-[#ffa326] text-white flex items-center justify-center text-sm font-bold shadow-xs">
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#ffa326]/12 text-[#cc7e14] flex items-center justify-center">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 mb-2 font-serif">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── WHAT CAN WE HELP YOU WITH? ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <Hammer className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>Full-Scope Services</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              What Can We Help You With?
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              From small repairs to full-scale renovations, KV Property Inc. handles projects of every size. Our most requested services include:
            </p>
          </motion.div>

          {/* Requested Services Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {requestedServices.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
                  className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white">
                      <div className="w-7 h-7 rounded-lg bg-[#ffa326]/90 text-white flex items-center justify-center backdrop-blur-xs">
                        <SvcIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold leading-tight">{svc.title}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {svc.desc}
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          category: svc.title.includes("Kitchen")
                            ? "Kitchen Remodeling"
                            : svc.title.includes("Bathroom")
                            ? "Bathroom Remodeling"
                            : svc.title.includes("Roofing")
                            ? "Roofing & Siding"
                            : svc.title.includes("Flooring")
                            ? "Flooring"
                            : svc.title.includes("Pool")
                            ? "Pool Construction"
                            : svc.title.includes("Property Maintenance")
                            ? "Property Maintenance"
                            : "Handyman Services",
                        }));
                        const formEl = document.getElementById("estimate-form");
                        if (formEl) {
                          formEl.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl border border-[#ffa326]/30 hover:bg-[#ffa326] text-[#b86d0b] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                    >
                      <span>Request Quote for This</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Have questions regarding cost, timing, or our service area? Here are quick answers:
            </p>
          </motion.div>

          {/* Interactive Accordion */}
          <div className="max-w-3xl mx-auto space-y-3 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="bg-white rounded-xl border border-neutral-200/90 overflow-hidden shadow-xs hover:border-[#ffa326]/40 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer gap-4"
                  >
                    <span className="text-sm sm:text-base font-bold text-neutral-900 font-serif">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 text-neutral-500"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── PREFER TO TALK TO SOMEONE? (CLOSING CTA SECTION) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#18120c] via-[#150f0a] to-[#0f0a06] text-white px-5 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24 text-center border border-neutral-800 shadow-[0_24px_60px_rgba(0,0,0,0.22)] relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(24,18,12,0.96), rgba(15,10,6,0.98)), url(${welBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Ambient Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffa326]/10 rounded-full blur-[140px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
          >
            {/* Logo */}
            <Link to="/" className="mb-6 cursor-pointer">
              <img
                src={logo}
                alt="KV Property Inc Logo"
                className="h-16 sm:h-20 w-auto object-contain filter brightness-110 drop-shadow-md hover:scale-105 transition-transform"
              />
            </Link>

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffa326]/30 bg-[#ffa326]/10 text-[#ffc570] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Direct Estimator Access • Neptune, NJ</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
              Prefer to Talk to Someone?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-10 max-w-2xl">
              Skip the form and reach out directly. We're happy to answer your questions and schedule your free estimate at your convenience.
            </p>

            {/* Dedicated Contact Showcase Box (No License Number as requested) */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-2xl mb-10 text-left shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 flex-wrap gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Direct Contact Information:
                </h3>
                <span className="text-xs font-semibold text-[#ffa326] bg-[#ffa326]/10 px-3 py-1 rounded-full border border-[#ffa326]/20">
                  Fully Insured • 20+ Years
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 text-sm sm:text-[15px] font-light">
                <a
                  href="tel:7328778614"
                  className="flex items-center gap-3 text-neutral-200 hover:text-[#ffa326] transition-colors p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <div className="w-9 h-9 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#ffa326]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Call or Text</div>
                    <div className="font-semibold text-white">(732) 877-8614</div>
                  </div>
                </a>

                <a
                  href="mailto:kvpropertyinc@gmail.com"
                  className="flex items-center gap-3 text-neutral-200 hover:text-[#ffa326] transition-colors p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <div className="w-9 h-9 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#ffa326]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Email</div>
                    <div className="font-semibold text-white">kvpropertyinc@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-neutral-200 p-2.5 rounded-xl">
                  <div className="w-9 h-9 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#ffa326]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Hours</div>
                    <div className="font-semibold text-white">Mon – Sat: 8:00 AM – 6:00 PM</div>
                    <div className="text-[11px] text-emerald-400 font-medium">24/7 Emergency Service Available</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-200 p-2.5 rounded-xl">
                  <div className="w-9 h-9 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#ffa326]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Service Area</div>
                    <div className="font-semibold text-white">Neptune, NJ &amp; 25-Mile Radius</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a
                href="tel:7328778614"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(255,163,38,0.4)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current text-white" />
                <span>Call Now: (732) 877-8614</span>
              </a>
              <a
                href="mailto:kvpropertyinc@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#ffa326]" />
                <span>Email Us</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 filter brightness-95 opacity-90">
              <img src={bbbBadge} alt="BBB Accredited" className="h-8 w-auto object-contain" />
              <img src={yelpBadge} alt="Yelp Reviews" className="h-8 w-auto object-contain" />
              <img src={homeAdvisorBadge} alt="HomeAdvisor Screened & Approved" className="h-8 w-auto object-contain" />
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
