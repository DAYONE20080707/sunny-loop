import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02"
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03"
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04"
import LowerBlog_01 from "@/components/blog/blog/Blog_01"
import LowerBlog_02 from "@/components/blog/blog/Blog_02"
import LowerBlog_03 from "@/components/blog/blog/Blog_03"
import Cta_01 from "@/components/ui/module/cta/Cta_01"
import Cta_02 from "@/components/ui/module/cta/Cta_02"
import Cta_03 from "@/components/ui/module/cta/Cta_03"
import PageContent from "@/components/ui/frame/PageContent"
import BreadcrumbContainer from "@/components/ui/module/BreadcrumbContainer"
import Aside_01 from "@/components/ui/module/aside/Aside_01"

// お役立ち情報
const BlogPage = () => {
  return (
    <PageContent>
      <BreadcrumbContainer items={[{ name: "お役立ち情報" }]} />
      <Lowerkv_01 enTitle="TOPICS" mainTitle="お役立ち情報" />
      <LowerBlog_01 />
      <Aside_01/>
    </PageContent>
  )
}

export default BlogPage
