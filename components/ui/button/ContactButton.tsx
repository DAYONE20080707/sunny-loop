import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactButton = ({
  className = "",
  children = "お問い合わせ",
  onClick,
}: {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}) => {
  return (
    <Link
      href="/contact"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center px-10 py-4 rounded-[10px] font-semibold tracking-[0.03em] leading-[160%] ${className}`}
      onClick={onClick}
    >
      <EnvelopeIcon className="w-[25px] h-[17px] mr-1" />
      {children}
    </Link>
  )
}

export default ContactButton
