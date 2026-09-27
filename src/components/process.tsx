import { motion } from "framer-motion";
import {
  MessageSquare,
  FileSpreadsheet,
  Hammer,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "@/context/translation-context";


const steps = [
  {
    stepNum: "01",
    phase: "Phase 01",
    fallbackName: "Consultation",
    fallbackDesc: "Tell us about your project, your goals, and what you want to accomplish.",
    keyTitle: "process.s1.title",
    keyDesc: "process.s1.desc",
    icon: MessageSquare,
    deliverables: [
      "Initial project scope & vision",
      "On-site property evaluation",
      "Design & budget alignment",
    ],
  },
  {
    stepNum: "02",
    phase: "Phase 02",
    fallbackName: "Estimate",
    fallbackDesc: "We'll review your project and provide an estimate based on your specific needs.",
    keyTitle: "process.s2.title",
    keyDesc: "process.s2.desc",
    icon: FileSpreadsheet,
    deliverables: [
      "Transparent itemized quote",
      "Clear milestone timeline",
      "Financing options guidance",
    ],
  },
  {
    stepNum: "03",
    phase: "Phase 03",
    fallbackName: "Build & Remodel",
    fallbackDesc: "Our team gets to work with professional craftsmanship and attention to detail.",
    keyTitle: "process.s3.title",
    keyDesc: "process.s3.desc",
    icon: Hammer,
    deliverables: [
      "Licensed & insured execution",
      "Daily cleanup & site care",
      "Dedicated project updates",
    ],
  },
  {
    stepNum: "04",
    phase: "Phase 04",
    fallbackName: "Final Walkthrough",
    fallbackDesc: "We review the completed project with you and make sure everything meets your expectations.",
    keyTitle: "process.s4.title",
    keyDesc: "process.s4.desc",
    icon: ClipboardCheck,
    deliverables: [
      "Comprehensive punch-list check",
      "100% satisfaction verification",
      "Warranty & maintenance care",
    ],
  },
];

export function Process() {
  const { t } = useTranslation();

  // Helper to remove redundant "01 — " prefix if present in translation strings
  const cleanTitle = (raw: string, fallback: string) => {
    if (!raw) return fallback;
    return raw.replace(/^\d+\s*[—–-]\s*/, "").trim() || fallback;
  };

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
      <section
        id="process"
        className="mx-auto max-w-[1400px] w-full rounded-2xl bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)] relative py-8 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden"
      >
        {/* Subtle decorative ambient warmth */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffa326]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cc7e14]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Background micro grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffa326 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/25 text-[#cc7e14] rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest mb-3 shadow-xs select-none">
              <Sparkles className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>{t("process.badge") || "Proven 4-Step Process"}</span>
            </div>

            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold text-neutral-900 tracking-tight leading-tight">
              {t("process.title") || "From Idea To Finished Space."}
            </h2>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
              {t("process.desc") ||
                "A transparent, disciplined construction workflow designed for stress-free remodeling, clear communication, and enduring quality."}
            </p>
          </motion.div>

          {/* 4-Step Connected Grid */}
          <div className="relative">
            {/* Animated Connector Line on Desktop */}
            <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-[2px] bg-neutral-200/80 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ffa326] via-[#cc7e14] to-[#ffa326]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 relative z-10">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const rawTitle = t(s.keyTitle as any);
                const title = cleanTitle(rawTitle, s.fallbackName);
                const desc = t(s.keyDesc as any) || s.fallbackDesc;

                return (
                  <motion.div
                    key={s.stepNum}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                    className="group relative flex flex-col bg-white rounded-2xl p-6 sm:p-6 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(204,126,20,0.18)] hover:border-[#ffa326]/60 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
                  >
                    {/* Background Big Step Watermark Number */}
                    <span className="absolute -top-3 -right-1 font-mono text-6xl font-black text-neutral-100/80 select-none pointer-events-none group-hover:text-[#ffa326]/15 transition-colors duration-500">
                      {s.stepNum}
                    </span>

                    {/* Top Row: Icon + Phase Tag */}
                    <div className="flex items-center justify-between relative z-10 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffa326]/15 via-[#cc7e14]/10 to-amber-500/5 text-[#cc7e14] border border-[#ffa326]/25 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#ffa326] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(204,126,20,0.3)] transition-all duration-300">
                        <Icon className="w-5 h-5 transition-colors duration-300" />
                      </div>

                      <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/10 px-2.5 py-1 rounded-full border border-[#ffa326]/20 select-none">
                        {s.phase}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#cc7e14] transition-colors duration-300 leading-snug">
                          {title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                          {desc}
                        </p>
                      </div>

                      {/* Milestone Deliverables Checklist */}
                      <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2">
                        {s.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-left">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-[11px] sm:text-xs text-neutral-700 font-medium leading-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Callout Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 sm:mt-14 rounded-2xl bg-gradient-to-r from-neutral-950 via-[#1c1a17] to-neutral-900 p-4 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-neutral-800 relative z-10"
          >
            <div className="text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffa326] bg-[#ffa326]/15 border border-[#ffa326]/30 px-2.5 py-1 rounded-full select-none">
                Start With Step 01
              </span>
              <h4 className="text-base sm:text-xl font-bold mt-2 text-white">
                Ready to bring your remodeling vision to life?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                Schedule your free on-site consultation and estimate with KV Property Inc today.
              </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 xs:gap-3 shrink-0 w-full md:w-auto">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-3.5 xs:px-5 py-2.5 text-[11px] xs:text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap text-center"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Call (732) 677-6674</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#995906] text-white rounded-full px-3.5 xs:px-6 py-2.5 text-[11px] xs:text-xs font-bold transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer whitespace-nowrap text-center"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
