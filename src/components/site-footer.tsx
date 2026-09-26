import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Youtube, Phone, Mail, MapPin, ChevronUp, ShieldCheck } from "lucide-react";
import bbbBadge from "@/assets/bbb-badge.png";
import yelpBadge from "@/assets/yelp-badge.png";
import homeAdvisorBadge from "@/assets/homeadvisor-badge.png";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#f4f3ef] pt-0 pb-[15px] px-[15px]">
      <footer
        className="mx-auto max-w-[1400px] w-full bg-gradient-to-b from-[#120b08] to-[#0a0604] text-white px-5 sm:px-8 md:px-12 py-12 sm:py-16 rounded-t-none rounded-b-[10px] mt-0 border border-neutral-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative overflow-hidden"
      >
        {/* Decorative top line highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffa326]/40 to-transparent" />

        {/* Main 4-Column Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 relative z-10">

          {/* Column 1: KV Property Inc Brand Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-black text-white tracking-wide uppercase mb-1">
                KV Property Inc
              </h4>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ffa326] mb-4">
                Transforming Spaces • Enhancing Lives
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal pr-0 lg:pr-8 mb-6">
                Professional remodeling, construction, handyman, and property improvement services for residential and commercial properties. Delivering quality work that is built to last.
              </p>
              
              <div className="text-xs font-semibold uppercase tracking-wider text-[#ffa326] mt-4 mb-6 flex flex-wrap gap-x-2.5 gap-y-1.5 items-center select-none">
                <span>Licensed &amp; Insured</span>
                <span className="text-neutral-700 font-bold">·</span>
                <span>Financing Available</span>
                <span className="text-neutral-700 font-bold">·</span>
                <span className="text-neutral-200">24/7 Emergency Service</span>
              </div>

              <div className="flex flex-wrap gap-3.5 mt-5">
                <img
                  src={bbbBadge}
                  alt="Accredited"
                  className="h-[38px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
                <img
                  src={yelpBadge}
                  alt="Reviews"
                  className="h-[38px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
                <img
                  src={homeAdvisorBadge}
                  alt="Approved Contractor"
                  className="h-[38px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/5 pb-2.5 w-full">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400 font-normal">
              <li>
                <Link to="/services" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  General Contracting
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Deck &amp; Outdoor Living
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Painting
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Flooring
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Handyman Services
                </Link>
              </li>
              <li>
                <Link to="/property-maintenance" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Property Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Custom Builds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/5 pb-2.5 w-full">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400 font-normal">
              <li>
                <Link to="/" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Reviews
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/free-estimate" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Get A Free Estimate
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-[#ffa326] hover:translate-x-1 transition-all duration-200 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-white/5 pb-2.5 w-full">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-neutral-400 font-normal leading-relaxed">
              <p className="text-white font-semibold">KV Property Inc</p>

              <div className="flex items-center gap-3 hover:text-[#ffa326] transition-colors duration-200">
                <Phone className="h-4.5 w-4.5 text-[#ffa326] fill-[#ffa326]/10 shrink-0" />
                <a href="tel:7326776674" className="font-medium text-white">(732) 677-6674</a>
              </div>

              <div className="flex items-center gap-3 hover:text-[#ffa326] transition-colors duration-200">
                <Mail className="h-4.5 w-4.5 text-[#ffa326] shrink-0" />
                <a href="mailto:kvpropertyinc@gmail.com" className="break-all">kvpropertyinc@gmail.com</a>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin className="h-4.5 w-4.5 text-[#ffa326] fill-[#ffa326]/10 shrink-0" />
                <span>Neptune, NJ (25-Mile Service Radius)</span>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed &amp; Insured • Financing Available</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#3b5998] hover:border-[#3b5998] text-white hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-[15px] w-[15px] fill-current" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#1da1f2] hover:border-[#1da1f2] text-white hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-[15px] w-[15px] fill-current" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#ff0000] hover:border-[#ff0000] text-white hover:scale-105 transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="h-[15px] w-[15px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Banner */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-[#ffa326]/10 to-[#cc7e14]/10 border border-[#ffa326]/20 py-3.5 text-center text-xs font-medium text-neutral-300 px-6 select-none relative z-10 backdrop-blur-md">
          © 2026 KV Property Inc. All Rights Reserved. • Licensed &amp; Insured • Financing Available • 24/7 Emergency Service
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 right-6 bg-[#ffa326] hover:bg-[#cc7e14] text-neutral-950 p-2.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(255,163,38,0.25)] hover:shadow-[0_6px_20px_rgba(255,163,38,0.4)] cursor-pointer flex items-center justify-center group active:scale-95 z-20 border border-[#ffa326]/20"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 stroke-[3] group-hover:-translate-y-0.5 transition-transform" strokeWidth={3} />
        </button>

      </footer>
    </div>
  );
}