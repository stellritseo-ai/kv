import { useState } from "react";
import { Mail, MapPin, Phone, Clock, ChevronDown, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import { addLead, addWebEmail } from "@/lib/leads-store";
import welBg from "@/assets/wel-bg.png";

export function CTASection() {
  const { t } = useTranslation();
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [propertyType, setPropertyType] = useState("residential");
  const [address, setAddress] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        propertyType: propertyType as "residential" | "commercial",
        description: `Budget: ${budget || "Not specified"}. Details: ${details}`,
        estimatedValue: budgetNum,
        contactTime: "morning"
      });

      await addWebEmail({
        name,
        email: email || "no-email@kvproperty.com",
        phone,
        service: projectType || "General Remodeling",
        message: `Property Type: ${propertyType}. Address: ${address}. Budget: ${budget}. Details: ${details}`,
        source: "landing_page"
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit estimate request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-0 pt-[5px] pb-0 px-[15px]">
      <section id="contact" className="mx-auto max-w-[1400px] w-full rounded-t-[10px] rounded-b-none bg-[#2c241d] py-10 sm:py-14 px-4 sm:px-6 md:px-12 lg:px-16 border border-neutral-800 shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative overflow-hidden text-center">

        {/* ── 1. FINAL CTA BANNER ── */}
        <div className="relative z-10 max-w-4xl mx-auto mb-12 sm:mb-16 text-center">
          <span className="inline-flex items-center gap-2 bg-[#ffa326]/10 border border-[#ffa326]/30 text-[#ffa326] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ffa326] animate-pulse" />
            Start Your Project
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Build Something Great.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            From remodeling and repairs to complete property improvements, KV Property Inc is ready to help bring your project to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#estimate-form"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg hover:scale-105"
            >
              Get A Free Estimate
            </a>
            <a
              href="tel:7326776674"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-neutral-900 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 transition-all duration-300 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call (732) 677-6674</span>
            </a>
          </div>
        </div>

        {/* ── 2. CONTACT INFO + FORM CONTAINER ── */}
        <div
          id="estimate-form"
          className="w-full rounded-[10px] bg-cover bg-center border border-[#eae8e1]/70 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative z-10 p-6 sm:p-10 lg:p-12 text-left"
          style={{ backgroundImage: `url(${welBg})`, backgroundColor: "#fbfaf7" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block bg-[#3f4a1f] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-sm">
                  Contact
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight mb-3">
                  Let's Talk About Your Project.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-8">
                  Have a project in mind? Tell us what you need, and let's discuss how KV Property Inc can help.
                </p>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/80 border border-neutral-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#ffa326]/10 text-[#cc7e14] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Phone</span>
                      <a href="tel:7326776674" className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#cc7e14] transition-colors">
                        (732) 677-6674
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/80 border border-neutral-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#ffa326]/10 text-[#cc7e14] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Email</span>
                      <a href="mailto:kvpropertyinc@gmail.com" className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#cc7e14] transition-colors break-all">
                        kvpropertyinc@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/80 border border-neutral-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#ffa326]/10 text-[#cc7e14] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Location</span>
                      <span className="text-sm sm:text-base font-bold text-neutral-900">
                        Neptune, NJ
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/80 border border-neutral-200/80 shadow-xs">
                    <div className="w-10 h-10 rounded-full bg-[#ffa326]/10 text-[#cc7e14] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Hours &amp; Emergency</span>
                      <p className="text-xs sm:text-sm font-semibold text-neutral-800">
                        Monday–Saturday 8:00 AM – 6:00 PM
                      </p>
                      <p className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Emergency Service: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Request A Free Estimate Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Request A Free Estimate
              </h4>
              <p className="text-xs sm:text-sm text-neutral-500 mb-6">
                Tell us about your project, and let's discuss how KV Property Inc can help.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col justify-center items-center text-center py-12 space-y-4">
                  <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900">
                    Thank You for Contacting KV Property Inc!
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-md">
                    We have received your estimate request. Our team will review your project details and get back to you promptly.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 py-2.5 px-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#cc7e14] focus:ring-1 focus:ring-[#cc7e14]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(732) 000-0000"
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 py-2.5 px-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#cc7e14] focus:ring-1 focus:ring-[#cc7e14]"
                      />
                    </div>
                  </div>

                  {/* Email and Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 py-2.5 px-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#cc7e14] focus:ring-1 focus:ring-[#cc7e14]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Project Type
                      </label>
                      <div className="relative">
                        <select
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 py-2.5 px-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#cc7e14] focus:ring-1 focus:ring-[#cc7e14] appearance-none cursor-pointer"
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

                  {/* Property Type and Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Property Type
                      </label>
                      <div className="relative">
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 py-2.5 px-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#cc7e14] focus:ring-1 focus:ring-[#cc7e14] appearance-none cursor-pointer"
                        >
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Estimated Budget
                      </label>
                      <input
                        type="text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="e.g. $5,000 - $15,000"
                        className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 py-2.5 px-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#cc7e14] focus:ring-1 focus:ring-[#cc7e14]"
                      />
                    </div>
                  </div>

                  {/* Project Address */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Project Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 123 Main St, Neptune, NJ"
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 py-2.5 px-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#cc7e14] focus:ring-1 focus:ring-[#cc7e14]"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Tell us about your project, timeline, specific requirements, and what you want to accomplish..."
                      className="w-full bg-[#fbfaf7] rounded-lg border border-neutral-200 py-2.5 px-3.5 text-sm text-neutral-900 focus:outline-none focus:border-[#cc7e14] focus:ring-1 focus:ring-[#cc7e14] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ffa326] to-[#cc7e14] hover:from-[#ffb147] hover:to-[#b86d0b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg py-3.5 transition-all duration-300 shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-75 disabled:pointer-events-none text-center"
                  >
                    {isSubmitting ? "Submitting..." : "Request A Free Estimate"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}