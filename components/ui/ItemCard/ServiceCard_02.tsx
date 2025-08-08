// components/ui/itemCard/ServiceCard.tsx
import Image from "next/image"
import classNames from "classnames"
import MoreButton from "@/components/ui/button/MoreButton"

interface ServiceCardProps {
  id: number
  title: string
  description: string
  image: string // 画像パスを受け取る
  href?: string // リンク先のURLを受け取る（オプショナル）
  className?: string // 任意のクラス名を受け取る
  imageContainerClass?: string // 画像コンテナのクラスを受け取る
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "", // デフォルトの画像コンテナのクラス
}) => {
  return (
    <div className={classNames("relative overflow-hidden", className)}>
      <div
        className={classNames(
          "md:w-[560px] h-[250px] md:h-[400px] md:aspect-[1/1] relative",
          imageContainerClass
        )}
      >
        {" "}
        {/* 画像コンテナのクラスを受け取る */}
        <Image
          fill
          src={image} // 画像パスを動的に指定
          alt={`solution ${id}`}
          objectFit="cover" // 画像を親要素に合わせてトリミング
          className="block rounded-2xl" // 画像に角丸を適用
          priority
        />
      </div>

      <div
        className={classNames("mt-5 md:mt-0 space-y-5 md:w-[560px]", {
          "md:w-[560px] h-[480px] rounded-2xl absolute inset-0 flex flex-col  bg-black/50 text-white":
            className.includes("overlay"),
          "relative text-black": !className.includes("overlay"),
        })}
      >
        <div
          className={classNames("font-black font-poppins", {
            "text-white": className.includes("overlay"),
            "text-accentColor": !className.includes("overlay"),
          })}
        >
          Service0{id}
        </div>
        <div
          className={classNames(
            "font-medium font-poppins text-[22px] border-b border-borderGray pb-6",
            {
              "text-white": className.includes("overlay"),
              "text-black": !className.includes("overlay"),
            }
          )}
        >
          {title}
        </div>
        <div
          className={classNames({
            "text-white": className.includes("overlay"),
            "text-black": !className.includes("overlay"),
          })}
        >
          {description}
        </div>
        {href && (
          <MoreButton
            href={href}
            className="text-accentColor border-accentColor"
          />
        )}
      </div>
    </div>
  )
}

export default ServiceCard
