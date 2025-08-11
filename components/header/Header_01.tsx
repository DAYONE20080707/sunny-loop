// components/header/Header_01.tsx
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Menu from "@/components/ui/navigation/Menu"
import ContactButton from "@/components/ui/button/ContactButton"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import HeaderContent from "../ui/frame/HeaderContent"

const Header_01 = () => {
  const { companyName } = CompanyInfo[0]

  // スクロール状態とメニュー開閉状態を管理
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsMenuOpen(false)
        setIsAnimating(false)
      }, 200)
    } else {
      setIsMenuOpen(true)
    }
  }

  const filteredMenu = Menu.filter((item) => item.name !== "お問い合わせ")

  return (
    <>
      <HeaderContent
        className={`fixed top-6 md:top-[50px] left-0 z-10 text-accentColor font-bold transition-all duration-300 font-outfit ${
          isScrolled ? "" : ""
        }`}
      >
        {/* 固定幅 1440px（見切れるソリッド） */}
        <div
          className="w-[1440px] flex items-center justify-between py-4 md:py-[34px] px-6 rounded-[10px] bg-white shadow-[0_4px_20px_0_rgba(0,0,0,0.10)]"
        >
          {/* ロゴ */}
          <Link href="/" className="flex-shrink-0 w-[200px]">
            <div className="text-lg font-bold">
              {companyName("secondary")}
            </div>
          </Link>

          {/* デスクトップ用メニュー（固定幅） */}
          <div>
            <ul className="hidden  lg:flex  justify-between w-[1000px] items-center text-base ">
              {filteredMenu.map((item, index) => (
                <li key={index} className="w-[160px] text-center ">
                  <Link href={item.href}>
                    <div>{item.enName}</div>
                  </Link>
                </li>
              ))}
              <li className="w-[160px] ml-4">
                <ContactButton className="w-full">CONTACT US</ContactButton>
              </li>
            </ul>
          </div>

          {/* ハンバーガーメニューボタン */}
          <button
            className={`block lg:hidden text-black transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* スマホ用メニュー */}
        <div
          className={`absolute top-20 left-0 w-full h-screen bg-gray-800 bg-opacity-70 text-white lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } ${isAnimating ? "pointer-events-auto" : ""}`}
        >
          <ul className="flex flex-col items-center space-y-6 py-10">
            {filteredMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div onClick={handleMenuToggle}>{item.enName}</div>
                </Link>
              </li>
            ))}
            <li>
              <ContactButton
                className="w-full py-4 font-normal"
                onClick={handleMenuToggle}
              />
            </li>
          </ul>
        </div>
      </HeaderContent>
    </>
  )
}

export default Header_01
