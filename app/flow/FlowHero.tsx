"use client";

import { motion } from "framer-motion";

export default function FlowHero() {
  return (
    <section className="bg-gradient-to-b from-emerald-900 to-emerald-700 text-white pt-32 pb-20 px-6 text-center">
      {/* ↑ pt-20 → pt-32 に変更：ヘッダー分の余白を確保 */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold tracking-wide mb-6"
      >
        調査の流れ
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-emerald-50/90 text-sm md:text-base leading-relaxed"
      >
        L-Secret Agentでは、法的に有効な証拠収集と依頼者様の安全を第一に考え、
        ご相談から報告書納品までを一貫して丁寧にサポートしています。
        すべての段階で専門スタッフが対応し、秘密厳守で進行いたします。
      </motion.p>
    </section>
  );
}
