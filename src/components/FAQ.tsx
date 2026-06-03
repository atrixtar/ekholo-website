"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQAccordion({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-charcoal/10">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full py-6 flex items-start justify-between gap-4 text-left group"
          >
            <span className="text-base font-semibold text-charcoal group-hover:text-gold transition-colors">
              {faq.q}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-gold text-2xl leading-none shrink-0 mt-0.5"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-sm text-slate leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
