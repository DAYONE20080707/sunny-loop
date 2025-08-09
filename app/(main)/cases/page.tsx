import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import LowerCases_01 from "@/components/cases/cases/Cases_01"
import PageContent from "@/components/ui/frame/PageContent"
import BreadcrumbContainer from "@/components/ui/module/BreadcrumbContainer"
import Aside_01 from "@/components/ui/module/aside/Aside_01"

// 導入事例
const CasesPage = () => {
  return (
    <PageContent>
      <BreadcrumbContainer items={[{ name: "導入事例" }]} />
      <Lowerkv_01 enTitle="CASES" mainTitle="導入事例" />
      <LowerCases_01 />
      <Aside_01/>
    </PageContent>
  )
}

export default CasesPage
