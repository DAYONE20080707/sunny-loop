// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import ToastProvider from "@/components/providers/ToastProvider"

import { Noto_Sans_JP, Outfit, Lato, Spectral } from "next/font/google"
import { GoogleTagManager } from '@next/third-parties/google'


// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

// Outfit フォントの設定
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

// Lato フォントの設定
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})

// Spectral フォントの設定
const spectral = Spectral({
  weight: ["400", "700"], // 通常と太字を指定
  style: ["italic"], // イタリック体を指定
  subsets: ["latin"],
  display: "swap",
})

// metadata に viewport を統合
export const metadata: Metadata = {
  title: {
    template: "価値を育てるSNSの伴走者 Sunny Loop",
    default: "私たちは、SNSを一過性の手段ではなく、信頼を育み、価値を積み上げる“長期的な資産”と捉えています。一つひとつの取り組みに誠実に向き合い、日々の実行と改善を重ねながら、お客様の未来を共につくるパートナーであり続けます。",
  },
  viewport: {
    maximumScale: 1,
    userScalable: false,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body
        className="font-notoSansJP text-baseColor"
        style={
          {
            "--font-noto-sans-jp": notoSansJP.style.fontFamily,
            "--font-outfit": outfit.style.fontFamily,
            "--font-lato": lato.style.fontFamily,
            "--font-spectral": spectral.style.fontFamily,
          } as React.CSSProperties
        }
      >
        <ToastProvider />
          <GoogleTagManager gtmId="GTM-MKM78TTC" />
        {children}
      </body>
    </html>
  )
}
