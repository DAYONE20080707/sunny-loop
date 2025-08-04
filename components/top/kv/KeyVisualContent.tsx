// components/ui/frame/KeyVisualContent.tsx
import classNames from "classnames"
import Image from "next/image"

interface KeyVisualContentProps {
  className?: string
  pcImage?: string
  spImage?: string
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({
  className,
  pcImage = "/top/kv/Kv_img.png",
  spImage = "/top/kv/Kv_img.png",
}) => {
  return (
    <div className={classNames("relative w-full", className)}>
      {/* PC用画像 */}
      <Image
        src={pcImage}
        alt="kv"
        layout="fill"
        objectFit="cover"
        priority
        className="object-left hidden md:block"
      />
      {/* SP用画像 */}
      <Image
        src={spImage}
        alt="kv"
        layout="fill"
        objectFit="cover"
        priority
        className="object-left block md:hidden"
      />
      {/* 黒30%のオーバーレイ */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
    </div>
  )
}

export default KeyVisualContent
