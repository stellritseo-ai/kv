import heroImage from "@/assets/wel-bg.png";
import heroVideo from "@/assets/kv-welcome.mp4";
import { useTranslation } from "@/context/translation-context";
import { Phone, ChevronRight, Award, Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";


export function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
      <section
        className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.06)] min-h-[520px] sm:min-h-[580px] md:min-h-[660px] flex items-center justify-start text-left px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-16 md:py-24"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Fallback Background Image (behind video) */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Premium Dark overlay for high contrast and readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#120b06]/95 via-[#120b06]/85 to-[#120b06]/60 z-10"
        />

        {/* Dynamic content container */}
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-start space-y-4 sm:space-y-6 md:space-y-8">

          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 sm:mt-10 md:mt-14 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider shadow-sm select-none"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffa326] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffa326]"></span>
            </span>
            <span>{t("hero.badge") || "Licensed • Insured • Financing Available"}</span>
          </motion.div>

          {/* Headline */}
          <h1
            className="text-white leading-[1.18] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-serif text-[26px] xs:text-[28px] sm:text-[36px] md:text-[46px] lg:text-[50px] font-bold -mt-2 mb-2"
          >
            Built With Purpose.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#ffc570]">
              Crafted To Last.
            </span>
          </h1>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-sm md:text-base lg:text-lg text-neutral-200 font-light leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
          >
            {t("hero.description") || "Transforming homes and commercial spaces with professional remodeling, construction, handyman, and property improvement services."}
          </motion.p>

          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs sm:text-sm text-neutral-300 font-medium tracking-wide flex items-center gap-2 flex-wrap"
          >
            <Award className="w-4 h-4 text-[#ffa326] shrink-0" />
            <span>20+ Years of Experience | Residential &amp; Commercial | 25-Mile Service Area</span>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-row items-center gap-2 xs:gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
          >
            <button
              type="button"
              className="inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-3.5 xs:px-5 sm:px-8 py-3 sm:py-4 text-white text-[11px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_14px_rgba(255,163,38,0.35)] cursor-pointer whitespace-nowrap"
            >
              <span>Get a Free Estimate</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 xs:px-5 sm:px-8 py-3 sm:py-4 text-white text-[11px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
              <span>Call (732) 677-6674</span>
            </button>
          </motion.div>

          {/* Premium Trust Pillars Block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            className="w-full pt-4 sm:pt-6 mt-2 sm:mt-4 max-w-3xl lg:max-w-4xl"
          >
            {/* Elegant ambient hairline divider */}
            <div className="relative mb-4 sm:mb-5">
              <div className="h-px w-full bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
              <div className="absolute inset-x-1/4 -top-px h-px bg-gradient-to-r from-transparent via-[#ffa326]/60 to-transparent blur-[0.5px]" />
            </div>

            {/* 3-Pillar Glassmorphic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4">
              {/* Pillar 1: 20+ Years Experience */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-3.5 lg:p-4 bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-md border border-white/12 hover:border-[#ffa326]/45 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.32),0_0_20px_rgba(255,163,38,0.12)]">
                {/* Hairline top reflection highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="relative flex items-center gap-2.5 sm:gap-3">
                  <div className="h-10 w-10 sm:h-10 sm:w-10 lg:h-11 lg:w-11 rounded-xl bg-gradient-to-br from-[#ffa326]/25 to-[#ffa326]/10 border border-[#ffa326]/35 flex items-center justify-center text-[#ffa326] shrink-0 shadow-[0_2px_10px_rgba(255,163,38,0.2)] group-hover:scale-105 group-hover:border-[#ffa326]/60 transition-transform duration-300">
                    <Award className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white text-[13px] sm:text-[13px] lg:text-sm font-bold tracking-tight leading-snug truncate">
                      20+ Years Experience
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-300/85 font-medium leading-snug mt-0.5 truncate">
                      Trusted Craftsmanship
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Residential & Commercial */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-3.5 lg:p-4 bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-md border border-white/12 hover:border-[#ffa326]/45 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.32),0_0_20px_rgba(255,163,38,0.12)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="relative flex items-center gap-2.5 sm:gap-3">
                  <div className="h-10 w-10 sm:h-10 sm:w-10 lg:h-11 lg:w-11 rounded-xl bg-gradient-to-br from-[#ffa326]/25 to-[#ffa326]/10 border border-[#ffa326]/35 flex items-center justify-center text-[#ffa326] shrink-0 shadow-[0_2px_10px_rgba(255,163,38,0.2)] group-hover:scale-105 group-hover:border-[#ffa326]/60 transition-transform duration-300">
                    <Building2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white text-[13px] sm:text-[13px] lg:text-sm font-bold tracking-tight leading-snug truncate">
                      Residential &amp; Commercial
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-300/85 font-medium leading-snug mt-0.5 truncate">
                      Custom Projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 3: 25-Mile Service Area */}
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-3.5 lg:p-4 bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-md border border-white/12 hover:border-[#ffa326]/45 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.32),0_0_20px_rgba(255,163,38,0.12)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="relative flex items-center gap-2.5 sm:gap-3">
                  <div className="h-10 w-10 sm:h-10 sm:w-10 lg:h-11 lg:w-11 rounded-xl bg-gradient-to-br from-[#ffa326]/25 to-[#ffa326]/10 border border-[#ffa326]/35 flex items-center justify-center text-[#ffa326] shrink-0 shadow-[0_2px_10px_rgba(255,163,38,0.2)] group-hover:scale-105 group-hover:border-[#ffa326]/60 transition-transform duration-300">
                    <MapPin className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white text-[13px] sm:text-[13px] lg:text-sm font-bold tracking-tight leading-snug truncate">
                      25-Mile Service Area
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-300/85 font-medium leading-snug mt-0.5 truncate">
                      Neptune, NJ &amp; Surrounding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}