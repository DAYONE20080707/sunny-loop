// components/ui/frame/PageContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface PageContentProps {
  children: ReactNode
  className?: string
}

const PageContent: React.FC<PageContentProps> = ({ children, className }) => {
  return (
    <div className={classNames(" mx-auto pt-24 md:pt-[178px] border-b-2 px-0 md:px-5", className)}>
      {children}
    </div>
  )
}

export default PageContent
