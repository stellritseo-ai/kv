import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/context/translation-context";

import kitchenImg from "@/assets/svc-kitchen-remodel.jpg";
import bathroomImg from "@/assets/svc-bathroom-remodel.jpg";
import contractingImg from "@/assets/svc-general-contracting.jpg";
import deckImg from "@/assets/svc-deck-outdoor.jpg";
import additionsImg from "@/assets/svc-home-additions.jpg";
import maintenanceImg from "@/assets/svc-maintenance.png";

const featuredList = [
  {
    image: kitchenImg,
    title: "Kitchen Remodeling",
    tagline: "Designed For The Way You Live.",
    desc: "Transform your kitchen into a beautiful and functional space built around your lifestyle, needs, and vision.",
    cta: "Explore Kitchen Remodeling",
    to: "/services",
  },
  {
    image: bathroomImg,
    title: "Bathroom Remodeling",
    tagline: "Turn Your Bathroom Into A Space You'll Love.",
    desc: "From updates and renovations to complete bathroom transformations, we focus on quality workmanship and lasting results.",
    cta: "Explore Bathroom Remodeling",
    to: "/services",
  },
  {
    image: contractingImg,
    title: "General Contracting",
    tagline: "Professional Construction From Start To Finish.",
    desc: "Whether you're remodeling, expanding, or improving your property, KV Property Inc provides dependable contracting services with attention to every detail.",
    cta: "Explore General Contracting",
    to: "/services",
  },
  {
    image: deckImg,
    title: "Deck & Outdoor Living",
    tagline: "Bring Your Outdoor Space To Life.",
    desc: "Create a comfortable and inviting outdoor area for relaxing, entertaining, and enjoying your property.",
    cta: "Explore Outdoor Living",
    to: "/services",
  },
  {
    image: additionsImg,
    title: "Home Additions",
    tagline: "More Space. More Possibilities.",
    desc: "Expand your home with a professionally constructed addition designed to complement your existing property.",
    cta: "Explore Home Additions",
    to: "/services",
  },
  {
    image: maintenanceImg,
    title: "Property Maintenance",
    tagline: "Protect Your Property. Maintain Its Value.",
    desc: "From everyday repairs to ongoing property improvements, our maintenance services help keep your property in excellent condition.",
    cta: "Explore Property Maintenance",
    to: "/property-maintenance",
  },
];

export function FeaturedServices() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-white border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] px-6 py-14 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#cc7e14] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#cc7e14]" />
            <span>Featured Services</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-neutral-900 tracking-tight leading-tight">
            Featured Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Discover our core property transformation specialties, delivering professional craftsmanship and lasting value.
          </p>
        </div>

        {/* 3x2 Grid of Featured Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col bg-[#fbfaf7] rounded-2xl overflow-hidden border border-[#eae8e1] shadow-sm hover:shadow-xl hover:border-[#ffa326]/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md text-neutral-900 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {item.title}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug group-hover:text-[#cc7e14] transition-colors duration-300">
                    {item.tagline}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="mt-6 pt-4 border-t border-neutral-200/70">
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cc7e14] group-hover:text-[#ffa326] transition-colors duration-300"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
