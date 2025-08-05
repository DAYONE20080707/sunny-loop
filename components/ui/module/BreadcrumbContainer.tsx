// components/ui/module/BreadcrumbContainer.tsx
import Breadcrumb from "./Breadcrumb"

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbContainerProps {
  items: BreadcrumbItem[]
  className?: string
}

const BreadcrumbContainer: React.FC<BreadcrumbContainerProps> = ({
  items,
  className = "",
}) => {
  return (
    <div className={`md:max-w-[1480px] mx-auto px-5 py-4 ${className}`}>
      <Breadcrumb items={items} />
    </div>
  )
}

export default BreadcrumbContainer
