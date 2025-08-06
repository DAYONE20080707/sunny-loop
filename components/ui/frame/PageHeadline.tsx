// components/ui/frame/PageHeadline.tsx
import classNames from "classnames"
import Breadcrumb from "../module/Breadcrumb"

interface PageHeadlineProps {
  mainTitle: React.ReactNode
  subtitleTop?: React.ReactNode
  subtitleBottom?: string
  discription?: React.ReactNode
  parentDirectoryName?: string
  parentDirectoryLink?: string
  className?: string // 親要素のclassName
  titleClassName?: string // h1用のclassName
  subtitleClassName?: string // h2用のclassName
  discriptionClassName?: string // p用のclassName
}

const PageHeadline: React.FC<PageHeadlineProps> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  discription,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  discriptionClassName = "",
}) => {
  return (
    <section className={classNames("md:max-w-[1200px]", className)}>
      <Breadcrumb
        items={[
          ...(parentDirectoryName && parentDirectoryLink
            ? [{ name: parentDirectoryName, href: parentDirectoryLink }]
            : []),
          { name: mainTitle as string },
        ]}
      />
      <h2
        className={classNames(
          "text-2xl font-extrabold mb-4 font-lato",
          subtitleClassName
        )}
      >
        {subtitleTop}
      </h2>
      <h1
        className={classNames(
          "font-extrabold text-[80px] leading-[88px] font-poppins tracking-[0.05em]",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      <h2
        className={classNames("text-xl font-semibold mt-4", subtitleClassName)}
      >
        {subtitleBottom}
      </h2>
      <p
        className={classNames(
          "font-semibold mt-4 text-lg",
          discriptionClassName
        )}
      >
        {discription}
      </p>
    </section>
  )
}

export default PageHeadline
