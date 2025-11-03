// app/components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full h-auto md:h-[80vh] bg-[#ededed] flex items-center py-16 md:py-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* 左側：画像 */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image
            src="/Herosection.jpg" // publicフォルダに画像を配置
            alt="LITグループ 企業理念 イメージ"
            width={520}
            height={420}
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </div>

        {/* 右側：テキスト */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#232323] tracking-tight mb-6 leading-snug">
             革新で未来をつくる<br />LITグループ<br className="hidden md:block" />
        
          </h1>

          <p className="text-lg md:text-xl text-[#555] leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            合同会社LITは、「人」「地域」「テクノロジー」の力を結集し、  
            建設・飲食・IT・探偵業など多様な事業を通じて、  
            暮らしと社会に安心と豊かさを提供しています。
          </p>

          <p className="text-base md:text-lg text-[#666] leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
            各分野のプロフェッショナルが協働し、  
            北海道から全国へ「信頼」と「価値」を発信する。  
            それがLITグループの使命です。
          </p>

          <a
            href="/about"
            className="inline-block px-8 py-3 bg-[#232323] text-white text-lg font-bold rounded-full shadow hover:bg-[#444] transition-all"
          >
            企業情報を見る
          </a>
        </div>
      </div>
    </section>
  );
}
