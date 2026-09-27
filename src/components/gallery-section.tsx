import { useState } from "react";
import { useTranslation } from "@/context/translation-context";
import { X, ZoomIn, ArrowRight } from "lucide-react";

// Automatically extract all project images from src/assets/gallery
const galleryModules = import.meta.glob<{ default: string }>(
  "../assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const GALLERY_IMAGES: string[] = Object.values(galleryModules).map(
  (mod) => mod.default
);

export function GallerySection() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(15);

  const displayedImages = GALLERY_IMAGES.slice(0, visibleCount);

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-2.5 sm:px-[15px]">
      <section
        id="gallery"
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-3 sm:px-[30px] py-8 sm:py-[50px] border border-[#eae8e1] shadow-[0_12px_40px_rgb(0,0,0,0.04)] text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center bg-[#2b1a05] border border-[#593203] text-white text-[10px] md:text-[11px] font-extrabold px-5 py-2 rounded-full uppercase tracking-widest mb-4 shadow-sm select-none">
          Our Work
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-[34px] font-black text-neutral-900 tracking-tight mb-3">
          Craftsmanship You Can See.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Every project is an opportunity to improve a space, solve a problem, and create something built to last.
          Explore our residential and commercial work and see the quality behind KV Property Inc.
        </p>

        {/* Responsive CSS Grid - Pure images, strictly NO text overlays on images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3.5 md:gap-4 w-full">
          {displayedImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 aspect-[4/3] w-full cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt="KV Property Inc Craftsmanship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Subtle hover zoom overlay - NO text */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Load More or View All */}
        {visibleCount < GALLERY_IMAGES.length ? (
          <div className="mt-10 flex flex-col xs:flex-row flex-wrap items-center justify-center gap-3 w-full">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + 15, GALLERY_IMAGES.length)
                )
              }
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#995906] text-white rounded-full px-5 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer w-full xs:w-auto"
            >
              <span>
                Load More Projects ({GALLERY_IMAGES.length - visibleCount} Remaining)
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setVisibleCount(GALLERY_IMAGES.length)}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-full px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs hover:border-[#ffa326] transition-all duration-300 cursor-pointer w-full xs:w-auto"
            >
              <span>View All ({GALLERY_IMAGES.length})</span>
            </button>
          </div>
        ) : (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setVisibleCount(15)}
              className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer w-full xs:w-auto"
            >
              <span>Show Less</span>
            </button>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out select-none animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Image Container - NO text overlay */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] md:max-h-[90vh] flex items-center justify-center animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="KV Property Inc Project Detail Large View"
              className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}

      {/* Dynamic Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
}
