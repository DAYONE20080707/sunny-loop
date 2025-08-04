// components/ui/frame/ContentHeadline.tsx
import React from "react"
import classNames from "classnames"
import { ContentHeadlineProps } from "@/types"
import Image from "next/image"

const ContentHeadline: React.FC<ContentHeadlineProps> = ({
  mainTitle,
  subTitle,
  enTitle,
  className = "",
  titleClassName = "",
  enTitleClassName = "",
  ImageSrc,
  ImageWidth,
  ImageHeight,
  id,
  variant = "default",
}) => {
  return (
    <section
      id={id}
      className={classNames(
        "w-full md:max-w-[1200px] mb-16 tracking-wide",
        variant === "white" ? "text-white" : "text-accentColor",
        className
      )}
    >
      {ImageSrc && (
        <Image
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
          alt={String(mainTitle)}
          className="mb-4"
        />
      )}
      <h3
        className={classNames(
          "text-lg font-extrabold font-lato uppercase",
          variant === "white" ? "text-white" : "text-accentColor",
          enTitleClassName
        )}
      >
        {enTitle}
      </h3>
      <h1
        className={classNames(
          "text-[28px] md:text-[40px] font-medium tracking-[0.03em] leading-[160%]",
          variant === "white" ? "text-white" : "text-accentColor",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      {subTitle && (
        <h2 className={variant === "white" ? "text-white" : "text-accentColor"}>
          {subTitle}
        </h2>
      )}
    </section>
  )
}

export default ContentHeadline
