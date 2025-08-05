// components/ui/frame/HeaderContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface HeaderContentProps {
  children: ReactNode
  className?: string
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  children,
  className,
}) => {
  return (
    <>
      <header
        className={classNames(
          "w-full fixed top-0 left-0 h-20 tracking-wide px-4 md:px-5 z-10",
          className
        )}
      >
        <section className="w-full md:max-w-[1440px]  mx-auto flex items-center justify-between ">
          {children}
        </section>
      </header>
    </>
  )
}

export default HeaderContent
