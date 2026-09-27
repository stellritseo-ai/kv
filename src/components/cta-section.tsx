import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star,
  Lock,
  Building2,
  Home,
} from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import { addLead, addWebEmail } from "@/lib/leads-store";

export function CTASection() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [propertyType, setPropertyType] = useState<"residential" | "commercial">("residential");
  const [address, setAddress] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getSafeText = (key: string, fallback: string) => {
    const val = t(key as any);
    if (!val || val === key || val.startsWith("cta.")) {
      return fallback;
    }
    return val;
  };

  const badgeText = getSafeText("cta.badge", "START YOUR TRANSFORMATION");
  const titleText = getSafeText("cta.final.title", "Let's Build Something Great.");
  const descText = getSafeText(
    "cta.final.desc",
    "From remodeling and repairs to complete property improvements, KV Property Inc is ready to help bring your project to life."
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    try {
      const budgetNum = budget ? parseInt(budget.replace(/[^0-9]/g, ""), 10) : undefined;

      await addLead({
        name,
        email: email || "no-email@kvproperty.com",
        phone,
        address,
        projectType: projectType || "General Remodeling",
        description: `Property Type: ${propertyType}. Budget: ${budget || "Not specified"}. Details: ${details}`,
        estimatedValue: budgetNum,
        contactTime: "morning",
      });

      await addWebEmail({
        name,
        email: email || "no-email@kvproperty.com",
        phone,
        service: projectType || "General Remodeling",
        message: `Property Type: ${propertyType}. Address: ${address}. Budget: ${budget}. Details: ${details}`,
        source: "landing_page",
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit estimate request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-0 pt-[5px] pb-0 px-2.5 sm:px-[15px]">
      <section
        id="contact"
        className="relative mx-auto max-w-[1400px] w-full rounded-t-2xl rounded-b-none bg-gradient-to-b from-[#14100c] via-[#1a1410] to-[#120d0a] text-white py-10 sm:py-16 px-4 sm:px-8 lg:px-12 border-t border-x border-[#33251c] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden"
      >
        {/* Decorative Top Glowing Amber Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffa326]/70 to-transparent" />

        {/* Ambient warm illumination orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ffa326]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#cc7e14]/12 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle architectural dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffa326 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* ── Section Header & Value Highlights ── */}
        <div className="relative z-10 max-w-4xl mx-auto mb-10 sm:mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffa326]/12 border border-[#ffa326]/30 text-[#ffa326] rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest mb-4 shadow-sm select-none">
              <Sparkles className="w-3.5 h-3.5 text-[#ffa326]" />
              <span>{badgeText}</span>
            </div>

            {/* Title */}
            <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-black text-white tracking-tight leading-tight -mt-1 mb-2">
              {titleText}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
              {descText}
            </p>
          </motion.div>
        </div>

        {/* ── Main Split Grid: Concierge Info (Left) + Estimate Form (Right) ── */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Concierge & Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/20 text-[#ffa326] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-3 select-none">
                <span>Direct Concierge</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2 tracking-tight">
                Speak Directly With Our Project Team
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                Prefer an immediate phone conversation or want to send your blueprints directly? We’re always here to assist.
              </p>

              {/* Luxury Contact Cards */}
              <div className="space-y-3 select-none">
                {/* Phone Card */}
                <a
                  href="tel:7326776674"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#ffa326]/40 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffa326] to-[#cc7e14] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#ffa326]/20 group-hover:scale-105 transition-transform duration-300">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-[#ffa326] uppercase tracking-wider block">
                        Direct Phone Hotline
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#ffa326] transition-colors block">
                        (732) 677-6674
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 group-hover:text-white uppercase tracking-wider transition-colors hidden sm:inline-block">
                    Tap to Call →
                  </span>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:kvpropertyinc@gmail.com"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#ffa326]/40 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-[#ffa326] flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#ffa326] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                        Official Project Email
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ffa326] transition-colors truncate block">
                        kvpropertyinc@gmail.com
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 group-hover:text-white uppercase tracking-wider transition-colors hidden sm:inline-block">
                    Send RFP →
                  </span>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#ffa326] flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Local Headquarters &amp; Base
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Neptune, NJ 07753
                    </span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">
                      Serving Monmouth &amp; Ocean County Communities
                    </span>
                  </div>
                </div>

                {/* Operating Schedule Card */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#ffa326] flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                      Hours &amp; Urgent Dispatch
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Monday–Saturday: 8:00 AM – 6:00 PM
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      24/7 Emergency Response Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Assurance Card */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-1 text-[#ffa326] mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-[11px] font-extrabold text-white ml-1.5">5.0 Star Rating</span>
              </div>
              <p className="text-xs text-neutral-300 italic leading-relaxed">
                "KV Property Inc remodeled our kitchen and exterior deck. Outstanding craftsmanship, punctual crew, and zero surprises on pricing."
              </p>
              <span className="text-[10px] font-bold text-neutral-400 block mt-2 uppercase tracking-wider">
                — Verified Monmouth County Homeowner
              </span>
            </div>
          </motion.div>

          {/* Right Column: Request A Free Estimate Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div
              id="estimate-form"
              className="relative bg-white rounded-2xl p-4 sm:p-7 md:p-9 border border-neutral-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-left"
            >
              {/* Form Title & Subtitle */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                    Request Your Free Estimate
                  </h4>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#cc7e14] bg-[#ffa326]/12 border border-[#ffa326]/30 px-2.5 py-0.5 rounded-full select-none shrink-0">
                    No Obligation
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal">
                  Tell us about your project. Our estimator will review your details and respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col justify-center items-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-neutral-900">
                    Thank You, {name || "Valued Client"}!
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed">
                    We have successfully received your estimate request. A KV Property Inc specialist will reach out within 24 hours to review your project.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#ffa326] to-[#cc7e14] text-white text-xs font-bold uppercase tracking-wider rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Call Now For Urgent Requests</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Property Type Selector (Residential vs Commercial) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Property Classification
                    </label>
                    <div className="grid grid-cols-2 gap-2 select-none">
                      <button
                        type="button"
                        onClick={() => setPropertyType("residential")}
                        className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                          propertyType === "residential"
                            ? "bg-[#ffa326] text-white border-[#ffa326] shadow-xs"
                            : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                        }`}
                      >
                        <Home className="w-3.5 h-3.5" />
                        <span>Residential</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPropertyType("commercial")}
                        className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                          propertyType === "commercial"
                            ? "bg-[#ffa326] text-white border-[#ffa326] shadow-xs"
                            : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                        }`}
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Commercial</span>
                      </button>
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Robert Smith"
                        className="w-full bg-[#fbfaf8] rounded-lg border border-neutral-300/80 py-2.5 px-3.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ffa326] focus:ring-2 focus:ring-[#ffa326]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Phone Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(732) 000-0000"
                        className="w-full bg-[#fbfaf8] rounded-lg border border-neutral-300/80 py-2.5 px-3.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ffa326] focus:ring-2 focus:ring-[#ffa326]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email and Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="robert@example.com"
                        className="w-full bg-[#fbfaf8] rounded-lg border border-neutral-300/80 py-2.5 px-3.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ffa326] focus:ring-2 focus:ring-[#ffa326]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Project Category
                      </label>
                      <div className="relative">
                        <select
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full bg-[#fbfaf8] rounded-lg border border-neutral-300/80 py-2.5 px-3.5 pr-8 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-[#ffa326] focus:ring-2 focus:ring-[#ffa326]/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select Project Type</option>
                          <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                          <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                          <option value="General Contracting">General Contracting</option>
                          <option value="Deck & Outdoor Living">Deck &amp; Outdoor Living</option>
                          <option value="Pools & Outdoor Spaces">Pools &amp; Outdoor Spaces</option>
                          <option value="Home Additions">Home Additions</option>
                          <option value="Interior & Exterior Painting">Interior &amp; Exterior Painting</option>
                          <option value="Flooring">Flooring</option>
                          <option value="Handyman Services">Handyman Services</option>
                          <option value="Property Maintenance">Property Maintenance</option>
                          <option value="Custom Builds">Custom Builds</option>
                          <option value="Commercial Improvements">Commercial Improvements</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      </div>
                    </div>
                  </div>

                  {/* Project Address & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Project Location / Address
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="e.g. Neptune, NJ 07753"
                        className="w-full bg-[#fbfaf8] rounded-lg border border-neutral-300/80 py-2.5 px-3.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ffa326] focus:ring-2 focus:ring-[#ffa326]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-[#fbfaf8] rounded-lg border border-neutral-300/80 py-2.5 px-3.5 pr-8 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-[#ffa326] focus:ring-2 focus:ring-[#ffa326]/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select Target Budget</option>
                          <option value="Under $10,000">Under $10,000</option>
                          <option value="$10,000 - $25,000">$10,000 – $25,000</option>
                          <option value="$25,000 - $50,000">$25,000 – $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 – $100,000</option>
                          <option value="$100,000+">$100,000+</option>
                          <option value="Flexible / Need Consultation">Flexible / Need Consultation</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Project Scope &amp; Details
                    </label>
                    <textarea
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe your project vision, target timeline, materials or special requests..."
                      className="w-full bg-[#fbfaf8] rounded-lg border border-neutral-300/80 py-2 px-3.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#ffa326] focus:ring-2 focus:ring-[#ffa326]/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffa326] via-[#f09418] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b36707] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl py-3 px-6 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <span>Processing Your Request...</span>
                      ) : (
                        <>
                          <span>Submit Free Estimate Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy & Guarantee micro-text */}
                  <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 font-medium select-none pt-1">
                    <Lock className="w-3 h-3 text-[#cc7e14]" />
                    <span>Your information is strictly confidential • No spam • Free consultation</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}