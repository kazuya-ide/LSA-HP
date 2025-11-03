"use client";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-b border-neutral-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-emerald-800 mb-8"
      >
        企業理念
      </motion.h2>
      <p className="text-lg leading-relaxed text-neutral-700">
        L-Secret Agentは、
        <span className="font-semibold text-emerald-700">
          「真実を明らかにすることが、人の安心をつくる」
        </span>
        という理念を掲げ、社会の信頼を守るための調査を行っています。<br />
        私たちの目的は単なる情報収集ではなく、依頼者が安心して次の一歩を踏み出すための「根拠」を提供すること。<br />
        そのために法令遵守・倫理意識・守秘義務を徹底し、信頼できる結果を届け続けます。
      </p>
    </section>
  );
}
