"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LicenseSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-emerald-800 mb-8"
      >
        許可・登録
      </motion.h2>

      <button
        onClick={() => setShowModal(true)}
        className="w-full max-w-lg overflow-hidden rounded-lg border border-emerald-400/40 bg-white hover:bg-emerald-50 transition mx-auto shadow"
      >
        <div className="relative w-full aspect-[3/2] flex items-center justify-center">
          <Image
            src="/detective-license.png"
            alt="探偵業届出証明書"
            fill
            className="object-contain"
          />
        </div>
      </button>

      <p className="mt-4 text-sm text-neutral-500">クリックで拡大</p>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-white p-4 rounded-xl max-w-3xl w-[96vw] relative shadow-2xl">
            <button
              className="absolute top-2 right-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full w-8 h-8"
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
            >
              ×
            </button>
            <Image
              src="/detective-license.png"
              alt="届出証明書 拡大"
              width={900}
              height={600}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      )}

      <div className="mt-6 text-emerald-800 text-sm">
        北海道公安委員会 探偵業届出 第123456号<br />
        法令遵守・秘密保持を徹底し、安心と信頼の調査を行います。
      </div>
    </section>
  );
}
