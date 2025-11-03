// components/HeroVideo.tsx
'use client';

export default function HeroVideo() {
  return (
    <div className="w-screen mt-[100px] flex justify-center">
      {/* ↑ ヘッダーより少し広めの余白（約100px） */}

      <video
        className="w-full max-w-7xl h-[550px] md:h-[700px] object-cover rounded-2xl shadow-2xl"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
      >
        <source src="/LSAtop.mp4" type="video/mp4" />
        お使いのブラウザは動画に対応していません。
      </video>
    </div>
  );
}
