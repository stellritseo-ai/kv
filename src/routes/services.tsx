import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingChat } from "@/components/floating-chat";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Building2,
  Hammer,
  Sparkles,
  Layers,
  Leaf,
  Droplets,
  Paintbrush,
  Landmark,
  Wrench,
  Factory,
  Home,
  Fence,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Clock,
  Award,
} from "lucide-react";

import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";
import kitchenRemodel from "@/assets/svc-kitchen-remodel.jpg";
import bathroomRemodel from "@/assets/svc-bathroom-remodel.jpg";
import generalContracting from "@/assets/svc-general-contracting.jpg";
import deckOutdoor from "@/assets/svc-deck-outdoor.jpg";
import poolsOutdoor from "@/assets/svc-pools-outdoor.jpg";
import homeAdditions from "@/assets/svc-home-additions.jpg";
import paintingImg from "@/assets/svc-painting.jpg";
import flooringImg from "@/assets/svc-flooring.jpg";
import handymanImg from "@/assets/svc-maintenance.png";
import maintenanceImg from "@/assets/why-choose-3.png";
import customBuildsImg from "@/assets/svc-custom-builds.jpg";
import commercialImg from "@/assets/svc-commercial.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Remodeling & Construction | KV Property Inc." },
      {
        name: "description",
        content:
          "Explore the complete range of residential and commercial remodeling, construction, and property maintenance services from KV Property Inc. Serving Neptune, NJ for 20+ years.",
      },
      { property: "og:title", content: "Our Services | KV Property Inc." },
      {
        property: "og:description",
        content:
          "Over 20 years of craftsmanship, licensed & insured protection across Neptune, NJ, and Monmouth & Ocean Counties.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kvpropertyinc.com/services" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kvpropertyinc.com/services",
      },
    ],
  }),
  component: ServicesPage,
});

interface ServiceCardItem {
  id: string;
  category: "all" | "remodeling" | "outdoor" | "specialized" | "commercial";
  title: string;
  badge: string;
  desc: string;
  image: string;
  to: string;
  icon: typeof Sparkles;
  items: string[];
}

const ALL_SERVICES_CATALOG: ServiceCardItem[] = [
  {
    id: "kitchen-remodeling",
    category: "remodeling",
    title: "Kitchen Remodeling",
    badge: "Interior",
    desc: "From custom cabinetry and quartz countertops to open-concept floorplans, we create luxury kitchens designed around how you cook and gather.",
    image: kitchenRemodel,
    to: "/kitchen-remodeling",
    icon: Sparkles,
    items: [
      "Custom Solid-Wood Cabinetry",
      "Quartz & Granite Countertops",
      "Open-Concept Layout Modifications",
      "Designer Tile Backsplashes",
    ],
  },
  {
    id: "bathroom-remodeling",
    category: "remodeling",
    title: "Bathroom Remodeling",
    badge: "Interior",
    desc: "Upgrade your master bath or powder room with spa-inspired walk-in showers, custom double vanities, freestanding tubs, and heated floors.",
    image: bathroomRemodel,
    to: "/bathroom-remodeling",
    icon: Droplets,
    items: [
      "Curbless Walk-In Tile Showers",
      "Freestanding Soaking Tubs",
      "Custom Double Vanities",
      "Schluter Waterproofing Systems",
    ],
  },
  {
    id: "general-contracting",
    category: "remodeling",
    title: "General Contracting",
    badge: "Turnkey",
    desc: "Licensed, full-service general contracting for residential renovations, structural modifications, permitting, and turnkey project management.",
    image: generalContracting,
    to: "/general-contracting",
    icon: Hammer,
    items: [
      "Turnkey Project Management",
      "Township Permits & Code Sign-Off",
      "Load-Bearing Wall Removal",
      "MEP Subcontractor Synchronization",
    ],
  },
  {
    id: "deck-outdoor-living",
    category: "outdoor",
    title: "Deck & Outdoor Living",
    badge: "Outdoor",
    desc: "Custom composite and natural hardwood decks, covered porches, pergolas, and outdoor kitchens built to withstand New Jersey coastal weather.",
    image: deckOutdoor,
    to: "/deck-outdoor-living",
    icon: Fence,
    items: [
      "Trex & TimberTech Composite Decks",
      "Custom Pergolas & Covered Porches",
      "Cable & Glass Railing Systems",
      "Integrated Low-Voltage Deck Lights",
    ],
  },
  {
    id: "pools-outdoor-spaces",
    category: "outdoor",
    title: "Pools & Outdoor Spaces",
    badge: "Outdoor",
    desc: "Resort-style pool surrounds, travertine paver patios, retaining walls, poolside cabanas, fire pits, and functional outdoor living spaces.",
    image: poolsOutdoor,
    to: "/pools-outdoor-spaces",
    icon: Leaf,
    items: [
      "Travertine & Paver Pool Surrounds",
      "Structural Retaining Walls",
      "Pool Cabanas & Shaded Pavilions",
      "Masonry Fire Pits & Fireplaces",
    ],
  },
  {
    id: "home-additions",
    category: "remodeling",
    title: "Home Additions",
    badge: "Expansion",
    desc: "Expand your square footage with second-story additions, master suite bump-outs, sunrooms, and in-law suites that blend with your home.",
    image: homeAdditions,
    to: "/home-additions",
    icon: Home,
    items: [
      "Primary Master Suite Additions",
      "Second-Story Additions (Add-A-Level)",
      "In-Law Suites & Multi-Gen Living",
      "Kitchen & Great Room Bump-Outs",
    ],
  },
  {
    id: "interior-exterior-painting",
    category: "specialized",
    title: "Interior & Exterior Painting",
    badge: "Finishes",
    desc: "Meticulous surface preparation, sharp lines, and premium Benjamin Moore and Sherwin-Williams coatings for homes and commercial buildings.",
    image: paintingImg,
    to: "/interior-exterior-painting",
    icon: Paintbrush,
    items: [
      "Interior Walls, Ceilings & Trim",
      "Exterior Siding & Trim Protection",
      "Cabinet Refinishing & HVLP Spraying",
      "Deck & Fence Staining & Sealing",
    ],
  },
  {
    id: "flooring",
    category: "specialized",
    title: "Flooring Installation",
    badge: "Finishes",
    desc: "Hardwood, luxury vinyl plank (LVP), and porcelain tile flooring installed over leveled, squeak-free subfloors with precision trim.",
    image: flooringImg,
    to: "/flooring",
    icon: Landmark,
    items: [
      "Solid & Engineered Hardwood",
      "100% Waterproof Luxury Vinyl (LVP)",
      "Porcelain & Ceramic Tile",
      "Subfloor Leveling & Squeak Repairs",
    ],
  },
  {
    id: "handyman-services",
    category: "commercial",
    title: "Handyman Services",
    badge: "Repairs",
    desc: "Prompt, craftsman-level home repairs: drywall patching, door hanging, fixture replacements, trim carpentry, and real estate punch lists.",
    image: handymanImg,
    to: "/handyman-services",
    icon: Wrench,
    items: [
      "Drywall Patching & Water Damage",
      "Interior & Exterior Door Installs",
      "Light Plumbing & Fixture Swaps",
      "Real Estate Inspection Punch Lists",
    ],
  },
  {
    id: "property-maintenance",
    category: "commercial",
    title: "Property Maintenance",
    badge: "Maintenance",
    desc: "Proactive residential and commercial upkeep, seasonal inspections, power washing, gutter care, and fast tenant turnover repairs.",
    image: maintenanceImg,
    to: "/property-maintenance",
    icon: ShieldCheck,
    items: [
      "Seasonal Inspections & Weatherproofing",
      "Commercial Soft & Power Washing",
      "Rental Move-Out Turnover Repairs",
      "Gutter Cleaning & Shield Systems",
    ],
  },
  {
    id: "custom-builds",
    category: "specialized",
    title: "Custom Builds",
    badge: "Carpentry",
    desc: "Bespoke architectural carpentry, built-in entertainment centers, coffered ceilings, custom mudroom lockers, and fine finish woodworking.",
    image: customBuildsImg,
    to: "/custom-builds",
    icon: Factory,
    items: [
      "Built-In Entertainment Centers",
      "Coffered Ceilings & Wood Beams",
      "Mudroom Lockers & Storage Benches",
      "Wainscoting & Custom Crown Molding",
    ],
  },
  {
    id: "commercial-improvements",
    category: "commercial",
    title: "Commercial Improvements",
    badge: "Commercial",
    desc: "Office renovations, retail build-outs, ADA upgrades, and scheduled after-hours construction executed on schedule and within budget.",
    image: commercialImg,
    to: "/commercial-improvements",
    icon: Building2,
    items: [
      "Commercial Tenant Fit-Outs",
      "Retail Storefront Renovations",
      "ADA Restroom & Accessibility Upgrades",
      "Flexible After-Hours Construction",
    ],
  },
];

const FILTER_TABS = [
  { key: "all", label: "All 12 Services" },
  { key: "remodeling", label: "Residential Remodeling" },
  { key: "outdoor", label: "Decks & Outdoor Spaces" },
  { key: "specialized", label: "Flooring, Painting & Custom" },
  { key: "commercial", label: "Maintenance & Commercial" },
] as const;

export function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices =
    activeFilter === "all"
      ? ALL_SERVICES_CATALOG
      : ALL_SERVICES_CATALOG.filter((s) => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#f4f3ef] text-neutral-900 font-sans selection:bg-[#ffa326]/30">
      <SiteHeader />

      {/* ── HERO BANNER ── */}
      <div className="w-full bg-[#f4f3ef] pt-[15px] pb-[10px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#18120c] via-[#140e09] to-[#0f0a06] text-white px-5 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24 text-center border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(24,18,12,0.96), rgba(15,10,6,0.98)), url(${welBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffa326]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-400 mb-6 font-medium relative z-10"
          >
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
            <span className="text-[#ffa326] font-semibold">Our Services</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffa326]/30 bg-[#ffa326]/10 text-[#ffc570] text-xs font-bold uppercase tracking-wider mb-5">
              <Award className="w-3.5 h-3.5 text-[#ffa326]" />
              <span>Full-Scope Craftsmanship • 20+ Years Experience</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
              Craftsmanship Across Every Phase of Your Property
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-8 max-w-2xl">
              From luxury kitchen and bathroom remodeling to custom decks, home additions, and dependable commercial maintenance, KV Property Inc. delivers precision results throughout Neptune, NJ and surrounding communities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/free-estimate"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-7 py-3.5 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(255,163,38,0.4)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:7328778614"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-xs cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#ffa326]" />
                <span>Call (732) 877-8614</span>
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── FILTERABLE SERVICES CATALOG ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center">
          <div className="max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-[#ffa326]" />
              <span>Explore Our 12 Specialized Sub-Services</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Dedicated Solutions for Every Project
            </h2>

            <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Select a category below or explore each dedicated service page for detailed capabilities, photo portfolios, and process guides.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex overflow-x-auto flex-nowrap justify-start gap-2 mb-12 max-w-4xl mx-auto pb-3 px-2 scrollbar-none sm:flex-wrap sm:justify-center sm:overflow-x-visible sm:pb-0">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-xs border shrink-0 cursor-pointer ${
                  activeFilter === tab.key
                    ? "bg-[#cc7e14] border-[#cc7e14] text-white shadow-md scale-[1.02]"
                    : "bg-white border-neutral-200 text-neutral-800 hover:border-[#cc7e14]/40 hover:bg-[#faf9f6]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid — STRICTLY NO TEXT ON IMAGES */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto text-left">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#fcfbf9] rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-xl hover:border-[#ffa326]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    <div>
                      {/* Clean Image Container (Zero Text Over Image) */}
                      <Link
                        to={svc.to}
                        className="block relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border-b border-neutral-100 cursor-pointer"
                      >
                        <img
                          src={svc.image}
                          alt={svc.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>

                      {/* Content Body Below Image */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d0b] bg-[#ffa326]/12 px-3 py-1 rounded-full border border-[#ffa326]/20">
                            {svc.badge}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-[#ffa326]/10 text-[#cc7e14] flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <Link to={svc.to} className="block group-hover:text-[#b86d0b] transition-colors">
                          <h3 className="text-lg font-bold text-neutral-900 tracking-tight font-serif">
                            {svc.title}
                          </h3>
                        </Link>

                        <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                          {svc.desc}
                        </p>

                        <div className="mt-5 pt-5 border-t border-neutral-200/60">
                          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                            Key Capabilities
                          </span>
                          <ul className="space-y-1.5 text-xs text-neutral-700">
                            {svc.items.map((item) => (
                              <li key={item} className="flex gap-2 items-center">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#cc7e14] shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Footer Button to Dedicated Page */}
                    <div className="p-6 pt-0 border-t border-neutral-100 mt-auto">
                      <Link
                        to={svc.to}
                        className="w-full inline-flex items-center justify-between pt-4 text-xs font-bold uppercase tracking-wider text-[#b86d0b] hover:text-[#8f5204] transition-colors cursor-pointer"
                      >
                        <span>Explore Dedicated Page</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>
      </div>

      {/* ── OUR WORK ETHIC & CRAFTSMANSHIP BANNER ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.03)] px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-white/70 border border-neutral-900/10 text-neutral-800 rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#cc7e14]" />
              <span>The KV Property Inc. Standard</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Why Homeowners &amp; Businesses Trust KV Property Inc.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
            {[
              {
                title: "20+ Years Experience",
                desc: "Two decades of hands-on building, remodeling, and property management across Neptune, NJ and coastal communities.",
                icon: Award,
              },
              {
                title: "Licensed & Insured",
                desc: "Complete general liability and workers' compensation coverage protecting your home and family at all times.",
                icon: ShieldCheck,
              },
              {
                title: "No-Surprise Pricing",
                desc: "Detailed written proposals outlining materials, timelines, and milestones before any hammer strikes.",
                icon: Landmark,
              },
              {
                title: "Turnkey Execution",
                desc: "From initial permits and framing to final coat of paint and punch list, one dedicated team oversees everything.",
                icon: Clock,
              },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-neutral-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#ffa326]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ffa326]/12 border border-[#ffa326]/20 text-[#cc7e14] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2 font-serif">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── CLOSING CTA SECTION ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#18120c] via-[#150f0a] to-[#0f0a06] text-white px-5 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24 text-center border border-neutral-800 shadow-[0_24px_60px_rgba(0,0,0,0.22)] relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(24,18,12,0.96), rgba(15,10,6,0.98)), url(${welBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffa326]/10 rounded-full blur-[140px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
          >
            <Link to="/" className="mb-6 cursor-pointer">
              <img
                src={logo}
                alt="KV Property Inc Logo"
                className="h-16 sm:h-20 w-auto object-contain filter brightness-110 drop-shadow-md hover:scale-105 transition-transform"
              ></img>
            </Link>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
              Ready to Discuss Your Next Project?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-10 max-w-2xl">
              Whether you have a specific sub-service in mind or need a comprehensive property consultation, KV Property Inc. is ready to help.
            </p>

            {/* Contact details box (strictly no license number) */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-2xl mb-10 text-left shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 flex-wrap gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  KV Property Inc.
                </h3>
                <span className="text-xs font-semibold text-[#ffa326] bg-[#ffa326]/10 px-3 py-1 rounded-full border border-[#ffa326]/20">
                  Licensed &amp; Insured
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-[15px] font-light">
                <a
                  href="tel:7328778614"
                  className="flex items-center gap-3 text-neutral-200 hover:text-[#ffa326] transition-colors p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <div className="w-9 h-9 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#ffa326]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Phone</div>
                    <div className="font-semibold text-white">(732) 877-8614</div>
                  </div>
                </a>

                <a
                  href="mailto:kvpropertyinc@gmail.com"
                  className="flex items-center gap-3 text-neutral-200 hover:text-[#ffa326] transition-colors p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <div className="w-9 h-9 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#ffa326]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Email</div>
                    <div className="font-semibold text-white">kvpropertyinc@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-neutral-200 p-2.5 rounded-xl col-span-1 sm:col-span-2">
                  <div className="w-9 h-9 rounded-full bg-[#ffa326]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#ffa326]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Service Area</div>
                    <div className="font-semibold text-white">Neptune, NJ &amp; Surrounding Communities (25-mile radius)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link
                to="/free-estimate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(255,163,38,0.4)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Request Your Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:7328778614"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 hover:bg-white hover:text-neutral-900 px-8 py-4 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current text-[#ffa326]" />
                <span>Call Now: (732) 877-8614</span>
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      <SiteFooter />
      <FloatingChat />
    </div>
  );
}
