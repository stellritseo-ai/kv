import { useState, useRef } from "react";
import {
  Award,
  ShieldCheck,
  Building2,
  Hammer,
  MapPin,
  CircleDollarSign,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/translation-context";
import whyUsVideo from "@/assets/whyus.mp4";

const features = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    desc: "Decades of hands-on experience across remodeling, construction, repairs, and property improvements.",
    keyTitle: "whychoose.f1.title",
    keyDesc: "whychoose.f1.desc",
  },
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    desc: "We focus on careful workmanship, quality materials, and attention to detail.",
    keyTitle: "whychoose.f2.title",
    keyDesc: "whychoose.f2.desc",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Your project is handled by a licensed and insured professional contractor.",
    keyTitle: "whychoose.f3.title",
    keyDesc: "whychoose.f3.desc",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    desc: "From homes to commercial properties, we provide solutions for a wide range of projects.",
    keyTitle: "whychoose.f4.title",
    keyDesc: "whychoose.f4.desc",
  },
  {
    icon: MapPin,
    title: "Reliable Local Service",
    desc: "Proudly serving Neptune, NJ and surrounding communities within our service area.",
    keyTitle: "whychoose.f5.title",
    keyDesc: "whychoose.f5.desc",
  },
  {
    icon: CircleDollarSign,
    title: "Financing Available",
    desc: "Ask our team about available financing options for your project.",
    keyTitle: "whychoose.f6.title",
    keyDesc: "whychoose.f6.desc",
  },
];

export function WhyChooseSection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
      <section className="relative mx-auto max-w-[1400px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] py-8 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)]">
        {/* Ambient warm background illumination */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffa326]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cc7e14]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Video Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <div className="relative group w-full max-w-[480px] lg:max-w-none">
              {/* Soft ambient back glow */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#ffa326]/25 via-[#cc7e14]/15 to-transparent rounded-[36px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Architectural outer glass frame */}
              <div className="relative w-full p-2 sm:p-2.5 rounded-[26px] bg-white/75 backdrop-blur-md border border-white/90 shadow-[0_20px_50px_-10px_rgba(204,126,20,0.18),0_10px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_25px_60px_-10px_rgba(204,126,20,0.25),0_12px_30px_-5px_rgba(0,0,0,0.12)]">
                {/* Video container */}
                <div className="relative w-full rounded-[20px] overflow-hidden bg-neutral-950 h-[400px] xs:h-[460px] sm:h-[530px] lg:h-[560px] shadow-inner">
                  {/* Subtle top vignette */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />

                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none z-10" />

                  {/* Top Bar: Live Status & Audio Toggle */}
                  <div className="absolute top-3 inset-x-3 sm:top-3.5 sm:inset-x-3.5 z-20 flex items-center justify-between pointer-events-auto">
                    {/* Live Badge */}
                    <div className="flex items-center gap-2 bg-neutral-950/65 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-md select-none">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Verified On-Site Work</span>
                    </div>

                    {/* Audio Toggle */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      className="flex items-center gap-1.5 bg-neutral-950/65 hover:bg-neutral-900/90 active:scale-95 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-[10px] sm:text-[11px] font-semibold tracking-wide transition-all shadow-md cursor-pointer select-none"
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-neutral-300" />
                          <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-300">Unmute</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">Playing</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Video Player */}
                  <video
                    ref={videoRef}
                    src={whyUsVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Floating Glassmorphism Trust Card at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-20 bg-white/92 backdrop-blur-xl border border-white/80 rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.18)] flex items-center justify-between gap-3 select-none transition-all duration-300 group-hover:bottom-4 group-hover:bg-white/96 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#ffa326] via-[#e58a18] to-[#b36707] flex items-center justify-center text-white shadow-md shadow-[#ffa326]/30 shrink-0">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#cc7e14]">
                            Master Builder Standards
                          </span>
                          <span className="h-1 w-1 rounded-full bg-neutral-300 hidden sm:inline-block" />
                          <span className="text-[9px] sm:text-[10px] text-neutral-500 font-medium hidden sm:inline-block">
                            Neptune, NJ
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-extrabold text-neutral-950 truncate mt-0.5">
                          KV Property Inc
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60">
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                            100% Satisfaction Guarantee
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 flex flex-col items-end justify-center pl-1">
                      <span className="text-[10px] sm:text-[11px] font-black text-white bg-gradient-to-r from-[#ffa326] to-[#cc7e14] px-2.5 sm:px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                        20+ Yrs Exp
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Features & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/25 text-[#cc7e14] rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest mb-4 shadow-xs select-none cursor-default">
              <Sparkles className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>{t("whychoose.badge") || "Why Choose KV Property Inc?"}</span>
            </div>

            <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-extrabold text-neutral-900 leading-tight mt-0 mb-3 tracking-tight">
              {t("whychoose.title") || "Experience You Can Build On."}
            </h2>

            {(() => {
              const rawDesc = t("whychoose.desc");
              const safeDesc =
                !rawDesc || rawDesc === "whychoose.desc"
                  ? "From precision home remodeling to larger commercial improvements, we bring professional craftsmanship, dependable service, and attention to detail to every project."
                  : rawDesc;
              return (
                <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed font-normal mb-8 max-w-2xl">
                  {safeDesc}
                </p>
              );
            })()}

            {/* 6 Feature Micro-Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const title = t(feature.keyTitle as any) || feature.title;
                const desc = t(feature.keyDesc as any) || feature.desc;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="flex gap-3.5 items-start p-3.5 sm:p-4 rounded-xl bg-white/80 hover:bg-white border border-neutral-200/70 hover:border-[#ffa326]/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(204,126,20,0.12)] transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffa326]/15 via-[#cc7e14]/10 to-amber-500/5 text-[#cc7e14] group-hover:bg-[#ffa326] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs border border-[#ffa326]/20">
                      <Icon className="w-5 h-5 transition-colors duration-300" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-extrabold text-[14px] sm:text-[15px] text-neutral-900 leading-tight group-hover:text-[#cc7e14] transition-colors duration-300">
                        {title}
                      </h4>
                      <p className="text-[12px] sm:text-xs text-neutral-600 leading-relaxed font-normal mt-1">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dual CTA Actions */}
            <div className="mt-8 pt-4 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3.5 sm:gap-4 w-full">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#995906] text-white rounded-full px-7 py-3 text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer w-full xs:w-auto text-center"
              >
                <span>{t("whychoose.btn.book") || "Get A Free Estimate"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-xs hover:border-[#ffa326] transition-all duration-300 cursor-pointer w-full xs:w-auto text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#cc7e14]" />
                <span>Call (732) 677-6674</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
