import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import {
  Award,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2,
  CircleDollarSign,
} from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import statsShowcase from "@/assets/stats-showcase.jpg";

function AnimatedCounter({
  value,
  suffixText = "",
}: {
  value: string;
  suffixText?: string;
}) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.includes("+")
    ? "+"
    : value.includes("%")
    ? "%"
    : suffixText || "";
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const end = numericValue;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Smooth cubic ease-out
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeProgress * end);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [numericValue]);

  const formattedCount = count.toLocaleString();

  return (
    <span ref={elementRef}>
      {formattedCount}
      {suffix}
    </span>
  );
}

const statsCards = [
  {
    icon: Award,
    value: "20+",
    labelKey: "stats.label.years_experience",
    fallbackLabel: "Years Experience",
    tag: "Est. 2005",
    subtext: "Master trade craft",
    featured: true,
  },
  {
    icon: ShieldCheck,
    value: "100%",
    labelKey: "stats.label.complete_project",
    fallbackLabel: "Licensed & Insured",
    tag: "Protected",
    subtext: "Fully insured & bonded",
    featured: false,
  },
  {
    icon: MapPin,
    value: "25",
    suffixText: " Mi",
    labelKey: "stats.label.service_radius",
    fallbackLabel: "Service Radius",
    tag: "Neptune, NJ",
    subtext: "Monmouth County",
    featured: false,
  },
  {
    icon: Clock,
    value: "24/7",
    labelKey: "stats.label.emergency_response",
    fallbackLabel: "Emergency Care",
    tag: "On-Call",
    subtext: "Rapid urgent dispatch",
    featured: false,
  },
];

export function StatsSection() {
  const { t } = useTranslation();

  // Bulletproof label helper that prevents any raw translation keys from rendering
  const getSafeText = (key: string, fallback: string) => {
    const val = t(key as any);
    if (!val || val === key || val.startsWith("stats.") || val.startsWith("financing.")) {
      return fallback;
    }
    return val;
  };

  const badgeText = getSafeText("financing.badge", "FINANCING AVAILABLE");
  const titleText = getSafeText("financing.title", "Ready To Start Your Project?");
  const descText = getSafeText(
    "financing.desc",
    "Make your remodeling or property improvement project more manageable with financing options available through KV Property Inc."
  );
  const btnAskText = getSafeText("financing.btn.ask", "Ask About Financing");
  const btnEstimateText = getSafeText("financing.btn.estimate", "Get A Free Estimate");

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
      <section
        id="financing"
        className="relative mx-auto max-w-[1400px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] py-8 sm:py-14 lg:py-18 px-4 sm:px-8 lg:px-12 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)]"
      >
        {/* Ambient warm illumination orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffa326]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cc7e14]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle background texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffa326 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, Benefit Pills, Buttons, and 4 Compact Re-Designed Cards */}
          <div className="w-full lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/25 text-[#cc7e14] rounded-full px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-3.5 shadow-2xs select-none">
                <Sparkles className="w-3.5 h-3.5 text-[#cc7e14]" />
                <span>{badgeText}</span>
              </div>

              {/* Title */}
              <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-extrabold text-neutral-900 leading-tight mb-3 tracking-tight">
                {titleText}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 max-w-xl font-normal">
                {descText}
              </p>

              {/* Feature Highlights Row */}
              <div className="flex flex-wrap items-center gap-2 mb-6 select-none">
                <div className="inline-flex items-center gap-1.5 bg-neutral-100/90 border border-neutral-200/90 px-3 py-1 rounded-full text-[11px] font-semibold text-neutral-700 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Flexible Monthly Terms</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-neutral-100/90 border border-neutral-200/90 px-3 py-1 rounded-full text-[11px] font-semibold text-neutral-700 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Quick Pre-Qualification</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-neutral-100/90 border border-neutral-200/90 px-3 py-1 rounded-full text-[11px] font-semibold text-neutral-700 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Residential & Commercial</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 select-none mb-6 w-full sm:w-auto">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#995906] text-white text-[11px] xs:text-xs font-bold rounded-full px-3.5 xs:px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 cursor-pointer uppercase tracking-wider whitespace-nowrap text-center"
                >
                  <CircleDollarSign className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>{btnAskText}</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] xs:text-xs font-bold rounded-full px-3.5 xs:px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 cursor-pointer uppercase tracking-wider whitespace-nowrap text-center"
                >
                  <span>{btnEstimateText}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-full px-3 xs:px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] xs:text-xs font-bold uppercase tracking-wider shadow-xs hover:border-[#ffa326] transition-all duration-300 cursor-pointer whitespace-nowrap text-center"
                >
                  <Phone className="w-3 h-3 text-[#cc7e14] shrink-0" />
                  <span>(732) 677-6674</span>
                </button>
              </div>
            </motion.div>

            {/* 4 Compact Re-Designed Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full">
              {statsCards.map((stat, i) => {
                const Icon = stat.icon;
                const label = getSafeText(stat.labelKey, stat.fallbackLabel);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className={`group relative bg-white/95 hover:bg-white rounded-xl p-3 sm:p-3.5 flex flex-col justify-between select-none transition-all duration-300 hover:-translate-y-1 border ${
                      stat.featured
                        ? "border-[#ffa326]/70 shadow-[0_4px_16px_rgba(255,163,38,0.14)] hover:border-[#ffa326] hover:shadow-[0_8px_24px_rgba(255,163,38,0.22)]"
                        : "border-neutral-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#ffa326]/60 hover:shadow-[0_8px_20px_rgba(204,126,20,0.12)]"
                    } overflow-hidden`}
                  >
                    {/* Top Accent Stripe */}
                    <div
                      className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] transition-opacity duration-300 ${
                        stat.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    <div>
                      {/* Top Row: Compact Icon + Mini Tag */}
                      <div className="flex items-center justify-between gap-1.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ffa326]/15 via-[#cc7e14]/10 to-amber-500/5 text-[#cc7e14] border border-[#ffa326]/20 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-[#ffa326] group-hover:text-white transition-all duration-300">
                          <Icon className="w-4 h-4 transition-colors duration-300" />
                        </div>

                        <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/60 select-none whitespace-nowrap">
                          {stat.tag}
                        </span>
                      </div>

                      {/* Metric Counter */}
                      <div className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-none group-hover:text-[#cc7e14] transition-colors duration-300">
                        {stat.value.includes("/") ? (
                          stat.value
                        ) : (
                          <AnimatedCounter
                            value={stat.value}
                            suffixText={stat.suffixText || ""}
                          />
                        )}
                      </div>

                      {/* Primary Label */}
                      <div className="text-[11px] sm:text-xs font-bold text-neutral-800 leading-snug mt-1 truncate group-hover:text-[#cc7e14] transition-colors duration-300">
                        {label}
                      </div>

                      {/* Micro Subtext */}
                      <div className="text-[10px] text-neutral-400 font-normal leading-tight mt-0.5 truncate">
                        {stat.subtext}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Image Showcase (Zero Branding, Zero Text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative group w-full max-w-[460px] lg:max-w-none">
              {/* Soft ambient back glow */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#ffa326]/25 via-[#cc7e14]/15 to-transparent rounded-[36px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Architectural outer glass frame */}
              <div className="relative w-full p-2 sm:p-2.5 rounded-[26px] bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_20px_50px_-10px_rgba(204,126,20,0.18),0_10px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_25px_60px_-10px_rgba(204,126,20,0.25),0_12px_30px_-5px_rgba(0,0,0,0.12)]">
                {/* Pure Clean Image Container without text, badges, or logos */}
                <div className="relative w-full rounded-[20px] overflow-hidden bg-neutral-950 h-[260px] xs:h-[320px] sm:h-[400px] lg:h-[430px] shadow-inner">
                  <img
                    src={statsShowcase}
                    alt="High-End Home Remodeling and Renovation Excellence"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}