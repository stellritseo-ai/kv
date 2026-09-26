import {
  Award,
  ShieldCheck,
  Building2,
  ThumbsUp,
  MapPin,
  CircleDollarSign,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/context/translation-context";
import img1 from "@/assets/why-choose-1.png";
import img2 from "@/assets/why-choose-2.png";
import img3 from "@/assets/why-choose-3.png";

const features = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    desc: "Decades of hands-on experience across remodeling, construction, repairs, and property improvements.",
    keyTitle: "whychoose.f1.title",
    keyDesc: "whychoose.f1.desc",
  },
  {
    icon: ShieldCheck,
    title: "Quality Craftsmanship",
    desc: "We focus on careful workmanship, quality materials, and attention to detail.",
    keyTitle: "whychoose.f2.title",
    keyDesc: "whychoose.f2.desc",
  },
  {
    icon: Building2,
    title: "Licensed & Insured",
    desc: "Your project is handled by a licensed and insured professional contractor.",
    keyTitle: "whychoose.f3.title",
    keyDesc: "whychoose.f3.desc",
  },
  {
    icon: ThumbsUp,
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

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden bg-white py-16 px-6 sm:px-8 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
        {/* Background glowing blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-[#ffa326]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-neutral-400/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Images Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full h-auto">
            {/* Left tall image */}
            <div className="w-full overflow-hidden rounded-2xl relative shadow-md border border-neutral-200/10 group/img">
              <img
                src={img1}
                alt="KV Property Inc Construction"
                loading="lazy"
                className="w-full h-[220px] sm:h-[360px] md:h-[420px] lg:h-[540px] object-cover transition-transform duration-700 ease-out group/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Right stacked images */}
            <div className="flex flex-col gap-4 w-full justify-between">
              <div className="w-full overflow-hidden rounded-2xl relative shadow-md border border-neutral-200/10 group/img2">
                <img
                  src={img2}
                  alt="KV Property Inc Remodeling"
                  loading="lazy"
                  className="w-full h-[140px] sm:h-[172px] md:h-[210px] lg:h-[262px] object-cover transition-transform duration-700 ease-out group-hover/img2:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover/img2:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="w-full overflow-hidden rounded-2xl relative shadow-md border border-neutral-200/10 group/img3">
                <img
                  src={img3}
                  alt="KV Property Inc Craftsmanship"
                  loading="lazy"
                  className="w-full h-[172px] sm:h-[232px] lg:h-[262px] object-cover transition-transform duration-700 ease-out group-hover/img3:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover/img3:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6 select-none cursor-default">
              Why Choose KV Property Inc?
            </div>

            <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-bold text-left text-neutral-900 leading-tight mt-0 mb-6">
              Experience You Can Build On.
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 w-full">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const title = t(feature.keyTitle as any) || feature.title;
                const desc = t(feature.keyDesc as any) || feature.desc;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 items-start group transition-all duration-300"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[#ffa326]/10 text-[#cc7e14] group-hover:bg-[#ffa326] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm border border-[#ffa326]/10">
                      <Icon className="w-5.5 h-5.5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[15px] sm:text-base text-neutral-900 mb-1 leading-tight group-hover:text-[#cc7e14] transition-colors duration-300">
                        {title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <Link
              to="/free-estimate"
              className="mt-9 inline-flex items-center justify-center bg-neutral-950 hover:bg-neutral-800 text-white rounded-full px-8 py-3.5 text-xs font-black uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get A Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
