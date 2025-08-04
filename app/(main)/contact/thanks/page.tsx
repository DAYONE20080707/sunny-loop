import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02"
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03"
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04"
import Contact_01 from "@/components/contact/contact/Contact_01"
import Aside_01 from "@/components/ui/module/aside/Aside_01"
import PageContent from "@/components/ui/frame/PageContent"
import BreadcrumbContainer from "@/components/ui/module/BreadcrumbContainer"
import Thanks from "@/components/contact/thanks/Thanks"

// お問い合わせ
const ContactPage = () => {
  return (
    <PageContent>
      <BreadcrumbContainer items={[{ name: "お問い合わせ" }]} />
      {/* <Lowerkv_01 enTitle="CONTACT" mainTitle="お問い合わせ" /> */}
      <Thanks />
    </PageContent>
  )
}

export default ContactPage
