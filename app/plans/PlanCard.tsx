"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export type PlanCardProps = {
  title: string;
  desc: string;
  features?: string[];
  price: string;
};

export default function PlanCard({ title, desc, features, price }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white rounded-3xl border border-emerald-200 shadow-md hover:shadow-2xl hover:border-emerald-400 transition-all duration-500 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white px-6 py-5">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-wide">{title}</h3>
      </div>

      <div className="p-6 flex flex-col justify-between h-full">
        <p className="text-neutral-700 text-sm md:text-base leading-relaxed mb-5">{desc}</p>

        {features && (
          <ul className="space-y-2 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <CheckCircle className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="text-center mt-auto">
          <p className="text-sm text-neutral-500 mb-1">料金目安</p>
          <div className="text-3xl md:text-4xl font-extrabold text-emerald-900">{price}</div>
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            className="block w-full text-center bg-emerald-900 text-white py-3 rounded-full font-bold text-sm md:text-base hover:bg-emerald-800 transition shadow-md hover:shadow-lg"
          >
            無料見積もり・相談する
          </a>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-tr from-emerald-500 via-transparent to-emerald-900 transition duration-700" />
    </motion.div>
  );
}
