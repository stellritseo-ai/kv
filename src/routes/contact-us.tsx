import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { addLead, addWebEmail } from "@/lib/leads-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Send,
  Building2,
  Home,
  MessageSquare,
  Sparkles,
  Award,
  Zap,
  Lock,
  Calendar,
  Check,
  ExternalLink,
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import statsJobsite from "@/assets/stats-cleanup.png";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      {
        title: "Contact KV Property Inc | Remodeling & Construction in Neptune, NJ",
      },
      {
        name: "description",
        content:
          "Contact KV Property Inc. in Neptune, NJ. Speak directly with our project team for residential & commercial remodeling, construction, and property maintenance. Call (732) 877-8614 for a free estimate.",
      },
      {
        property: "og:title",
        content: "Contact Us: Let's Build Something Great | KV Property Inc.",
      },
      {
        property: "og:description",
        content:
          "Speak directly with our project team. Request a free estimate for remodeling, construction, or maintenance across Neptune, NJ and Monmouth & Ocean counties.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kvpropertyinc.com/contact-us" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kvpropertyinc.com/contact-us",
      },
    ],
  }),
  component: ContactUsPage,
});

export function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    "Painting",
    "Pool Construction",
    "Property Maintenance",
    "Handyman Services",
    "Custom Builds",
    "Commercial Services",
    "Other",
  ];

  const townsServed = [
    "Neptune, NJ",
    "Asbury Park",
    "Ocean Grove",
    "Bradley Beach",
    "Belmar",
    "Spring Lake",
    "Wall Township",
    "Manasquan",
    "Avon-by-the-Sea",
    "Brick",
    "Toms River",
    "Freehold",
    "Howell",
    "Long Branch",
    "Red Bank",
  ];

  const whyReachOutPillars = [
    {
      title: "Direct Communication",
      desc: "Speak directly with our project team—not a call center.",
      icon: MessageSquare,
      badge: "No Call Centers",
    },
    {
      title: "Fast Response",
      desc: "We respond to all inquiries within 24 hours.",
      icon: Zap,
      badge: "< 24h Response",
    },
    {
      title: "Free Estimates",
      desc: "No-obligation, transparent pricing with clear timelines.",
      icon: Sparkles,
      badge: "No Obligation",
    },
    {
      title: "20+ Years of Experience",
      desc: "Trusted craftsmanship across Monmouth & Ocean counties.",
      icon: Award,
      badge: "Since 2004",
    },
    {
      title: "Financing Available",
      desc: "Flexible payment options to fit your budget.",
      icon: CheckCircle2,
      badge: "Low APR Terms",
    },
    {
      title: "24/7 Emergency Service",
      desc: "We're here when you need us most.",
      icon: Clock,
      badge: "Rapid Dispatch",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Persist lead to store
    addLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      projectType: formData.category,
      description: `[${formData.propertyClassification}] ${formData.details}`,
      contactTime: "anytime",
      estimatedValue: 10000,
    });

    addWebEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.category,
      message: `Property: ${formData.propertyClassification} | Address: ${formData.address} | Details: ${formData.details}`,
      source: "Contact Page Form",
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
    }, 4000);
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
            name: "Contact Us",
            item: "https://www.kvpropertyinc.com/contact-us",
          },
        ],
      },
      {
        "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
        "@id": "https://www.kvpropertyinc.com/#business",
        name: "KV Property Inc.",
        url: "https://www.kvpropertyinc.com/contact-us",
        telephone: "+1-732-877-8614",
        email: "kvpropertyinc@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Neptune",
          addressRegion: "NJ",
          addressCountry: "US",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 40.2204,
            longitude: -74.0329,
          },
          geoRadius: "40000",
        },
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
            <span className="text-[#b86d0b] font-semibold">Contact Us</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#b86d0b]">
            <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
            <span>Direct Project Team Access • Neptune, NJ</span>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION (INTRO) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_16px_50px_rgba(0,0,0,0.08)] min-h-[480px] sm:min-h-[540px] md:min-h-[580px] flex items-center justify-center text-center px-5 sm:px-10 md:px-14 lg:px-16 py-14 sm:py-18 md:py-20">
          {/* Background Image with Cinematic Vibe */}
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
              <span>Contact Us: Let's Build Something Great</span>
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
              Speak Directly With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] via-[#ffc570] to-[#ffa326]">
                Our Project Team
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-center"
            >
              From remodeling and construction to property maintenance, KV Property Inc. is ready to bring your vision to life. Reach out today for a free, no-obligation estimate.
            </motion.p>

            {/* Star Rating Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 text-white text-xs sm:text-sm select-none"
            >
              <div className="flex items-center gap-1.5 text-[#ffa326]">
                <Check className="w-4 h-4 text-[#ffa326]" />
                <span className="font-semibold text-white">Call or Text (732) 877-8614</span>
              </div>
              <span className="text-white/40">•</span>
              <span className="text-neutral-300">24-Hour Response Guarantee</span>
              <span className="text-white/40">•</span>
              <span className="text-white font-semibold">Licensed &amp; Insured</span>
            </motion.div>

            {/* Primary & Secondary CTAs */}
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
                <span>Request Your Free Estimate</span>
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

      {/* ── GET IN TOUCH — WE'RE HERE TO HELP ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20"
          style={{
            backgroundImage: `url(${welBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14 items-center">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Responsive Service</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight font-serif">
                Get in Touch —{" "}
                <span className="bg-gradient-to-r from-[#ffa326] to-[#cc7e14] bg-clip-text text-transparent">
                  We're Here to Help
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                At KV Property Inc., we believe that clear, honest communication is the foundation of every successful project. Whether you're ready to schedule a consultation, have questions about a specific service, or need a quick repair, our team is standing by to assist you.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                With over 20 years of experience serving Neptune, NJ, and the surrounding communities, we pride ourselves on being responsive, reliable, and easy to work with. No automated runarounds—when you contact us, you speak directly with a member of our project team.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="bg-white/90 border border-neutral-200/80 rounded-xl p-4 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#cc7e14] font-serif">20+ Yrs</div>
                  <div className="text-xs font-bold text-neutral-900 mt-1">Local Craftsmanship</div>
                  <div className="text-[11px] text-neutral-500">Neptune, NJ &amp; Shore Towns</div>
                </div>
                <div className="bg-white/90 border border-neutral-200/80 rounded-xl p-4 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-serif">24/7</div>
                  <div className="text-xs font-bold text-neutral-900 mt-1">Emergency Service</div>
                  <div className="text-[11px] text-neutral-500">Always on call for repairs</div>
                </div>
              </div>
            </motion.div>

            {/* Visual Callout Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[460px] mx-auto"
            >
              <div className="absolute top-3 left-3 right-[-6px] bottom-[-6px] sm:right-[-10px] sm:bottom-[-10px] border-2 border-[#ffa326]/30 rounded-3xl z-0 pointer-events-none" />
              <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-white">
                <img
                  src={statsJobsite}
                  alt="KV Property Inc team on job site"
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffa326] bg-[#ffa326]/20 px-2.5 py-1 rounded-full border border-[#ffa326]/30 inline-block mb-2">
                    Direct Team Access
                  </span>
                  <h4 className="text-base sm:text-lg font-bold font-serif leading-snug">
                    "When you contact us, you speak directly with our craftsmen."
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    No call centers. Direct scheduling &amp; transparent estimates.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── CONTACT INFORMATION GRID ── */}
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
              <Phone className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>Reach Us Anytime</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Contact Information
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              Reach out via phone, email, or schedule an on-site consultation. We look forward to connecting:
            </p>
          </motion.div>

          {/* Contact Details Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {/* Phone Card */}
            <motion.a
              href="tel:7328778614"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/80 p-7 shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1 font-serif">
                  Phone
                </h3>
                <div className="text-xl sm:text-2xl font-extrabold text-[#b86d0b] font-serif mb-1">
                  (732) 877-8614
                </div>
                <p className="text-xs text-neutral-600">
                  Call or Text Available
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#b86d0b]">
                <span>Tap to Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:kvpropertyinc@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/80 p-7 shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1 font-serif">
                  Email
                </h3>
                <div className="text-base sm:text-lg font-bold text-neutral-900 break-all mb-1">
                  kvpropertyinc@gmail.com
                </div>
                <p className="text-xs text-neutral-600">
                  We respond within 24 hours
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#b86d0b]">
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* Service Area Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/80 p-7 shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1 font-serif">
                  Service Area
                </h3>
                <div className="text-base sm:text-lg font-bold text-neutral-900 mb-1">
                  Neptune, NJ &amp; Surrounding Communities
                </div>
                <p className="text-xs text-neutral-600">
                  Serving a 25-Mile Radius (Monmouth &amp; Ocean Counties)
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 text-[11px] font-semibold text-neutral-500">
                Residential &amp; Commercial Coverage
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/80 p-7 shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-2"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>24/7 Emergency Service Available</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-3 font-serif">
                  Business Hours
                </h3>

                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/70">
                    <span className="font-bold text-neutral-900 block">Monday – Saturday</span>
                    <span className="text-neutral-600">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/70">
                    <span className="font-bold text-neutral-900 block">Sunday</span>
                    <span className="text-neutral-600">Closed (Emergency Service Available)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* License & Credentials Card (strictly NO license number) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/80 p-7 shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1 font-serif">
                  License &amp; Credentials
                </h3>
                <div className="text-xl font-extrabold text-neutral-900 font-serif mb-1">
                  Licensed &amp; Insured
                </div>
                <p className="text-xs text-neutral-600">
                  Full coverage for workers and your property on every project.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>Verified Contractor Credentials</span>
              </div>
            </motion.div>
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
              <span>No Obligation Consultation</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Request Your Free Estimate
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              Ready to start your project? Fill out the form below, and our team will review your details and respond promptly with next steps and a free estimate.
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
                  Thank you for contacting KV Property Inc. A member of our project team will review your details and contact you within 24 hours.
                </p>
                <div className="pt-4">
                  <a
                    href="tel:7328778614"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b86d0b] hover:text-[#995906]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Need immediate help? Call (732) 877-8614</span>
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
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326] transition-all"
                    />
                  </div>

                  <div className="sm:col-span-1">
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

                  <div className="sm:col-span-1">
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
                      placeholder="Address, City, Zip (e.g. Neptune, NJ)"
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

      {/* ── WHY REACH OUT TO KV PROPERTY INC.? ── */}
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
              <Award className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>The Client Advantage</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Why Reach Out to KV Property Inc.?
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              When you hire KV Property Inc., you partner with dedicated craftsmen who value honesty, punctuality, and lasting quality:
            </p>
          </motion.div>

          {/* 6 Pillars Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {whyReachOutPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/70 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#ffa326]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center shrink-0">
                        <PillarIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d0b] bg-[#ffa326]/10 px-2.5 py-0.5 rounded-full border border-[#ffa326]/20">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2 font-serif">
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

      {/* ── PREFER TO SPEAK WITH SOMEONE RIGHT AWAY? (CALLOUT BANNER) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <Phone className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>Immediate Support</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Prefer to Speak With Someone Right Away?
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Skip the form and give us a call. We're happy to answer your questions, discuss your project, and schedule a consultation at your convenience.
            </p>

            {/* Direct Contact Action Box */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:7328778614"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#ffa326]" />
                <span>Call or Text: (732) 877-8614</span>
              </a>

              <a
                href="mailto:kvpropertyinc@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 hover:bg-[#ffa326]/10 hover:border-[#ffa326]/40 text-neutral-800 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#cc7e14]" />
                <span>Email: kvpropertyinc@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── PROUDLY SERVING NEPTUNE, NJ & SURROUNDING COMMUNITIES (CLOSING SECTION) ── */}
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
              <span>Monmouth &amp; Ocean Counties • 25-Mile Service Radius</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
              Proudly Serving Neptune, NJ &amp; Surrounding Communities
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-8 max-w-2xl">
              KV Property Inc. provides residential and commercial remodeling, construction, and property maintenance services within a 25-mile radius of Neptune, NJ—including Asbury Park, Belmar, Brick, Toms River, Freehold, and surrounding areas.
            </p>

            {/* Town Pills */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mb-10">
              {townsServed.map((town) => (
                <span
                  key={town}
                  className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-neutral-200 text-xs font-medium"
                >
                  {town}
                </span>
              ))}
            </div>

            {/* Dedicated Contact Showcase Box (No License Number as requested) */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-2xl mb-10 text-left shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 flex-wrap gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Contact Us Today:
                </h3>
                <span className="text-xs font-semibold text-[#ffa326] bg-[#ffa326]/10 px-3 py-1 rounded-full border border-[#ffa326]/20">
                  Licensed &amp; Insured
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
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Phone</div>
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

                <div className="flex items-center gap-3 text-neutral-200 p-2.5 rounded-xl col-span-1 sm:col-span-2">
                  <div className="w-9 h-9 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#ffa326]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Service Area</div>
                    <div className="font-semibold text-white">Neptune, NJ &amp; Surrounding Communities (25-mile radius)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a
                href="tel:7328778614"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(255,163,38,0.4)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current text-white" />
                <span>Call Now: (732) 877-8614</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  const formEl = document.getElementById("estimate-form");
                  if (formEl) {
                    formEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Your Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
