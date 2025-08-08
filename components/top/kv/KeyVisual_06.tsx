// components/kv/KeyVisual_06.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"
import ScrollButton from "@/components/ui/button/ScrollButton"

// キービジュアル
const KeyVisual_06 = () => {
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section")
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <FirstViewContent className="relative">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="mx-auto">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen" />
        </section>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full md:max-w-[1200px] ">
          <TopPageHeadline
            mainTitle={
              <>
                <span className=" block text-[35px] md:text-[50px] leading-normal w-full md:w-[600px]">
                  日本語見出し文日本語見出し文はいります
                </span>
              </>
            }
            subtitleTop={
              <>
                <span>Lorem Ipsum</span>
                <br />
                <span>Lorem Ipsum</span>
              </>
            }
            description={
              <>
                <span className="block  md:w-[600px]">
                  日本語見出し文日本語見出し文はいります日本語見出し文日本語見出し文はいります日本語見出し文日本語見出し文はいります
                </span>
              </>
            }
            className="  text-white "
          />
          <div className="absolute left-1/2  transform -translate-x-1/2 md:left-10 -bottom-36 md:-bottom-40">
            <ScrollButton onClick={scrollToNextSection} color="white" />
          </div>
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_06
