"use client";
import React from "react";

export default function Disclaimer() {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-14 px-3">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg px-6 md:px-10 py-12 border border-emerald-200">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-8 text-center tracking-tight">
          免責事項
        </h1>
        <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-9">
          <section>
            <p>
              L-Secret Agent（以下「当社」といいます）は、探偵業法及び関連法令を遵守し、
              当社が運営する本ウェブサイト（以下「当サイト」といいます）における情報の正確性・適法性の確保に努めております。
              ただし、当サイトの利用にあたっては、以下の免責事項をご確認ください。
            </p>
          </section>

          {[
            {
              h: "1. 掲載情報の正確性について",
              t: "当サイトの内容は可能な限り正確な情報提供に努めていますが、その正確性・完全性・最新性を保証するものではありません。当サイトの情報利用により生じたいかなる損害についても、当社は責任を負いません。"
            },
            {
              h: "2. 調査結果に関する免責",
              t: "当社が提供する調査報告書や証拠資料等は、調査時点で得られた事実に基づいて作成されています。調査対象者の行動変化、環境、第三者の介入等により結果が変動する場合があり、これに起因する損害等について当社は一切の責任を負いません。"
            },
            {
              h: "3. 調査の中止・制限について",
              t: "当社は以下のいずれかに該当する場合、調査を中止または制限する場合があります。この場合に生じた損害について当社は責任を負いません。<br/>・違法または不当な依頼と判断した場合<br/>・対象者や第三者の生命・身体・財産に危険が及ぶ場合<br/>・天災・交通障害・不可抗力により調査継続が困難な場合"
            },
            {
              h: "4. 法的助言の非提供",
              t: "当サイトおよび当社が提供する情報は、弁護士法に基づく法律上の助言を行うものではありません。法的判断・訴訟・交渉等を行う際は、必ず弁護士等の専門家にご相談ください。"
            },
            {
              h: "5. 損害賠償責任の範囲",
              t: "当社は、契約上または当サイト利用に関連して発生した損害について、当社に故意または重大な過失がある場合を除き、一切の責任を負いません。損害賠償が発生する場合、その上限は当該契約金額を超えないものとします。"
            },
            {
              h: "6. 外部リンク・第三者サイトについて",
              t: "当サイトには外部サイトへのリンクが含まれる場合がありますが、リンク先の内容や利用による損害について当社は責任を負いません。"
            },
            {
              h: "7. サイト運営の中断・変更について",
              t: "当社は、システム保守・障害・天災等の理由により、当サイトの運営を一時的に停止・変更・終了することがあります。この場合に発生する損害について当社は責任を負いません。"
            },
            {
              h: "8. 著作権・知的財産権について",
              t: "当サイトに掲載される文章・画像・ロゴ・構成・デザイン等の著作権および知的財産権は、当社または正当な権利者に帰属します。無断転載・複製・配布・商用利用を禁じます。"
            },
            {
              h: "9. 免責事項の改訂について",
              t: "当社は、法令改正や社会情勢の変化に応じて、予告なく本免責事項を改訂することがあります。改訂後の内容は、当サイトに掲載した時点から効力を有するものとします。"
            }
          ].map(({ h, t }) => (
            <section key={h}>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-700 mb-2 border-l-4 border-emerald-500 pl-3">{h}</h2>
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: t }}
              />
            </section>
          ))}

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-emerald-700 mb-2 border-l-4 border-emerald-500 pl-3">
              10. お問い合わせ窓口
            </h2>
            <p>
              免責事項および当サイトの運営に関するご質問・ご相談は、以下の窓口までご連絡ください。
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-6 py-5 mt-3 text-sm text-gray-700">
              L-Secret Agent（合同会社LIT 探偵調査部門）<br />
              〒063-0061 北海道札幌市西区西町北14丁目1-15 ホクシンビル3F<br />
              TEL：
              <a
                href="tel:0112156432"
                className="underline text-emerald-700 ml-1"
              >
                011-215-6432
              </a>
              <br />
              E-mail：
              <a
                href="mailto:info@llc-lit.com"
                className="underline text-emerald-700 ml-1"
              >
                info@llc-lit.com
              </a>
            </div>
          </section>
        </div>

        <div className="mt-10 text-xs text-gray-500 text-right">
          制定日：2024年6月18日<br />
          改訂日：2025年11月3日<br />
          L-Secret Agent　代表社員　堀内 勝
        </div>
      </div>
    </div>
  );
}
