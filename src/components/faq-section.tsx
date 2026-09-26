import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/context/translation-context";
import { motion, AnimatePresence } from "framer-motion";
import svcKitchenRemodel from "@/assets/svc-kitchen-remodel.jpg";

const faqVariants: any = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: "easeOut" },
  }),
};

const answerVariants: any = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const ALL_FAQS = [
  {
    q: "Do you provide free estimates?",
    a: "Contact KV Property Inc to discuss your project and request an estimate.",
    keyQ: "faq.q1",
    keyA: "faq.a1",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Neptune, NJ and surrounding communities within approximately a 25-mile radius.",
    keyQ: "faq.q2",
    keyA: "faq.a2",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. KV Property Inc is licensed and insured.",
    keyQ: "faq.q3",
    keyA: "faq.a3",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. We provide both residential and commercial construction, remodeling, repair, and property improvement services.",
    keyQ: "faq.q4",
    keyA: "faq.a4",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. Financing is available. Contact us to learn more about available options.",
    keyQ: "faq.q5",
    keyA: "faq.a5",
  },
  {
    q: "Do you provide emergency service?",
    a: "Yes. We offer 24/7 emergency service for urgent property needs.",
    keyQ: "faq.q6",
    keyA: "faq.a6",
  },
  {
    q: "How much experience do you have?",
    a: "KV Property Inc has more than 20 years of experience in construction, remodeling, handyman services, and property improvements.",
    keyQ: "faq.q7",
    keyA: "faq.a7",
  },
  {
    q: "What types of projects do you handle?",
    a: "We handle kitchen and bathroom remodeling, general contracting, home additions, decks and outdoor living, painting, flooring, handyman services, property maintenance, custom builds, and commercial improvements.",
    keyQ: "faq.q8",
    keyA: "faq.a8",
  },
  {
    q: "How do I get started?",
    a: "Call (732) 677-6674 or complete our contact form to discuss your project and request an estimate.",
    keyQ: "faq.q9",
    keyA: "faq.a9",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f4f3ef] mt-[15px] mb-[15px] pt-[5px] pb-[5px] px-[15px]">
      <section
        className="mx-auto max-w-[1400px] w-full rounded-[10px] bg-[#fbfaf7] px-6 py-16 md:px-10 lg:px-12 border border-[#eae8e1] shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden"
        id="faq"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full text-left flex flex-col items-start lg:sticky lg:top-28"
          >
            {/* Badge */}
            <span className="inline-flex items-center bg-gradient-to-r from-[#ffa326] to-[#111111] text-white rounded-full px-5 py-[7px] text-[11px] font-bold uppercase tracking-[0.08em] mb-6 select-none leading-none">
              FAQ
            </span>

            {/* Heading */}
            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-neutral-900 leading-tight tracking-tight mt-[-6px] sm:mt-[-12px] mb-[10px]">
              Frequently Asked Questions
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] text-neutral-600 leading-[1.7] max-w-[460px] mb-7 font-normal">
              Have questions about your remodeling, construction, or property improvement project? Find quick answers below or contact us directly.
            </p>

            {/* Image */}
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-neutral-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.06)] group">
              <img
                src={svcKitchenRemodel}
                alt="KV Property Inc craftsmanship"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Accordion Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-[#f5f4f1] rounded-2xl p-4 sm:p-6 lg:p-7 border border-[#e8e6e0] shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          >
            <div className="flex flex-col gap-2.5">
              {ALL_FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                const question = t(faq.keyQ as any) || faq.q;
                const answer = t(faq.keyA as any) || faq.a;

                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={faqVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`w-full rounded-xl overflow-hidden transition-shadow duration-300 ${isOpen
                        ? "border border-[#e2dfd8] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                        : "border border-[#ebebeb] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:border-neutral-300/70 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`w-full text-left flex items-center justify-between px-5 py-[16px] transition-all duration-300 cursor-pointer select-none ${isOpen
                          ? "bg-[#ffa326] text-[#111111] font-extrabold"
                          : "bg-white text-neutral-900 font-semibold hover:text-[#cc7e14] active:bg-neutral-50"
                        }`}
                      aria-expanded={isOpen}
                    >
                      <span className={`text-[13.5px] sm:text-[14.5px] leading-snug pr-4 ${isOpen ? "text-[#111111]" : "text-neutral-800"}`}>
                        {question}
                      </span>
                      <ChevronDown
                        className={`w-[17px] h-[17px] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#111111]" : "text-neutral-400"
                          }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          variants={answerVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          className="overflow-hidden bg-white"
                        >
                          <div className="h-px bg-[#f0ede6] mx-5" />
                          <div className="px-5 py-4">
                            <p className="text-[13px] sm:text-[13.5px] text-neutral-700 leading-[1.75] font-normal">
                              {answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}