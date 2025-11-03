"use client";

import React from "react";

type Props = {
  activeKey: string;
  onChange: (key: string) => void;
  categories: { key: string; label: string }[];
};

export default function FAQTabs({ activeKey, onChange, categories }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => onChange(c.key)}
          className={`px-5 py-2 rounded-full font-bold transition ${
            activeKey === c.key
              ? "bg-emerald-700 text-white shadow-md"
              : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
