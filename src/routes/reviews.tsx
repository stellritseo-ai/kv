import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Award,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  Hammer,
  Wrench,
  Clock,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Quote,
  HeartHandshake,
  Check,
  Send,
  X,
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import statsJobsite from "@/assets/stats-cleanup.png";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews & Client Testimonials | KV Property Inc | Neptune, NJ" },
      {
        name: "description",
        content:
          "Read verified client reviews for KV Property Inc. 20+ years of quality remodeling, construction, and property maintenance in Neptune, NJ and Monmouth & Ocean counties. Call (732) 877-8614.",
      },
      {
        property: "og:title",
        content: "Reviews: Trusted by Homeowners & Businesses Alike | KV Property Inc.",
      },
      {
        property: "og:description",
        content:
          "Quality work, professional service. Results that last. Hear from homeowners and business owners across Neptune, NJ who trusted KV Property Inc.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kvpropertyinc.com/reviews" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kvpropertyinc.com/reviews",
      },
    ],
  }),
  component: ReviewsPage,
});

interface ReviewItem {
  id: string;
  author: string;
  role?: string;
  location?: string;
  quote: string;
  service: string;
  category: "all" | "remodeling" | "bathroom" | "roofing" | "custom" | "commercial";
  rating: number;
  initials: string;
  avatarColor: string;
}

export function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    service: "",
    rating: 5,
    comment: "",
  });

  const reviews: ReviewItem[] = [
    {
      id: "carter",
      author: "The Carter Family",
      role: "Homeowner",
      location: "Neptune, NJ",
      quote:
        "KV Property Inc. exceeded our expectations at our house! From custom cabinets to granite countertops, and tile shower with niche, the craftsmanship and communication were on point. The 25+ years of experience shows in every detail.",
      service: "Full Home Remodeling / Kitchen & Bath",
      category: "remodeling",
      rating: 5,
      initials: "CF",
      avatarColor: "#B45309",
    },
    {
      id: "melissa-brian",
      author: "Melissa & Brian P.",
      role: "Homeowner",
      location: "Asbury Park, NJ",
      quote:
        "The transformation of our master bathroom in our Asbury Park home is stunning! KV Property Inc. handled everything from plumbing and electrical to tiling and fixtures. They were licensed, insured, and very professional. Highly recommended.",
      service: "Bathroom Remodeling",
      category: "bathroom",
      rating: 5,
      initials: "MB",
      avatarColor: "#0F766E",
    },
    {
      id: "david-m",
      author: "David M.",
      role: "Property Owner",
      location: "Neptune Area",
      quote:
        "I can't say enough about the service I received. They repaired my roof, installed new gutters and downspouts, and fixed drywall damage. They provided clear estimates, showed up on time, and the quality of work was exceptional. They are my go-to for property maintenance.",
      service: "Roofing & Property Maintenance",
      category: "roofing",
      rating: 5,
      initials: "DM",
      avatarColor: "#1D4ED8",
    },
    {
      id: "jessica-l",
      author: "Jessica L.",
      role: "Homeowner",
      location: "Wall Township, NJ",
      quote:
        "I had a great experience with KV Property Inc. for my kitchen remodel. They were professional, tidy, and finished the project on schedule. The new countertops and cabinets look fantastic.",
      service: "Kitchen Remodeling",
      category: "remodeling",
      rating: 5,
      initials: "JL",
      avatarColor: "#BE185D",
    },
    {
      id: "garcia",
      author: "The Garcia Family",
      role: "Homeowner",
      location: "Spring Lake, NJ",
      quote:
        "We are thrilled with our new pool area! The team at KV Property Inc. transformed our backyard into an oasis. Their attention to detail and quality of workmanship is unmatched.",
      service: "Pool Construction / Custom Builds",
      category: "custom",
      rating: 5,
      initials: "GF",
      avatarColor: "#047857",
    },
    {
      id: "mark-r",
      author: "Mark R.",
      role: "Local Business Owner",
      location: "Red Bank, NJ",
      quote:
        "As a local business owner, I rely on KV Property Inc. for all my commercial maintenance needs. They are reliable, responsive, and always do a fantastic job. It's a relief to have a contractor I can trust.",
      service: "Commercial Property Maintenance",
      category: "commercial",
      rating: 5,
      initials: "MR",
      avatarColor: "#7C3AED",
    },
  ];

  const categories = [
    { key: "all", label: "All Reviews (6)" },
    { key: "remodeling", label: "Kitchen & Remodeling" },
    { key: "bathroom", label: "Bathroom" },
    { key: "roofing", label: "Roofing & Maintenance" },
    { key: "custom", label: "Pools & Custom Builds" },
    { key: "commercial", label: "Commercial" },
  ];

  const filteredReviews =
    selectedCategory === "all"
      ? reviews
      : reviews.filter((r) => r.category === selectedCategory);

  const whyChoosePillars = [
    {
      title: "Transparent Communication",
      desc: "We keep you informed from consultation to final walkthrough.",
      icon: MessageSquare,
      badge: "No Surprises",
    },
    {
      title: "Meticulous Attention to Detail",
      desc: "We treat your property like our own, ensuring every tile, shingle, and fixture is perfectly placed.",
      icon: Sparkles,
      badge: "Master Craftsmanship",
    },
    {
      title: "Versatile Expertise",
      desc: "From handyman services to full-scale commercial builds, we have the skills to handle it all.",
      icon: Hammer,
      badge: "Comprehensive Trades",
    },
    {
      title: "Reliability",
      desc: "We show up when we say we will and stick to the timeline.",
      icon: Clock,
      badge: "Punctual Delivery",
    },
  ];

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setIsReviewModalOpen(false);
      setReviewSubmitted(false);
      setNewReview({ name: "", service: "", rating: 5, comment: "" });
    }, 2000);
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
            name: "Reviews",
            item: "https://www.kvpropertyinc.com/reviews",
          },
        ],
      },
      {
        "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
        "@id": "https://www.kvpropertyinc.com/#business",
        name: "KV Property Inc.",
        url: "https://www.kvpropertyinc.com/reviews",
        telephone: "+1-732-877-8614",
        email: "kvpropertyinc@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Neptune",
          addressRegion: "NJ",
          addressCountry: "US",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "6",
          reviewCount: "6",
        },
        review: reviews.map((r) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: r.author,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating.toString(),
            bestRating: "5",
          },
          reviewBody: r.quote,
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
            <span className="text-[#b86d0b] font-semibold">Reviews</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#b86d0b]">
            <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
            <span>Trusted by Homeowners &amp; Businesses Alike</span>
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
              <span>Reviews: Trusted by Homeowners &amp; Businesses Alike</span>
            </motion.div>

            {/* Headline */}
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
              What Our Clients{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] via-[#ffc570] to-[#ffa326]">
                Say
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-center"
            >
              Quality work, professional service. Results that last. Your project could be our next success story.
            </motion.p>

            {/* Star Rating Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 text-white text-xs sm:text-sm select-none"
            >
              <div className="flex gap-1 text-[#ffa326]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ffa326]" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Star Rating</span>
              <span className="text-white/40">•</span>
              <span className="text-neutral-300">Verified Homeowner &amp; Commercial Client Reviews</span>
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
                  const el = document.getElementById("leave-review");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setIsReviewModalOpen(true);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_18px_rgba(255,163,38,0.38)] cursor-pointer text-center"
              >
                <span>Leave Us a Review</span>
                <Star className="w-4 h-4 fill-white shrink-0" />
              </button>
              <Link
                to="/free-estimate"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white hover:text-neutral-950 px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── BUILDING TRUST, ONE PROJECT AT A TIME ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20"
          style={{ backgroundImage: `url(${welBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-center">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Our Reputation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight font-serif">
                Building Trust,{" "}
                <span className="bg-gradient-to-r from-[#ffa326] to-[#cc7e14] bg-clip-text text-transparent">
                  One Project at a Time
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                At KV Property Inc., we believe that our reputation is built on the satisfaction of our clients. With over 20 years of experience serving Neptune, NJ, and the surrounding communities, we have had the privilege of transforming homes and commercial spaces with precision and care.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                From complex kitchen remodels to routine property maintenance, our team is dedicated to delivering results that exceed expectations. But don't just take our word for it—hear from the homeowners and business owners who have trusted us with their most valuable investments.
              </p>

              {/* Trust Pillars */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="bg-white/90 border border-neutral-200/80 rounded-xl p-4 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#cc7e14] font-serif">5.0 / 5</div>
                  <div className="text-xs font-bold text-neutral-900 mt-1">Client Satisfaction</div>
                  <div className="text-[11px] text-neutral-500">Uncompromising standard</div>
                </div>
                <div className="bg-white/90 border border-neutral-200/80 rounded-xl p-4 shadow-xs">
                  <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-serif">20+ Yrs</div>
                  <div className="text-xs font-bold text-neutral-900 mt-1">Local Craftsmanship</div>
                  <div className="text-[11px] text-neutral-500">Neptune, NJ &amp; Jersey Shore</div>
                </div>
              </div>
            </motion.div>

            {/* Visual Callout Card */}
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
                  alt="KV Property Inc verified projects"
                  className="w-full h-[360px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <div className="flex gap-1 text-[#ffa326] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffa326]" />
                    ))}
                  </div>
                  <h4 className="text-base font-bold font-serif leading-snug">
                    "The 25+ years of experience shows in every detail."
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    — Verified Homeowner Review, Full Home Remodeling
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── REAL STORIES, REAL RESULTS (CURATED REVIEWS GRID) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center relative overflow-hidden">
          {/* Subtle Ambient Glow */}
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
              <Star className="w-3.5 h-3.5 fill-[#ffa326]" />
              <span>Client Testimonials</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Real Stories, Real Results
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              Curated reviews from homeowners and commercial property managers who chose KV Property Inc. for their remodeling, repairs, and builds:
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.key
                    ? "bg-[#ffa326] text-white shadow-md scale-105"
                    : "bg-white text-neutral-700 border border-neutral-200 hover:border-[#ffa326]/40 hover:bg-[#ffa326]/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 6 Curated Reviews Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            <AnimatePresence>
              {filteredReviews.map((rev, idx) => (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="group relative bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200/80 p-7 shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Amber accent top highlight on hover */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffa326] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Watermark Quote Icon */}
                  <Quote className="absolute top-4 right-5 w-10 h-10 text-neutral-100 group-hover:text-[#ffa326]/15 transition-colors rotate-180 pointer-events-none" />

                  <div>
                    {/* Stars + Verified Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1 text-[#ffa326]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#ffa326]" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>Verified Project</span>
                      </span>
                    </div>

                    {/* Service Tag */}
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#b86d0b] bg-[#ffa326]/10 px-2.5 py-0.5 rounded-md mb-3">
                      {rev.service}
                    </span>

                    {/* Review Quote Body */}
                    <p className="text-sm text-neutral-750 leading-relaxed font-light text-neutral-700 italic mb-6">
                      "{rev.quote}"
                    </p>
                  </div>

                  {/* Author Information Footer */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-xs select-none"
                        style={{ backgroundColor: rev.avatarColor }}
                      >
                        {rev.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                          {rev.author}
                        </h4>
                        <p className="text-[11px] text-neutral-500 font-normal">
                          {rev.location ? `${rev.role} • ${rev.location}` : rev.role || "Verified Client"}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>

      {/* ── WHY OUR CLIENTS KEEP COMING BACK SECTION ── */}
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
              <span>The KV Commitment</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Why Our Clients Keep Coming Back
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              We don't just complete projects; we build lasting relationships. Here is what you can expect when you work with KV Property Inc.:
            </p>
          </motion.div>

          {/* 4 Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
            {whyChoosePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/60 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#ffa326]/40 transition-all duration-300 flex items-start gap-4"
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

      {/* ── SHARE YOUR EXPERIENCE SECTION ── */}
      <div id="leave-review" className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>We Value Your Feedback</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Share Your Experience
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Have we recently completed a project for you? We would love to hear about your experience! Your feedback helps us continue to improve and helps other homeowners and business owners in Neptune, NJ, and beyond make informed decisions.
            </p>

            {/* Direct Google Review Action Card */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://search.google.com/local/writereview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <div className="flex gap-1 text-[#ffa326]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ffa326]" />
                  ))}
                </div>
                <span>Leave Us a Review on Google</span>
                <ExternalLink className="w-4 h-4 text-neutral-400" />
              </a>

              <button
                type="button"
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 hover:bg-[#ffa326]/10 hover:border-[#ffa326]/40 text-neutral-800 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                <span>Write A Direct Feedback</span>
                <Send className="w-4 h-4 text-[#cc7e14]" />
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── READY TO WRITE YOUR OWN SUCCESS STORY? (CLOSING CTA) ── */}
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
              <span>Built With Purpose. Crafted To Last.</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
              Ready to Write Your Own Success Story?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-10 max-w-2xl">
              Join the hundreds of satisfied clients who have trusted KV Property Inc. with their residential and commercial projects.
            </p>

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

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 filter brightness-95 opacity-90">
              <img src={bbbBadge} alt="BBB Accredited" className="h-8 w-auto object-contain" />
              <img src={yelpBadge} alt="Yelp Reviews" className="h-8 w-auto object-contain" />
              <img src={homeAdvisorBadge} alt="HomeAdvisor Screened & Approved" className="h-8 w-auto object-contain" />
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── WRITE REVIEW MODAL ── */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-neutral-200 relative text-left"
            >
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close review dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold font-serif text-neutral-900 mb-2">
                Leave a Review for KV Property Inc.
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Tell us about your project in Neptune, NJ or surrounding towns.
              </p>

              {reviewSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Thank You!</h4>
                  <p className="text-xs text-neutral-600">Your review has been received and appreciated.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. John & Sarah M."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Project / Service Completed
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.service}
                      onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                      placeholder="e.g. Kitchen Remodeling, Deck Build, Handyman"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Rating
                    </label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1 cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReview.rating ? "text-[#ffa326] fill-[#ffa326]" : "text-neutral-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your Review
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Describe the craftsmanship, communication, and overall experience..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsReviewModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 text-xs font-semibold hover:bg-neutral-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ffa326] to-[#cc7e14] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}
