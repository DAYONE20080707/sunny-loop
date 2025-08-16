// components/top/logo/LogoMarquee.tsx
"use client"

import Image from "next/image"

const LogoMarquee = () => {
  // ロゴ画像の配列
  const logos = [
    "/top/logo/logo1.png",
    "/top/logo/logo2.png",
    "/top/logo/logo3.png",
    "/top/logo/logo4.png",
    "/top/logo/logo5.png",
    "/top/logo/logo6.png",
  ]

  return (
    <section className="w-full bg-white py-8 md:py-10 overflow-hidden">
      <div className="relative">
        {/* 無限スクロールアニメーション */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* 1つ目のロゴセット */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-4 md:mx-8">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="h-16 md:h-20 w-auto object-contain max-w-[180px]"
              />
            </div>
          ))}
          {/* 2つ目のロゴセット（無限ループ用） */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="h-16 md:h-20 w-auto object-contain max-w-[180px]"
              />
            </div>
          ))}
          {/* 3つ目のロゴセット（無限ループ用） */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="h-16 md:h-20 w-auto object-contain max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
