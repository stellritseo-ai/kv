import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Award,
  CircleDollarSign,
  Building2,
  Home,
  Hammer,
  Wrench,
  Paintbrush,
  Sparkles,
  ClipboardCheck,
  MessageSquare,
  FileText,
  ArrowRight,
  ChevronRight,
  Clock,
  HeartHandshake,
  Quote,
  Flame,
  Check,
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import statsJobsite from "@/assets/stats-cleanup.png";
import statsShowcase from "@/assets/stats-showcase.jpg";
import kitchenRemodel from "@/assets/svc-kitchen-remodel.jpg";
import commercialImg from "@/assets/svc-commercial.jpg";
import generalContracting from "@/assets/svc-general-contracting.jpg";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | KV Property Inc | Remodeling & Construction in Neptune, NJ" },
      {
        name: "description",
        content:
          "20+ Years of Craftsmanship. A Legacy of Trust. Learn about KV Property Inc., your premier residential and commercial remodeling contractor in Neptune, NJ. Fully Licensed & Insured. Call (732) 877-8614.",
      },
      { property: "og:title", content: "About Us: KV Property Inc. | Built With Purpose. Crafted To Last." },
      {
        property: "og:description",
        content:
          "From residential renovations to large-scale commercial builds, KV Property Inc. is the trusted partner for homeowners and businesses across Neptune, NJ, and surrounding communities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kvpropertyinc.com/about-us" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kvpropertyinc.com/about-us",
      },
    ],
  }),
  component: AboutUsPage,
});

export function AboutUsPage() {
  const whyChooseFeatures = [
    {
      num: "01",
      title: "20+ Years of Experience",
      desc: "Our team brings decades of hands-on expertise to every job site. We have seen it all, fixed it all, and built it all.",
      icon: Award,
      tag: "Time-Tested Expertise",
    },
    {
      num: "02",
      title: "Licensed & Insured",
      desc: "Your peace of mind is paramount. We are fully licensed and insured, meeting all New Jersey state regulations to protect your property and our workers.",
      icon: ShieldCheck,
      tag: "Fully Licensed & Insured",
    },
    {
      num: "03",
      title: "Residential & Commercial",
      desc: "We are equipped to handle projects of any scale. From cozy home kitchen remodels to extensive commercial property maintenance, we have the resources and manpower to get it done.",
      icon: Building2,
      tag: "All Scopes & Scales",
    },
    {
      num: "04",
      title: "Reliable & Local",
      desc: "We are proud to serve a 25-mile service area covering Neptune, NJ, and surrounding communities. We are your neighbors, and we are committed to keeping our community beautiful and functional.",
      icon: MapPin,
      tag: "Neptune, NJ & Beyond",
    },
    {
      num: "05",
      title: "Financing Available",
      desc: "We believe your dream renovation shouldn't have to wait. We offer flexible financing options to help you manage your project budget comfortably.",
      icon: CircleDollarSign,
      tag: "Flexible Payment Options",
    },
  ];

  const residentialServices = [
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Interior & Exterior Painting",
    "Flooring Installation",
    "Custom Builds",
  ];

  const commercialServices = [
    "General Contracting",
    "Property Maintenance",
    "Handyman Services",
  ];

  const specializedTrades = [
    "Roofing & Siding",
    "Plumbing",
    "Electrical",
    "Deck & Patio Construction",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      desc: "We listen to your goals, assess your space, and discuss your ideas to understand your needs.",
      icon: MessageSquare,
      deliverables: [
        "In-depth goal & scope discussion",
        "On-site space evaluation",
        "Material & style suggestions",
      ],
    },
    {
      step: "02",
      title: "Estimate",
      desc: "We provide a transparent, detailed estimate with clear timelines and material costs.",
      icon: FileText,
      deliverables: [
        "Detailed line-item pricing",
        "Clear project schedule",
        "Flexible financing assistance",
      ],
    },
    {
      step: "03",
      title: "Build & Remodel",
      desc: "Our skilled team gets to work, keeping you informed with open communication and maintaining a clean, safe worksite.",
      icon: Hammer,
      deliverables: [
        "Skilled, licensed craftsmen",
        "Daily clean-up & hazard care",
        "Transparent milestone updates",
      ],
    },
    {
      step: "04",
      title: "Final Walkthrough",
      desc: "We review the completed project with you to ensure every detail meets your expectations before we call it a wrap.",
      icon: ClipboardCheck,
      deliverables: [
        "Thorough punch-list inspection",
        "100% satisfaction confirmation",
        "Workmanship guarantee & care tips",
      ],
    },
  ];

  const commitments = [
    {
      title: "Quality Craftsmanship",
      desc: "Using high-quality materials and proven techniques that stand up to daily use and time.",
      icon: Award,
    },
    {
      title: "On-Time Completion",
      desc: "Respecting your time and schedule with disciplined milestone management and clear delivery dates.",
      icon: Clock,
    },
    {
      title: "Clear Communication",
      desc: "No surprises, just honest updates throughout the lifecycle of your renovation or build.",
      icon: MessageSquare,
    },
    {
      title: "Customer Satisfaction",
      desc: "We aren't happy until you are. Every job is reviewed thoroughly before completion.",
      icon: HeartHandshake,
    },
  ];

  const serviceAreas = [
    "Neptune, NJ",
    "Asbury Park",
    "Ocean Grove",
    "Bradley Beach",
    "Belmar",
    "Wall Township",
    "Spring Lake",
    "Manasquan",
    "Avon-by-the-Sea",
    "Long Branch",
    "Red Bank",
    "Freehold",
    "Howell",
    "Brick",
    "Point Pleasant",
    "Toms River",
    "Monmouth County",
    "Ocean County",
  ];

  const structuredSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.kvpropertyinc.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://www.kvpropertyinc.com/about-us",
          },
        ],
      },
      {
        "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
        "@id": "https://www.kvpropertyinc.com/#business",
        "name": "KV Property Inc.",
        "url": "https://www.kvpropertyinc.com/about-us",
        "telephone": "+1-732-877-8614",
        "email": "kvpropertyinc@gmail.com",
        "priceRange": "$$",
        "description":
          "20+ Years of Craftsmanship. A Legacy of Trust. Residential remodeling, commercial construction, handyman services, and property maintenance in Neptune, NJ and surrounding 25-mile radius.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Neptune",
          "addressRegion": "NJ",
          "addressCountry": "US",
        },
        "areaServed": "Neptune, NJ and surrounding communities within 25 miles in Monmouth and Ocean counties",
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
            <span className="text-[#b86d0b] font-semibold">About Us</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#b86d0b]">
            <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
            <span>Built With Purpose • Crafted To Last</span>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION (INTRO) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_16px_50px_rgba(0,0,0,0.08)] min-h-[500px] sm:min-h-[560px] md:min-h-[620px] flex items-center justify-center text-center px-5 sm:px-10 md:px-14 lg:px-16 py-14 sm:py-18 md:py-24">
          {/* Background Image with Parallax Vibe */}
          <motion.div
            initial={{ scale: 1.06, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${welBg})` }}
          />

          {/* Luxury Multi-Stop Dark Gradient Overlay with Center Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#120b06]/95 via-[#160f08]/88 to-[#120b06]/95 z-10" />

          {/* Warm Ambient Halo Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffa326]/15 rounded-full blur-[140px] pointer-events-none z-10" />

          {/* Content Block - Fully Centered */}
          <div className="relative z-20 max-w-4xl mx-auto w-full flex flex-col items-center text-center space-y-5 sm:space-y-6 md:space-y-7">
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
              <span>About Us: KV Property Inc.</span>
              <span className="text-white/40">•</span>
              <span className="text-white font-medium">Built With Purpose. Crafted To Last.</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-white leading-[1.16] tracking-tight font-serif font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] text-center max-w-4xl"
              style={{
                fontSize: "50px",
                marginTop: "-15px",
                marginBottom: "10px",
              }}
            >
              20+ Years of Craftsmanship.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] via-[#ffc570] to-[#ffa326]">
                A Legacy of Trust.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-center"
            >
              From residential renovations to large-scale commercial builds, KV Property Inc. is the trusted partner for homeowners and businesses across Neptune, NJ, and the surrounding communities.
            </motion.p>

            {/* Trust highlights strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-300 font-medium pt-1 select-none"
            >
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffa326]" />
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-[#ffa326]" />
                <span>Neptune, NJ &amp; 25-Mile Radius</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-neutral-200">
                <Building2 className="w-3.5 h-3.5 text-[#ffa326]" />
                <span>Residential &amp; Commercial</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-neutral-200">
                <CircleDollarSign className="w-3.5 h-3.5 text-[#ffa326]" />
                <span>Financing Available</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <Link
                to="/free-estimate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_18px_rgba(255,163,38,0.38)] cursor-pointer text-center"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:7328778614"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white hover:text-neutral-950 px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                <Phone className="w-4 h-4 fill-current text-[#ffa326] shrink-0" />
                <span>Call (732) 877-8614</span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>


      {/* ── OUR STORY SECTION: BUILDING RELATIONSHIPS, NOT JUST STRUCTURES ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-center">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Story</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight font-serif">
                Building Relationships,{" "}
                <span className="bg-gradient-to-r from-[#ffa326] to-[#cc7e14] bg-clip-text text-transparent">
                  Not Just Structures
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                At KV Property Inc., we believe that every project—whether it’s a simple handyman repair or a full-scale commercial build-out—is an opportunity to improve a space, solve a problem, and create something built to last.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                With over two decades of experience, we have grown from a small local operation into a full-service remodeling and construction firm. Our longevity in the industry isn't just about construction skills; it's about integrity. We are a fully licensed and insured company that prioritizes transparency, clear communication, and meticulous attention to detail.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                We don’t just build for today; we build for the future. When you hire KV Property Inc., you are hiring a team that treats your property with the same care and respect as if it were our own.
              </p>

              {/* Luxury Quote Card */}
              <div className="relative bg-white/90 backdrop-blur-md border-l-4 border-[#ffa326] rounded-r-2xl p-6 sm:p-7 shadow-sm border border-neutral-200/60 mt-4">
                <Quote className="absolute top-4 right-5 w-10 h-10 text-[#ffa326]/20 rotate-180" />
                <p className="text-base sm:text-lg font-medium italic text-neutral-850 leading-relaxed pr-6 font-serif text-neutral-800">
                  "We don’t just build for today; we build for the future. When you hire KV Property Inc., you are hiring a team that treats your property with the same care and respect as if it were our own."
                </p>
                <div className="mt-4 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-neutral-100 text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#b86d0b]">
                    KV Property Inc. Philosophy
                  </span>
                  <span className="text-neutral-500 font-medium">
                    Neptune, New Jersey
                  </span>
                </div>
              </div>

              {/* Direct Quick Badges */}
              <div className="pt-2 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/25 rounded-xl px-3.5 py-2 text-xs font-semibold text-[#b86d0b]">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#cc7e14]" />
                  <span>Fully Licensed &amp; Insured Contractor</span>
                </div>
                <div className="flex items-center gap-2 bg-neutral-900 text-white rounded-xl px-3.5 py-2 text-xs font-semibold">
                  <Award className="w-4 h-4 shrink-0 text-[#ffa326]" />
                  <span>20+ Years in Neptune &amp; Jersey Shore</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Media Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[480px] mx-auto flex items-center justify-center py-4"
            >
              {/* Decorative offset frames */}
              <div className="absolute top-3 left-3 right-[-6px] bottom-[-6px] sm:right-[-10px] sm:bottom-[-10px] border-2 border-[#ffa326]/30 rounded-3xl z-0 pointer-events-none" />

              {/* Main Showcase Image */}
              <div className="relative z-10 w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-white">
                <img
                  src={statsJobsite}
                  alt="KV Property Inc craftsmanship on job site"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-xl p-4 shadow-lg text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#b86d0b]">
                      Established Craftsmanship
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Active In Neptune
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                    Full-Service Remodeling &amp; Construction
                  </h4>
                  <p className="text-[11px] text-neutral-600 mt-0.5">
                    Transforming homes and commercial spaces across Monmouth &amp; Ocean Counties.
                  </p>
                </div>
              </div>

              {/* Floating Top Left Trust Pill */}
              <div className="absolute -top-3 -left-3 sm:-left-6 bg-neutral-900 text-white rounded-xl p-3 sm:p-3.5 shadow-xl border border-neutral-800 flex items-center gap-3 select-none z-20">
                <div className="w-10 h-10 rounded-lg bg-[#ffa326] text-neutral-950 font-black flex items-center justify-center text-lg">
                  20+
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Years Of</div>
                  <div className="text-[10px] text-neutral-300 uppercase tracking-wider">Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE KV PROPERTY INC.? SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center relative overflow-hidden">
          {/* Subtle warm glow orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffa326]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cc7e14]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Why Choose Us</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Why Choose KV Property Inc.?
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              We understand that choosing a contractor is a significant decision. Here is why homeowners and business owners across Monmouth and Ocean counties choose us:
            </p>
          </motion.div>

          {/* 5 Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                  className={`group relative bg-white/90 backdrop-blur-md border border-neutral-200/70 rounded-2xl p-7 text-left shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Accent hover top strip */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffa326] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Watermark Number */}
                  <div className="absolute top-4 right-5 text-4xl font-serif font-black text-neutral-100 select-none group-hover:text-[#ffa326]/15 transition-colors">
                    {feat.num}
                  </div>

                  <div>
                    {/* Icon Container */}
                    <div className="w-13 h-13 rounded-2xl bg-[#ffa326]/10 border border-[#ffa326]/20 flex items-center justify-center mb-5 text-[#cc7e14] group-hover:bg-[#ffa326] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#b86d0b] block mb-1">
                      {feat.tag}
                    </span>

                    <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight font-serif">
                      {feat.title}
                    </h3>

                    <p className="text-sm text-neutral-650 leading-relaxed font-light text-neutral-600">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Standard</span>
                    </span>
                    <span className="text-[#b86d0b] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More →
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── OUR COMPREHENSIVE SERVICES SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f8f7f4] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <Hammer className="w-3.5 h-3.5" />
              <span>Full-Spectrum Solutions</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Our Comprehensive Services
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              From concept to completion, we offer a seamless, result-driven workflow to ensure your project is handled from start to finish. Our expertise spans:
            </p>
          </motion.div>

          {/* 3 Categories Showcase */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Category 1: Residential Remodeling */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={kitchenRemodel}
                    alt="Residential Remodeling by KV Property Inc"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-[#ffa326]" />
                      <span className="font-bold text-sm tracking-wide">Residential Remodeling</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffa326]/20 border border-[#ffa326]/40 text-[#ffc570] px-2 py-0.5 rounded-full">
                      5 Specialties
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                    Elevating living spaces with thoughtful planning, premium materials, and meticulous finish work.
                  </p>
                  <ul className="space-y-2.5">
                    {residentialServices.map((svc) => (
                      <li key={svc} className="flex items-center gap-2.5 text-sm text-neutral-800 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#ffa326]/15 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#cc7e14]" />
                        </div>
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-50 hover:bg-[#ffa326]/10 border border-neutral-200 hover:border-[#ffa326]/30 text-[#b86d0b] text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Explore Residential</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Category 2: Commercial Services */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={commercialImg}
                    alt="Commercial Services by KV Property Inc"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#ffa326]" />
                      <span className="font-bold text-sm tracking-wide">Commercial Services</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffa326]/20 border border-[#ffa326]/40 text-[#ffc570] px-2 py-0.5 rounded-full">
                      Commercial Scale
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                    Keeping commercial properties, retail spaces, and corporate offices functional, safe, and modern.
                  </p>
                  <ul className="space-y-2.5">
                    {commercialServices.map((svc) => (
                      <li key={svc} className="flex items-center gap-2.5 text-sm text-neutral-800 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#ffa326]/15 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#cc7e14]" />
                        </div>
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-50 hover:bg-[#ffa326]/10 border border-neutral-200 hover:border-[#ffa326]/30 text-[#b86d0b] text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Explore Commercial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Category 3: Specialized Trades */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={generalContracting}
                    alt="Specialized Trades by KV Property Inc"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-[#ffa326]" />
                      <span className="font-bold text-sm tracking-wide">Specialized Trades</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#ffa326]/20 border border-[#ffa326]/40 text-[#ffc570] px-2 py-0.5 rounded-full">
                      Licensed Subtrades
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                    Complete trade capabilities executed by experienced professionals adhering to strict NJ codes.
                  </p>
                  <ul className="space-y-2.5">
                    {specializedTrades.map((svc) => (
                      <li key={svc} className="flex items-center gap-2.5 text-sm text-neutral-800 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#ffa326]/15 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#cc7e14]" />
                        </div>
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-50 hover:bg-[#ffa326]/10 border border-neutral-200 hover:border-[#ffa326]/30 text-[#b86d0b] text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Explore Trades</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── OUR PROVEN PROCESS SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 relative overflow-hidden">
          {/* Subtle micro grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffa326 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>Step-By-Step Excellence</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Our Proven Process
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              We follow a simple, 4-step process to ensure your vision is realized with zero stress:
            </p>
          </motion.div>

          {/* 4 Steps Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
            {processSteps.map((stepItem, idx) => {
              const StepIcon = stepItem.icon;
              return (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white/95 rounded-2xl border border-neutral-200/70 p-6 shadow-sm hover:shadow-xl hover:border-[#ffa326]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Phase Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#ffa326]/10 text-[#cc7e14] group-hover:bg-[#ffa326] group-hover:text-white transition-colors flex items-center justify-center">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-serif font-black text-[#ffa326]/30 group-hover:text-[#ffa326] transition-colors">
                        {stepItem.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#b86d0b] block mb-1">
                      Step {idx + 1}
                    </span>

                    <h3 className="text-lg font-bold text-neutral-900 mb-2 font-serif">
                      {stepItem.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light mb-4">
                      {stepItem.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <ul className="space-y-1.5">
                      {stepItem.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-700">
                          <CheckCircle2 className="w-3 h-3 text-[#cc7e14] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Process Assurance Banner */}
          <div className="mt-12 max-w-3xl mx-auto rounded-xl bg-[#f4f3ef] border border-[#eae6dd] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-neutral-900">Zero-Stress Renovation Guarantee</h4>
                <p className="text-[11px] text-neutral-600">Open communication from consultation through final sign-off.</p>
              </div>
            </div>
            <Link
              to="/free-estimate"
              className="px-5 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold tracking-wide uppercase transition-colors shrink-0"
            >
              Start Consultation
            </Link>
          </div>
        </section>
      </div>

      {/* ── OUR COMMITMENT TO YOU SECTION ── */}
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
              <HeartHandshake className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>Our Core Promise</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Our Commitment to You
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              When you choose KV Property Inc., you get more than a contractor; you get a dedicated partner. We are committed to:
            </p>
          </motion.div>

          {/* 4 Commitments Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
            {commitments.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/60 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#ffa326]/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center shrink-0">
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-1 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── SERVICE AREA & COMMUNITY SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/25 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Service Area</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Proudly Serving Neptune, NJ &amp; Surrounding Communities
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Based in Neptune, NJ, we serve homeowners and business properties within an approximate 25-mile radius across Monmouth and Ocean counties.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {serviceAreas.map((area, idx) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.03, ease: "easeOut" }}
                className="flex items-center gap-2 px-4 py-2 bg-[#fcfbf8] rounded-full border border-neutral-200 shadow-2xs text-neutral-800 font-semibold text-xs hover:border-[#ffa326] hover:bg-[#ffa326]/8 transition-all duration-200 select-none"
              >
                <MapPin className="w-3.5 h-3.5 text-[#cc7e14]" />
                <span>{area}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            25-Mile Radius • Fast Response • Emergency Services Available
          </p>
        </section>
      </div>

      {/* ── GRAND CLOSING CTA SECTION: READY TO START YOUR PROJECT? ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#18120c] via-[#150f0a] to-[#0f0a06] text-white px-5 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24 text-center border border-neutral-800 shadow-[0_24px_60px_rgba(0,0,0,0.22)] relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(24,18,12,0.96), rgba(15,10,6,0.98)), url(/src/assets/wel-bg.png)",
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
              <span>Built With Purpose. Crafted To Last.</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
              Ready to Start Your Project?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-10 max-w-2xl">
              Let’s build something great together. Whether you are ready to renovate your kitchen, update your office space, or need reliable property maintenance, KV Property Inc. is ready to bring your vision to life.
            </p>

            {/* Dedicated Contact Showcase Box */}
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
              <Link
                to="/free-estimate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(255,163,38,0.4)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Your Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:7328778614"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current text-[#ffa326]" />
                <span>Call Now: (732) 877-8614</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
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
