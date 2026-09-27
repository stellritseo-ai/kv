import { Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "@/context/translation-context";

export function TopBar() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="w-full bg-gradient-to-r from-[#14120e] via-[#1a1713] to-[#12100d] text-white text-xs py-2 px-3 sm:px-6 md:px-8 border-b border-[#ffa326]/20 font-sans rounded-t-[10px]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 w-full max-w-[1400px] mx-auto">
        {/* Contact info list - hidden on xs, shown on sm+ */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 group transition-colors select-none">
            <span className="flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#ffa326]/20 border border-white/10 group-hover:border-[#ffa326]/40 text-[#ffa326] p-1.5 transition-all duration-200">
              <Mail className="h-3 w-3" />
            </span>
            <span className="font-normal text-white/80 group-hover:text-white text-[12px] sm:text-[13px] transition-colors">
              {t("topbar.email")}
            </span>
          </div>
          <div className="flex items-center gap-2 group transition-colors select-none">
            <span className="flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#ffa326]/20 border border-white/10 group-hover:border-[#ffa326]/40 text-[#ffa326] p-1.5 transition-all duration-200">
              <MapPin className="h-3 w-3" />
            </span>
            <span className="font-normal text-white/80 group-hover:text-white text-[12px] sm:text-[13px] transition-colors">
              {t("topbar.location")} <span className="text-white/40 text-[11px] font-light">(25-Mile Service Area)</span>
            </span>
          </div>

          {/* 24/7 Emergency Service pill */}
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffa326]/15 border border-[#ffa326]/30 text-[#ffa326] text-[11px] font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffa326] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffa326]"></span>
            </span>
            24/7 Emergency Service
          </span>
        </div>

        {/* Right Area: Social Media & Language Selector */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-1.5 md:py-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/40 hover:text-primary text-white p-1.5 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </span>
            <span
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/40 hover:text-primary text-white p-1.5 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" />
            </span>
            <span
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/40 hover:text-primary text-white p-1.5 transition-all duration-200"
              aria-label="YouTube"
            >
              <Youtube className="h-3.5 w-3.5" />
            </span>
            <span
              className="flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-primary/40 hover:text-primary text-white p-1.5 transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
          </div>

          {/* Divider */}
          <div className="h-4 w-px bg-white/20" />

          {/* Language Selector */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLanguage("en")}
              className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                language === "en"
                  ? "bg-primary/20 border-primary text-primary font-medium shadow-[0_0_8px_rgba(255,163,38,0.15)]"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
              title="English"
            >
              <span className="text-[13px] leading-none">🇺🇸</span>
              <span className="text-[10px] tracking-wider font-semibold uppercase">EN</span>
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                language === "es"
                  ? "bg-primary/20 border-primary text-primary font-medium shadow-[0_0_8px_rgba(255,163,38,0.15)]"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
              title="Español"
            >
              <span className="text-[13px] leading-none">🇪🇸</span>
              <span className="text-[10px] tracking-wider font-semibold uppercase">ES</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
