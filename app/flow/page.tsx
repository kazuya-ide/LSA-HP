import FlowHero from "./FlowHero";
import FlowSteps from "./FlowSteps";
import CTASection from "../plans/CTASection";

export const metadata = {
  title: "調査の流れ｜L-Secret Agent 探偵調査部門",
  description:
    "L-Secret Agent探偵調査部門の調査の流れ。ご相談から報告書納品までの全過程を、法的有効性・秘密保持・安全性に配慮して解説します。",
  alternates: {
    canonical: "https://l-security-lit.com/flow",
  },
};

export default function FlowPage() {
  return (
    <main className="bg-neutral-50 text-neutral-800">
      <FlowHero />
      <FlowSteps />
      <CTASection />
    </main>
  );
}
