"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-emerald-900 to-emerald-700 text-white pt-32 pb-20 px-6 text-center">
      {/* === ロゴ画像部分 === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 flex items-center justify-center gap-3"
      >
        <div className="relative w-12 h-12">
          <Image
            src="/LSArogo.jpg" // ← 公開フォルダ（/public）に置く
            alt="L-Secret Agent ロゴ"
            fill
            className="object-contain drop-shadow-[0_0_12px_#6ee7b7]"
            sizes="48px"
            priority
          />
        </div>
        <span className="text-3xl font-extrabold tracking-tight drop-shadow">
          L-Secret Agent
        </span>
      </motion.div>

      {/* === タイトル === */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6"
      >
        COMPANY PROFILE
      </motion.h1>

      {/* === 説明文 === */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl mx-auto text-emerald-50/90 text-base md:text-lg leading-relaxed"
      >
        法的有効性と信頼性を重視し、真実を明らかにすることを使命とする。<br />
        札幌を拠点に、確かな調査力と守秘義務を徹底した体制で、安心を支えます。
      </motion.p>
    </section>
  );
}
