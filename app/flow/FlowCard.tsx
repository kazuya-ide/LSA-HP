"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

type FlowCardProps = {
  step: string;
  title: string;
  desc: string;
  points: string[];
  index: number;
};

export default function FlowCard({ step, title, desc, points, index }: FlowCardProps) {
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } items-center gap-10 md:gap-16`}
    >
      {/* ステップ番号とタイトル */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-emerald-700 font-extrabold text-sm md:text-base tracking-widest mb-2">
          {step}
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
          {title}
        </h2>
        <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
          {desc}
        </p>

        <ul className="space-y-2 text-neutral-700 text-sm md:text-base">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-700 mt-1 flex-shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 視覚ブロック */}
      <div className="flex-1 relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-emerald-100 bg-gradient-to-br from-white to-emerald-50"
        >
          <div className="absolute inset-0 flex items-center justify-center text-emerald-200 font-extrabold text-7xl md:text-8xl">
            {step.replace("STEP ", "")}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
