import Image from "next/image";
import Link from "next/link";

export default function CompanyInformation() {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#ededed]">
      {/* === テキストエリア === */}
      <div className="flex-1 flex flex-col justify-center px-8 py-14 md:px-16 bg-[#ededed]">
        <span className="text-xs font-bold uppercase text-[#bbb] tracking-widest mb-2">
          COMPANY INFORMATION
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#232323] mb-4">
          グループ会社紹介
        </h2>

        <p className="text-lg text-[#555] leading-relaxed mb-6">
          合同会社LITグループは、地域に根ざし、社会の安心と信頼を支える
          多彩な事業を展開しています。建設・飲食・IT・セキュリティ・探偵業など、
          それぞれの分野でプロフェッショナルが活躍しています。
        </p>

        {/* === グループ会社リスト === */}
        <ul className="mb-10 space-y-4">
          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#bbb] mr-3"></span>
              <span className="font-semibold text-[#232323] text-lg">
                北海工務店（建設・不動産）
              </span>
            </div>
            <Link
              href="https://www.sapporo-builderr.com/"
              target="_blank"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              https://www.sapporo-builderr.com/
            </Link>
          </li>

          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#bbb] mr-3"></span>
              <span className="font-semibold text-[#232323] text-lg">
                味扉 AJITO（飲食サービス）
              </span>
            </div>
            <Link
              href="https://www.hotpepper.jp/strJ003324016/"
              target="_blank"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              ホットペッパー店舗ページ
            </Link>
          </li>

          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#bbb] mr-3"></span>
              <span className="font-semibold text-[#232323] text-lg">
                L.SECURITY（セキュリティ事業）
              </span>
            </div>
            <Link
              href="https://l-security-lit.com/"
              target="_blank"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              https://l-security-lit.com/
            </Link>
          </li>

          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#bbb] mr-3"></span>
              <span className="font-semibold text-[#232323] text-lg">
                LSA（探偵・調査業）
              </span>
            </div>
            <Link
              href="https://li-ttamtei.vercel.app/lsa"
              target="_blank"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              https://li-ttamtei.vercel.app/lsa
            </Link>
          </li>

          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#bbb] mr-3"></span>
              <span className="font-semibold text-[#232323] text-lg">
                LIT STUDIO（IT・Webサービス）comingsoon,,,
              </span>
            </div>
            <Link
              href="https://www.lit4.net/"
              target="_blank"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              https://www.lit4.net/
            </Link>
          </li>
        </ul>

        {/* === CTAボタン === */}
        <Link
          href="/group-companies"
          className="inline-block px-8 py-3 rounded-full bg-[#232323] text-white text-base font-bold shadow-md hover:bg-[#444] transition"
        >
          グループ一覧を見る
        </Link>
      </div>

      {/* === イメージエリア === */}
      <div className="flex-1 relative min-h-[360px] hidden md:block bg-[#ededed]">
        <Image
          src="/business-collaboration.jpg"
          alt="LITグループ連携イメージ"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "1.5rem",
            filter: "grayscale(1)",
            backgroundColor: "#ededed",
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
