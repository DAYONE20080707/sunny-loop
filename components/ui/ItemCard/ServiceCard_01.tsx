// components/ui/itemCard/ServiceCard.tsx
import React from "react"
import Image from "next/image"
import classNames from "classnames"
import ArrowRightLinkButton from "@/components/ui/button/ArroeRightLinkButton"

interface ServiceCardProps {
  id: number
  subTitle: string
  title: string
  description: string
  image: string // 画像パスを受け取る
  href?: string // リンク先のURLを受け取る（オプショナル）
  className?: string // 任意のクラス名を受け取る
  imageContainerClass?: string // 画像コンテナのクラスを受け取る
  showButton?: boolean // ボタンの表示を制御するプロパティを追加
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subTitle,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "",
  showButton = true, // デフォルトでボタンを表示する設定
}) => {
  return (
    <div
      className={classNames(
        "relative overflow-hidden bg-white p-6 rounded-[10px] space-y-6",
        className
      )}
    >
      <div
        className={classNames(
          " text-[40px] font-spectral text-center text-accentColor tracking-[0.05em] pb-2 w-fit mx-auto border-b-2 border-accentColor",
          {
            "text-white": className.includes("overlay"),
            "text-accentColor": !className.includes("overlay"),
          }
        )}
      >
        {subTitle}
      </div>
      <div
        className={classNames(
          "text-xl text-center text-accentColor tracking-[0.05em]",
          {
            "text-white": className.includes("overlay"),
            "text-accentColor": !className.includes("overlay"),
          }
        )}
      >
        {title}
      </div>
      <div
        className={classNames(
          {
            "h-[250px] md:h-[400px] ": !className.includes("overlay"),
            "h-[250px] md:h-[600px]": className.includes("overlay"),
          },
          "w-full aspect-[1/1] relative rounded-[30px]",
          imageContainerClass
        )}
      >
        <Image
          fill
          src={image}
          alt={`solution ${id}`}
          objectFit="cover"
          className="block object-top "
          priority
        />
      </div>
      <div
        className={classNames("font-light leading-[160%]", {
          "text-white  px-10 md:px-20": className.includes("overlay"),
          "text-baseColor": !className.includes("overlay"),
        })}
      >
        {description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < description.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard
