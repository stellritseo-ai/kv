import { useEffect, useState, useRef } from "react";
import hit1 from "@/assets/hit1.png";
import hit2 from "@/assets/hit2.png";
import hit3 from "@/assets/hit3.png";
import exp from "@/assets/hit4.png";
import { useTranslation } from "@/context/translation-context";
import statsCleanup from "@/assets/stats-cleanup.png";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CircleDollarSign } from "lucide-react";

function AnimatedCounter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.includes("+") ? "+" : "";
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
      {formattedCount}{suffix}
    </span>
  );
}

const stats = [
  { icon: exp, value: "20+", labelKey: "stats.label.years_experience" },
  { icon: hit1, value: "100%", labelKey: "stats.label.licensed_insured" },
  { icon: hit3, value: "25", labelKey: "stats.label.service_radius" },
  { icon: hit2, value: "24/7", labelKey: "stats.label.emergency_response" },
] as const;

export function StatsSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-6 py-12 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Title, Description, Buttons, and Cards */}
          <div className="w-full lg:col-span-8 flex flex-col justify-between z-10">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
                <CircleDollarSign className="w-4 h-4" />
                <span>Financing</span>
              </div>

              {/* Title */}
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-neutral-900 leading-tight mb-4 tracking-tight">
                Ready To Start Your Project?
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-neutral-700 leading-relaxed mb-6 max-w-[760px] font-normal">
                Make your remodeling or property improvement project more manageable with financing options available through KV Property Inc.
              </p>

              {/* Action Buttons */}
              <div className="mb-8 flex flex-wrap gap-3 sm:gap-4 select-none">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] text-white text-xs sm:text-sm font-bold rounded-full px-7 py-3.5 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 cursor-pointer uppercase tracking-wider"
                >
                  <span>Ask About Financing</span>
                </Link>
                <Link
                  to="/free-estimate"
                  className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold rounded-full px-7 py-3.5 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 cursor-pointer uppercase tracking-wider"
                >
                  <span>Get A Free Estimate</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>

              {/* 4 Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map(({ icon, value, labelKey }, i) => (
                  <div
                    key={i}
                    className={`group bg-white border rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center text-center select-none transition-all duration-300 hover:-translate-y-1.5 ${
                      i === 0 
                        ? "border-[#ffa326] border-2 shadow-[0_8px_24px_rgba(255,163,38,0.12)] hover:shadow-[0_20px_35px_rgba(255,163,38,0.22)]" 
                        : "border-neutral-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[#ffa326]/40 hover:shadow-[0_15px_30px_rgba(255,163,38,0.12)]"
                    }`}
                  >
                    {/* Icon Wrapper */}
                    <div className="h-10 flex items-center justify-center mb-2.5">
                      <img
                        src={icon}
                        alt={value}
                        className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Value */}
                    <div className="text-xl md:text-2xl font-black text-neutral-900 leading-none tracking-tight transition-colors duration-300 group-hover:text-[#cc7e14]">
                      {value.includes("/") ? value : <AnimatedCounter value={value} />}
                    </div>

                    {/* Label */}
                    <div className="text-[9px] md:text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest mt-2 leading-none transition-colors duration-300 group-hover:text-neutral-600">
                      {t(labelKey as any)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image Container */}
          <div className="w-full lg:col-span-4 h-[220px] sm:h-[280px] lg:h-[430px] relative rounded-3xl overflow-hidden border border-neutral-200/20 shadow-[0_15px_35px_rgba(0,0,0,0.04)]">
            <img
              src={statsCleanup}
              alt="KV Property Inc Financing & Quality"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </section>
    </div>
  );
}