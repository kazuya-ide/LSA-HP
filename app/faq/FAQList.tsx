"use client";

import React, { useState } from "react";
import type { FAQ } from "./faqData";

export default function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div
          key={i}
          className="border border-emerald-100 rounded-xl shadow-sm bg-white overflow-hidden"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center px-5 py-4 text-left text-emerald-800 font-semibold text-lg hover:bg-emerald-50 transition"
          >
            <span>Q. {f.q}</span>
            <span>{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-neutral-700 leading-relaxed">
              A. {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
