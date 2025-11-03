"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-24 px-6">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        {/* 見出し */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide leading-tight">
          無料相談で、最適な調査プランをご提案します
        </h2>

        {/* 説明文 */}
        <p className="text-emerald-50/90 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          L-Secret Agentでは、調査のご相談・お見積もりを完全無料で受け付けています。  
          状況に応じて最適な調査方法・費用プランをご案内し、法的有効性のある証拠収集を支援します。
          ご相談は匿名・非対面でも可能です。
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-6">
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-900 font-bold text-lg px-10 py-4 rounded-full hover:bg-emerald-100 transition shadow-lg"
          >
            📞 無料相談・お問い合わせはこちら
          </Link>
          <Link
            href="/about"
            className="inline-block border border-white/80 text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-emerald-900 transition"
          >
            探偵部門について詳しく見る
          </Link>
        </div>

        {/* 補足テキスト */}
        <p className="text-xs text-emerald-100/70 pt-6">
          ※ 秘密厳守・24時間受付。個人情報はご相談対応以外には使用いたしません。
        </p>
      </motion.div>
    </section>
  );
}
