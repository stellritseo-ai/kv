import { Award, ShieldCheck, MapPin, Building2, PhoneCall, CircleDollarSign } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const trustItems = [
  {
    icon: Award,
    title: "20+ Years Experience",
    subtitle: "Trusted Local Craftsmanship",
    tag: "PROVEN",
    highlight: true,
    isLive: false,
    keyVal: "trust.stat1.value",
    keyLbl: "trust.stat1.label",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    subtitle: "Full Protection & Peace of Mind",
    tag: "VERIFIED",
    highlight: false,
    isLive: false,
    keyVal: "trust.stat2.value",
    keyLbl: "trust.stat2.label",
  },
  {
    icon: MapPin,
    title: "25-Mile Service Area",
    subtitle: "Neptune, NJ & Surrounding",
    tag: "LOCAL",
    highlight: false,
    isLive: false,
    keyVal: "trust.stat3.value",
    keyLbl: "trust.stat3.label",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    subtitle: "Custom Projects & Remodeling",
    tag: "ALL SCOPES",
    highlight: false,
    isLive: false,
    keyVal: "trust.stat4.value",
    keyLbl: "trust.stat4.label",
  },
  {
    icon: PhoneCall,
    title: "24/7 Emergency Service",
    subtitle: "Rapid On-Site Dispatch",
    tag: "ACTIVE 24/7",
    highlight: true,
    isLive: true,
    keyVal: "trust.stat5.value",
    keyLbl: "trust.stat5.label",
  },
  {
    icon: CircleDollarSign,
    title: "Financing Available",
    subtitle: "Flexible Payment Solutions",
    tag: "FLEXIBLE",
    highlight: false,
    isLive: false,
    keyVal: "trust.stat6.value",
    keyLbl: "trust.stat6.label",
  },
];

// Repeat 4 times to ensure a seamless, gap-free infinite loop on any screen resolution
const carouselItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

export function TrustSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-[15px]">
      <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-3 sm:px-6 py-4 sm:py-5 overflow-hidden">
        {/* Soft edge gradient fades for continuous seamless marquee look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <Carousel
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full relative cursor-grab active:cursor-grabbing select-none"
        >
          <CarouselContent className="-ml-3 sm:-ml-4">
            {carouselItems.map((item, idx) => {
              const Icon = item.icon;
              // Ensure single line continuity even if translation separates val and lbl
              const rawVal = t(item.keyVal);
              const rawLbl = t(item.keyLbl);
              const title = rawVal && rawLbl ? `${rawVal} ${rawLbl}`.replace(/\s+/g, ' ').trim() : item.title;

              return (
                <CarouselItem
                  key={idx}
                  className="pl-3 sm:pl-4 basis-[280px] xs:basis-[305px] sm:basis-[330px] md:basis-[345px] shrink-0"
                >
                  <div
                    className={`group relative rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 h-[86px] sm:h-[92px] flex items-center gap-3.5 sm:gap-4 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                      item.highlight
                        ? "bg-gradient-to-b from-[#fffbf4] to-[#fef6e8] border border-[#ffa326]/35 shadow-[0_4px_20px_rgba(255,163,38,0.1)] hover:border-[#ffa326] hover:shadow-[0_10px_30px_rgba(255,163,38,0.22)]"
                        : "bg-gradient-to-b from-white via-white to-[#faf8f5] border border-[#eae7de] hover:border-[#ffa326]/50 hover:bg-white hover:shadow-[0_10px_28px_rgba(204,126,20,0.1)]"
                    }`}
                  >
                    {/* Subtle top edge hairline reflection */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                    {/* Icon Squircle */}
                    <div
                      className={`h-11 w-11 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 ${
                        item.highlight
                          ? "bg-[#ffa326] text-white shadow-[0_3px_12px_rgba(255,163,38,0.35)]"
                          : "bg-[#ffa326]/10 text-[#cc7e14] border border-[#ffa326]/25 group-hover:bg-[#ffa326] group-hover:text-white group-hover:border-[#ffa326] group-hover:shadow-[0_3px_12px_rgba(255,163,38,0.25)]"
                      }`}
                    >
                      <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 stroke-[2.2]" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 flex flex-col justify-center text-left">
                      <div className="flex items-center justify-between gap-1.5">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <h3 className="text-[14px] sm:text-[15px] font-black text-neutral-900 tracking-tight leading-snug group-hover:text-neutral-950 whitespace-nowrap truncate">
                            {title}
                          </h3>
                          {item.isLive && (
                            <span className="relative flex h-2 w-2 shrink-0">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                          )}
                        </div>

                        {/* Credibility Micro-Tag */}
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 whitespace-nowrap ${
                            item.isLive
                              ? "bg-emerald-500/10 text-emerald-700 border border-emerald-500/25"
                              : "bg-[#ffa326]/12 text-[#b86d0b] border border-[#ffa326]/25"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      {/* Subtitle / Trust Descriptor */}
                      <p className="text-[11px] sm:text-[11.5px] font-medium text-neutral-500 mt-0.5 leading-none group-hover:text-neutral-700 whitespace-nowrap truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
