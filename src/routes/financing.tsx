import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Building2,
  Hammer,
  Droplets,
  Layers,
  Calculator,
  Lock,
  FileCheck2,
  CalendarCheck,
  Send,
  X,
  BadgePercent,
  Check,
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";
import kitchenImg from "@/assets/svc-kitchen-remodel.jpg";
import bathImg from "@/assets/svc-bathroom-remodel.jpg";
import additionsImg from "@/assets/svc-home-additions.jpg";
import poolImg from "@/assets/svc-pools-outdoor.jpg";
import commercialImg from "@/assets/svc-commercial.jpg";

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      {
        title:
          "Financing: Flexible Options for Your Dream Renovation | KV Property Inc",
      },
      {
        name: "description",
        content:
          "Don't let budget hold you back. Finance your kitchen, bath, addition, or commercial project with KV Property Inc. Flexible terms, competitive rates, and fast pre-qualification in Neptune, NJ. Call (732) 877-8614.",
      },
      {
        property: "og:title",
        content:
          "Financing: Flexible Options for Your Dream Renovation | KV Property Inc.",
      },
      {
        property: "og:description",
        content:
          "KV Property Inc. offers flexible financing solutions to help you manage the cost of your residential or commercial remodeling project with ease in Neptune, NJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kvpropertyinc.com/financing" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kvpropertyinc.com/financing",
      },
    ],
  }),
  component: FinancingPage,
});

export function FinancingPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(25000);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(60);
  const estimatedAPR = 8.99; // Representative APR for demonstration

  // Calculate estimated monthly payment (Standard Amortization Formula)
  const monthlyRate = estimatedAPR / 100 / 12;
  const estimatedMonthly = Math.round(
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths))) /
      (Math.pow(1 + monthlyRate, loanTermMonths) - 1)
  );

  const [applyForm, setApplyForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Kitchen & Bathroom Remodeling",
    estimatedAmount: "$25,000",
    notes: "",
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsApplyModalOpen(false);
      setFormSubmitted(false);
      setApplyForm({
        name: "",
        phone: "",
        email: "",
        serviceType: "Kitchen & Bathroom Remodeling",
        estimatedAmount: "$25,000",
        notes: "",
      });
    }, 2400);
  };

  const whyFinanceBenefits = [
    {
      title: "Preserve Your Savings",
      desc: "Keep your hard-earned cash reserves intact for emergencies or other investments while still getting the renovation you need.",
      icon: DollarSign,
      badge: "Financial Security",
    },
    {
      title: "Competitive Rates",
      desc: "Access highly competitive interest rates and loan terms through our trusted lending partners.",
      icon: BadgePercent,
      badge: "Low APR Plans",
    },
    {
      title: "Fast & Easy Application",
      desc: "The process is simple, secure, and designed to give you a quick decision so you can get your project on our schedule faster.",
      icon: Clock,
      badge: "Rapid Decision",
    },
    {
      title: "Flexible Terms",
      desc: "Choose from a variety of repayment plans, including options with no prepayment penalties.",
      icon: CreditCard,
      badge: "No Hidden Fees",
    },
    {
      title: "Handle Larger Projects",
      desc: "Financing gives you the purchasing power to complete the entire project at once—from roofing and siding to interior finishes—rather than doing it in costly phases.",
      icon: Layers,
      badge: "All-in-One Execution",
    },
  ];

  const whatYouCanFinance = [
    {
      title: "Kitchen & Bathroom Remodeling",
      desc: "Custom cabinets, granite countertops, tile showers, and fixtures.",
      image: kitchenImg,
      icon: Sparkles,
      tags: ["Custom Cabinets", "Granite Countertops", "Tile Showers", "Fixtures"],
    },
    {
      title: "Home Additions & Custom Builds",
      desc: "Expanding your living space or building a new structure.",
      image: additionsImg,
      icon: Hammer,
      tags: ["Room Additions", "Second Stories", "Master Suites", "Framing"],
    },
    {
      title: "Outdoor Living",
      desc: "Pool construction, decks, patios, and landscaping.",
      image: poolImg,
      icon: Droplets,
      tags: ["Pool Construction", "Custom Decks", "Stone Patios", "Outdoor Living"],
    },
    {
      title: "Major Systems",
      desc: "Roofing, siding, plumbing, and electrical upgrades.",
      image: bathImg,
      icon: ShieldCheck,
      tags: ["Roof Replacements", "Vinyl & Fiber Siding", "Plumbing", "Electrical"],
    },
    {
      title: "Commercial Projects",
      desc: "Office build-outs, retail renovations, and property maintenance.",
      image: commercialImg,
      icon: Building2,
      tags: ["Commercial Build-outs", "Retail Upgrades", "Property Maintenance"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Apply Online or By Phone",
      desc: "Complete a quick, secure application. It only takes a few minutes to see what you qualify for.",
      icon: FileCheck2,
      tag: "Soft Pull Prequalification",
    },
    {
      step: "02",
      title: "Get Your Decision",
      desc: "Receive a fast decision from our lending partners. You’ll know your approved amount and terms quickly.",
      icon: CheckCircle2,
      tag: "Clear, Upfront Terms",
    },
    {
      step: "03",
      title: "Start Your Project",
      desc: "Once approved, we schedule your project and get to work. You enjoy your new space while making affordable monthly payments.",
      icon: CalendarCheck,
      tag: "Project On Schedule",
    },
  ];

  const faqs = [
    {
      q: "Will applying for financing affect my credit score?",
      a: "Most of our lending partners use a soft credit pull for pre-qualification, which does not affect your credit score. A hard pull is only performed if you choose to proceed with a specific loan offer.",
    },
    {
      q: "How much can I finance?",
      a: "Approved loan amounts vary based on your credit profile and the scope of your project. Our team can help you determine the right amount for your needs.",
    },
    {
      q: "Can I pay off my loan early?",
      a: "Yes, our financing options typically allow for early repayment without penalty.",
    },
    {
      q: "Do you offer financing for commercial properties?",
      a: "Yes, we offer financing solutions tailored for business owners and commercial property investments.",
    },
  ];

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
            name: "Financing",
            item: "https://www.kvpropertyinc.com/financing",
          },
        ],
      },
      {
        "@type": "FinancialService",
        "@id": "https://www.kvpropertyinc.com/financing#service",
        name: "KV Property Inc. Project Financing",
        provider: {
          "@type": "GeneralContractor",
          name: "KV Property Inc.",
          telephone: "+1-732-877-8614",
          email: "kvpropertyinc@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Neptune",
            addressRegion: "NJ",
            addressCountry: "US",
          },
        },
        description:
          "Flexible financing solutions for home remodeling, kitchen & bathroom renovations, pool construction, roofing, and commercial builds in Neptune, NJ.",
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
            <span className="text-[#b86d0b] font-semibold">Financing</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#b86d0b]">
            <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
            <span>Flexible Renovation Financing • Neptune, NJ</span>
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
              <span>Financing: Flexible Options for Your Dream Renovation</span>
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
              Don't Let Budget Hold You Back.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] via-[#ffc570] to-[#ffa326]">
                Finance Your Project Today.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-center"
            >
              KV Property Inc. offers flexible financing solutions to help you manage the cost of your residential or commercial remodeling project with ease.
            </motion.p>

            {/* Trust Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 text-white text-xs sm:text-sm select-none"
            >
              <div className="flex items-center gap-1.5 text-[#ffa326]">
                <Check className="w-4 h-4 text-[#ffa326]" />
                <span className="font-semibold text-white">Soft Credit Check</span>
              </div>
              <span className="text-white/40">•</span>
              <div className="flex items-center gap-1.5 text-[#ffa326]">
                <Check className="w-4 h-4 text-[#ffa326]" />
                <span className="font-semibold text-white">No Prepayment Penalties</span>
              </div>
              <span className="text-white/40">•</span>
              <span className="text-neutral-300">Fast Decision &amp; Competitive Terms</span>
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
                onClick={() => setIsApplyModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_18px_rgba(255,163,38,0.38)] cursor-pointer text-center"
              >
                <span>Apply for Financing</span>
                <CreditCard className="w-4 h-4 shrink-0" />
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

      {/* ── MAKE YOUR RENOVATION AFFORDABLE & ESTIMATOR ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fcfbf8] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20"
          style={{
            backgroundImage: `url(${welBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14 items-center">
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Affordable Solutions</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight font-serif">
                Make Your Renovation{" "}
                <span className="bg-gradient-to-r from-[#ffa326] to-[#cc7e14] bg-clip-text text-transparent">
                  Affordable
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                At KV Property Inc., we believe that a tight budget shouldn't stand in the way of a safe, beautiful, and functional space. Whether you are planning a complete kitchen remodel, a new pool installation, or essential commercial property maintenance, we understand that these are significant investments.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                That’s why we have partnered with leading financing providers to offer you convenient, flexible payment options. With our financing solutions, you can move forward with your project now and pay over time with terms that fit your lifestyle.
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                {[
                  "No large upfront cash burden required to get started",
                  "Fixed monthly payments that keep your household budget steady",
                  "Financing covers full scope: materials, labor, and permits",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-neutral-800">
                    <div className="w-5 h-5 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0 text-[#b86d0b]">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interactive Payment Estimator Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-neutral-200/90 shadow-xl p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#ffa326]/12 text-[#cc7e14] flex items-center justify-center">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 leading-tight">
                      Monthly Payment Estimator
                    </h3>
                    <p className="text-[11px] text-neutral-500">Estimate your payments over time</p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#b86d0b] bg-[#ffa326]/10 px-2.5 py-1 rounded-full border border-[#ffa326]/20">
                  Interactive
                </span>
              </div>

              {/* Loan Amount Slider */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs font-semibold text-neutral-700">
                  <span>Estimated Project Cost:</span>
                  <span className="text-lg font-bold text-[#b86d0b] font-serif">
                    ${loanAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="2500"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#ffa326]"
                />
                <div className="flex justify-between text-[10px] text-neutral-400">
                  <span>$5,000</span>
                  <span>$50,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              {/* Loan Term Selection */}
              <div className="space-y-2 mb-6">
                <label className="block text-xs font-semibold text-neutral-700">
                  Select Repayment Term:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[24, 36, 60, 84].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setLoanTermMonths(term)}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        loanTermMonths === term
                          ? "bg-[#ffa326] text-white shadow-sm"
                          : "bg-neutral-50 text-neutral-700 border border-neutral-200 hover:border-[#ffa326]/40"
                      }`}
                    >
                      {term} Mos
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Payment Result Box */}
              <div className="bg-[#18120c] rounded-xl p-5 text-white mb-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffa326]/10 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider block">
                  Estimated Monthly Payment
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#ffa326] font-serif my-1">
                  ${estimatedMonthly}
                  <span className="text-xs font-normal text-neutral-400 ml-1">/ month</span>
                </div>
                <p className="text-[10px] text-neutral-400 leading-tight">
                  Based on {loanTermMonths}-month term at estimated 8.99% APR. Terms vary based on credit qualification.
                </p>
              </div>

              {/* Apply For Estimated Amount Button */}
              <button
                type="button"
                onClick={() => {
                  setApplyForm((prev) => ({
                    ...prev,
                    estimatedAmount: `$${loanAmount.toLocaleString()}`,
                  }));
                  setIsApplyModalOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] py-3.5 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
              >
                <span>Apply for ${loanAmount.toLocaleString()} Financing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-neutral-400">
                <Lock className="w-3 h-3 text-[#cc7e14]" />
                <span>Safe 256-Bit SSL Encrypted Pre-qualification</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── WHY FINANCE YOUR PROJECT WITH KV PROPERTY INC.? ── */}
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
              <BadgePercent className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>Smart Financing Advantages</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Why Finance Your Project with KV Property Inc.?
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              We provide smart financing partnerships so you never have to compromise on the quality, safety, or timeline of your project:
            </p>
          </motion.div>

          {/* 5 Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {whyFinanceBenefits.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/70 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#ffa326]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/25 text-[#cc7e14] flex items-center justify-center shrink-0">
                        <ItemIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d0b] bg-[#ffa326]/10 px-2.5 py-0.5 rounded-full border border-[#ffa326]/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 mb-2 font-serif">
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

      {/* ── WHAT CAN YOU FINANCE? ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center relative overflow-hidden">
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
              <Sparkles className="w-3.5 h-3.5 fill-[#ffa326]" />
              <span>Full Project Eligibility</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              What Can You Finance?
            </h2>

            <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              Our financing options can be applied to virtually any of our comprehensive services, including:
            </p>
          </motion.div>

          {/* 5 Services Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {whatYouCanFinance.map((svc, idx) => {
              const SvcIcon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#ffa326]/80 text-white flex items-center justify-center backdrop-blur-xs">
                          <SvcIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold tracking-wide">{svc.title}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                        {svc.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setApplyForm((prev) => ({
                          ...prev,
                          serviceType: svc.title,
                        }));
                        setIsApplyModalOpen(true);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#ffa326]/40 hover:bg-[#ffa326] text-[#b86d0b] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                    >
                      <span>Finance This Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── HOW IT WORKS: A SIMPLE 3-STEP PROCESS ── */}
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
              <CheckCircle2 className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>Transparent Progression</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              How It Works: A Simple 3-Step Process
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              We make the financing approval process seamless and quick, from initial estimate to project kickoff:
            </p>
          </motion.div>

          {/* 3 Step Cards */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto text-left relative">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                  className="bg-[#fcfbf9] rounded-2xl border border-neutral-200/80 p-7 relative hover:shadow-lg hover:border-[#ffa326]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-4xl font-extrabold font-serif text-[#ffa326]/30">
                        {step.step}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-[#ffa326]/12 text-[#cc7e14] flex items-center justify-center">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d0b] bg-[#ffa326]/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                      {step.tag}
                    </span>

                    <h3 className="text-lg font-bold text-neutral-900 mb-2 font-serif">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsApplyModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] to-[#cc7e14] px-8 py-3.5 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Start Your Application Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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
              <span>Clear Answers</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Have questions regarding financing terms, pre-qualification, or commercial options? We are here to help:
            </p>
          </motion.div>

          {/* Interactive Accordion */}
          <div className="max-w-3xl mx-auto space-y-3.5 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
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

      {/* ── READY TO GET STARTED? (CLOSING CTA) ── */}
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
              <span>Flexible Options • Seamless Approvals</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
              Ready to Get Started?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-10 max-w-2xl">
              Take the first step toward your dream renovation today. Apply for financing through our secure portal, or contact our team to learn more about your options.
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
              <button
                type="button"
                onClick={() => setIsApplyModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(255,163,38,0.4)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Apply for Financing Now</span>
                <CreditCard className="w-4 h-4" />
              </button>
              <Link
                to="/free-estimate"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Your Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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

      {/* ── PRE-QUALIFICATION APPLICATION MODAL ── */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-neutral-200 relative text-left"
            >
              <button
                type="button"
                onClick={() => setIsApplyModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close financing dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold font-serif text-neutral-900 mb-1">
                Apply for Project Financing
              </h3>
              <p className="text-xs text-neutral-500 mb-5">
                Quick soft-pull inquiry with our lending partners. No impact on your credit score.
              </p>

              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">Application Received!</h4>
                  <p className="text-xs text-neutral-600">
                    A representative from KV Property Inc. will contact you shortly to review your approved options.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={applyForm.name}
                      onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={applyForm.phone}
                        onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                        placeholder="(732) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326] focus:ring-1 focus:ring-[#ffa326]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Service Category
                      </label>
                      <select
                        value={applyForm.serviceType}
                        onChange={(e) => setApplyForm({ ...applyForm, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm bg-white focus:outline-hidden focus:border-[#ffa326]"
                      >
                        <option value="Kitchen & Bathroom Remodeling">Kitchen & Bath</option>
                        <option value="Home Additions & Custom Builds">Additions & Builds</option>
                        <option value="Outdoor Living & Pools">Outdoor & Pools</option>
                        <option value="Roofing & Major Systems">Roofing & Systems</option>
                        <option value="Commercial Projects">Commercial Project</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Estimated Budget
                      </label>
                      <input
                        type="text"
                        value={applyForm.estimatedAmount}
                        onChange={(e) => setApplyForm({ ...applyForm, estimatedAmount: e.target.value })}
                        placeholder="$25,000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={applyForm.notes}
                      onChange={(e) => setApplyForm({ ...applyForm, notes: e.target.value })}
                      placeholder="Briefly describe your property location, preferred timeline, or questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-hidden focus:border-[#ffa326]"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsApplyModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-700 text-xs font-semibold hover:bg-neutral-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ffa326] to-[#cc7e14] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105"
                    >
                      Submit Prequalification
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
