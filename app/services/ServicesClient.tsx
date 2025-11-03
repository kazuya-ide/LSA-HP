"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ServicesClient() {
  return (
    <main className="bg-neutral-50 text-neutral-800 overflow-hidden">
      {/* === HEROセクション === */}
      <section className="relative flex items-center justify-center h-[70vh] bg-emerald-900 text-white text-center overflow-hidden">
        <Image
          src="/LSArogo.jpg"
          alt="探偵サービスの背景"
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
            L-Secret Agent 探偵サービス
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-emerald-50 leading-relaxed">
            法的根拠と現場力で、真実を明らかに。<br />
            北海道札幌を拠点に、個人・法人を問わず幅広く対応します。
          </p>
        </motion.div>
      </section>

      {/* === サービス一覧 === */}
      <section className="max-w-6xl mx-auto py-24 px-4 flex flex-col gap-32">
        {services.map((srv) => (
          <motion.article
            key={srv.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl shadow-2xl overflow-hidden border border-emerald-100 bg-white"
          >
            <div className="grid md:grid-cols-2">
              {/* 画像部分 */}
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[400px]"
              >
                <Image
                  src={srv.img}
                  alt={srv.title}
                  fill
                  className="object-cover brightness-90"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-sm bg-emerald-800/60 px-3 py-1 rounded">
                    {srv.category}
                  </span>
                </div>
              </motion.div>

              {/* テキスト部分 */}
              <div className="p-10 flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-extrabold text-emerald-800">
                  {srv.title}
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {srv.desc}
                </p>
                <ul className="space-y-1 text-sm text-neutral-600 border-l-4 border-emerald-600 pl-4">
                  {srv.points.map((p) => (
                    <li key={p}>・{p}</li>
                  ))}
                </ul>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center">
                  <p className="text-sm font-semibold text-emerald-800 mb-1">
                    調査料金目安
                  </p>
                  <div className="text-3xl font-extrabold text-emerald-900">
                    {srv.price}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* === CTAセクション === */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-emerald-900 text-white py-24 text-center"
      >
        <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-yellow-400">
            不安を抱えるあなたの“次の一歩”を支えます。
          </h2>
          <p className="text-emerald-100 mb-10 text-base md:text-lg">
            初回相談・お見積もりは完全無料。秘密厳守でお受けいたします。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-emerald-900 font-bold px-10 py-4 rounded-full hover:bg-yellow-300 text-lg shadow-lg transition"
          >
            📞 無料相談・お問い合わせはこちら
          </Link>
        </div>
      </motion.section>
    </main>
  );
}

/* ==== サービスデータ ==== */
const services = [
  {
    id: "uwaki",
    title: "浮気・不倫調査",
    category: "個人向け調査",
    img: "/service-uwaki.jpg",
    desc: `パートナーの行動を法的形式で記録し、裁判で利用できる証拠を収集します。
弁護士との連携により、慰謝料請求・離婚調停もスムーズに対応可能。
映像・写真・行動ログを時系列でまとめた報告書を作成します。`,
    points: [
      "弁護士が法廷提出できる形式で報告書を作成",
      "GPS追跡・張り込みなどを法的範囲で実施",
      "1日調査から長期監視まで柔軟に対応",
    ],
    price: "¥50,000〜（1日調査）",
  },
  {
    id: "sokou",
    title: "素行・行動調査",
    category: "行動記録",
    img: "/service-sokou.jpg",
    desc: `社員・婚約者・家族など、対象者の行動を客観的に把握します。
勤務実態・立ち寄り先・人間関係を時系列で可視化し、依頼者の判断をサポートします。`,
    points: [
      "勤務実態や私生活の行動確認に対応",
      "交際相手・婚約者の信頼性確認に最適",
      "個人・法人どちらの依頼にも対応",
    ],
    price: "¥80,000〜（1日）",
  },
  {
    id: "company",
    title: "企業調査・採用調査",
    category: "法人向け調査",
    img: "/service-company.jpg",
    desc: `取引先や採用候補者の信用リスクを可視化。
登記・反社チェック・SNS・訴訟歴・報道履歴など多角的な分析により、安心できる取引環境を構築します。`,
    points: [
      "採用前のバックグラウンドチェック対応",
      "法人間の信用調査・反社照会を実施",
      "NDA締結による機密保持体制あり",
    ],
    price: "¥120,000〜（標準調査）",
  },
  {
    id: "stalker",
    title: "ストーカー・嫌がらせ対策",
    category: "安全支援",
    img: "/service-stalker.jpg",
    desc: `つきまとい・無言電話・SNS誹謗中傷・自宅周辺での不審行動など、深刻な被害を法的に証拠化。
警察・弁護士・防犯専門家と連携し、被害抑止から訴訟支援まで一貫対応します。`,
    points: [
      "法的証拠として使用できる形式で記録支援",
      "防犯カメラ・GPS等の導入アドバイス",
      "夜間・女性対応スタッフ在籍",
    ],
    price: "¥100,000〜（状況により変動）",
  },
  {
    id: "guard",
    title: "身辺警護・安全サポート",
    category: "警備支援",
    img: "/service-guard.jpg",
    desc: `通勤・通学・イベント・経営者警護など、日常・非日常を問わず安全確保を行います。
警察OBや訓練を受けた専門警護員が、あなたの安心を守ります。`,
    points: [
      "警察OB・国家資格者による指揮体制",
      "女性警護員の派遣可能",
      "法人・個人依頼どちらにも対応",
    ],
    price: "¥150,000〜（半日）",
  },
];
