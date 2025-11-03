// app/services/page.tsx
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "サービス内容｜L-Secret Agent 探偵調査部門",
  description:
    "札幌を拠点とするL-Secret Agent探偵調査部門。浮気調査・素行調査・企業調査・ストーカー対策・身辺警護を法的有効性と安全性を重視して提供します。",
  alternates: {
    canonical: "https://l-security-lit.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}