import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Phone,
  Radio,
  Layers,
  ExternalLink,
} from "lucide-react";
import { useTranslation } from "@/context/translation-context";

interface AreaItem {
  name: string;
  shortName: string;
  cx: number;
  cy: number;
  primary?: boolean;
  county: "Monmouth" | "Ocean";
  distance: string;
}

// Mathematically mapped territory coordinates relative to Neptune HQ (cx: 320, cy: 195)
// on a 540 x 400 architectural SVG grid representing Monmouth & Ocean County, NJ.
const areasData: AreaItem[] = [
  { name: "Neptune, NJ", shortName: "Neptune (HQ)", cx: 320, cy: 195, primary: true, county: "Monmouth", distance: "0 mi (HQ)" },
  { name: "Ocean Grove", shortName: "Ocean Grove", cx: 345, cy: 190, primary: true, county: "Monmouth", distance: "1.5 mi" },
  { name: "Asbury Park", shortName: "Asbury Park", cx: 345, cy: 165, primary: true, county: "Monmouth", distance: "2 mi" },
  { name: "Bradley Beach", shortName: "Bradley Beach", cx: 338, cy: 220, primary: true, county: "Monmouth", distance: "2.5 mi" },
  { name: "Belmar", shortName: "Belmar", cx: 330, cy: 248, primary: true, county: "Monmouth", distance: "4 mi" },
  { name: "Ocean Township", shortName: "Ocean Twp", cx: 295, cy: 160, county: "Monmouth", distance: "4 mi" },
  { name: "Eatontown", shortName: "Eatontown", cx: 280, cy: 135, county: "Monmouth", distance: "6 mi" },
  { name: "Wall Township", shortName: "Wall Twp", cx: 260, cy: 245, county: "Monmouth", distance: "6 mi" },
  { name: "Tinton Falls", shortName: "Tinton Falls", cx: 240, cy: 150, county: "Monmouth", distance: "7 mi" },
  { name: "Spring Lake", shortName: "Spring Lake", cx: 320, cy: 280, county: "Monmouth", distance: "7 mi" },
  { name: "Long Branch", shortName: "Long Branch", cx: 360, cy: 105, county: "Monmouth", distance: "8 mi" },
  { name: "Manasquan", shortName: "Manasquan", cx: 305, cy: 315, county: "Monmouth", distance: "9 mi" },
  { name: "Point Pleasant", shortName: "Point Pleasant", cx: 290, cy: 350, county: "Ocean", distance: "12 mi" },
  { name: "Colts Neck", shortName: "Colts Neck", cx: 180, cy: 160, county: "Monmouth", distance: "12 mi" },
  { name: "Red Bank", shortName: "Red Bank", cx: 250, cy: 80, county: "Monmouth", distance: "13 mi" },
  { name: "Howell", shortName: "Howell", cx: 170, cy: 260, county: "Monmouth", distance: "14 mi" },
  { name: "Freehold", shortName: "Freehold", cx: 125, cy: 200, county: "Monmouth", distance: "15 mi" },
  { name: "Brick", shortName: "Brick", cx: 220, cy: 365, county: "Ocean", distance: "16 mi" },
  { name: "Holmdel", shortName: "Holmdel", cx: 175, cy: 85, county: "Monmouth", distance: "18 mi" },
];

export function ServiceArea() {
  const { t } = useTranslation();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [mapMode, setMapMode] = useState<"radar" | "street">("radar");

  const getSafeText = (key: string, fallback: string) => {
    const val = t(key as any);
    if (!val || val === key || val.startsWith("servicearea.")) {
      return fallback;
    }
    return val;
  };

  const badgeText = getSafeText("servicearea.badge", "SERVICE AREA");
  const titleText = getSafeText(
    "servicearea.title",
    "Proudly Serving Neptune, NJ & Surrounding Communities"
  );
  const descText = getSafeText(
    "servicearea.desc",
    "Professional remodeling, construction, and property improvements for homes and businesses throughout Neptune, NJ and surrounding communities within a 25-mile radius."
  );
  const btnText = getSafeText("servicearea.btn", "Check Service Availability");

  const activeAreaObj = areasData.find((a) => a.name === hoveredArea);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
      <section
        id="service-area"
        className="relative mx-auto max-w-[1400px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#fbfaf8] via-white to-[#f7f5ee] py-8 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)]"
      >
        {/* Ambient warm illumination orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffa326]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cc7e14]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle architectural background dot texture */}
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
          {/* Left Column: Heading, 2-line Description, Seamless Town Directory & Sleek Buttons */}
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

              {/* Title (Fluid typography without forced overflow nowrap) */}
              <h2 className="text-[17px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[25px] font-extrabold text-neutral-900 leading-tight mb-2.5 tracking-tight">
                {titleText}
              </h2>

              {/* Description (Strictly in 2 clean lines on screens >= sm) */}
              <p className="text-xs sm:text-[13px] md:text-sm text-neutral-600 leading-relaxed mb-6 font-normal max-w-2xl">
                {descText.includes("throughout Neptune") ? (
                  <>
                    <span className="sm:block">
                      Professional remodeling, construction, and property improvements for homes and businesses
                    </span>
                    <span className="sm:block">
                      throughout Neptune, NJ and surrounding communities within a 25-mile radius.
                    </span>
                  </>
                ) : (
                  descText
                )}
              </p>

              {/* Seamless Town Directory (No scrollbar, pixel-perfect luxury grid) */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#cc7e14]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                      Communities Within 25-Mile Service Radius
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold text-[#cc7e14] bg-[#ffa326]/12 border border-[#ffa326]/30 px-2 py-0.5 rounded-full select-none">
                    19 Towns Covered
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {areasData.map((a) => {
                    const isActive = hoveredArea === a.name;

                    return (
                      <button
                        key={a.name}
                        type="button"
                        onMouseEnter={() => setHoveredArea(a.name)}
                        onMouseLeave={() => setHoveredArea(null)}
                        onClick={() => setHoveredArea(isActive ? null : a.name)}
                        className={`inline-flex items-center gap-1.5 text-[11px] font-semibold rounded-lg py-1.5 px-2.5 transition-all duration-200 cursor-pointer border select-none ${
                          a.primary
                            ? isActive
                              ? "bg-[#ffa326] text-white border-[#ffa326] shadow-sm scale-[1.03]"
                              : "bg-[#ffa326]/12 border-[#ffa326]/40 text-[#b36707] font-bold hover:bg-[#ffa326] hover:text-white"
                            : isActive
                            ? "bg-neutral-900 text-white border-neutral-900 shadow-sm scale-[1.03]"
                            : "text-neutral-700 bg-white border-neutral-200/90 hover:border-[#ffa326]/60 hover:text-[#cc7e14] hover:bg-neutral-50 shadow-2xs"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            a.primary
                              ? isActive ? "bg-white" : "bg-[#cc7e14]"
                              : isActive ? "bg-amber-400" : "bg-neutral-300"
                          }`}
                        />
                        <span>{a.name}</span>
                        {a.distance && (
                          <span
                            className={`text-[9px] font-medium opacity-80 ${
                              isActive ? "text-white" : "text-neutral-400"
                            }`}
                          >
                            ({a.distance})
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons (Compact & Sleek) */}
              <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2 sm:gap-2.5 select-none pt-1 w-full xs:w-auto">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#995906] text-white rounded-full px-4 sm:px-4.5 py-2.5 sm:py-2 text-[11px] font-bold uppercase tracking-wide shadow-sm hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer w-full xs:w-auto text-center"
                >
                  <span>{btnText}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-full px-3.5 sm:px-4 py-2.5 sm:py-2 text-[11px] font-bold uppercase tracking-wide shadow-2xs hover:border-[#ffa326] transition-all duration-300 cursor-pointer w-full xs:w-auto text-center"
                >
                  <Phone className="w-3 h-3 text-[#cc7e14]" />
                  <span>Call (732) 677-6674</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Interactive Dispatch Map Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative group w-full max-w-[520px] lg:max-w-none">
              {/* Soft ambient back glow */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#ffa326]/20 via-[#cc7e14]/10 to-transparent rounded-[32px] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

              {/* Architectural outer glass frame */}
              <div className="relative w-full p-2.5 sm:p-3 rounded-[24px] bg-white/90 backdrop-blur-md border border-[#eae8e1] shadow-[0_20px_50px_-10px_rgba(204,126,20,0.14),0_10px_25px_-5px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_25px_60px_-10px_rgba(204,126,20,0.22),0_12px_30px_-5px_rgba(0,0,0,0.08)]">
                {/* Map Display Container */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-[18px] overflow-hidden bg-[#0c1017] shadow-inner select-none">
                  {mapMode === "street" ? (
                    /* High Quality Street View (Google Maps Embed) */
                    <div className="absolute inset-0 w-full h-full">
                      <iframe
                        title="KV Property Inc Neptune NJ Territory Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97793.58748185203!2d-74.15582869999999!3d40.2184478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c22649a7a92b23%3A0x6b77d612e69cb077!2sNeptune%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>
                  ) : (
                    /* Architectural Territory Vector Radar Map */
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      {/* Subtle Grid Coordinates Background */}
                      <div
                        className="absolute inset-0 opacity-15"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(255, 163, 38, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 163, 38, 0.15) 1px, transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />

                      {/* SVG Architectural Territory Map */}
                      <svg
                        viewBox="0 0 540 400"
                        className="absolute inset-0 w-full h-full"
                        style={{ filter: "drop-shadow(0 0 1px rgba(0,0,0,0.5))" }}
                      >
                        <defs>
                          {/* Atlantic Ocean Gradient */}
                          <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#091422" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#050a12" stopOpacity="0.95" />
                          </linearGradient>

                          {/* 25-Mile Radius Radial Glow */}
                          <radialGradient id="radiusGlow" cx="59%" cy="49%" r="50%">
                            <stop offset="0%" stopColor="rgba(255, 163, 38, 0.16)" />
                            <stop offset="50%" stopColor="rgba(255, 163, 38, 0.05)" />
                            <stop offset="100%" stopColor="rgba(255, 163, 38, 0)" />
                          </radialGradient>

                          {/* Pulsing Pin Glow */}
                          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>

                        {/* Jersey Shore Coastline & Atlantic Ocean Area */}
                        <path
                          d="M 370 0 Q 360 70, 360 105 T 345 165 T 345 190 T 338 220 T 330 250 T 320 280 T 305 320 T 290 350 T 260 400 L 540 400 L 540 0 Z"
                          fill="url(#oceanGrad)"
                          stroke="rgba(56, 189, 248, 0.25)"
                          strokeWidth="1.2"
                        />

                        {/* Atlantic Ocean Label */}
                        <text
                          x="455"
                          y="180"
                          fill="rgba(148, 163, 184, 0.35)"
                          fontSize="9"
                          fontWeight="700"
                          letterSpacing="4"
                          transform="rotate(70 455 180)"
                        >
                          ATLANTIC OCEAN
                        </text>

                        {/* Arterial Highways (Route 18 / Parkway Guides) */}
                        <path
                          d="M 125 200 Q 200 170, 320 195"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.08)"
                          strokeWidth="1.2"
                          strokeDasharray="3 3"
                        />
                        <path
                          d="M 250 80 Q 260 140, 260 245 T 220 365"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.08)"
                          strokeWidth="1.2"
                          strokeDasharray="3 3"
                        />

                        {/* 25-Mile Territory Coverage Boundary */}
                        <circle
                          cx="320"
                          cy="195"
                          r="175"
                          fill="url(#radiusGlow)"
                          stroke="rgba(255, 163, 38, 0.45)"
                          strokeWidth="1.5"
                          strokeDasharray="5 5"
                        />

                        {/* Inner 15-Mile Range Ring */}
                        <circle
                          cx="320"
                          cy="195"
                          r="110"
                          fill="none"
                          stroke="rgba(255, 163, 38, 0.2)"
                          strokeWidth="1"
                        />

                        {/* Inner 5-Mile Core Ring */}
                        <circle
                          cx="320"
                          cy="195"
                          r="45"
                          fill="none"
                          stroke="rgba(255, 163, 38, 0.25)"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />

                        {/* Range Ring Labels */}
                        <text x="323" y="148" fill="rgba(255, 163, 38, 0.55)" fontSize="8" fontWeight="bold">
                          5 Mi
                        </text>
                        <text x="323" y="82" fill="rgba(255, 163, 38, 0.5)" fontSize="8" fontWeight="bold">
                          15 Mi
                        </text>
                        <text x="323" y="18" fill="rgba(255, 163, 38, 0.65)" fontSize="8" fontWeight="bold">
                          25-Mile Service Perimeter
                        </text>

                        {/* HQ Animated Radial Radar Sweep */}
                        <g transform="translate(320, 195)">
                          <circle
                            r="175"
                            fill="none"
                            stroke="rgba(255, 163, 38, 0.08)"
                            strokeWidth="1"
                          />
                        </g>

                        {/* Render all 19 Town Nodes accurately */}
                        {areasData.map((a) => {
                          const isActive = hoveredArea === a.name;
                          const isHQ = a.primary;

                          return (
                            <g
                              key={a.name}
                              className="cursor-pointer transition-all duration-200"
                              onMouseEnter={() => setHoveredArea(a.name)}
                              onMouseLeave={() => setHoveredArea(null)}
                            >
                              {/* Active Pulse Ring */}
                              {isActive && (
                                <circle
                                  cx={a.cx}
                                  cy={a.cy}
                                  r={isHQ ? 20 : 14}
                                  fill="none"
                                  stroke="#ffa326"
                                  strokeWidth="1.5"
                                  className="animate-ping origin-center"
                                />
                              )}

                              {/* HQ Permanent Radar Ring */}
                              {isHQ && (
                                <circle
                                  cx={a.cx}
                                  cy={a.cy}
                                  r="10"
                                  fill="rgba(255, 163, 38, 0.25)"
                                  stroke="rgba(255, 163, 38, 0.7)"
                                  strokeWidth="1"
                                />
                              )}

                              {/* Core Node Circle */}
                              <circle
                                cx={a.cx}
                                cy={a.cy}
                                r={isHQ ? 5.5 : isActive ? 4.5 : 3}
                                fill={
                                  isHQ
                                    ? "#ffa326"
                                    : isActive
                                    ? "#ffffff"
                                    : "rgba(226, 232, 240, 0.6)"
                                }
                                stroke={
                                  isHQ
                                    ? "#ffffff"
                                    : isActive
                                    ? "#ffa326"
                                    : "rgba(15, 23, 42, 0.8)"
                                }
                                strokeWidth={isHQ || isActive ? 2 : 1}
                                filter={isActive ? "url(#glow)" : undefined}
                              />

                              {/* Town Label (HQ always visible, active or key towns highlighted) */}
                              <text
                                x={a.cx + (a.cx > 330 ? -8 : 8)}
                                y={a.cy + (isHQ ? -10 : 3)}
                                textAnchor={a.cx > 330 ? "end" : "start"}
                                fill={
                                  isHQ
                                    ? "#ffa326"
                                    : isActive
                                    ? "#ffffff"
                                    : "rgba(203, 213, 225, 0.65)"
                                }
                                fontSize={isHQ ? "10" : isActive ? "9" : "8"}
                                fontWeight={isHQ || isActive ? "bold" : "normal"}
                                letterSpacing="0.3"
                                className="pointer-events-none select-none transition-all duration-200"
                              >
                                {a.shortName}
                              </text>
                            </g>
                          );
                        })}
                      </svg>
                    </div>
                  )}

                  {/* Top HUD Controls Bar */}
                  <div className="absolute top-3 inset-x-3 sm:top-3.5 sm:inset-x-3.5 z-20 flex items-center justify-between pointer-events-auto">
                    {/* Status Pill */}
                    <div className="flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-[10px] sm:text-[11px] font-semibold tracking-wide shadow-md select-none">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Dispatch Active • 25 Mi</span>
                    </div>

                    {/* Mode Toggle (Radar vs Street View) */}
                    <div className="flex items-center bg-neutral-950/85 backdrop-blur-md border border-white/20 p-0.5 rounded-full shadow-md select-none">
                      <button
                        type="button"
                        onClick={() => setMapMode("radar")}
                        className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all duration-200 ${
                          mapMode === "radar"
                            ? "bg-[#ffa326] text-white shadow-xs"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <Radio className="w-3 h-3" />
                        <span>Radar</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setMapMode("street")}
                        className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all duration-200 ${
                          mapMode === "street"
                            ? "bg-[#ffa326] text-white shadow-xs"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <Layers className="w-3 h-3" />
                        <span>Map</span>
                      </button>
                    </div>
                  </div>

                  {/* Floating Active Town Tooltip (When hovered) */}
                  <AnimatePresence>
                    {activeAreaObj && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-12 left-3 z-30 bg-neutral-950/90 backdrop-blur-md border border-[#ffa326]/50 rounded-xl px-3 py-1.5 shadow-xl text-white select-none pointer-events-none"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
                          <span className="text-xs font-black text-white">{activeAreaObj.name}</span>
                          <span className="text-[10px] font-semibold text-amber-300 ml-1">
                            {activeAreaObj.distance}
                          </span>
                        </div>
                        <p className="text-[9px] text-neutral-300 mt-0.5">
                          {activeAreaObj.county} County • Within Guaranteed Coverage Area
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Floating Glassmorphism Coverage Card at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-20 bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl p-2.5 sm:p-3 shadow-[0_12px_32px_rgba(0,0,0,0.18)] flex items-center justify-between gap-3 select-none transition-all duration-300">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#ffa326] via-[#e58a18] to-[#b36707] flex items-center justify-center text-white shadow-md shadow-[#ffa326]/30 shrink-0">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#cc7e14]">
                            Service Dispatch Center
                          </span>
                          <span className="h-1 w-1 rounded-full bg-neutral-300 hidden sm:inline-block" />
                          <span className="text-[9px] sm:text-[10px] text-neutral-500 font-medium hidden sm:inline-block">
                            Monmouth &amp; Ocean Co.
                          </span>
                        </div>
                        <p className="text-xs sm:text-[13px] font-extrabold text-neutral-950 truncate mt-0.5">
                          Neptune, NJ HQ • 25-Mile Fast Dispatch
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5">
                      <button
                        type="button"
                        className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-neutral-600 hover:text-[#cc7e14] bg-neutral-100 hover:bg-neutral-200/80 px-2.5 py-1.5 rounded-full transition-colors duration-200 cursor-pointer"
                        title="Directions"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Directions</span>
                      </button>
                      <button
                        type="button"
                        className="text-[10px] sm:text-[11px] font-black text-white bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#995906] px-2.5 sm:px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap transition-transform duration-200 active:scale-95 cursor-pointer"
                      >
                        Free Estimate
                      </button>
                    </div>
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

export function QuoteSection() {
  return <ServiceArea />;
}