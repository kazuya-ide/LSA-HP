"use client";
import { motion } from "framer-motion";

export default function PolicySection() {
  const policies = [
    {
      title: "法令遵守と倫理重視",
      text: "探偵業法・個人情報保護法・弁護士法を遵守し、違法・不当な調査は一切行いません。",
    },
    {
      title: "秘密保持と情報管理",
      text: "依頼者の個人情報・調査資料は厳重に管理し、第三者への開示は行いません。",
    },
    {
      title: "確実な証拠の提供",
      text: "裁判や示談で使用できる法的有効性の高い報告書・映像・記録を納品します。",
    },
    {
      title: "依頼者支援の継続",
      text: "調査後も弁護士・カウンセラー・行政機関との連携を通じ、解決まで伴走します。",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-b border-neutral-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-emerald-800 mb-12 text-center"
      >
        業務方針
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {policies.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-emerald-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-emerald-800 font-semibold text-lg mb-2">
              {p.title}
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
