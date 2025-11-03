import AboutHero from "./AboutHero";
import PhilosophySection from "./PhilosophySection";
import PolicySection from "./PolicySection";
import CompanyInfo from "./CompanyInfo";
import LicenseSection from "./LicenseSection";


export const metadata = {
  title: "会社概要｜L-Secret Agent 探偵調査部門",
  description:
    "札幌を拠点とするL-Secret Agent探偵調査部門の会社概要。法令遵守・守秘義務・信頼性を重視し、調査から報告まで一貫したサポートを提供しています。",
  alternates: {
    canonical: "https://l-security-lit.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-800">
      <AboutHero />
      <PhilosophySection />
      <PolicySection />
      <CompanyInfo />
      <LicenseSection />
    </main>
  );
}