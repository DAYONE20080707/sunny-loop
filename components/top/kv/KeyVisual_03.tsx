// components/kv/KeyVisual_03.tsx
"use client"

import FirstViewContent from "@/components/top/kv/FirstViewContent"
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline"
import ScrollButton from "@/components/ui/button/ScrollButton"
import KeyVisualContent from "@/components/top/kv/KeyVisualContent"

// キービジュアル
const KeyVisual_03 = () => {
  // スクロールボタンが押された時に次のセクションに移動する関数
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section")
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <FirstViewContent className="relative h-screen ">
        {/* widthがフルサイズでない場合は指定する */}
        {/* キービジュアルの画像 */}
        <section className="w-[100%] h-full absolute right-0 ">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen md:h-full" />
        </section>
        <div className="md:max-w-screen-xl mx-auto flex flex-col justify-center h-full relative">
          <TopPageHeadline
            mainTitle={
              <>
                <span>Infinite</span>
                <br />
                <span>Possibilities</span>
              </>
            }
            subtitleBottom="SNSで、∞の可能性を形にする。"
            description={`私たちは、SNSという日常に根差したメディアに、\n社会や事業の"想い"を正しく届け、\n信頼と行動へ変えていく責任を担っています。\n課題を可視化し、最適な一手を導き出し、成果へとつなげる──。\nその積み重ねこそが、SNSに宿る"∞の可能性"を形にすると信じています。`}
          />
          {/* スクロールボタン */}
          <div className="absolute left-4 md:left-0 bottom-4 md:bottom-20">
            <ScrollButton onClick={scrollToNextSection} color="#1201CB" />
          </div>
        </div>
      </FirstViewContent>
    </>
  )
}

export default KeyVisual_03
