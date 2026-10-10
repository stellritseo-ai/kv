import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ChevronLeft,
  X,
  Sparkles,
  Award,
  Layers,
  ZoomIn,
  ShieldCheck,
  Hammer,
  Clock,
  Check,
} from "lucide-react";
import logo from "@/assets/logo.png";
import welBg from "@/assets/wel-bg.png";

// Load all project images from src/assets/gallery folder
const galleryModules = import.meta.glob<{ default: string }>(
  "../assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "all" | "remodeling" | "outdoor" | "custom" | "maintenance";
  categoryLabel: string;
}

// Convert all imported modules into structured gallery items
const ALL_GALLERY_PHOTOS: GalleryPhoto[] = Object.entries(galleryModules).map(
  ([path, mod], index) => {
    const filename = path.split("/").pop() || `project-${index + 1}`;

    // Categorize logically based on filename / screenshot index
    let category: GalleryPhoto["category"] = "remodeling";
    let categoryLabel = "Remodeling & Interior";

    if (
      filename.includes("screenshot-4") ||
      filename.includes("screenshot-7") ||
      filename.includes("668749688") ||
      filename.includes("669122480") ||
      filename.includes("750585942") ||
      filename.includes("795027866")
    ) {
      category = "outdoor";
      categoryLabel = "Decks & Outdoor Living";
    } else if (
      filename.includes("screenshot-1") ||
      filename.includes("screenshot-3") ||
      filename.includes("686042203") ||
      filename.includes("686383646") ||
      filename.includes("800483021") ||
      filename.includes("802811143")
    ) {
      category = "custom";
      categoryLabel = "Custom Builds & Framing";
    } else if (
      filename.includes("screenshot-5") ||
      filename.includes("screenshot-8") ||
      filename.includes("710746339") ||
      filename.includes("711331235") ||
      filename.includes("814232836")
    ) {
      category = "maintenance";
      categoryLabel = "Repairs & Maintenance";
    } else {
      category = "remodeling";
      categoryLabel = "Kitchen, Bath & Tile";
    }

    return {
      id: `photo-${index + 1}`,
      src: mod.default,
      title: `Project Craftsmanship #${index + 1}`,
      category,
      categoryLabel,
    };
  }
);

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      {
        title:
          "Our Work: Project Portfolio & Craftsmanship | KV Property Inc | Neptune, NJ",
      },
      {
        name: "description",
        content:
          "Explore completed kitchen remodels, custom bathrooms, outdoor living builds, roofing, and commercial projects by KV Property Inc. in Neptune, NJ and Monmouth & Ocean counties. Call (732) 877-8614.",
      },
      {
        property: "og:title",
        content: "Our Work: Craftsmanship You Can See | KV Property Inc.",
      },
      {
        property: "og:description",
        content:
          "Browse real job site transformations by KV Property Inc. 20+ years of quality remodeling, custom construction, and property maintenance in Neptune, NJ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.kvpropertyinc.com/our-work" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.kvpropertyinc.com/our-work",
      },
    ],
  }),
  component: OurWorkPage,
});

export function OurWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: "all", label: `All Projects (${ALL_GALLERY_PHOTOS.length})` },
    { key: "remodeling", label: "Kitchen, Bath & Tile" },
    { key: "outdoor", label: "Decks & Outdoor Living" },
    { key: "custom", label: "Custom Builds & Framing" },
    { key: "maintenance", label: "Repairs & Maintenance" },
  ];

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "all") return ALL_GALLERY_PHOTOS;
    return ALL_GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const activePhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1
    );
  };

  const structuredSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.kvpropertyinc.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Work",
            item: "https://www.kvpropertyinc.com/our-work",
          },
        ],
      },
      {
        "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
        "@id": "https://www.kvpropertyinc.com/#business",
        name: "KV Property Inc.",
        url: "https://www.kvpropertyinc.com/our-work",
        telephone: "+1-732-877-8614",
        email: "kvpropertyinc@gmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Neptune",
          addressRegion: "NJ",
          addressCountry: "US",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f4f3ef] font-sans text-neutral-900 selection:bg-[#ffa326]/30 selection:text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />

      <SiteHeader />

      {/* ── BREADCRUMB STRIP ── */}
      <div className="w-full bg-[#f4f3ef] pt-2 pb-1 px-3 sm:px-[15px]">
        <div className="mx-auto max-w-[1400px] w-full flex items-center justify-between text-xs py-2 px-4 rounded-lg bg-white/70 border border-[#eae6dd] text-neutral-600">
          <nav className="flex items-center gap-1.5 font-medium" aria-label="Breadcrumb">
            <Link to="/" className="text-neutral-500 hover:text-[#cc7e14] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#b86d0b] font-semibold">Our Work</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#b86d0b]">
            <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
            <span>40+ Real Project Transformations • Neptune, NJ</span>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION (INTRO) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
        <section className="relative mx-auto max-w-[1400px] w-full rounded-[10px] overflow-hidden border border-[#eae8e1] shadow-[0_16px_50px_rgba(0,0,0,0.08)] min-h-[480px] sm:min-h-[540px] md:min-h-[580px] flex items-center justify-center text-center px-5 sm:px-10 md:px-14 lg:px-16 py-14 sm:py-18 md:py-20">
          {/* Background Image with Cinematic Vibe */}
          <motion.div
            initial={{ scale: 1.06, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${welBg})` }}
          />

          {/* Luxury Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#120b06]/95 via-[#160f08]/88 to-[#120b06]/95 z-10" />

          {/* Warm Ambient Halo Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffa326]/15 rounded-full blur-[140px] pointer-events-none z-10" />

          {/* Centered Content Block */}
          <div className="relative z-20 max-w-4xl mx-auto w-full flex flex-col items-center text-center space-y-5 sm:space-y-6">
            {/* Top Identity Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full border border-[#ffa326]/35 bg-[#ffa326]/15 backdrop-blur-md text-[#ffc570] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm select-none"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffa326] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffa326]"></span>
              </span>
              <span>Our Work: KV Property Inc.</span>
            </motion.div>

            {/* Headline with exact styling requested */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-white leading-tight tracking-tight font-serif font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] text-center max-w-5xl mx-auto md:whitespace-nowrap"
              style={{
                fontSize: "clamp(22px, 3.4vw, 38px)",
                marginTop: "-15px",
                marginBottom: "10px",
              }}
            >
              Craftsmanship You Can See.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffa326] via-[#ffc570] to-[#ffa326]">
                Built To Last.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] text-center"
            >
              Every project is an opportunity to improve a space, solve a problem, and create something built to last. Explore our gallery of residential renovations, commercial builds, and property transformations across Neptune, NJ and surrounding communities.
            </motion.p>

            {/* Trust Badges Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 text-white text-xs sm:text-sm select-none"
            >
              <div className="flex items-center gap-1.5 text-[#ffa326]">
                <Check className="w-4 h-4 text-[#ffa326]" />
                <span className="font-semibold text-white">20+ Years Local Experience</span>
              </div>
              <span className="text-white/40">•</span>
              <span className="text-neutral-300">Monmouth &amp; Ocean Counties</span>
              <span className="text-white/40">•</span>
              <span className="text-white font-semibold">Licensed &amp; Insured</span>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <Link
                to="/free-estimate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffa326] via-[#ea8d15] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_4px_18px_rgba(255,163,38,0.38)] cursor-pointer text-center"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="tel:7328778614"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white hover:text-neutral-950 px-7 sm:px-9 py-3.5 sm:py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                <Phone className="w-4 h-4 shrink-0 fill-current text-[#ffa326]" />
                <span>Call (732) 877-8614</span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── PROJECT PORTFOLIO GALLERY (PURE IMAGES — STRICTLY NO TEXT ON FRONT OF IMAGE) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_45px_rgba(0,0,0,0.04)] px-4 sm:px-8 md:px-12 py-12 sm:py-16 text-center relative overflow-hidden">
          {/* Subtle Ambient Illumination */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffa326]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cc7e14]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#b86d0b] rounded-full px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>Real Jobsite Gallery</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif">
              Our Completed Projects
            </h2>

            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              Explore actual project photos from residential and commercial properties throughout Neptune, Asbury Park, Spring Lake, Belmar, and surrounding Jersey Shore communities.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.key
                    ? "bg-[#ffa326] text-white shadow-md scale-105"
                    : "bg-[#f8f7f4] text-neutral-700 border border-neutral-200 hover:border-[#ffa326]/40 hover:bg-[#ffa326]/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid: STRICTLY NO TEXT ON FRONT OF IMAGE */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 text-left"
          >
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (index % 12) * 0.04 }}
                  className="group bg-[#fcfbf9] rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#ffa326]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* PURE IMAGE CONTAINER: STRICTLY NO TEXT ON FRONT OF IMAGE */}
                  <div
                    onClick={() => setLightboxIndex(index)}
                    className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 cursor-pointer select-none"
                    title="Click to view full photo"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Visual Hover Cue: only subtle border and zoom cursor, ZERO text on front of image */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-md">
                        <ZoomIn className="w-5 h-5 text-[#cc7e14]" />
                      </div>
                    </div>
                  </div>

                  {/* Clean Metadata Container: PLACED EXCLUSIVELY BELOW THE IMAGE */}
                  <div className="p-3.5 sm:p-4 bg-white border-t border-neutral-200/70 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#b86d0b] block">
                        {photo.categoryLabel}
                      </span>
                      <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 mt-0.5 truncate max-w-[190px]">
                        {photo.title}
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className="text-neutral-400 group-hover:text-[#b86d0b] transition-colors p-1"
                      aria-label="View photo"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>

      {/* ── CLIENT PEACE OF MIND STRIP ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[10px] px-2.5 sm:px-[15px]">
        <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#f1e8db] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-5 py-10 sm:px-10 sm:py-14 text-center">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffa326]/15 border border-[#ffa326]/30 text-[#cc7e14] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-neutral-900 leading-snug">
                  "The 25+ years of experience shows in every detail."
                </h3>
                <p className="text-xs sm:text-sm text-neutral-700 mt-1">
                  — Verified Review, The Carter Family (Full Home Remodeling / Kitchen &amp; Bath)
                </p>
              </div>
            </div>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white hover:bg-neutral-50 border border-neutral-300 px-6 py-3 text-neutral-900 text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
            >
              <span>Read Client Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#cc7e14]" />
            </Link>
          </div>
        </section>
      </div>

      {/* ── READY TO START YOUR PROJECT? (CLOSING CTA) ── */}
      <div className="w-full bg-[#f4f3ef] pt-[10px] pb-[15px] px-2.5 sm:px-[15px]">
        <section
          className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-gradient-to-b from-[#18120c] via-[#150f0a] to-[#0f0a06] text-white px-5 py-14 sm:px-10 sm:py-20 md:px-14 md:py-24 text-center border border-neutral-800 shadow-[0_24px_60px_rgba(0,0,0,0.22)] relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(24,18,12,0.96), rgba(15,10,6,0.98)), url(${welBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Ambient Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffa326]/10 rounded-full blur-[140px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
          >
            {/* Logo */}
            <Link to="/" className="mb-6 cursor-pointer">
              <img
                src={logo}
                alt="KV Property Inc Logo"
                className="h-16 sm:h-20 w-auto object-contain filter brightness-110 drop-shadow-md hover:scale-105 transition-transform"
              />
            </Link>

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ffa326]/30 bg-[#ffa326]/10 text-[#ffc570] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Craftsmanship • Proven Results</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 font-serif">
              Ready to Start Your Project?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-10 max-w-2xl">
              From design consultation to the final walkthrough, KV Property Inc. delivers quality craftsmanship you can trust.
            </p>

            {/* Dedicated Contact Showcase Box (No License Number as requested) */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 w-full max-w-2xl mb-10 text-left shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 flex-wrap gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Contact Us Today:
                </h3>
                <span className="text-xs font-semibold text-[#ffa326] bg-[#ffa326]/10 px-3 py-1 rounded-full border border-[#ffa326]/20">
                  Licensed &amp; Insured
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 text-sm sm:text-[15px] font-light">
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

            {/* Buttons */}
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

      {/* ── FULLSCREEN LIGHTBOX (PURE IMAGE — STRICTLY NO TEXT OVER IMAGE) ── */}
      <AnimatePresence>
        {activePhoto && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
          >
            {/* Top Bar with counter and close */}
            <div className="w-full max-w-6xl flex items-center justify-between text-white py-2">
              <span className="text-xs sm:text-sm font-medium text-neutral-400">
                Photo {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close photo viewer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Center Area: Pure Unobscured Image */}
            <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-auto">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* The Image — Completely Clean, Zero Overlay */}
              <div className="max-h-[75vh] max-w-full flex items-center justify-center">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextLightbox}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Panel — Text and Category placed BELOW the image */}
            <div className="w-full max-w-2xl text-center py-3 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ffa326] block">
                {activePhoto.categoryLabel}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-white mt-1">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                KV Property Inc. • Neptune, NJ &amp; Monmouth/Ocean Counties
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}
