import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactButton = ({
  className = "",
  children = "お問い合わせ",
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <Link
      href="/contact"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center px-10 py-4 rounded-[10px] font-semibold tracking-[0.03em] leading-[160%] ${className}`}
    >
      <EnvelopeIcon className="w-[14px] h-[10px] mr-1" />
      {children}
    </Link>
  )
}

export default ContactButton
