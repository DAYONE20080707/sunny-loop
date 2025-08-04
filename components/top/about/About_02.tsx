// components/message/About_02.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import SectionContent from "@/components/ui/frame/SectionContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_02"

// メッセージ
const About_02 = () => {
  return (
    <>
      <div className="mx-auto py-14 md:pb-[120px] pt-0 px-5 md:px-5 overflow-x-hidden max-w-[1800px]">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="py-10 px-5 md:p-24 bg-bgLightBlue flex flex-col items-center rounded-[20px]">
          <ContentHeadline
            enTitle="Who we are"
            mainTitle="価値を育てるSNSの伴走者 "
            enTitleClassName="text-center"
            titleClassName="text-center"
          />
          <p className="leading-[250%] tracking-[0.03em] text-sm md:text-lg text-center">私たちは、SNSを一過性の手段ではなく、 <br />
            信頼を育み、価値を積み上げる“長期的な資産”と捉えています。<br />
             一つひとつの取り組みに誠実に向き合い、日々の実行と改善を重ねながら、 <br />
             お客様の未来を共につくるパートナーであり続けます。</p>
        
        </section>
      </div>
    </>
  )
}

export default About_02
