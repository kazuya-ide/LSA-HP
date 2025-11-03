import PlanHero from "./PlanHero";
import CategoryBlock from "./CategoryBlock";
import CTASection from "./CTASection";

export const metadata = {
  title: "料金プラン｜L-Secret Agent 探偵調査部門",
  description:
    "札幌を拠点とするL-Secret Agent探偵調査部門の料金プラン一覧。浮気調査、素行調査、企業調査、ストーカー対策、身辺警護などの費用を明確に掲載。法的有効性を重視した安心の料金体系。",
  alternates: {
    canonical: "https://l-security-lit.com/plans",
  },
  openGraph: {
    title: "料金プラン｜L-Secret Agent 探偵調査部門",
    description:
      "浮気・不倫調査、素行調査、企業調査、ストーカー対策、身辺警護の料金プランを明確に掲載。札幌を中心に全国対応。",
    url: "https://l-security-lit.com/plans",
    images: [
      {
        url: "/og-image-plans.jpg",
        width: 1200,
        height: 630,
        alt: "L-Secret Agent 探偵調査部門 料金プラン",
      },
    ],
  },
};

export default function PlansPage() {
  return (
    <main className="bg-neutral-50 text-neutral-800">
      {/* --- ヒーロー導入セクション --- */}
      <PlanHero />

      {/* --- カテゴリ別プランカード群 --- */}
      <CategoryBlock />

      {/* --- 無料相談誘導セクション --- */}
      <CTASection />
    </main>
  );
}
