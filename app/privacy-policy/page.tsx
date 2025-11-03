"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-14 px-3">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg px-6 md:px-10 py-12 border border-emerald-200">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-8 text-center tracking-tight">
          プライバシーポリシー
        </h1>
        <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-9">
          <section>
            <p>
              L-Secret Agent（以下「当社」といいます）は、探偵業法、個人情報保護法および関連法令を遵守し、
              個人情報の適正な取扱いを社会的責務と認識しています。
              当社は、依頼者・相談者・調査対象者など、関係するすべての方のプライバシーを保護するため、以下の方針に基づき個人情報の管理・運用を行います。
            </p>
          </section>

          {[
            {
              h: "1. 個人情報の取得について",
              t: "当社は、依頼内容の確認・調査・報告・連絡・契約など業務の遂行に必要な範囲で、適法かつ公正な手段により個人情報を取得します。違法・不当な手段による収集は一切行いません。"
            },
            {
              h: "2. 個人情報の利用目的",
              t: (
                <ul className="list-disc list-inside pl-4 space-y-1 text-emerald-700">
                  <li>探偵業務（調査・報告・助言など）の遂行および契約履行のため</li>
                  <li>お問い合わせ、見積依頼等への回答・連絡のため</li>
                  <li>従業員・調査員・協力会社の人事・安全管理のため</li>
                  <li>法令等に基づく報告・提出義務の履行のため</li>
                  <li>その他、ご本人の同意を得た利用目的のため</li>
                </ul>
              )
            },
            {
              h: "3. 個人情報の第三者提供",
              t: "当社は、ご本人の同意がある場合、または法令に基づく場合を除き、個人情報を第三者に提供しません。ただし、弁護士・警察・裁判所など公的機関からの適法な要請がある場合には、法令に従って対応します。"
            },
            {
              h: "4. 機微情報の取扱い",
              t: "思想・信条・宗教・犯罪歴・健康等の機微情報については、業務上の必要があり、かつご本人の同意を得た場合にのみ取得・利用します。取得した機微情報は厳重に管理し、不要となった場合は速やかに廃棄します。"
            },
            {
              h: "5. 調査記録および証拠資料の管理",
              t: "調査によって取得した写真・映像・録音・報告書などの証拠資料は、暗号化・アクセス制限・保管期限の設定など適切な安全管理措置を講じ、契約終了後は一定期間の保管を経て安全に廃棄します。"
            },
            {
              h: "6. 委託先の管理",
              t: "当社が業務の一部を外部に委託する場合は、個人情報を適正に取り扱う委託先を選定し、契約等により個人情報の安全管理を義務付け、必要かつ適切に監督します。"
            },
            {
              h: "7. 開示・訂正・削除等の請求",
              t: "ご本人または代理人から、個人情報の開示・訂正・利用停止・削除等の請求があった場合、法令および探偵業法の規定に従い、適切かつ迅速に対応します。"
            },
            {
              h: "8. Cookieの利用について",
              t: "当サイトでは、利用者の利便性向上やアクセス解析のためにCookieを利用しています。Cookieによって個人を特定する情報を収集することはありません。ブラウザ設定によりCookieの無効化も可能です。"
            },
            {
              h: "9. アクセス解析ツールの利用",
              t: (
                <>
                  当サイトでは、Google Analyticsなどのアクセス解析ツールを使用しています。  
                  これらのツールはトラフィックデータの収集のためにCookieを使用し、個人を特定できる情報は含みません。  
                  詳細は以下をご確認ください：<br />
                  <a
                    href="https://policies.google.com/privacy?hl=ja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-emerald-700"
                  >
                    Google プライバシーポリシー
                  </a>
                </>
              )
            },
            {
              h: "10. 外部サービスとの連携",
              t: "当サイトには、SNS共有ボタンや外部サービスの埋め込みコンテンツが含まれる場合があります。これらのサービスを利用する際は、各運営会社がCookie等により利用者情報を取得する場合があります。詳細は各SNSのプライバシーポリシーをご確認ください。"
            },
            {
              h: "11. セキュリティ対策",
              t: "当社は、個人情報の漏えい・紛失・改ざん・不正アクセス等を防止するため、ファイアウォール・暗号化・アクセス権限管理などの技術的および組織的な安全対策を実施しています。"
            },
            {
              h: "12. 法令・方針の見直し",
              t: "当社は、社会情勢や法令改正、技術の進歩等に応じて、本プライバシーポリシーを継続的に見直し、改善に努めます。改訂後の内容は、当サイト上に掲載した時点で効力を有します。"
            }
          ].map(({ h, t }) => (
            <section key={h}>
              <h2 className="text-xl md:text-2xl font-bold text-emerald-700 mb-2 border-l-4 border-emerald-500 pl-3">
                {h}
              </h2>
              <div className="text-gray-700">{t}</div>
            </section>
          ))}

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-emerald-700 mb-2 border-l-4 border-emerald-500 pl-3">
              13. お問い合わせ窓口
            </h2>
            <p>
              個人情報および調査資料の取扱いに関するご相談・開示請求等は、以下の窓口までご連絡ください。
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
