// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import ToastProvider from "@/components/providers/ToastProvider"

import { Noto_Sans_JP, Outfit, Lato, Spectral } from "next/font/google"

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
    template: "HP制作システム",
    default: "HP制作システム",
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
        {children}
      </body>
    </html>
  )
}
