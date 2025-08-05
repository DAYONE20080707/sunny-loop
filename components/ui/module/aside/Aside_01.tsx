// components/module/aside/Aside_01.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import PageContent from "@/components/ui/frame/PageContent"
import MoreButton from "@/components/ui/button/MoreButton"

const Aside_01 = () => {
  return (
    <>
      <div className="bg-white p-5 md:p-10 ">
        <section className="md:max-w-[1840px] py-10 md:py-16 mx-auto bg-[url('/aside/aside.png')] bg-no-repeat bg-cover flex flex-col items-center  text-white px-4 rounded-[10px]">
          <h4 className="text-3xl md:text-[64px] font-lato font-extrabold uppercase leading-[120%]">
            Contact
          </h4>
          <p className="text-center md:text-lg mt-6 leading-[160%] tracking-[0.03em]">
            あなたの事業に合った最適なSNS戦略・映像施策をご提案します。
            <br />
            ご相談・お見積もりは、下記フォームよりお気軽にご連絡ください。
          </p>
          <div className="w-full flex justify-center mt-6">
            <MoreButton
              className="!bg-white !text-accentColor"
              href="/contact"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Aside_01
