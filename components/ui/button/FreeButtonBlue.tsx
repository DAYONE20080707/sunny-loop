import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

// テキストを自由に設定できるボタン
// 背景ホワイト　テキストブルー
const FreeButtonWhite = ({
  className = "",
  text,
  href,
}: {
  className?: string
  text: string
  href: string
}) => {
  return (
    <Link
      href={href}
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-between w-[90vw] max-w-[350px] px-6 py-4 relative group  ${className}`}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="11.5" stroke="white" />
        <path d="M6.25 12H17.75" stroke="white" />
        <path d="M13.75 8L17.75 12L13.75 16" stroke="white" />
      </svg>
    </Link>
  )
}

export default FreeButtonWhite
