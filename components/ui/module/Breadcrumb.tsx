// components/ui/module/Breadcrumb.tsx
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  return (
    <nav className={`flex items-center space-x-2 text-xs ${className}`}>
      <Link
        href="/"
        className="text-baseColor hover:opacity-80 transition-opacity"
      >
        トップページ
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRightIcon className="w-4 h-4 text-black" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-accentColor hover:opacity-80 transition-opacity"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-600">{item.name}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumb
