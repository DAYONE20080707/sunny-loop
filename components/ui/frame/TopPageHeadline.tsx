// components/ui/frame/TopPageHeadline.tsx
import classNames from "classnames"

interface TopPageHeadlineProps {
  mainTitle: React.ReactNode
  subtitleTop?: React.ReactNode
  subtitleBottom?: React.ReactNode
  description?: React.ReactNode
  parentDirectoryName?: string
  parentDirectoryLink?: string
  className?: string // 親要素のclassName
  titleClassName?: string // h1用のclassName
  subtitleClassName?: string // h2用のclassName
  descriptionClassName?: string // p用のclassName
}

const TopPageHeadline: React.FC<TopPageHeadlineProps> = ({
  mainTitle,
  subtitleTop,
  subtitleBottom,
  description,
  parentDirectoryName,
  parentDirectoryLink,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <section
      className={classNames(
        "md:md:max-w-[1200px] w-full -mt-2",
        className
      )}
    >
      {/* <Breadcrumb
        mainTitle={mainTitle}
        parentDirectoryName={parentDirectoryName}
        parentDirectoryLink={parentDirectoryLink}
      /> */}
      <h2
        className={classNames(
          "text-lg md:text-2xl font-bold font-poppins leading-normal",
          subtitleClassName
        )}
      >
        {subtitleTop}
      </h2>
      <h1
        className={classNames(
          "text-[55px] md:text-[120px] leading-[110%] font-medium tracking-[0.05em] text-accentColor font-outfit",
          titleClassName
        )}
      >
        {mainTitle}
      </h1>
      <h3 className={classNames("text-xl md:text-[32px] mt-10 text-accentColor tracking-[0.05em] leading-[160%]", subtitleClassName)}>
        {subtitleBottom}
      </h3>
      <p
        className={classNames(
          "mt-4 md:text-lg whitespace-pre-line tracking-[0.05em]",
          descriptionClassName
        )}
      >
        {description}
      </p>
    </section>
  )
}

export default TopPageHeadline
