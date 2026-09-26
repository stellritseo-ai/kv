import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Hammer, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/context/translation-context";

const areasData = [
  { name: "Neptune, NJ", x: "48%", y: "46%", primary: true },
  { name: "Asbury Park", x: "55%", y: "38%", primary: true },
  { name: "Ocean Grove", x: "58%", y: "44%", primary: true },
  { name: "Bradley Beach", x: "56%", y: "52%", primary: true },
  { name: "Belmar", x: "52%", y: "58%", primary: true },
  { name: "Spring Lake", x: "50%", y: "68%" },
  { name: "Wall Township", x: "36%", y: "60%" },
  { name: "Manasquan", x: "48%", y: "76%" },
  { name: "Point Pleasant", x: "46%", y: "85%" },
  { name: "Long Branch", x: "62%", y: "24%" },
  { name: "Red Bank", x: "44%", y: "16%" },
  { name: "Tinton Falls", x: "38%", y: "30%" },
  { name: "Eatontown", x: "48%", y: "26%" },
  { name: "Colts Neck", x: "28%", y: "24%" },
  { name: "Freehold", x: "18%", y: "36%" },
  { name: "Howell", x: "22%", y: "56%" },
  { name: "Ocean Township", x: "50%", y: "32%" },
  { name: "Brick", x: "34%", y: "82%" },
  { name: "Holmdel", x: "30%", y: "12%" },
];

const TinyHammerIcon = () => (
  <Hammer className="w-3.5 h-3.5 text-[#cc7e14] shrink-0 animate-pulse" />
);

export function ServiceArea() {
  const { t } = useTranslation();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section 
        id="service-area" 
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative py-16 px-6 sm:px-8 lg:px-12 overflow-hidden"
      >
        {/* Background glowing blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br from-[#ffa326]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-neutral-400/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Chips (50% width) */}
            <div className="z-10 text-left">
              <span className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
                <TinyHammerIcon /> Service Area <TinyHammerIcon />
              </span>
              
              <h2 className="text-3xl sm:text-[38px] font-extrabold text-neutral-900 leading-tight tracking-tight mb-4 font-serif">
                Proudly Serving{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] to-[#cc7e14]">
                  Neptune, NJ
                </span>{" "}
                &amp; Surrounding Communities
              </h2>
              
              <p className="text-[14px] sm:text-[15px] text-neutral-600 leading-relaxed font-normal mb-6 max-w-lg">
                KV Property Inc proudly serves homeowners and businesses throughout Neptune, New Jersey and surrounding communities within approximately a 25-mile service area. Looking for professional remodeling, construction, handyman, or property improvement services? Contact KV Property Inc today to discuss your project.
              </p>

              {/* Action Button */}
              <div className="mb-6">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] text-white px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Check Service Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Premium Capsule Chips */}
              <div className="flex flex-wrap gap-2">
                {areasData.map((a) => {
                  const isActive = hoveredArea === a.name;
                  return (
                    <motion.div
                      key={a.name}
                      onMouseEnter={() => setHoveredArea(a.name)}
                      onMouseLeave={() => setHoveredArea(null)}
                      whileHover={{ scale: 1.02, y: -0.5 }}
                      className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider rounded-xl py-2 px-3 transition-all duration-300 cursor-pointer border select-none ${
                        isActive
                          ? "bg-[#ffa326]/15 border-[#ffa326]/40 text-[#cc7e14] shadow-sm"
                          : "text-neutral-600 bg-neutral-50/70 border-neutral-200/60 hover:bg-[#ffa326]/5 hover:border-[#ffa326]/30 hover:text-[#cc7e14]"
                      }`}
                    >
                      <MapPin className={`h-3 w-3 shrink-0 transition-colors duration-300 ${
                        isActive ? "text-[#cc7e14] animate-bounce" : "text-neutral-400"
                      }`} />
                      {a.name}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sleek Dispatch Telemetry Map (50% width) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1324] to-[#040814] border border-slate-800 shadow-glow ring-1 ring-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-10"
            >
              {/* Corner Tech Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ffa326]/30 pointer-events-none z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#ffa326]/30 pointer-events-none z-20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ffa326]/30 pointer-events-none z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#ffa326]/30 pointer-events-none z-20" />

              {/* Coordinates HUD overlay */}
              <div className="absolute top-5 right-5 bg-slate-950/75 border border-slate-800/80 backdrop-blur-md text-[9px] font-mono text-amber-200/90 rounded-lg px-2.5 py-1.5 select-none z-20 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>LAT: 40.2204 / LNG: -74.0326</span>
              </div>

              {/* Embedded Google Map Background (Centered on Neptune, NJ) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48896.79374092601!2d-74.06282869999999!3d40.2184478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c22649a7a92b23%3A0x6b77d612e69cb077!2sNeptune%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full opacity-65 grayscale invert contrast-[1.3] brightness-[0.8] pointer-events-none transition-opacity duration-500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Scanline background */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none z-10" />

              {/* Radar Glow & Sweep */}
              <div 
                className="absolute pointer-events-none z-15"
                style={{
                  left: "48%",
                  top: "46%",
                  width: "400px",
                  height: "400px",
                  transform: "translate(-50%, -50%)",
                  background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 163, 38, 0.15) 0deg, rgba(255, 163, 38, 0) 120deg)",
                  borderRadius: "50%",
                  animation: "radar-sweep 8s linear infinite",
                  mixBlendMode: "screen",
                }}
              />

              <svg
                viewBox="0 0 600 450"
                className="absolute inset-0 h-full w-full pointer-events-none z-10"
                aria-hidden
              >
                <circle cx="288" cy="207" r="50" fill="none" stroke="rgba(255, 163, 38, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="288" cy="207" r="120" fill="none" stroke="rgba(255, 163, 38, 0.1)" strokeWidth="1" />
                <circle cx="288" cy="207" r="200" fill="none" stroke="rgba(255, 163, 38, 0.05)" strokeWidth="1" strokeDasharray="8 8" />
              </svg>

              {/* Pins with glowing radar rings */}
              {areasData.map((pin) => (
                <Pin
                  key={pin.name}
                  x={pin.x}
                  y={pin.y}
                  label={pin.name}
                  primary={pin.primary}
                  active={hoveredArea === pin.name}
                  onMouseEnter={() => setHoveredArea(pin.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                />
              ))}

              {/* Coverage badge */}
              <div className="absolute bottom-5 left-5 bg-slate-950/75 border border-slate-800/80 backdrop-blur-md text-white rounded-2xl px-4 py-3 select-none z-20">
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                  Service Area
                </div>
                <div className="font-bold text-sm text-[#ffa326] mt-0.5">
                  Neptune, NJ &amp; 25-Mile Radius
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @keyframes radar-sweep {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}</style>
      </section>
    </div>
  );
}

function Pin({
  x,
  y,
  label,
  primary = false,
  active = false,
  onMouseEnter,
  onMouseLeave,
}: {
  x: string;
  y: string;
  label: string;
  primary?: boolean;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-20 transition-all duration-300"
      style={{ left: x, top: y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center gap-1.5">
        <div className="relative flex h-7 w-7 items-center justify-center">
          <span className={`animate-ping absolute inline-flex h-5.5 w-5.5 rounded-full opacity-75 transition-all duration-300 ${
            active 
              ? "bg-[#ffa326] scale-125" 
              : primary 
                ? "bg-[#ffa326]/50" 
                : "bg-amber-500/30"
          }`}></span>
          <span className={`relative inline-flex rounded-full h-4 w-4 items-center justify-center text-white shadow-md transition-all duration-300 ${
            active 
              ? "bg-[#ffa326] scale-110 shadow-[0_0_10px_rgba(255,163,38,0.6)]" 
              : primary 
                ? "bg-[#ffa326] border border-white/20" 
                : "bg-slate-800 border border-slate-700"
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full bg-white transition-transform duration-300 ${
              active ? "scale-125" : ""
            }`} />
          </span>
        </div>
        
        <span className={`px-2 py-0.5 rounded-md backdrop-blur-md border transition-all duration-300 text-[9px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm ${
          primary || active ? "inline-block" : "hidden sm:inline-block"
        } ${
          active
            ? "bg-[#ffa326] border-[#ffa326] text-white scale-105"
            : "bg-slate-900/90 border-slate-800/80 text-slate-300 group-hover:bg-[#ffa326] group-hover:border-[#ffa326] group-hover:text-white"
        }`}>
          {label}
        </span>
      </div>
    </div>
  );
}

export function QuoteSection() {
  return <ServiceArea />;
}