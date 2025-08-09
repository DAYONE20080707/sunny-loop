import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01";
import Privacy1 from "@/components/privacy/Privacy_01"
import PageContent from "@/components/ui/frame/PageContent";
import BreadcrumbContainer from "@/components/ui/module/BreadcrumbContainer";

// 私たちについて
const PrivacyPage = () => {
  return (
    <PageContent>
     <BreadcrumbContainer items={[{ name: "プライバシーポリシー" }]} />
     <Lowerkv_01 enTitle="PRIVACY POLICY" mainTitle="プライバシーポリシー" />
      <Privacy1 />
    </PageContent>
  )
}

export default PrivacyPage
