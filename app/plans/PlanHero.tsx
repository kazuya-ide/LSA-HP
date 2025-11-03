"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PlanHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden text-center text-white bg-emerald-900">
      <Image
        src="/plans-hero.jpg"
        alt="料金プラン 背景"
        fill
        priority
        className="object-cover opacity-40 blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          調査料金プラン
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-emerald-50 leading-relaxed">
          状況や目的に応じて最適なプランをご提案します。  
          初回相談・見積もりはすべて無料、秘密厳守で対応いたします。
        </p>
      </motion.div>
    </section>
  );
}
