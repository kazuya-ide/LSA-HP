"use client";
import { motion } from "framer-motion";

export default function CompanyInfo() {
  const info = [
    ["会社名", "合同会社 LIT"],
    ["屋号", "L-Secret Agent（探偵調査部門）"],
    ["代表", "井手 和弥"],
    ["所在地", "〒063-0061 北海道札幌市西区西町北14丁目1-15 ホクシンビル3F"],
    ["業務内容", "浮気・不倫調査 / 素行調査 / 企業調査 / ストーカー対策 / 身辺警護"],
    ["営業時間", "24時間365日（予約制）"],
    ["対応エリア", "札幌市・北海道全域（全国対応可）"],
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 border-b border-neutral-200">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-emerald-800 mb-10 text-center"
      >
        会社概要
      </motion.h2>
      <table className="w-full text-left text-neutral-700 border-separate [border-spacing:0.6rem]">
        <tbody>
          {info.map(([label, value]) => (
            <tr key={label}>
              <th className="font-semibold w-36 text-emerald-700 align-top">
                {label}
              </th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
