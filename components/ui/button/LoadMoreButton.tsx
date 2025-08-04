// components/ui/button/LoadMoreButton.tsx

import classNames from "classnames"

interface LoadMoreButtonProps {
  onClick?: () => void
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  isExpanded?: boolean
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  className = "",
  children,
  disabled = false,
  isExpanded = false,
}) => {
  const buttonText = children || (isExpanded ? "Less more" : "View more")

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "border cursor-pointer flex items-center justify-between w-full md:w-[300px] font-bold relative group py-4 px-6 text-base tracking-[0.03em] leading-[160%] transition-opacity duration-300",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {buttonText}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M6.25 12H17.75" stroke="#1201CB" />
        <path d="M13.75 8L17.75 12L13.75 16" stroke="#1201CB" />
        <circle cx="12" cy="12" r="11.5" stroke="#1201CB" />
      </svg>
    </button>
  )
}

export default LoadMoreButton
