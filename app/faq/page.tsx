"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { faqCategories } from "./faqData";
import FAQList from "./FAQList";
import FAQTabs from "./FAQTabs";

function FAQInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeKey = searchParams.get("tab") || faqCategories[0].key;
  const activeFaqs = faqCategories.find((c) => c.key === activeKey)?.faqs || [];

  const handleTabChange = (key: string) => {
    router.push(`/faq?tab=${key}`, { scroll: false });
  };

  return (
    <>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-4">
          よくある質問（探偵サービス）
        </h1>
        <p className="text-neutral-600 mb-10 text-base md:text-lg">
          ご相談から調査・報告まで、安心してご依頼いただくために。<br />
          サービスごとのよくある質問をカテゴリ別にまとめました。
        </p>
      </div>

      <FAQTabs
        activeKey={activeKey}
        onChange={handleTabChange}
        categories={faqCategories.map(({ key, label }) => ({ key, label }))}
      />

      <div className="max-w-3xl mx-auto">
        <FAQList faqs={activeFaqs} />
      </div>

      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-emerald-700 text-white font-bold rounded-full hover:bg-emerald-800 transition"
        >
          📞 無料相談・お見積りはこちら
        </a>
      </div>
    </>
  );
}

export default function FAQPage() {
  return (
    <main className="bg-gradient-to-b from-emerald-50 to-white min-h-screen pt-28 pb-20 px-6">
      {/* ✅ Suspense で useSearchParams() を含む部分を包む */}
      <Suspense fallback={<div className="text-center py-20 text-neutral-500">読み込み中...</div>}>
        <FAQInner />
      </Suspense>
    </main>
  );
}
