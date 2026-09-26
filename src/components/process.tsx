import { motion } from "framer-motion";
import {
  MessageSquare,
  FileSpreadsheet,
  Hammer,
  ClipboardCheck,
} from "lucide-react";
import { useTranslation } from "@/context/translation-context";

const steps = [
  {
    stepNum: "01",
    name: "Consultation",
    title: "01 — Consultation",
    desc: "Tell us about your project, your goals, and what you want to accomplish.",
    keyTitle: "process.s1.title",
    keyDesc: "process.s1.desc",
    icon: MessageSquare,
  },
  {
    stepNum: "02",
    name: "Estimate",
    title: "02 — Estimate",
    desc: "We'll review your project and provide an estimate based on your specific needs.",
    keyTitle: "process.s2.title",
    keyDesc: "process.s2.desc",
    icon: FileSpreadsheet,
  },
  {
    stepNum: "03",
    name: "Build & Remodel",
    title: "03 — Build & Remodel",
    desc: "Our team gets to work with professional craftsmanship and attention to detail.",
    keyTitle: "process.s3.title",
    keyDesc: "process.s3.desc",
    icon: Hammer,
  },
  {
    stepNum: "04",
    name: "Final Walkthrough",
    title: "04 — Final Walkthrough",
    desc: "We review the completed project with you and make sure everything meets your expectations.",
    keyTitle: "process.s4.title",
    keyDesc: "process.s4.desc",
    icon: ClipboardCheck,
  },
];

export function Process() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section id="process" className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative py-16 sm:py-20 overflow-hidden">

        {/* Background grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffa326 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto w-[90%] max-w-7xl relative z-10">

          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffa326] animate-pulse" />
              Our Process
            </span>

            <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#1c140d] tracking-tight leading-tight">
              From Idea To Finished Space.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal leading-relaxed">
              Our 4-step process delivers professional craftsmanship, clear communication, and dependable results on every project.
            </p>
          </motion.div>

          {/* 4-Step Connected Grid */}
          <div className="relative">
            {/* Connector Line on Desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-[#eae8e1] z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ffa326] via-[#cc7e14] to-[#ffa326]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const title = t(s.keyTitle as any) || s.title;
                const desc = t(s.keyDesc as any) || s.desc;
                return (
                  <motion.div
                    key={s.stepNum}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Circle Node with Badge */}
                    <div className="relative w-[88px] h-[88px] rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-2 border-[#eae8e1] group-hover:border-[#ffa326] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_35px_rgba(255,163,38,0.2)]">
                      <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-[#ffa326] text-white text-[10px] font-black tracking-wider shadow-sm border border-white">
                        {s.stepNum}
                      </div>
                      <Icon className="w-8 h-8 text-neutral-400 group-hover:text-[#cc7e14] transition-colors duration-300" />
                    </div>

                    {/* Step Title & Description */}
                    <div className="mt-5 max-w-xs">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#cc7e14] transition-colors duration-300">
                        {title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
