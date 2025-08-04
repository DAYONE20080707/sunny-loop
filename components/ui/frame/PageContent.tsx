// components/ui/frame/PageContent.tsx

import React, { ReactNode } from "react"
import classNames from "classnames"

interface PageContentProps {
  children: ReactNode
  className?: string
}

const PageContent: React.FC<PageContentProps> = ({ children, className }) => {
  return (
    <div className={classNames(" mx-auto py-14 md:py-[120px] border-b-2 px-5 md:px-5", className)}>
      {children}
    </div>
  )
}

export default PageContent
