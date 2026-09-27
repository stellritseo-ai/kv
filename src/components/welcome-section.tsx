import { useState, useRef } from "react";
import { Phone, Mail, Volume2, VolumeX, ShieldCheck, CheckCircle2 } from "lucide-react";
import welBg from "@/assets/wel-bg.png";
import welcomeVideo from "@/assets/welcome.mp4";
import { useTranslation } from "@/context/translation-context";
import { motion } from "framer-motion";


export function WelcomeSection() {
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
      <section
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] bg-cover bg-center px-4 py-8 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20 border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)]"
        style={{ backgroundImage: `url(${welBg})` }}
      >
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-900/10 bg-white/80 backdrop-blur-md text-neutral-800 text-[11px] font-semibold uppercase tracking-wider shadow-sm select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>About KV Property Inc</span>
            </div>

            <h2 className="mt-4 sm:mt-5 text-[24px] sm:text-[28px] lg:text-[34px] leading-tight font-extrabold text-black tracking-tight">
              20+ Years of{" "}
              <span className="bg-gradient-to-r from-[#ffa326] to-[#cc7e14] bg-clip-text text-transparent inline-block">
                Craftsmanship
              </span>
              {" "}You Can Trust.
            </h2>

            <div className="mt-4 mb-2 space-y-3 text-sm sm:text-base leading-relaxed text-neutral-800 font-normal">
              <p>
                KV Property Inc is a trusted residential and commercial construction, remodeling, and property improvement company serving Neptune, NJ and surrounding communities.
              </p>
              <p>
                With more than 20 years of experience, we bring professional craftsmanship, dependable service, and attention to detail to every project.
              </p>
              <p>
                From remodeling a single room to completing larger construction and property improvement projects, our goal is simple: deliver quality work that is built to last.
              </p>
            </div>

            {/* Highlights pill */}
            <div className="mt-3 mb-2 text-xs font-bold uppercase tracking-wider text-[#cc7e14]">
              Licensed • Insured • Financing Available
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <ContactCard label="Call Us Directly:" value="(732) 677-6674" />
              <ContactCard label="Email Us:" value="kvpropertyinc@gmail.com" isEmail={true} />
            </div>

            <div className="mt-7 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 w-full xs:w-auto">
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-[#32322d] to-[#1e1e1a] hover:from-[#23231f] hover:to-[#121210] px-6 sm:px-7 py-3 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer text-center w-full xs:w-auto"
              >
                Call (732) 677-6674
              </button>
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#995906] px-6 sm:px-7 py-3 text-white text-sm font-normal hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer text-center w-full xs:w-auto"
              >
                Learn More About Us
              </button>
            </div>
          </motion.div>

          {/* Right Video Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full flex items-center justify-center lg:justify-end"
          >
            <motion.div
              className="relative group w-full max-w-[460px] sm:max-w-[490px] lg:max-w-[520px] flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Soft ambient luxury back-glow */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#ffa326]/25 via-[#cc7e14]/15 to-transparent rounded-[36px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Architectural outer glass frame */}
              <div className="relative w-full p-2 sm:p-2.5 rounded-[26px] bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_20px_50px_-10px_rgba(204,126,20,0.18),0_10px_25px_-5px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_25px_60px_-10px_rgba(204,126,20,0.25),0_12px_30px_-5px_rgba(0,0,0,0.12)]">
                {/* Video container with proportional responsive height */}
                <div className="relative w-full rounded-[20px] overflow-hidden bg-neutral-950 h-[400px] xs:h-[460px] sm:h-[540px] shadow-inner">
                  {/* Subtle top vignette */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />

                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none z-10" />

                  {/* Top Overlay Controls Bar */}
                  <div className="absolute top-3 inset-x-3 sm:top-3.5 sm:inset-x-3.5 z-20 flex items-center justify-between pointer-events-auto">
                    {/* Live Project Pill */}
                    <div className="flex items-center gap-2 bg-neutral-950/65 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-md select-none">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Real On-Site Project</span>
                    </div>

                    {/* Interactive Sound Toggle */}
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

                  {/* Video player */}
                  <video
                    ref={videoRef}
                    src={welcomeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Consultant Overlay Glass Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-20 bg-white/92 backdrop-blur-xl border border-white/80 rounded-2xl p-2.5 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.18)] flex items-center justify-between gap-2.5 sm:gap-3 select-none transition-all duration-300 group-hover:bottom-4 group-hover:bg-white/96 group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#ffa326] via-[#e58a18] to-[#b36707] flex items-center justify-center text-white shadow-md shadow-[#ffa326]/30 shrink-0">
                        <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#cc7e14]">
                            Master Craftsmen
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
                            Licensed & Insured
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ label, value, isEmail }: { label: string; value: string; isEmail?: boolean }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-neutral-900/5 px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
      <span className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-full bg-[#ffa326]/10 text-[#cc7e14]">
        {isEmail ? <Mail className="h-4 w-4 sm:h-5 sm:w-5" /> : <Phone className="h-4 w-4 sm:h-5 sm:w-5" />}
      </span>
      <div className="min-w-0">
        <div className="text-xs sm:text-sm text-neutral-600 font-medium">{label}</div>
        <div className="font-bold text-neutral-950 text-[11px] sm:text-[13px] md:text-[14px] break-all">
          {isEmail ? <a href={`mailto:${value}`} className="hover:underline">{value}</a> : <a href={`tel:${value.replace(/[^0-9]/g, "")}`} className="hover:underline">{value}</a>}
        </div>
      </div>
    </div>
  );
}