import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/MyHeader";
import FooterWrapper from "@/app/components/FooterWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://l-security-lit.com"),
  title: {
    default: "L-Secret Agent 探偵調査部門｜札幌の調査・浮気・企業調査",
    template: "%s｜L-Secret Agent",
  },
  description:
    "札幌を拠点とするL-Secret Agent探偵調査部門。浮気・不倫調査、素行調査、企業調査、ストーカー対策、身辺警護などに対応します。",
  openGraph: {
    images: ["/LSArogo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/LSArogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-[#ededed] text-[#232323] antialiased min-h-screen font-sans relative">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <FooterWrapper />

        {/* ✅ 固定表示「お問い合わせ」ボタン */}
        <Link
          href="/contact"
          className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          📞 お問い合わせ
        </Link>
      </body>
    </html>
  );
}
