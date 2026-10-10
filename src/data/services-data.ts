import {
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
  Layers,
  Flame,
  CheckCircle2,
  Ruler,
  HardHat,
  Maximize2,
  Compass,
  Lightbulb,
  DoorOpen,
  Clock,
  type LucideIcon,
} from "lucide-react";
import type { ServicePageData } from "@/components/service-page-template";

import featuredKitchen from "@/assets/services/featured-kitchen-remodeling.jpg";
import featuredBathroom from "@/assets/services/featured-bathroom-remodeling.jpg";
import featuredGeneralContracting from "@/assets/services/featured-general-contracting.jpg";
import featuredDeckOutdoor from "@/assets/services/featured-deck-outdoor-living.jpg";
import featuredPoolsOutdoor from "@/assets/services/featured-pools-outdoor-spaces.jpg";
import featuredHomeAdditions from "@/assets/services/featured-home-additions.jpg";
import featuredPainting from "@/assets/services/featured-interior-exterior-painting.jpg";
import featuredFlooring from "@/assets/services/featured-flooring.jpg";
import featuredHandyman from "@/assets/services/featured-handyman-services.jpg";
import featuredMaintenance from "@/assets/services/featured-property-maintenance.jpg";
import featuredCustomBuilds from "@/assets/services/featured-custom-builds.jpg";
import featuredCommercial from "@/assets/services/featured-commercial-improvements.jpg";

// Import all gallery images
const galleryModules = import.meta.glob<{ default: string }>(
  "../assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const allImages = Object.entries(galleryModules).map(([path, mod]) => ({
  path,
  src: mod.default,
}));

// Helper to find images matching filename patterns or fallback to array slice
function getImagesForService(patterns: string[], sliceOffset = 0, count = 8): string[] {
  const matched = allImages
    .filter((img) => patterns.some((p) => img.path.includes(p)))
    .map((img) => img.src);

  if (matched.length >= 6) {
    return matched.slice(0, count);
  }

  // Backfill with general high-quality project gallery images
  const fallback = allImages.map((img) => img.src);
  const combined = Array.from(new Set([...matched, ...fallback.slice(sliceOffset, sliceOffset + count)]));
  return combined.slice(0, count);
}

// ─────────────────────────────────────────────────────────────
// 1. KITCHEN REMODELING
// ─────────────────────────────────────────────────────────────
export const kitchenRemodelingData: ServicePageData = {
  slug: "kitchen-remodeling",
  title: "Kitchen Remodeling",
  metaTitle: "Kitchen Remodeling in Neptune, NJ | Custom Kitchens | KV Property Inc.",
  metaDescription:
    "Expert kitchen remodeling in Neptune, NJ and Monmouth County. Custom cabinetry, quartz countertops, open-concept floorplans & tile work. Free estimates.",
  badge: "Custom Kitchen Remodeling",
  headline: "Transform the Heart of Your Home With Custom Kitchen Remodeling",
  headlineHighlight: "Custom Kitchen Remodeling",
  subheadline:
    "From custom solid-wood cabinetry and quartz waterfalls to open-concept floor plans, KV Property Inc. crafts luxury kitchens designed around the way you cook, live, and gather.",
  featuredImage: featuredKitchen,
  overviewTag: "Culinary Elegance & Functionality",
  overviewTitle: "Crafting High-Performance Kitchens That Inspire",
  overviewHighlight: "High-Performance Kitchens",
  overviewP1:
    "Your kitchen is more than just a place to prepare meals—it is the central gathering place of your entire household. At KV Property Inc., we combine 20+ years of fine carpentry, space planning, and general contracting expertise to design and build custom kitchens that blend striking aesthetic beauty with practical everyday performance.",
  overviewP2:
    "Whether your dream kitchen features a dramatic chef's island, bespoke soft-close cabinetry, statement backsplash tile, or an open layout that connects seamlessly with your living area, our licensed and insured craftsmen handle every phase: from initial layout and structural modifications to plumbing, electrical, and flawless final finishes.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Serving Neptune & Monmouth County" },
    { value: "100%", label: "Turnkey Execution", sub: "Permitting, cabinets, counters & tile" },
    { value: "Top Tier", label: "Premium Materials", sub: "Quartz, solid wood, custom hardware" },
  ],
  featuresTitle: "Complete Kitchen Remodeling Capabilities",
  featuresDesc:
    "We provide end-to-end design, construction, and finishing services for kitchens of every size and architectural style.",
  features: [
    {
      title: "Custom Solid-Wood Cabinetry",
      desc: "Handcrafted cabinetry, soft-close dovetail drawers, custom pantry pull-outs, and built-in organizers tailored to your exact storage needs.",
      icon: Sparkles,
      badge: "Signature Craft",
    },
    {
      title: "Quartz & Granite Countertops",
      desc: "Precision fabrication and installation of durable quartz, natural granite, marble, and waterfall edge center islands.",
      icon: Layers,
    },
    {
      title: "Open-Concept Layout Modifications",
      desc: "Safe removal of load-bearing walls, structural beam installations, and space reconfiguration to create flowing, modern great rooms.",
      icon: Maximize2,
      badge: "Structural",
    },
    {
      title: "Designer Backsplashes & Tilework",
      desc: "Intricate herringbone, subway, marble mosaic, and large-format porcelain backsplashes laid with razor-sharp precision.",
      icon: Landmark,
    },
    {
      title: "Under-Cabinet & Recessed Lighting",
      desc: "Multi-layered architectural illumination, dimmable LED pot lights, pendant islands, and under-cabinet task lighting systems.",
      icon: Lightbulb,
    },
    {
      title: "Plumbing & High-End Appliance Hookups",
      desc: "Under-mount sink installations, pot fillers, luxury faucet fixtures, gas cooktop lines, and seamless integrated appliance panels.",
      icon: Droplets,
    },
  ],
  processTitle: "Our 4-Step Kitchen Remodel Process",
  processDesc:
    "A transparent, stress-free construction experience from concept to first meal.",
  processSteps: [
    {
      step: "01",
      title: "In-Home Consultation",
      desc: "We visit your home to inspect current dimensions, listen to your vision, explore functional needs, and establish your budget goals.",
    },
    {
      step: "02",
      title: "Design & Material Curation",
      desc: "You choose cabinets, slabs, backsplashes, and fixtures while we produce accurate 3D layout plans and a transparent, line-item written estimate.",
    },
    {
      step: "03",
      title: "Craftsman-Led Build",
      desc: "Our crew executes demolition, rough-ins, structural framing, cabinet setting, countertop templates, and tile installation with minimal disruption.",
    },
    {
      step: "04",
      title: "Final Walkthrough & Polish",
      desc: "We conduct a thorough punch-list review, clean the site spotless, and ensure every drawer, fixture, and finish meets our rigorous standard.",
    },
  ],
  galleryImages: getImagesForService(["662736697", "667345467", "668881642", "686399108", "screenshot-1", "screenshot-3"], 0, 8),
  faqs: [
    {
      q: "How long does a typical full kitchen remodel take?",
      a: "Most residential kitchen renovations take between 3 to 6 weeks depending on the scope, cabinet lead times, and whether structural walls are being removed. During your initial proposal, we provide a detailed timeline.",
    },
    {
      q: "Do I need permits for a kitchen renovation in New Jersey?",
      a: "Yes. Electrical, plumbing, and structural modifications require township permits. KV Property Inc. handles permit applications, documentation, and coordination with local Neptune and Monmouth County building inspectors on your behalf.",
    },
    {
      q: "Can you remove a wall to open my kitchen to the dining or living room?",
      a: "Absolutely. We are experienced general contractors skilled in load-bearing wall removal, installing engineered LVL or steel beams, and restructuring spaces safely.",
    },
    {
      q: "Do you offer kitchen financing options?",
      a: "Yes! We partner with leading home improvement lenders offering flexible, low-monthly-payment financing so you can bring your dream kitchen to life immediately.",
    },
  ],
  relatedServices: [
    {
      title: "Bathroom Remodeling",
      to: "/bathroom-remodeling",
      desc: "Transform your master bath into a spa retreat.",
    },
    {
      title: "Flooring Installation",
      to: "/flooring",
      desc: "Hardwood and luxury vinyl plank flooring throughout.",
    },
    {
      title: "Custom Builds",
      to: "/custom-builds",
      desc: "Bespoke pantry shelving, banquet seating & built-ins.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 2. BATHROOM REMODELING
// ─────────────────────────────────────────────────────────────
export const bathroomRemodelingData: ServicePageData = {
  slug: "bathroom-remodeling",
  title: "Bathroom Remodeling",
  metaTitle: "Bathroom Remodeling in Neptune, NJ | Master Baths & Showers | KV Property Inc.",
  metaDescription:
    "Luxury bathroom remodeling in Neptune, NJ. Walk-in tile showers, freestanding tubs, custom double vanities & waterproof flooring. Free estimates.",
  badge: "Luxury Bathroom Remodeling",
  headline: "Spa-Inspired Bathroom Renovations Built for Luxury and Longevity",
  headlineHighlight: "Bathroom Renovations",
  subheadline:
    "Upgrade your master suite, family bathroom, or powder room with custom walk-in tile showers, freestanding soaking tubs, floating vanities, and premium fixtures.",
  featuredImage: featuredBathroom,
  overviewTag: "Relaxation & Craftsmanship",
  overviewTitle: "Turning Ordinary Bathrooms Into Private Sanctuaries",
  overviewHighlight: "Private Sanctuaries",
  overviewP1:
    "A well-crafted bathroom combines aesthetic tranquility with bulletproof waterproofing and plumbing integrity. At KV Property Inc., we build bathrooms engineered to withstand decades of daily moisture while feeling like an upscale hotel spa.",
  overviewP2:
    "From curbless walk-in showers with frameless glass doors and rain showerheads to heated porcelain floors and custom double vanities, our experienced team manages every detail. We strip away old, outdated tiles and fixtures and rebuild your space from the subfloor up.",
  stats: [
    { value: "100%", label: "Waterproof Systems", sub: "Schluter & premium membrane protection" },
    { value: "20+", label: "Years Experience", sub: "Tile, plumbing & fixture installations" },
    { value: "Custom", label: "Tailored Designs", sub: "Double vanities, niches & soaking tubs" },
  ],
  featuresTitle: "Our Bathroom Remodeling Services",
  featuresDesc:
    "Complete bathroom transformations engineered for beauty, moisture resistance, and optimal storage.",
  features: [
    {
      title: "Custom Walk-In Tile Showers",
      desc: "Curbless entries, linear drains, built-in shampoo niches, bench seating, and custom frameless glass enclosures.",
      icon: Droplets,
      badge: "Popular",
    },
    {
      title: "Freestanding Soaking Tubs",
      desc: "Statement modern acrylic and stone resin soaking tubs with floor-mounted Roman tub fillers and dedicated plumbing.",
      icon: Sparkles,
    },
    {
      title: "Custom & Floating Vanities",
      desc: "Single and double sink vanities, quartz vanity tops with undermount ceramic sinks, soft-close drawers, and integrated power outlets.",
      icon: Layers,
    },
    {
      title: "Radiant In-Floor Heating",
      desc: "Thermostatically controlled electric floor warming systems under porcelain or ceramic tile for ultimate winter warmth.",
      icon: Flame,
      badge: "Luxury",
    },
    {
      title: "High-End Fixtures & Rain Heads",
      desc: "Multi-function shower systems, ceiling-mounted rainfall heads, handheld wands, thermostatic valves, and water-efficient fixtures.",
      icon: Wrench,
    },
    {
      title: "Smart Lighting & Quiet Ventilation",
      desc: "Whisper-quiet exhaust fans with humidity sensors, backlit LED mirrors, ambient recessed lighting, and GFCI-protected circuits.",
      icon: Lightbulb,
    },
  ],
  processTitle: "Our 4-Step Bathroom Renovation Process",
  processDesc:
    "We respect your home and privacy, keeping work zones clean and minimizing downtime.",
  processSteps: [
    {
      step: "01",
      title: "Initial Space Assessment",
      desc: "We measure your bathroom, discuss layout possibilities (such as tub-to-shower conversions), and assess plumbing locations.",
    },
    {
      step: "02",
      title: "Material & Fixture Selection",
      desc: "Choose your tile, vanities, faucets, shower glass, and hardware with our guidance on durable, mold-resistant products.",
    },
    {
      step: "03",
      title: "Watertight Construction",
      desc: "Demolition down to the studs, plumbing rough-ins, anti-fracture waterproofing membranes, master tile laying, and grout sealing.",
    },
    {
      step: "04",
      title: "Glass & Trim Finishing",
      desc: "Installation of custom frameless glass, mirrors, accessories, electrical fixtures, followed by rigorous water testing.",
    },
  ],
  galleryImages: getImagesForService(["668744193", "667404942", "668588512", "669606043", "687556523", "screenshot-2"], 4, 8),
  faqs: [
    {
      q: "Can you convert an old bathtub into a modern walk-in shower?",
      a: "Yes! Tub-to-shower conversions are one of our most popular services. We remove the existing fiberglass or cast iron tub, adjust plumbing, waterproof the enclosure, and install a custom tile shower with frameless glass.",
    },
    {
      q: "How do you ensure the shower won't leak?",
      a: "We never cut corners on waterproofing. We use state-of-the-art vapor-tight waterproofing membrane systems (like Schluter-Kerdi), flood-test shower pans before tiling, and apply mildew-resistant epoxy or premium sealers.",
    },
    {
      q: "How long does a bathroom remodel usually take?",
      a: "A standard full bathroom remodel typically requires 2 to 3 weeks of hands-on construction once materials have arrived.",
    },
    {
      q: "Do you handle powder room and small bathroom remodels?",
      a: "Yes. Small bathrooms and half-baths benefit immensely from space-saving floating vanities, pocket doors, and smart lighting layouts.",
    },
  ],
  relatedServices: [
    {
      title: "Kitchen Remodeling",
      to: "/kitchen-remodeling",
      desc: "Custom cabinetry, countertops, and culinary spaces.",
    },
    {
      title: "Flooring Installation",
      to: "/flooring",
      desc: "Waterproof luxury vinyl and porcelain tile installation.",
    },
    {
      title: "Interior Painting",
      to: "/interior-exterior-painting",
      desc: "Moisture-resistant bathroom painting and finishes.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 3. GENERAL CONTRACTING
// ─────────────────────────────────────────────────────────────
export const generalContractingData: ServicePageData = {
  slug: "general-contracting",
  title: "General Contracting",
  metaTitle: "General Contracting in Neptune, NJ | Licensed GC | KV Property Inc.",
  metaDescription:
    "Full-service licensed and insured general contractor in Neptune, NJ. Turnkey project management, structural framing, permits & complete residential/commercial builds.",
  badge: "Licensed & Insured GC",
  headline: "Full-Service General Contracting for Residential & Commercial Projects",
  headlineHighlight: "General Contracting",
  subheadline:
    "From ground-up renovations and structural alterations to multi-room transformations, KV Property Inc. provides master project management, code compliance, and dependable execution.",
  featuredImage: featuredGeneralContracting,
  overviewTag: "Single-Source Accountability",
  overviewTitle: "Experienced Construction Management You Can Rely On",
  overviewHighlight: "Construction Management",
  overviewP1:
    "When undertaking a major home renovation or commercial upgrade, having a single accountable general contractor makes all the difference between costly delays and smooth, on-budget completion. KV Property Inc. has served Neptune, NJ and surrounding communities for over 20 years with hands-on supervision.",
  overviewP2:
    "We manage every phase: blueprints, municipal permits, structural framing, plumbing, electrical, HVAC, inspections, and master-level finishes. With our team on site every day, you enjoy clear communication, honest milestones, and craftsmanship built to endure.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Monmouth & Ocean County projects" },
    { value: "100%", label: "Code Compliant", sub: "Township permits & inspection signoffs" },
    { value: "Turnkey", label: "Project Delivery", sub: "From initial plans to final key handover" },
  ],
  featuresTitle: "Our General Contracting Capabilities",
  featuresDesc:
    "Comprehensive construction management for residential renovations and commercial build-outs.",
  features: [
    {
      title: "Complete Project Management",
      desc: "Full on-site supervision, subcontractor scheduling, material procurement, and strict milestone tracking.",
      icon: HardHat,
      badge: "Turnkey",
    },
    {
      title: "Township Permitting & Code Compliance",
      desc: "We manage architectural plans, zoning approvals, building permits, and ensure all work satisfies New Jersey Uniform Construction Code.",
      icon: ShieldCheck,
    },
    {
      title: "Structural Framing & Wall Removal",
      desc: "Load calculations, structural header installations, LVL beams, joist repairs, and safe reconfiguration of interior floorplans.",
      icon: Hammer,
    },
    {
      title: "Whole-Home Renovations",
      desc: "Gut rehabs, historic home restorations, multi-floor updates, and exterior envelope modernizations.",
      icon: Home,
    },
    {
      title: "MEP Subcontractor Coordination",
      desc: "Seamless synchronization of licensed master electricians, plumbers, and HVAC technicians without scheduling bottlenecks.",
      icon: Compass,
    },
    {
      title: "Transparent Written Contracts",
      desc: "Line-item budgets, clear milestone payment schedules, and zero surprise hidden fees.",
      icon: Ruler,
    },
  ],
  processTitle: "Our General Contracting Process",
  processDesc:
    "How we guide your major construction project from blueprints to final sign-off.",
  processSteps: [
    {
      step: "01",
      title: "Scope Review & Feasibility",
      desc: "We analyze your project goals, architectural drawings, site conditions, and budget parameters.",
    },
    {
      step: "02",
      title: "Permitting & Procurement",
      desc: "We file township permit paperwork, secure engineering sign-offs, and order specialty materials with ample lead time.",
    },
    {
      step: "03",
      title: "Active Construction & Inspections",
      desc: "Our skilled trades execute rough-ins and framing, passing all required municipal rough electrical, plumbing, and building inspections.",
    },
    {
      step: "04",
      title: "Finishing & Certificate of Approval",
      desc: "Fine carpentry, painting, surface finishes, final inspection sign-off, and handover of your pristine, code-compliant property.",
    },
  ],
  galleryImages: getImagesForService(["686042203", "686383646", "687999774", "691002774", "screenshot-1", "screenshot-3"], 8, 8),
  faqs: [
    {
      q: "Are you fully licensed and insured in New Jersey?",
      a: "Yes. KV Property Inc. is fully licensed and carries comprehensive general liability and workers' compensation insurance. We protect you and your property at all times.",
    },
    {
      q: "Do you handle the permit application process?",
      a: "Yes. We take full responsibility for pulling all necessary permits in Neptune Township and surrounding Monmouth and Ocean County municipalities.",
    },
    {
      q: "How do you handle change orders if I want to adjust something?",
      a: "We believe in complete transparency. Any change in scope is documented in writing with exact material and labor costs and agreed upon before work proceeds.",
    },
    {
      q: "Can you work with our existing architect or designer?",
      a: "Yes, we regularly collaborate with architects, structural engineers, and interior designers to bring blueprints to life with exacting fidelity.",
    },
  ],
  relatedServices: [
    {
      title: "Home Additions",
      to: "/home-additions",
      desc: "Expand your home footprint with second stories & extensions.",
    },
    {
      title: "Commercial Improvements",
      to: "/commercial-improvements",
      desc: "Office buildouts, retail renovations & tenant improvements.",
    },
    {
      title: "Custom Builds",
      to: "/custom-builds",
      desc: "Architectural millwork, coffered ceilings & framing.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 4. DECK & OUTDOOR LIVING
// ─────────────────────────────────────────────────────────────
export const deckOutdoorLivingData: ServicePageData = {
  slug: "deck-outdoor-living",
  title: "Deck & Outdoor Living",
  metaTitle: "Custom Decks & Outdoor Living in Neptune, NJ | KV Property Inc.",
  metaDescription:
    "Premium composite & wood decks, pergolas, covered porches, and outdoor living spaces in Neptune, NJ. Trex & TimberTech certified quality. Free estimates.",
  badge: "Outdoor Living Specialists",
  headline: "Custom Decks, Pergolas & Outdoor Living Spaces Crafted to Last",
  headlineHighlight: "Decks & Outdoor Living",
  subheadline:
    "Expand your living space into the outdoors with custom composite decks, pressure-treated natural hardwood, covered pavilions, pergolas, and integrated evening lighting.",
  featuredImage: featuredDeckOutdoor,
  overviewTag: "Outdoor Entertaining",
  overviewTitle: "Built for Jersey Shore Summers and Year-Round Durability",
  overviewHighlight: "Year-Round Durability",
  overviewP1:
    "New Jersey coastal climates demand exterior structures that stand up to humidity, salt air, intense summer sun, and freezing winters. At KV Property Inc., we build decks engineered from the footings up with corrosion-resistant framing hardware, premium composite decking, and solid structural integrity.",
  overviewP2:
    "Whether you want a low-maintenance Trex composite deck with integrated stair risers, a multi-tier entertaining deck, a cedar pergola for shade, or an outdoor kitchen island, our craftsmen build functional retreats you will enjoy with family and friends for decades.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Custom deck & porch construction" },
    { value: "25+ Yr", label: "Composite Durability", sub: "Trex, TimberTech & low-maintenance decking" },
    { value: "Heavy-Duty", label: "Structural Footings", sub: "Code-compliant sonotube foundations" },
  ],
  featuresTitle: "Our Deck & Outdoor Living Capabilities",
  featuresDesc:
    "From intimate backyard decks to multi-level entertainment zones with custom shade structures.",
  features: [
    {
      title: "Composite & PVC Decking (Trex, TimberTech)",
      desc: "Splinter-free, fade-resistant, low-maintenance composite boards with hidden fastener systems for a sleek, screw-free surface.",
      icon: Fence,
      badge: "Low Maintenance",
    },
    {
      title: "Natural Hardwood & Pressure-Treated Decks",
      desc: "Authentic Ipe, cedar, and premium grade pressure-treated Southern pine built with craftsman framing and precision mitered corners.",
      icon: Layers,
    },
    {
      title: "Custom Pergolas & Covered Porches",
      desc: "Architectural pergolas, gabled covered porch roofs, tongue-and-groove cedar ceilings, and screened-in three-season porches.",
      icon: Home,
    },
    {
      title: "Modern Railing Systems",
      desc: "Contemporary cable railings, tempered glass panel railings, aluminum balusters, and cocktail drink rail tops.",
      icon: ShieldCheck,
    },
    {
      title: "Low-Voltage Deck & Step Lighting",
      desc: "Recessed stair riser lights, post cap illumination, and ambient under-rail LED strips for safety and nighttime ambiance.",
      icon: Lightbulb,
    },
    {
      title: "Outdoor Kitchens & Bar Islands",
      desc: "Built-in BBQ enclosures, stainless steel storage drawers, granite countertops, and electrical/gas hookup coordination.",
      icon: Flame,
    },
  ],
  processTitle: "Our 4-Step Deck Construction Process",
  processDesc:
    "A smooth journey from blueprint to backyard celebration.",
  processSteps: [
    {
      step: "01",
      title: "Site Survey & 3D Concept",
      desc: "We evaluate your yard slope, sun angles, setbacks, and present layout options that maximize your outdoor footprint.",
    },
    {
      step: "02",
      title: "Engineering & Town Permits",
      desc: "We file detailed framing plans, span calculations, and footing specs with your local municipality for hassle-free approvals.",
    },
    {
      step: "03",
      title: "Deep Footings & Framing",
      desc: "We excavate below the frost line, pour reinforced concrete footings, and construct joists with galvanized tension ties.",
    },
    {
      step: "04",
      title: "Planking, Railings & Clean-Up",
      desc: "We lay decking boards with precision gaps, install custom railing and lighting, test all fixtures, and leave your yard immaculate.",
    },
  ],
  galleryImages: getImagesForService(["screenshot-4", "screenshot-7", "668749688", "669122480", "750585942", "795027866"], 12, 8),
  faqs: [
    {
      q: "What is better for New Jersey weather: composite or wood decking?",
      a: "Composite decking (like Trex or TimberTech) is ideal for New Jersey because it resists moisture, rot, warping, and UV rays without annual staining or sanding. Wood remains a popular choice for budget-conscious homeowners or traditional cedar aesthetics.",
    },
    {
      q: "Do I need a permit to replace an existing deck?",
      a: "In most New Jersey townships, rebuilding or replacing a deck requires a zoning and building permit, particularly if the footprint changes or structural footings are modified. We handle all paperwork and inspections.",
    },
    {
      q: "Can you build a roof or pergola over an existing deck?",
      a: "Yes, provided the existing deck framing and footings can support the structural roof load. If not, we can reinforce the framing or install dedicated independent support columns.",
    },
    {
      q: "Can you incorporate outdoor kitchen appliances into the deck design?",
      a: "Yes. We design custom framed grill islands with non-combustible backings, stone or quartz counters, and access doors.",
    },
  ],
  relatedServices: [
    {
      title: "Pools & Outdoor Spaces",
      to: "/pools-outdoor-spaces",
      desc: "Pool surrounds, patios, fire pits, and hardscaping.",
    },
    {
      title: "Interior & Exterior Painting",
      to: "/interior-exterior-painting",
      desc: "Deck staining, weather sealing, and exterior finishes.",
    },
    {
      title: "Custom Builds",
      to: "/custom-builds",
      desc: "Custom outdoor benches, privacy screens & pergolas.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 5. POOLS & OUTDOOR SPACES
// ─────────────────────────────────────────────────────────────
export const poolsOutdoorSpacesData: ServicePageData = {
  slug: "pools-outdoor-spaces",
  title: "Pools & Outdoor Spaces",
  metaTitle: "Pool Decks & Outdoor Spaces in Neptune, NJ | KV Property Inc.",
  metaDescription:
    "Resort-style pool surrounds, travertine paver patios, retaining walls, fire pits, and poolside cabanas in Neptune, NJ. Free estimates.",
  badge: "Pool & Outdoor Living",
  headline: "Complete Poolside Renovations, Patios & Outdoor Entertainment Spaces",
  headlineHighlight: "Pools & Outdoor Spaces",
  subheadline:
    "Transform your backyard into a private resort with custom paver pool surrounds, retaining walls, outdoor fire pits, poolside cabanas, and durable hardscaping.",
  featuredImage: featuredPoolsOutdoor,
  overviewTag: "Resort-Style Living",
  overviewTitle: "Creating Cohesive Backyard Retreats",
  overviewHighlight: "Backyard Retreats",
  overviewP1:
    "A pool is only as inviting as the space that surrounds it. At KV Property Inc., we specialize in turning ordinary pool areas into breathtaking, multi-functional outdoor entertainment destinations. From slip-resistant travertine and porcelain pavers to custom pool houses, we handle every detail.",
  overviewP2:
    "We understand the demanding soil conditions, drainage requirements, and freeze-thaw cycles of coastal New Jersey. Our hardscapes and pool surrounds are built on properly compacted, well-drained bases that prevent shifting, cracking, and water pooling.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Serving Monmouth & Ocean Counties" },
    { value: "Slip-Safe", label: "Premium Pavers", sub: "Travertine, bluestone & porcelain" },
    { value: "Full Scope", label: "Masonry & Carpentry", sub: "Pool surrounds, cabanas & walls" },
  ],
  featuresTitle: "Our Pools & Outdoor Spaces Services",
  featuresDesc:
    "Complete hardscaping, carpentry, and architectural upgrades for swimming pool surrounds.",
  features: [
    {
      title: "Paver & Travertine Pool Coping & Decks",
      desc: "Cool-to-the-touch, slip-resistant travertine, bluestone, and architectural pavers installed with laser leveling and polymer sand joints.",
      icon: Leaf,
      badge: "Popular",
    },
    {
      title: "Custom Pool Cabanas & Pavilions",
      desc: "Custom-framed pool houses, change rooms, covered poolside bars, and shaded pavilions with electrical hookups.",
      icon: Home,
    },
    {
      title: "Retaining Walls & Terraced Grading",
      desc: "Heavy-duty structural retaining walls, stone seating walls, and grading solutions that solve yard slopes and drainage challenges.",
      icon: Layers,
    },
    {
      title: "Outdoor Fire Pits & Fireplaces",
      desc: "Custom masonry gas or wood-burning fire pits, natural stone fireplaces, and surrounding conversation seating areas.",
      icon: Flame,
    },
    {
      title: "Outdoor Showers & Privacy Screens",
      desc: "Coastal cedar outdoor rinse showers, hot/cold plumbing hookups, and horizontal slat privacy partition walls.",
      icon: Droplets,
    },
    {
      title: "Landscape & Pathway Lighting",
      desc: "Low-voltage architectural illumination around pool borders, retaining walls, step risers, and garden perimeter paths.",
      icon: Lightbulb,
    },
  ],
  processTitle: "Our Pool Surround & Patio Process",
  processDesc:
    "Built for structural stability, correct pitch, and flawless drainage.",
  processSteps: [
    {
      step: "01",
      title: "Topography & Drainage Survey",
      desc: "We analyze yard slope, pool equipment locations, water runoff paths, and soil conditions to formulate a solid engineering base.",
    },
    {
      step: "02",
      title: "Hardscape & Material Design",
      desc: "We guide you through coping profiles, stone textures, paver patterns, and complementary wall block selections.",
    },
    {
      step: "03",
      title: "Excavation & Base Compaction",
      desc: "Heavy excavation, geotextile fabric installation, crushed aggregate base compaction in lifts, and pitch leveling.",
    },
    {
      step: "04",
      title: "Precision Laying & Joint Setting",
      desc: "Paver laying, coping mortar bed setting, edge restraint anchoring, polymeric sand application, and site cleanup.",
    },
  ],
  galleryImages: getImagesForService(["750585942", "795027866", "screenshot-4", "screenshot-7", "668749688", "669122480"], 16, 8),
  faqs: [
    {
      q: "What pavers stay cool in the summer around a pool?",
      a: "Travertine and light-colored porcelain pavers are the coolest underfoot because they reflect sunlight and absorb minimal heat compared to dark concrete or asphalt.",
    },
    {
      q: "How do you prevent pool pavers from sinking or shifting?",
      a: "Proper base preparation is crucial. We excavate down to virgin soil, install commercial geotextile fabric, lay 6-8 inches of crushed aggregate compacted in stages, and secure borders with commercial concrete edge restraints.",
    },
    {
      q: "Can you build a pool cabana with an outdoor bathroom or bar?",
      a: "Yes. Our general contracting team coordinates structural framing, plumbing lines, electrical sub-panels, and cabinetry for full-amenity cabanas.",
    },
    {
      q: "Do you install outdoor showers for rinsing off pool water or beach sand?",
      a: "Yes! Cedar and composite outdoor showers with hot/cold frost-free water lines are one of our top summer requests in the Neptune and Jersey Shore area.",
    },
  ],
  relatedServices: [
    {
      title: "Deck & Outdoor Living",
      to: "/deck-outdoor-living",
      desc: "Custom composite decks, pergolas, and outdoor kitchens.",
    },
    {
      title: "General Contracting",
      to: "/general-contracting",
      desc: "Pool house framing, foundations, and project management.",
    },
    {
      title: "Property Maintenance",
      to: "/property-maintenance",
      desc: "Paver power washing, re-sanding, and seasonal maintenance.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 6. HOME ADDITIONS
// ─────────────────────────────────────────────────────────────
export const homeAdditionsData: ServicePageData = {
  slug: "home-additions",
  title: "Home Additions",
  metaTitle: "Home Additions in Neptune, NJ | Room Expansions | KV Property Inc.",
  metaDescription:
    "Expand your living space with custom home additions in Neptune, NJ. Second-story additions, primary master suites, in-law suites & bump-outs. Free estimates.",
  badge: "Home Additions & Expansions",
  headline: "Seamless Home Additions That Expand Your Space and Property Value",
  headlineHighlight: "Home Additions",
  subheadline:
    "Love your neighborhood but need more room? KV Property Inc. designs and builds second-story additions, primary suite expansions, in-law suites, and sunrooms that blend seamlessly with your home's existing architecture.",
  featuredImage: featuredHomeAdditions,
  overviewTag: "Expanding Possibilities",
  overviewTitle: "More Space to Live, Work, and Grow Without Moving",
  overviewHighlight: "Without Moving",
  overviewP1:
    "Moving to a larger home often means uprooting your family, enduring high interest rates, and paying tens of thousands in closing fees and moving expenses. A custom home addition allows you to stay in the neighborhood you love while customizing your living space to your exact modern lifestyle.",
  overviewP2:
    "At KV Property Inc., we specialize in additions that look and feel like they were part of the original house, rather than an awkward afterthought. From foundation excavation and structural framing to matching rooflines, exterior siding, and interior trim, we deliver turnkey craftsmanship.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Complex residential expansions" },
    { value: "100%", label: "Seamless Blend", sub: "Architectural roofline & siding matching" },
    { value: "Turnkey", label: "Full Permitting", sub: "Zoning, setbacks & township approvals" },
  ],
  featuresTitle: "Our Home Addition Services",
  featuresDesc:
    "Tailored architectural expansions engineered for structural integrity and optimal resale value.",
  features: [
    {
      title: "Primary Master Suite Additions",
      desc: "Spacious master bedrooms with walk-in walk-through closets, luxury en-suite spa bathrooms, and private outdoor balconies.",
      icon: Home,
      badge: "High ROI",
    },
    {
      title: "Second-Story Additions (Add-A-Level)",
      desc: "Double your home's square footage by lifting the roof and adding multiple bedrooms, bathrooms, laundry rooms, and closets.",
      icon: Maximize2,
    },
    {
      title: "In-Law Suites & Multi-Generational Living",
      desc: "Private ground-floor living quarters featuring accessible bathrooms, kitchenette options, private entrances, and comfortable living areas.",
      icon: ShieldCheck,
    },
    {
      title: "Kitchen & Great Room Bump-Outs",
      desc: "Expand your ground-floor footprint by 6 to 15 feet to accommodate a chef's kitchen, breakfast nook, or expansive family room.",
      icon: Sparkles,
    },
    {
      title: "Four-Season Sunrooms & Enclosures",
      desc: "Fully insulated, heated, and air-conditioned sunrooms with energy-efficient panoramic windows and skylights.",
      icon: Layers,
    },
    {
      title: "Garage Conversions & Additions",
      desc: "Attached or detached 2-car garages with upper-level bonus rooms, home gyms, or professional executive home offices.",
      icon: Factory,
    },
  ],
  processTitle: "Our 4-Step Home Addition Process",
  processDesc:
    "Structured project delivery ensuring your home stays protected from the elements at all times.",
  processSteps: [
    {
      step: "01",
      title: "Zoning & Feasibility Review",
      desc: "We verify property setbacks, lot coverage percentages, utility locations, and produce architectural schematics.",
    },
    {
      step: "02",
      title: "Engineering & Permitting",
      desc: "Structural engineering stamps, foundation plans, and submission to the township building department for swift approval.",
    },
    {
      step: "03",
      title: "Foundation & Weather-Tight Shell",
      desc: "Excavation, concrete footings, framing, roof tie-in, windows, and house wrap to achieve a weather-tight exterior quickly.",
    },
    {
      step: "04",
      title: "Interior Rough-Ins & Finishes",
      desc: "Plumbing, electrical, insulation, drywall, hardwood flooring, trim carpentry, and flawless paint transitions.",
    },
  ],
  galleryImages: getImagesForService(["686042203", "686383646", "686399108", "687556523", "screenshot-1", "screenshot-3"], 20, 8),
  faqs: [
    {
      q: "Can we live in our house while a home addition is being built?",
      a: "For ground-floor bump-outs and master suite expansions, most homeowners comfortably remain in their home. We erect dust containment barriers and maintain functioning utilities. For full second-story additions, a brief temporary relocation may be recommended while the roof is removed.",
    },
    {
      q: "How does the addition match our existing roofline and siding?",
      a: "Our architectural team carefully calculates roof pitches, eave depths, and materials. We source matching siding, roofing shingles, and trim profiles so the finished structure looks cohesive and intentional.",
    },
    {
      q: "What is the typical timeframe for a home addition?",
      a: "From breaking ground to final inspection, room additions generally take 2 to 4 months depending on weather, complexity, and inspection schedules.",
    },
    {
      q: "Do home additions increase property value in Monmouth County?",
      a: "Yes. Adding square footage—particularly primary suites, extra bedrooms, or open living areas—consistently delivers one of the highest returns on investment in the New Jersey real estate market.",
    },
  ],
  relatedServices: [
    {
      title: "General Contracting",
      to: "/general-contracting",
      desc: "Complete project management, permits, and structural framing.",
    },
    {
      title: "Kitchen Remodeling",
      to: "/kitchen-remodeling",
      desc: "Expand and modernize your kitchen within the new footprint.",
    },
    {
      title: "Custom Builds",
      to: "/custom-builds",
      desc: "Custom closets, built-in shelving, and architectural trim.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 7. INTERIOR & EXTERIOR PAINTING
// ─────────────────────────────────────────────────────────────
export const interiorExteriorPaintingData: ServicePageData = {
  slug: "interior-exterior-painting",
  title: "Interior & Exterior Painting",
  metaTitle: "Interior & Exterior Painting in Neptune, NJ | KV Property Inc.",
  metaDescription:
    "Meticulous interior & exterior painting in Neptune, NJ. Flawless surface prep, sharp lines, premium Benjamin Moore/Sherwin Williams paints & cabinet spray finishes.",
  badge: "Master Painting Services",
  headline: "Flawless Interior & Exterior Painting With Enduring Curb Appeal",
  headlineHighlight: "Painting & Finishes",
  subheadline:
    "Protect your investment and elevate your spaces with meticulous surface preparation, laser-straight cut lines, and premium paints applied by skilled craftsmen.",
  featuredImage: featuredPainting,
  overviewTag: "Precision & Protection",
  overviewTitle: "The Difference Is in the Preparation",
  overviewHighlight: "In The Preparation",
  overviewP1:
    "Anyone can roll paint on a wall, but a finish that looks flawless under natural light and resists peeling, scuffs, and weather for a decade requires true craftsmanship. At KV Property Inc., we dedicate up to 75% of our painting time to thorough preparation.",
  overviewP2:
    "We scrape, sand, patch, caulk, prime, and mask every surface before the first topcoat touches your home. Using premium commercial coatings from Sherwin-Williams and Benjamin Moore, we deliver crisp lines, uniform sheen, and lasting protection against coastal New Jersey salt air and humidity.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Serving Neptune & Monmouth County" },
    { value: "Top Tier", label: "Premium Coatings", sub: "Benjamin Moore & Sherwin-Williams" },
    { value: "100%", label: "Clean Worksite", sub: "Drop cloths, masking & spotless cleanup" },
  ],
  featuresTitle: "Complete Painting & Coating Capabilities",
  featuresDesc:
    "Expert interior room refreshes, whole-house exterior painting, and specialized spray finishes.",
  features: [
    {
      title: "Interior Wall & Ceiling Painting",
      desc: "Flawless drywall patching, stain blocking, uniform roller texture, and laser-straight cut lines against moldings and ceilings.",
      icon: Paintbrush,
      badge: "Interior",
    },
    {
      title: "Exterior Siding & Trim Protection",
      desc: "Pressure washing, scraping loose paint, priming bare wood, caulking joints, and two protective coats of premium exterior acrylic latex.",
      icon: Home,
      badge: "Exterior",
    },
    {
      title: "Cabinet Refinishing & Factory Spraying",
      desc: "Transform outdated kitchen cabinets with fine-finish HVLP spraying, durable conversion varnish, or industrial enamel coatings.",
      icon: Sparkles,
      badge: "High Value",
    },
    {
      title: "Trim, Baseboard & Door Enameling",
      desc: "Sanding, filling nail holes, caulking seams, and applying smooth, durable semi-gloss enamel to doors, casings, and baseboards.",
      icon: Layers,
    },
    {
      title: "Deck & Fence Staining & Sealing",
      desc: "Deep wood cleaning, brightening, and application of UV-protective penetrating stains to keep cedar and pressure-treated wood resilient.",
      icon: Fence,
    },
    {
      title: "Drywall & Plaster Repair",
      desc: "Seamless repairs for water damage, settling cracks, hole patching, and texture matching prior to painting.",
      icon: Hammer,
    },
  ],
  processTitle: "Our 4-Step Painting Process",
  processDesc:
    "Uncompromising preparation followed by smooth, uniform application.",
  processSteps: [
    {
      step: "01",
      title: "Protection & Masking",
      desc: "We protect all floors with heavy-duty builder board, cover furniture with clean plastic, and tape trim edges with precision tape.",
    },
    {
      step: "02",
      title: "Surface Prep & Repair",
      desc: "We fill holes, repair cracks, sand uneven patches, scrape loose paint, and caulk all trim joints with flexible acrylic sealant.",
    },
    {
      step: "03",
      title: "Priming & Topcoat Application",
      desc: "Application of specialty bonding or stain-blocking primers followed by two full coats of premium, low-VOC paint.",
    },
    {
      step: "04",
      title: "Inspection & Clean-Up",
      desc: "Tape removal, thorough worksite vacuuming, furniture repositioning, and a complete walkthrough with you in bright light.",
    },
  ],
  galleryImages: getImagesForService(["699737495", "707668326", "710746339", "711331235", "719874146", "screenshot-2"], 24, 8),
  faqs: [
    {
      q: "What paint brands do you use?",
      a: "We exclusively use professional-grade paints from industry leaders like Benjamin Moore (Regal Select, Aura) and Sherwin-Williams (Duration, Emerald) to ensure superior washability, color retention, and coverage.",
    },
    {
      q: "How many coats of paint do you apply?",
      a: "We apply a minimum of two full coats over properly prepared and primed surfaces to guarantee rich color saturation and manufacturer warranty performance.",
    },
    {
      q: "Do you spray or roll cabinets?",
      a: "For cabinets, we spray door fronts and drawer faces in a dust-controlled environment using high-volume, low-pressure (HVLP) sprayers to achieve a smooth, brushmark-free factory finish.",
    },
    {
      q: "How often should a house in coastal New Jersey be painted externally?",
      a: "Due to coastal humidity and salt air, quality exterior paint typically lasts 7 to 10 years when applied over properly prepped and primed siding.",
    },
  ],
  relatedServices: [
    {
      title: "Kitchen Remodeling",
      to: "/kitchen-remodeling",
      desc: "Cabinet refinishing and full kitchen updates.",
    },
    {
      title: "Handyman Services",
      to: "/handyman-services",
      desc: "Drywall repairs, door hanging, and caulking.",
    },
    {
      title: "Deck & Outdoor Living",
      to: "/deck-outdoor-living",
      desc: "Deck staining, pressure washing, and wood preservation.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 8. FLOORING
// ─────────────────────────────────────────────────────────────
export const flooringData: ServicePageData = {
  slug: "flooring",
  title: "Flooring Installation",
  metaTitle: "Flooring Installation in Neptune, NJ | Hardwood, Tile & LVP | KV Property Inc.",
  metaDescription:
    "Expert flooring installation in Neptune, NJ. Hardwood, luxury vinyl plank (LVP), porcelain tile & hardwood refinishing. Precision subfloor prep & free estimates.",
  badge: "Master Flooring Installation",
  headline: "Hardwood, Tile & Luxury Vinyl Flooring Installed With Precision",
  headlineHighlight: "Flooring Installation",
  subheadline:
    "Elevate your home's foundation with expertly installed solid hardwood, waterproof luxury vinyl plank (LVP), custom tile layouts, and seamless transitions.",
  featuredImage: featuredFlooring,
  overviewTag: "Underfoot Craftsmanship",
  overviewTitle: "Beautiful, Resilient Floors Built for Everyday Life",
  overviewHighlight: "Everyday Life",
  overviewP1:
    "Flooring sets the visual tone and tactile feel of every room in your home. It must also handle heavy foot traffic, pets, spills, and seasonal temperature swings. At KV Property Inc., we believe the secret to lasting flooring lies beneath the surface in meticulous subfloor preparation.",
  overviewP2:
    "We check and level subfloors, install acoustic sound-deadening underlayments and moisture barriers, and install hardwood, tile, and vinyl planks with tight tolerances. From herringbone patterns to flush transition thresholds, our finished floors look stunning and feel rock-solid underfoot.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Wood, tile & luxury vinyl installations" },
    { value: "100%", label: "Subfloor Leveling", sub: "Flat, squeak-free foundations" },
    { value: "Zero Gap", label: "Precision Miters", sub: "Custom baseboards & shoe molding" },
  ],
  featuresTitle: "Our Flooring Solutions",
  featuresDesc:
    "We install, repair, and refinish all major residential and commercial flooring types.",
  features: [
    {
      title: "Solid & Engineered Hardwood",
      desc: "Oak, maple, hickory, and walnut hardwood nailed or glued with tight joints, expansion gaps, and matching flush stair nosings.",
      icon: Landmark,
      badge: "Timeless",
    },
    {
      title: "Luxury Vinyl Plank (LVP & WPC)",
      desc: "100% waterproof, scratch-resistant rigid-core vinyl plank flooring ideal for busy families, kitchens, basements, and pet owners.",
      icon: Layers,
      badge: "Popular",
    },
    {
      title: "Porcelain & Ceramic Tile",
      desc: "Large format tiles, wood-look planks, and geometric mosaics installed with anti-fracture underlayment and stain-resistant grout.",
      icon: Sparkles,
    },
    {
      title: "Hardwood Refinishing & Dustless Sanding",
      desc: "Revitalize worn, scratched wood floors with commercial dustless sanding, custom color stains, and durable polyurethane coats.",
      icon: Paintbrush,
    },
    {
      title: "Subfloor Leveling & Squeak Repair",
      desc: "Self-leveling underlayment pours, plywood sistering, screw re-fastening to eliminate annoying floor squeaks.",
      icon: Hammer,
    },
    {
      title: "Baseboards, Shoe Molding & Transitions",
      desc: "Custom painted or stained baseboards, quarter-round shoe molding, and flush transition t-moldings between different floor surfaces.",
      icon: Ruler,
    },
  ],
  processTitle: "Our 4-Step Flooring Process",
  processDesc:
    "Engineered for flatness, durability, and lasting beauty.",
  processSteps: [
    {
      step: "01",
      title: "Measurement & Acclimation",
      desc: "We measure room square footage with waste factoring and deliver hardwood/materials early to acclimate to your home's indoor humidity.",
    },
    {
      step: "02",
      title: "Subfloor Prep & Leveling",
      desc: "Removal of old carpet or tile, grinding high spots, filling low spots, securing loose subfloor sheets, and installing vapor barriers.",
    },
    {
      step: "03",
      title: "Precision Layout & Laying",
      desc: "Snapping reference lines, staggering plank seams at least 8-12 inches, cutting door jamb undercuts, and securing planks.",
    },
    {
      step: "04",
      title: "Trim, Thresholds & Inspection",
      desc: "Installing color-matched transitions, re-installing baseboards with finish nails, caulking, sweeping clean, and final inspection.",
    },
  ],
  galleryImages: getImagesForService(["711331235", "719874146", "738176213", "790208859", "790341042", "screenshot-5"], 28, 8),
  faqs: [
    {
      q: "Why is Luxury Vinyl Plank (LVP) so popular right now?",
      a: "LVP offers the warm, realistic look of natural hardwood while being 100% waterproof, dent-resistant, and scratch-resistant. It is ideal for kitchens, bathrooms, basements, and homes with dogs and kids.",
    },
    {
      q: "Can you fix squeaky floors before installing new flooring?",
      a: "Yes. Whenever we pull up old carpet or flooring, we inspect the subfloor, drive heavy-duty screws into joists to eliminate movement, and replace damaged subfloor panels before installing new material.",
    },
    {
      q: "How long should hardwood acclimate in my home before installation?",
      a: "Solid hardwood should acclimate in the conditioned space for 3 to 7 days so its moisture content equalizes with your home's indoor humidity, preventing future buckling or gaps.",
    },
    {
      q: "Do you undercut door frames for a clean floor fit?",
      a: "Yes! We always use a specialized undercut saw so new planks slide cleanly underneath door jambs rather than leaving unsightly gaps.",
    },
  ],
  relatedServices: [
    {
      title: "Kitchen Remodeling",
      to: "/kitchen-remodeling",
      desc: "Coordinate new flooring with cabinets and islands.",
    },
    {
      title: "Bathroom Remodeling",
      to: "/bathroom-remodeling",
      desc: "Waterproof tile floors and heated floor systems.",
    },
    {
      title: "Custom Builds",
      to: "/custom-builds",
      desc: "Custom hardwood stairs, railings, and risers.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 9. HANDYMAN SERVICES
// ─────────────────────────────────────────────────────────────
export const handymanServicesData: ServicePageData = {
  slug: "handyman-services",
  title: "Handyman Services",
  metaTitle: "Handyman Services in Neptune, NJ | Home Repairs | KV Property Inc.",
  metaDescription:
    "Reliable, skilled handyman services in Neptune, NJ. Drywall repairs, door installations, light plumbing/electrical, carpentry & punch-lists. Free estimates.",
  badge: "Reliable Handyman Services",
  headline: "Fast, Reliable Handyman Services & Expert Home Repairs",
  headlineHighlight: "Handyman Services",
  subheadline:
    "No job is too small for true craftsmanship. From drywall patching and door replacements to minor plumbing, fixture updates, and carpentry repairs, we keep your home running smoothly.",
  featuredImage: featuredHandyman,
  overviewTag: "Fast, Dependable Repairs",
  overviewTitle: "Experienced Craftsmen for Your To-Do List",
  overviewHighlight: "Your To-Do List",
  overviewP1:
    "Finding a responsive, honest, and skilled contractor for small-to-medium home repairs can be frustrating. Many big companies won't show up for smaller jobs, and unqualified handymen can leave things worse than they started. KV Property Inc. bridges that gap.",
  overviewP2:
    "Backed by over 20 years of general contracting experience, our professional technicians arrive on time, treat your home with care, and solve problems the right way the first time. Whether you have a growing punch list or an urgent repair, we have you covered.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Serving Neptune & Monmouth County" },
    { value: "Prompt", label: "Fast Response", sub: "Quick scheduling for urgent repairs" },
    { value: "Upfront", label: "Clear Pricing", sub: "Honest estimates with no surprise fees" },
  ],
  featuresTitle: "Our Handyman Capabilities",
  featuresDesc:
    "A full spectrum of residential and commercial repair and maintenance solutions.",
  features: [
    {
      title: "Drywall Patching & Water Damage Repair",
      desc: "Fix holes, cracks, settling seams, and water-damaged ceiling spots with clean tape, mud feathering, and texture matching.",
      icon: Hammer,
      badge: "Everyday Fix",
    },
    {
      title: "Interior & Exterior Door Installation",
      desc: "Hang pre-hung doors, replace weathered exterior entry doors, fix sticky doors, and install modern deadbolts and smart locks.",
      icon: DoorOpen,
    },
    {
      title: "Plumbing Fixture Replacements",
      desc: "Replace dripping kitchen and bath faucets, install new toilets, fix running valves, replace garbage disposals, and install vanity sinks.",
      icon: Droplets,
    },
    {
      title: "Light Fixture & Fan Installation",
      desc: "Swap outdated chandeliers, install ceiling fans, replace dimmers and switches, and mount modern exterior motion lights.",
      icon: Lightbulb,
    },
    {
      title: "Carpentry & Trim Repairs",
      desc: "Repair rotted exterior fascia boards, fix damaged baseboards, re-anchor loose handrails, and repair wood fences and gates.",
      icon: Wrench,
    },
    {
      title: "Home Sale Punch-List Completion",
      desc: "Knock out home inspection report findings quickly so your real estate closing stays right on schedule.",
      icon: CheckCircle2,
      badge: "Real Estate",
    },
  ],
  processTitle: "Our Simple Handyman Service Process",
  processDesc:
    "Fast scheduling, clear communication, and neat, efficient repairs.",
  processSteps: [
    {
      step: "01",
      title: "Send Your Repair List",
      desc: "Call us or submit your punch list and photos via our website to receive a prompt assessment and estimate.",
    },
    {
      step: "02",
      title: "Convenient Scheduling",
      desc: "We confirm a dedicated arrival window that fits your busy calendar.",
    },
    {
      step: "03",
      title: "Craftsman Repair Work",
      desc: "Our technician arrives equipped with tools and supplies to execute each task efficiently and cleanly.",
    },
    {
      step: "04",
      title: "Review & Satisfaction Sign-Off",
      desc: "We review completed work together, clean up thoroughly, and make sure you are 100% satisfied.",
    },
  ],
  galleryImages: getImagesForService(["797007131", "798077751", "800927560", "806397541", "screenshot-5", "screenshot-8"], 32, 8),
  faqs: [
    {
      q: "Do you have a minimum job size for handyman services?",
      a: "We welcome both individual repairs and multi-item punch lists. Contact us with your list and we will provide an honest, upfront quote.",
    },
    {
      q: "Can you help with home inspection repairs before a home sale?",
      a: "Yes! Real estate punch-list repairs are one of our specialties. We address buyer requests promptly with receipt documentation for your closing attorney.",
    },
    {
      q: "Are your handyman technicians insured?",
      a: "Yes, fully insured. When a KV Property Inc. team member is in your home, you have total peace of mind.",
    },
    {
      q: "Do I need to supply the materials or do you provide them?",
      a: "You can supply specific fixtures (such as faucets or light fixtures you selected), and we provide all necessary hardware, fasteners, drywall mud, and standard supplies. Alternatively, we can source everything for you.",
    },
  ],
  relatedServices: [
    {
      title: "Property Maintenance",
      to: "/property-maintenance",
      desc: "Year-round residential and commercial upkeep.",
    },
    {
      title: "Interior & Exterior Painting",
      to: "/interior-exterior-painting",
      desc: "Touch-up painting, trim enamel, and wall refreshes.",
    },
    {
      title: "Flooring Installation",
      to: "/flooring",
      desc: "Floor repairs, transition strips, and new planking.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 10. PROPERTY MAINTENANCE
// ─────────────────────────────────────────────────────────────
export const propertyMaintenanceData: ServicePageData = {
  slug: "property-maintenance",
  title: "Property Maintenance",
  metaTitle: "Property Maintenance in Neptune, NJ | Residential & Commercial | KV Property Inc.",
  metaDescription:
    "Comprehensive property maintenance in Neptune, NJ. Seasonal upkeep, commercial facility management, turnover repairs & preventative exterior care. Free quotes.",
  badge: "Property Maintenance Services",
  headline: "Proactive Residential & Commercial Property Maintenance in Neptune, NJ",
  headlineHighlight: "Property Maintenance",
  subheadline:
    "Protect your real estate investment year-round with comprehensive maintenance, routine building inspections, exterior care, and prompt repair services.",
  featuredImage: featuredMaintenance,
  overviewTag: "Protecting Your Investment",
  overviewTitle: "Preserving Value, Safety, and Curb Appeal Year-Round",
  overviewHighlight: "Preserving Value",
  overviewP1:
    "Deferred maintenance is the fastest way for a home or commercial building to lose value. Small water intrusions turn into rot; unaddressed exterior cracks lead to winter freeze damage; neglected rental properties lead to tenant dissatisfaction. KV Property Inc. provides proactive, structured maintenance.",
  overviewP2:
    "From seasonal residential checkups and storm preparedness to ongoing retail and commercial facility repairs across Neptune, Asbury Park, and Monmouth County, our licensed and insured crew keeps your buildings operating at peak performance.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Commercial & residential building care" },
    { value: "Proactive", label: "Preventative Upkeep", sub: "Catching issues before they get costly" },
    { value: "Rapid", label: "Response Time", sub: "Prompt service for urgent property needs" },
  ],
  featuresTitle: "Comprehensive Property Maintenance Services",
  featuresDesc:
    "Turnkey maintenance packages customized for homeowners, landlords, HOAs, and commercial property owners.",
  features: [
    {
      title: "Seasonal Property Inspections & Winterization",
      desc: "Comprehensive multi-point inspections of roofs, gutters, exterior caulking, outdoor plumbing, and foundation perimeters.",
      icon: ShieldCheck,
      badge: "Preventative",
    },
    {
      title: "Power Washing & Exterior Surface Cleaning",
      desc: "Safe, commercial-grade soft washing and pressure washing for vinyl siding, brick, walkways, decks, and parking pads.",
      icon: Sparkles,
    },
    {
      title: "Rental Property & Tenant Turnover Repairs",
      desc: "Fast punch lists between tenants: drywall patching, fresh paint, locks rekeyed, plumbing checks, and cosmetic restorations.",
      icon: Home,
      badge: "Landlords",
    },
    {
      title: "Gutter Cleaning, Repair & Guards",
      desc: "Clearing leaves and debris, re-securing loose gutter spikes, sealing seams, and installing leaf-guard protection systems.",
      icon: Layers,
    },
    {
      title: "Commercial Facility Maintenance",
      desc: "Light commercial maintenance, ceiling tile replacements, door closer repairs, emergency exit lights, and public area repairs.",
      icon: Building2,
    },
    {
      title: "Storm Preparation & Storm Damage Repairs",
      desc: "Securing loose exterior items before coastal nor'easters and prompt repairs to wind-damaged siding, fences, and trim.",
      icon: Hammer,
    },
  ],
  processTitle: "Our Property Maintenance Approach",
  processDesc:
    "Systematic inspections and fast execution that stop deterioration in its tracks.",
  processSteps: [
    {
      step: "01",
      title: "Facility or Home Assessment",
      desc: "We perform a walk-through to document current condition, identify vulnerabilities, and establish priority maintenance items.",
    },
    {
      step: "02",
      title: "Customized Upkeep Plan",
      desc: "We provide a clear written proposal: either on-demand service or a structured seasonal maintenance schedule.",
    },
    {
      step: "03",
      title: "Meticulous Execution",
      desc: "Our crew carries out all maintenance tasks with proper safety gear, quality materials, and commercial equipment.",
    },
    {
      step: "04",
      title: "Documentation & Follow-Up",
      desc: "You receive photos and a summary report of all completed repairs with recommendations for upcoming seasons.",
    },
  ],
  galleryImages: getImagesForService(["800483021", "800945506", "802811143", "814232836", "819742725", "screenshot-8"], 36, 8),
  faqs: [
    {
      q: "Do you offer property maintenance contracts for businesses or landlords?",
      a: "Yes. We offer both ongoing scheduled maintenance agreements and on-demand repair calls for commercial offices, retail plazas, apartment buildings, and single-family rental homes.",
    },
    {
      q: "What areas do you serve for property maintenance?",
      a: "We serve Neptune, Asbury Park, Ocean Township, Wall Township, Belmar, Spring Lake, and communities within approximately 25 miles across Monmouth and Ocean Counties.",
    },
    {
      q: "Can you help with rental move-out turnovers quickly?",
      a: "Yes. We understand vacancy costs you money. We prioritize fast turnover repairs—patching, painting, fixture swaps, and cleaning—to get your unit back on the market in days.",
    },
    {
      q: "How often should commercial building gutters and siding be cleaned?",
      a: "Gutters should be cleaned at least twice a year (late spring and late fall). Exterior siding and walkways should be professionally power washed annually to prevent mold and slip hazards.",
    },
  ],
  relatedServices: [
    {
      title: "Commercial Improvements",
      to: "/commercial-improvements",
      desc: "Full office remodeling, tenant fit-outs & structural upgrades.",
    },
    {
      title: "Handyman Services",
      to: "/handyman-services",
      desc: "Quick fixes, drywall repairs, door repairs, and hardware.",
    },
    {
      title: "Interior & Exterior Painting",
      to: "/interior-exterior-painting",
      desc: "Commercial and residential exterior coating and protection.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 11. CUSTOM BUILDS
// ─────────────────────────────────────────────────────────────
export const customBuildsData: ServicePageData = {
  slug: "custom-builds",
  title: "Custom Builds",
  metaTitle: "Custom Builds & Architectural Carpentry in Neptune, NJ | KV Property Inc.",
  metaDescription:
    "Bespoke carpentry & custom builds in Neptune, NJ. Custom built-ins, entertainment centers, coffered ceilings, mudrooms & architectural millwork. Free estimates.",
  badge: "Bespoke Architectural Carpentry",
  headline: "Bespoke Carpentry & Architectural Custom Builds Tailored to You",
  headlineHighlight: "Custom Builds",
  subheadline:
    "From built-in entertainment centers and coffered ceilings to custom mudrooms and one-of-a-kind architectural woodwork, our master carpenters bring your vision to life.",
  featuredImage: featuredCustomBuilds,
  overviewTag: "Master Woodworking",
  overviewTitle: "Uncompromising Detail in Every Cut and Joint",
  overviewHighlight: "Every Cut and Joint",
  overviewP1:
    "Off-the-shelf, mass-produced furniture rarely fits the proportions of a fine home or meets the exact storage requirements of an active family. Custom carpentry turns awkward alcoves, tall ceilings, and underutilized walls into breathtaking focal points of your home.",
  overviewP2:
    "At KV Property Inc., fine woodworking has been our core passion for more than 20 years. We work with hardwoods, cabinet-grade veneers, and architectural moldings to craft bespoke pieces that look as if they have always belonged to your home.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Master trim & cabinet carpentry" },
    { value: "100%", label: "Custom Sized", sub: "Tailored to your room's exact dimensions" },
    { value: "Handcrafted", label: "Cabinet-Grade", sub: "Premium hardwoods, finishes & hardware" },
  ],
  featuresTitle: "Our Custom Carpentry & Build Capabilities",
  featuresDesc:
    "Unique built-ins, architectural woodwork, and custom framing designed specifically for your space.",
  features: [
    {
      title: "Built-In Entertainment Centers & Libraries",
      desc: "Floor-to-ceiling bookshelves, integrated wire management, accent LED lighting, lower storage cabinetry, and TV mounting walls.",
      icon: Factory,
      badge: "Signature",
    },
    {
      title: "Coffered Ceilings & Wood Beams",
      desc: "Dramatic coffered grid ceilings, rustic rough-sawn faux beams, and tongue-and-groove wood panel ceilings that add warmth and depth.",
      icon: Layers,
    },
    {
      title: "Custom Mudroom Lockers & Storage Benches",
      desc: "Built-in family lockers, shoe cubbies, solid wood coat benches, beadboard backings, and overhead storage bins.",
      icon: Home,
      badge: "Popular",
    },
    {
      title: "Fireplace Mantels & Hearth Surrounds",
      desc: "Custom carved wood mantels, shiplap overmantels, stone/tile surround integration, and built-in flanking bookcases.",
      icon: Flame,
    },
    {
      title: "Wainscoting, Board & Batten, Crown Molding",
      desc: "Picture frame molding, raised panel wainscoting, modern board & batten, and multi-piece architectural crown moldings.",
      icon: Ruler,
    },
    {
      title: "Custom Walk-In Closet Systems",
      desc: "Custom closet organizers, island drawers, velvet jewelry trays, shoe towers, and double-hang wardrobe configurations.",
      icon: Sparkles,
    },
  ],
  processTitle: "Our Custom Build Process",
  processDesc:
    "From design sketch to flawless on-site installation.",
  processSteps: [
    {
      step: "01",
      title: "Design Concept & Laser Measuring",
      desc: "We measure your walls with laser precision, review inspiration photos, and specify materials, door styles, and crown profiles.",
    },
    {
      step: "02",
      title: "Shop Fabrication",
      desc: "Our master carpenters fabricate carcass boxes, face frames, and moldings in our shop, ensuring tight joinery.",
    },
    {
      step: "03",
      title: "On-Site Fitting & Scribing",
      desc: "We bring components on site, scribe edges to your home's walls and ceiling contours for an organic, built-in fit.",
    },
    {
      step: "04",
      title: "Fine Finishing & Hardware",
      desc: "Sanding, spray-enameling or staining, installation of soft-close hinges, drawer pulls, and integrated accent lighting.",
    },
  ],
  galleryImages: getImagesForService(["686042203", "686383646", "800483021", "802811143", "screenshot-1", "screenshot-3"], 40, 8),
  faqs: [
    {
      q: "What types of wood do you use for custom built-ins?",
      a: "For painted pieces, we typically use cabinet-grade birch or maple plywood carcasses with solid poplar or maple face frames and doors. For stained projects, we work with white oak, walnut, cherry, mahogany, or cedar.",
    },
    {
      q: "Can you design a built-in around our existing fireplace and television?",
      a: "Yes. Many of our custom builds incorporate gas or electric fireplaces, hidden cable management channels for televisions, soundbars, and gaming consoles.",
    },
    {
      q: "How long does a custom built-in take to make and install?",
      a: "Fabrication in our workshop typically takes 1 to 3 weeks depending on the complexity of the design. Once delivered, on-site installation and trim integration usually take 1 to 3 days.",
    },
    {
      q: "Do you spray paint custom cabinetry on-site or off-site?",
      a: "Whenever possible, we prime and pre-finish components in our controlled spray shop before installation, and complete final touch-up and seamless seam blending on site.",
    },
  ],
  relatedServices: [
    {
      title: "Kitchen Remodeling",
      to: "/kitchen-remodeling",
      desc: "Custom cabinetry, islands, and architectural trim.",
    },
    {
      title: "General Contracting",
      to: "/general-contracting",
      desc: "Whole-home renovations and interior framing.",
    },
    {
      title: "Interior Painting",
      to: "/interior-exterior-painting",
      desc: "Fine finish spray painting and enamel coatings.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// 12. COMMERCIAL IMPROVEMENTS
// ─────────────────────────────────────────────────────────────
export const commercialImprovementsData: ServicePageData = {
  slug: "commercial-improvements",
  title: "Commercial Improvements",
  metaTitle: "Commercial Improvements & Remodeling in Neptune, NJ | KV Property Inc.",
  metaDescription:
    "Commercial improvements, office renovations & retail fit-outs in Neptune, NJ. Code compliance, ADA upgrades, scheduled after-hours work & free estimates.",
  badge: "Commercial Contractor",
  headline: "Turnkey Commercial Improvements, Tenant Fit-Outs & Renovations",
  headlineHighlight: "Commercial Improvements",
  subheadline:
    "Reliable commercial remodeling, office renovations, retail build-outs, and facility upgrades executed on schedule and within budget with minimal disruption to your operations.",
  featuredImage: featuredCommercial,
  overviewTag: "Business Built on Trust",
  overviewTitle: "Minimizing Downtime, Maximizing Commercial Appeal",
  overviewHighlight: "Minimizing Downtime",
  overviewP1:
    "In business, time is money. A commercial renovation that exceeds its deadline or disrupts daily operations directly impacts your bottom line. At KV Property Inc., we combine commercial-grade project management with agile crews that understand the demands of commercial real estate.",
  overviewP2:
    "Whether you are a property manager preparing a vacant retail space for a new tenant, an office firm modernizing conference rooms, or a medical clinic requiring ADA-compliant facilities, we offer flexible scheduling—including night and weekend shifts—to keep your business running smoothly.",
  stats: [
    { value: "20+", label: "Years Experience", sub: "Serving Monmouth & Ocean County businesses" },
    { value: "Flexible", label: "After-Hours Shifts", sub: "Zero disruption to your daily operations" },
    { value: "100%", label: "ADA Compliant", sub: "Meeting all commercial building codes" },
  ],
  featuresTitle: "Our Commercial Contracting Services",
  featuresDesc:
    "Full-scope construction management tailored for offices, retail, hospitality, and commercial facilities.",
  features: [
    {
      title: "Office Renovations & Tenant Fit-Outs",
      desc: "Demising walls, executive office suites, conference rooms, breakroom kitchenettes, and modern open-plan workstations.",
      icon: Building2,
      badge: "Turnkey",
    },
    {
      title: "Retail Storefronts & Showrooms",
      desc: "Custom product displays, checkout counters, entryways, durable commercial flooring, and high-impact accent lighting.",
      icon: Sparkles,
    },
    {
      title: "ADA Compliance & Restroom Renovations",
      desc: "Grab bar installations, ADA-compliant sink vanities, commercial stall partitions, and accessible door threshold adjustments.",
      icon: ShieldCheck,
      badge: "Code Compliance",
    },
    {
      title: "Acoustic Drop Ceilings & Lighting",
      desc: "Suspended 2x2 and 2x4 grid ceiling installation, sound-dampening acoustic tiles, and energy-saving commercial LED flat panels.",
      icon: Layers,
    },
    {
      title: "Commercial Flooring Solutions",
      desc: "Heavy-traffic commercial carpet tiles, vinyl composition tile (VCT), polished commercial LVP, and commercial tile entryways.",
      icon: Landmark,
    },
    {
      title: "Flexible After-Hours Construction",
      desc: "We perform noisy demolition, painting, and construction during evenings and weekends so your staff and clients are never interrupted.",
      icon: Clock,
      badge: "After Hours",
    },
  ],
  processTitle: "Our Commercial Project Process",
  processDesc:
    "Predictable execution engineered around your commercial deadlines.",
  processSteps: [
    {
      step: "01",
      title: "Commercial Scope & Site Walk",
      desc: "We review architectural prints, landlord work letters, lease deadlines, and operational constraints.",
    },
    {
      step: "02",
      title: "Budget & Phased Scheduling",
      desc: "We produce a detailed itemized estimate and phased construction schedule that isolates active work zones.",
    },
    {
      step: "03",
      title: "Controlled Construction",
      desc: "Containment barriers, strict safety protocols, clean worksites, and quiet or off-hours work coordination.",
    },
    {
      step: "04",
      title: "Final Punch & Certificate of Occupancy",
      desc: "Rapid punch-list clearance, municipal inspection sign-offs, and final turnover so your doors open on time.",
    },
  ],
  galleryImages: getImagesForService(["825273553", "819742725", "814232836", "806397541", "screenshot-1", "screenshot-8"], 4, 8),
  faqs: [
    {
      q: "Can you perform commercial work after normal business hours?",
      a: "Yes. Many of our commercial clients require night and weekend construction to avoid disrupting daytime office staff or retail customers. We accommodate off-hours scheduling.",
    },
    {
      q: "Do you supply certificates of insurance (COI) for commercial property managers?",
      a: "Yes, immediately. We provide comprehensive COIs naming your building owner, landlord, and property management company as additional insureds.",
    },
    {
      q: "Can you help update commercial bathrooms to meet ADA accessibility standards?",
      a: "Yes. We regularly handle ADA commercial restroom upgrades including proper door clearances, grab bars, accessible vanities, and lever hardware.",
    },
    {
      q: "What types of commercial spaces do you work on?",
      a: "We work on corporate offices, retail stores, professional practices (dental, medical, legal), restaurants, salons, and commercial multi-tenant plazas throughout Monmouth County.",
    },
  ],
  relatedServices: [
    {
      title: "General Contracting",
      to: "/general-contracting",
      desc: "Structural framing, MEP management, and complete build-outs.",
    },
    {
      title: "Property Maintenance",
      to: "/property-maintenance",
      desc: "Ongoing facility maintenance, turn-over repairs, and exterior care.",
    },
    {
      title: "Flooring Installation",
      to: "/flooring",
      desc: "Heavy-duty commercial carpet tiles, vinyl, and tile floors.",
    },
  ],
};

// Map of all services for easy lookup
export const ALL_SERVICES_DATA: Record<string, ServicePageData> = {
  "kitchen-remodeling": kitchenRemodelingData,
  "bathroom-remodeling": bathroomRemodelingData,
  "general-contracting": generalContractingData,
  "deck-outdoor-living": deckOutdoorLivingData,
  "pools-outdoor-spaces": poolsOutdoorSpacesData,
  "home-additions": homeAdditionsData,
  "interior-exterior-painting": interiorExteriorPaintingData,
  "flooring": flooringData,
  "handyman-services": handymanServicesData,
  "property-maintenance": propertyMaintenanceData,
  "custom-builds": customBuildsData,
  "commercial-improvements": commercialImprovementsData,
};
