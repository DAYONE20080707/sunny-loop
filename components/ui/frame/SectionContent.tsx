// components/ui/frame/SectionContent.tsx

import React, { ReactNode } from "react";
import classNames from "classnames";

interface SectionContentProps {
  children: ReactNode;
  className?: string;
}

const SectionContent: React.FC<SectionContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        "mx-auto py-16 md:py-[120px] px-4 md:px-5 overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionContent;
