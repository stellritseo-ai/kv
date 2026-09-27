import { Facebook, Twitter, Youtube, Phone, Mail, MapPin, ChevronUp, ShieldCheck } from "lucide-react";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#f4f3ef] pt-0 pb-[15px] px-2.5 sm:px-[15px]">
      <footer
        className="mx-auto max-w-[1400px] w-full bg-gradient-to-b from-[#120b08] to-[#0a0604] text-white px-4 sm:px-8 md:px-12 pt-[60px] pb-[20px] rounded-t-none rounded-b-[10px] mt-0 border border-neutral-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative overflow-hidden"
      >
        {/* Decorative top line highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffa326]/40 to-transparent" />

        {/* Main Grid: 4 Columns on Desktop (lg:grid-cols-12), Balanced 2-Row/2-Col Pairing on Tablet, Stacked on Mobile */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 relative z-10">

          {/* Column 1: KV Property Inc Brand Details */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              <h4 className="text-base sm:text-lg font-black text-white tracking-wide uppercase mb-1">
                KV Property Inc
              </h4>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#ffa326] mb-3 sm:mb-4">
                Transforming Spaces • Enhancing Lives
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal pr-0 lg:pr-8 mb-4 sm:mb-6 max-w-2xl">
                Professional remodeling, construction, handyman, and property improvement services for residential and commercial properties. Delivering quality work that is built to last.
              </p>
              
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#ffa326] mt-3 sm:mt-4 mb-4 sm:mb-6 flex flex-wrap gap-x-2 sm:gap-x-2.5 gap-y-1 sm:gap-y-1.5 items-center select-none">
                <span className="inline-flex items-center gap-1.5">
                  <span>Licensed &amp; Insured</span>
                  <span className="text-neutral-700 font-bold">·</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span>Financing Available</span>
                  <span className="text-neutral-700 font-bold">·</span>
                </span>
                <span className="text-neutral-200">24/7 Emergency Service</span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mt-4 sm:mt-5">
                <img
                  src={bbbBadge}
                  alt="Accredited"
                  className="h-[30px] xs:h-[34px] sm:h-[38px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
                <img
                  src={yelpBadge}
                  alt="Reviews"
                  className="h-[30px] xs:h-[34px] sm:h-[38px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
                <img
                  src={homeAdvisorBadge}
                  alt="Approved Contractor"
                  className="h-[30px] xs:h-[34px] sm:h-[38px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Columns 2 & 3: Services & Company (Side-by-side 2-col on mobile/tablet, separate direct grid tracks on desktop) */}
          <div className="grid grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:col-span-1 lg:contents">
            {/* Column 2: Services */}
            <div className="lg:col-span-2">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3.5 sm:mb-6 border-b border-white/5 pb-2 sm:pb-2.5 w-full">
                Services
              </h4>
              <ul className="mt-2.5 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-400 font-normal select-none">
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Kitchen Remodeling
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Bathroom Remodeling
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    General Contracting
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Deck &amp; Outdoor Living
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Painting
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Flooring
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Handyman Services
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Property Maintenance
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Custom Builds
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="lg:col-span-2">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3.5 sm:mb-6 border-b border-white/5 pb-2 sm:pb-2.5 w-full">
                Company
              </h4>
              <ul className="mt-2.5 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-400 font-normal select-none">
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Home
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Our Work
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Reviews
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    FAQ
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Get A Free Estimate
                  </span>
                </li>
                <li>
                  <span className="hover:text-[#ffa326] transition-all duration-200 block cursor-default">
                    Contact
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-3.5 sm:mb-6 border-b border-white/5 pb-2 sm:pb-2.5 w-full">
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
              <p className="text-white font-semibold text-xs sm:text-sm">KV Property Inc</p>

              <div className="flex items-center gap-2.5 sm:gap-3 select-none">
                <Phone className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#ffa326] fill-[#ffa326]/10 shrink-0" />
                <span className="font-medium text-white cursor-default text-xs sm:text-sm">(732) 677-6674</span>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 select-none">
                <Mail className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#ffa326] shrink-0" />
                <span className="break-all text-neutral-300 cursor-default text-xs sm:text-sm">kvpropertyinc@gmail.com</span>
              </div>

              <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-neutral-300 select-none">
                <MapPin className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#ffa326] fill-[#ffa326]/10 shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-xs sm:text-sm leading-snug">Neptune, NJ (25-Mile Service Radius)</span>
              </div>

              <div className="flex items-start sm:items-center gap-2 pt-1.5 sm:pt-2 text-[11px] sm:text-xs text-neutral-400 select-none">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                <span className="leading-snug">Licensed &amp; Insured • Financing Available</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-5 sm:mt-7 flex items-center gap-2.5 sm:gap-3 select-none">
              <span
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#ffa326]/20 text-white transition-all duration-300 shadow-sm cursor-default"
                aria-label="Facebook"
              >
                <Facebook className="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px] fill-current" />
              </span>
              <span
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#ffa326]/20 text-white transition-all duration-300 shadow-sm cursor-default"
                aria-label="Twitter"
              >
                <Twitter className="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px] fill-current" />
              </span>
              <span
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#ffa326]/20 text-white transition-all duration-300 shadow-sm cursor-default"
                aria-label="YouTube"
              >
                <Youtube className="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px]" />
              </span>
            </div>
          </div>
        </div>

        {/* Copyright Banner */}
        <div className="mt-10 sm:mt-12 rounded-xl bg-gradient-to-r from-[#ffa326]/10 to-[#cc7e14]/10 border border-[#ffa326]/20 py-3 text-center text-[11px] sm:text-xs font-medium text-neutral-300 px-4 pr-12 sm:px-6 select-none relative z-10 backdrop-blur-md leading-relaxed">
          © 2026 KV Property Inc. All Rights Reserved. • Licensed &amp; Insured • Financing Available • 24/7 Emergency Service
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 bg-[#ffa326] hover:bg-[#cc7e14] text-neutral-950 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(255,163,38,0.25)] hover:shadow-[0_6px_20px_rgba(255,163,38,0.4)] cursor-pointer flex items-center justify-center group active:scale-95 z-20 border border-[#ffa326]/20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 stroke-[3] group-hover:-translate-y-0.5 transition-transform" strokeWidth={3} />
        </button>

      </footer>
    </div>
  );
}