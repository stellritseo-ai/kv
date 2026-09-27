import { useState, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  Phone,
  ChevronDown,
  X,
  ArrowRight,
  Sparkles,
  Droplets,
  Hammer,
  Fence,
  Leaf,
  Home,
  Paintbrush,
  Landmark,
  Wrench,
  ShieldCheck,
  Factory,
  Building2,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { TopBar } from "./top-bar";
import { useTranslation } from "@/context/translation-context";

const navItems = [
  { key: "nav.home", to: "/", label: "Home" },
  { key: "nav.about", to: "/about-us", label: "About" },
  { key: "nav.services", to: "/services", label: "Services" },
  { key: "nav.work", to: "/our-work", label: "Our Work" },
  { key: "nav.reviews", to: "/reviews", label: "Reviews" },
  { key: "nav.financing", to: "/", hash: "financing", label: "Financing" },
  { key: "nav.contact", to: "/contact-us", label: "Contact" },
] as const;

const servicesSubMenu = [
  {
    label: "Kitchen Remodeling",
    to: "/services",
    icon: Sparkles,
    desc: "Designed around the way you live",
  },
  {
    label: "Bathroom Remodeling",
    to: "/services",
    icon: Droplets,
    desc: "Quality materials & thoughtful design",
  },
  {
    label: "General Contracting",
    to: "/services",
    icon: Hammer,
    desc: "Complete construction management",
  },
  {
    label: "Deck & Outdoor Living",
    to: "/services",
    icon: Fence,
    desc: "Comfort, entertaining & living",
  },
  {
    label: "Pools & Outdoor Spaces",
    to: "/services",
    icon: Leaf,
    desc: "Functional & attractive outdoor spaces",
  },
  {
    label: "Home Additions",
    to: "/services",
    icon: Home,
    desc: "Expand your living space",
  },
  {
    label: "Interior & Exterior Painting",
    to: "/services",
    icon: Paintbrush,
    desc: "Refresh & protect your property",
  },
  {
    label: "Flooring",
    to: "/services",
    icon: Landmark,
    desc: "Beautiful, durable flooring",
  },
  {
    label: "Handyman Services",
    to: "/services",
    icon: Wrench,
    desc: "Reliable repairs & property needs",
  },
  {
    label: "Property Maintenance",
    to: "/property-maintenance",
    icon: ShieldCheck,
    desc: "Keep your property at its best",
  },
  {
    label: "Custom Builds",
    to: "/services",
    icon: Factory,
    desc: "Bring your ideas to life",
  },
  {
    label: "Commercial Improvements",
    to: "/services",
    icon: Building2,
    desc: "Commercial construction & repairs",
  },
] as const;

export function SiteHeader() {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const getActiveItem = () => {
    if (typeof window !== "undefined" && window.location.hash === "#financing") {
      return "nav.financing";
    }
    if (currentPath === "/") return "nav.home";
    if (currentPath.startsWith("/about-us")) return "nav.about";
    if (
      currentPath.startsWith("/services") ||
      currentPath.startsWith("/property-maintenance")
    )
      return "nav.services";
    if (currentPath.startsWith("/our-work")) return "nav.work";
    if (currentPath.startsWith("/reviews")) return "nav.reviews";
    if (currentPath.startsWith("/contact-us")) return "nav.contact";
    if (currentPath.startsWith("/free-estimate")) return "nav.estimate";
    return "";
  };
  const activeItem = getActiveItem();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* ── TOP BAR ISLAND ── */}
      <div className="w-full bg-[#f4f3ef] pt-3 sm:pt-[15px] pb-0 px-3 sm:px-[15px]">
        <div className="mx-auto max-w-[1400px] w-full rounded-t-[10px] overflow-hidden border-x border-t border-[#eae6dd] shadow-[0_-2px_8px_rgba(0,0,0,0.02)] bg-white">
          <TopBar />
        </div>
      </div>

      {/* ── STICKY NAVIGATION BAR ── */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.06)] border-b border-[#eae6dd]"
          : "bg-[#f4f3ef] px-3 sm:px-[15px] pb-1.5"
          }`}
      >
        <div
          className={`mx-auto max-w-[1400px] w-full transition-all duration-300 ease-in-out ${scrolled
            ? "px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2"
            : "bg-white rounded-b-[20px] border-x border-b border-[#eae6dd] shadow-[0_10px_30px_rgba(0,0,0,0.04)] px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2"
            }`}
        >
          <div className="relative flex items-center justify-between w-full">
            {/* Logo */}
            <div
              className="flex items-center gap-3 group shrink-0 select-none py-0.5 cursor-default"
              aria-label="KV Property Inc Home"
            >
              <img
                src={logo}
                alt="KV Property Inc"
                className={`w-auto max-w-[220px] xs:max-w-[260px] sm:max-w-none object-contain transition-all duration-300 group-hover:scale-[1.02] ${scrolled
                  ? "h-[48px] xs:h-[50px] sm:h-11 md:h-12 lg:h-[50px]"
                  : "h-[64px] xs:h-[68px] sm:h-15 md:h-16 lg:h-[72px]"
                  }`}
              />
            </div>

            {/* Desktop Navigation Items */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 ml-auto mr-5 xl:mr-6">
              {navItems.map((item) => {
                const isActive = item.key === activeItem;

                // Services Mega Menu Dropdown
                if (item.key === "nav.services") {
                  return (
                    <div key={item.key} className="relative group py-2">
                      <button
                        type="button"
                        className={`relative px-3 xl:px-3.5 py-2 rounded-full text-[13.5px] xl:text-[14px] font-semibold tracking-[-0.01em] transition-all duration-200 flex items-center gap-1.5 select-none cursor-pointer ${isActive
                          ? "bg-[#ffa326]/12 text-[#b86d0b] border border-[#ffa326]/35 shadow-[0_2px_8px_rgba(255,163,38,0.12)]"
                          : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-900/[0.04] border border-transparent"
                          }`}
                      >
                        <span>{t(item.key) || item.label}</span>
                        <ChevronDown className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#cc7e14] group-hover:rotate-180 transition-transform duration-300" />
                      </button>

                      {/* Mega Menu Dropdown Container */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[640px] xl:w-[680px] opacity-0 scale-[0.98] invisible pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-250 ease-out origin-top z-50">
                        {/* Invisible bridge to prevent cursor gap closing */}
                        <div className="absolute -top-3 inset-x-0 h-4" />

                        <div className="bg-white/98 backdrop-blur-2xl border border-neutral-200/90 rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.14)] overflow-hidden">
                          {/* Accent Gradient Line */}
                          <div className="h-[2.5px] w-full bg-gradient-to-r from-transparent via-[#ffa326] to-transparent" />

                          {/* Mega Menu Top Header */}
                          <div className="px-5 py-3.5 bg-[#fbfaf7] border-b border-neutral-200/70 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
                              <span className="text-[12px] font-bold uppercase tracking-wider text-neutral-800">
                                Property Improvement Specialties
                              </span>
                              <span className="text-[10px] font-semibold text-[#cc7e14] bg-[#ffa326]/10 border border-[#ffa326]/20 px-2 py-0.5 rounded-full">
                                12 Services
                              </span>
                            </div>
                            <span
                              className="text-[12px] font-bold text-[#cc7e14] hover:text-[#b86d0b] flex items-center gap-1 transition-colors cursor-default select-none"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>

                          {/* 2-Column Services Grid */}
                          <div className="p-4 grid grid-cols-2 gap-2">
                            {servicesSubMenu.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <div
                                  key={sub.label}
                                  className="group/sub flex items-start gap-3 p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-[#ffa326]/10 hover:to-transparent border border-transparent hover:border-[#ffa326]/20 transition-all duration-200 text-left select-none cursor-default"
                                >
                                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffa326]/10 text-[#cc7e14] group-hover/sub:bg-[#ffa326] group-hover/sub:text-white group-hover/sub:scale-105 transition-all duration-300 shrink-0 shadow-xs">
                                    <SubIcon className="h-4.5 w-4.5" />
                                  </div>
                                  <div className="flex flex-col min-w-0">
                                    <span className="text-[13px] font-bold text-neutral-900 group-hover/sub:text-[#cc7e14] transition-colors leading-snug">
                                      {sub.label}
                                    </span>
                                    <span className="text-[11px] text-neutral-500 font-normal leading-normal mt-0.5 line-clamp-1">
                                      {sub.desc}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Mega Menu Footer Banner */}
                          <div className="px-5 py-3 bg-gradient-to-r from-[#181410] to-[#251e17] text-white flex items-center justify-between">
                            <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                              <span className="font-medium">24/7 Emergency Service:</span>
                              <span
                                className="font-bold text-white hover:text-[#ffa326] transition-colors select-none cursor-default"
                              >
                                (732) 677-6674
                              </span>
                            </div>
                            <span
                              className="text-[11px] font-bold uppercase tracking-wider text-[#ffa326] hover:text-[#ffc570] flex items-center gap-1 transition-colors select-none cursor-default"
                            >
                              <span>Free Estimate</span>
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Standard Nav Links
                return (
                  <button
                    type="button"
                    key={item.key}
                    onClick={() => {
                      if ("hash" in item && item.hash) {
                        const el = document.getElementById(item.hash);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className={`relative px-3 xl:px-3.5 py-2 rounded-full text-[13.5px] xl:text-[14px] font-semibold tracking-[-0.01em] transition-all duration-200 select-none cursor-pointer ${isActive
                      ? "bg-[#ffa326]/12 text-[#b86d0b] border border-[#ffa326]/35 shadow-[0_2px_8px_rgba(255,163,38,0.12)]"
                      : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-900/[0.04] border border-transparent"
                      }`}
                  >
                    {t(item.key) || item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Premium CTA Action Group */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
              {/* Primary Free Estimate Button */}
              <button
                type="button"
                className={`relative group overflow-hidden rounded-full px-5 xl:px-6 py-2.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_16px_rgba(255,163,38,0.28)] hover:shadow-[0_6px_22px_rgba(255,163,38,0.45)] hover:scale-[1.02] active:scale-[0.98] select-none flex items-center gap-1.5 cursor-pointer ${activeItem === "nav.estimate"
                  ? "bg-[#cc7e14] text-white ring-2 ring-[#ffa326] ring-offset-2"
                  : "bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] text-white"
                  }`}
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />
                <span>Free Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              {/* Direct Call Button with Live Dot */}
              <button
                type="button"
                className="group flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-white px-4 xl:px-5 py-2.5 text-xs sm:text-[13px] font-bold tracking-wide shadow-[0_3px_12px_rgba(0,0,0,0.10)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 select-none cursor-pointer"
              >
                <span className="relative flex h-2 w-2 mr-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffa326] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffa326]"></span>
                </span>
                <Phone className="h-3.5 w-3.5 text-[#ffa326] fill-[#ffa326]/20 transition-transform duration-300 group-hover:scale-110" />
                <span>(732) 677-6674</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#ffa326] to-[#cc7e14] text-white shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Call KV Property Inc"
              >
                <Phone className="h-4 w-4 fill-white text-white" />
              </button>

              {/* Animated Hamburger Button */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-[#eae6dd] bg-white shadow-xs hover:shadow-md hover:border-[#ffa326]/40 active:scale-95 transition-all duration-200 cursor-pointer group"
              >
                <span className="block w-5 h-[2px] bg-neutral-800 rounded-full transition-all duration-300 group-hover:bg-[#ffa326]" />
                <span className="block w-4 h-[2px] bg-neutral-800 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-[#ffa326]" />
                <span className="block w-3 h-[2px] bg-neutral-800 rounded-full transition-all duration-300 group-hover:w-5 group-hover:bg-[#ffa326]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE FULL-SCREEN SLIDE-OVER DRAWER ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMenu}
            />

            {/* Slide-in Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[88vw] max-w-[380px] lg:hidden flex flex-col bg-white border-l border-neutral-100 shadow-[-20px_0_80px_rgba(0,0,0,0.25)]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#eae6dd] bg-white">
                <img
                  src={logo}
                  alt="KV Property Inc"
                  className="h-16 w-auto object-contain"
                />
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-600 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Trust Badge Bar */}
              <div className="mx-4 mt-3 px-3.5 py-1.5 rounded-full bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] text-[11px] font-bold uppercase tracking-wider flex items-center justify-between select-none">
                <span>Licensed &amp; Insured</span>
                <span>•</span>
                <span>20+ Yrs Exp</span>
                <span>•</span>
                <span>Financing</span>
              </div>

              {/* Navigation Links Scrollable Area */}
              <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {navItems.map((item, idx) => {
                  // Services Accordion in Mobile
                  if (item.key === "nav.services") {
                    return (
                      <motion.div
                        key={item.key}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.05 + 0.1,
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                      >
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-[15px] text-neutral-800 hover:bg-[#ffa326]/8 hover:text-[#cc7e14] transition-all duration-200 cursor-pointer group"
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffa326] shrink-0" />
                            Services
                          </span>
                          <motion.div
                            animate={{ rotate: servicesOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown className="h-4 w-4 text-neutral-400 group-hover:text-[#ffa326]" />
                          </motion.div>
                        </button>

                        {/* Services Submenu Accordion */}
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-1 mb-2 pl-3 border-l-2 border-[#ffa326]/20 flex flex-col space-y-0.5">
                                {servicesSubMenu.map((sub, subIdx) => {
                                  const SubIcon = sub.icon;
                                  return (
                                    <motion.div
                                      key={sub.label}
                                      initial={{ opacity: 0, y: 6 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: subIdx * 0.02 }}
                                    >
                                      <div
                                        onClick={closeMenu}
                                        className="flex items-center gap-2.5 px-3 py-2 text-[12.5px] font-semibold text-neutral-700 hover:text-[#cc7e14] hover:bg-[#ffa326]/8 rounded-lg transition-all duration-150 text-left select-none cursor-pointer"
                                      >
                                        <SubIcon className="h-3.5 w-3.5 text-[#cc7e14] shrink-0" />
                                        <span>{sub.label}</span>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  const isActive = item.key === activeItem;

                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.05 + 0.1,
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          closeMenu();
                          if ("hash" in item && item.hash) {
                            setTimeout(() => {
                              const el = document.getElementById(item.hash);
                              if (el) {
                                el.scrollIntoView({ behavior: "smooth" });
                              }
                            }, 120);
                          }
                        }}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-semibold text-[15px] transition-all duration-200 cursor-pointer select-none ${isActive
                          ? "bg-[#ffa326]/12 text-[#cc7e14]"
                          : "text-neutral-800 hover:bg-[#ffa326]/8 hover:text-[#cc7e14]"
                          }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isActive ? "bg-[#cc7e14]" : "bg-neutral-300"
                            }`}
                        />
                        {t(item.key) || item.label}
                      </button>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Info Strip */}
              <div className="px-6 py-3 bg-[#fbfaf7] border-t border-[#eae6dd] space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-neutral-700">
                  <MapPin className="h-3.5 w-3.5 text-[#cc7e14] shrink-0" />
                  <span>Neptune, NJ (25-Mile Service Radius)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700">
                  <Mail className="h-3.5 w-3.5 text-[#cc7e14] shrink-0" />
                  <span className="text-neutral-700 select-none cursor-default">
                    kvpropertyinc@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
                  <Clock className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>24/7 Emergency Service Available</span>
                </div>
              </div>

              {/* Bottom Sticky Action Buttons */}
              <div className="p-4 border-t border-[#eae6dd] bg-white space-y-2.5">
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-[13px] font-bold tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] text-white hover:brightness-105 active:scale-[0.98] cursor-pointer"
                >
                  <span>Request A Free Estimate</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2.5 w-full rounded-xl bg-neutral-900 hover:bg-neutral-800 py-3.5 text-white text-[13px] font-bold tracking-wide shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <Phone className="h-3.5 w-3.5 text-[#ffa326] fill-[#ffa326]/30" />
                  <span>Call (732) 677-6674</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}