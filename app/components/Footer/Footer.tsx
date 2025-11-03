import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 text-gray-800 py-14 px-4 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        {/* --- 1カラム目：ブランド情報 --- */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            {/* ロゴ */}
            <div className="w-44 h-14 relative mb-4">
              <Image
                src="/LSArogo.jpg"
                alt="L-Secret Agent ロゴ"
                fill
                className="object-contain"
                sizes="176px"
              />
            </div>
            <div className="text-2xl font-extrabold tracking-wide mb-2">
              L-Secret Agent 探偵調査部門
            </div>
            <p className="text-xs text-gray-600 mb-4">
              北海道札幌市を拠点に、浮気・不倫調査や企業調査など、<br />
              確かな証拠収集力と誠実な対応であなたの不安を解決します。
            </p>

            {/* MAPボタン */}
            <div className="flex items-center mb-2">
              <a
                href="https://maps.google.com/?q=北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-200 hover:bg-neutral-300 text-gray-800 font-bold px-3 py-1 rounded flex items-center gap-1 text-xs shadow transition"
                style={{ whiteSpace: "nowrap" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 12.414A5 5 0 1112.414 13.414l4.243 4.243a1 1 0 101.414-1.414zM15 11a4 4 0 11-8 0 018 0z"
                  />
                </svg>
                MAP
              </a>
            </div>

            {/* 住所 / TEL / Email */}
            <div className="text-xs text-gray-600 mb-1">
              <a
                href="https://maps.app.goo.gl/LJ8NvAkpVTGZMLLU6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition underline underline-offset-2"
              >
                〒063-0061 北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F
              </a>
            </div>
            <div className="text-xs text-gray-600 mb-1">
              TEL:{" "}
              <a
                href="tel:0112156432"
                className="underline hover:text-blue-600 transition"
              >
                011-215-6432
              </a>{" "}
              （24時間対応）
            </div>
            <div className="text-xs text-gray-600 mb-2">
              E-mail:{" "}
              <a
                href="mailto:info@llc-lit.com"
                className="underline hover:text-blue-600 transition"
              >
                info@llc-lit.com
              </a>
            </div>
            <div className="text-xs text-gray-600">
              探偵業届出番号：北海道公安委員会 第123456号
            </div>
          </div>

          {/* 下部リンク */}
          <div className="mt-5 flex flex-col md:flex-row gap-3 text-xs text-gray-600">
            <Link href="/privacy-policy" className="hover:text-blue-600">
              プライバシーポリシー
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/disclaimer" className="hover:text-blue-600">
              免責事項
            </Link>
            <span className="hidden md:inline">|</span>
            <a
              href="https://www.lit4.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              LLC-LIT
            </a>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            &copy; {currentYear} L-Secret Agent / LLC-LIT
          </div>
        </div>

        {/* --- 2カラム目：サイトナビ --- */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="uppercase tracking-widest text-sm font-semibold text-gray-700 mb-4">
            SITEMAP
          </div>
          <nav className="flex flex-col gap-2 text-base font-medium">
            <Link href="/" className="hover:text-blue-600 transition">
              ホーム
            </Link>
            <Link href="/services" className="hover:text-blue-600 transition">
              サービス内容
            </Link>
            <Link href="/plans" className="hover:text-blue-600 transition">
              料金プラン
            </Link>
            <Link href="/flow" className="hover:text-blue-600 transition">
              調査の流れ
            </Link>
            <Link href="/faq" className="hover:text-blue-600 transition">
              よくある質問
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              会社概要
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              お問い合わせ
            </Link>
          </nav>
        </div>

        {/* --- 3カラム目：行動導線 --- */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <div className="uppercase tracking-widest text-sm font-semibold text-gray-700 mb-4">
            CONTACT
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Link href="/contact" className="block">
              <button className="w-full bg-[#111] hover:bg-[#222] text-white py-3 rounded-full font-bold text-lg shadow transition">
                📞 無料相談はこちら
              </button>
            </Link>
            <Link href="/contact" className="block">
              <button className="w-full bg-neutral-200 hover:bg-neutral-300 text-gray-800 py-3 rounded-full font-bold text-lg shadow transition">
                メールでお問い合わせ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
