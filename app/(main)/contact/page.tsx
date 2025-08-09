import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Contact_01 from "@/components/contact/contact/Contact_01"
import PageContent from "@/components/ui/frame/PageContent"
import BreadcrumbContainer from "@/components/ui/module/BreadcrumbContainer"

// お問い合わせ
const ContactPage = () => {
  return (
    <PageContent>
      <BreadcrumbContainer items={[{ name: "お問い合わせ" }]} />
      <Lowerkv_01 enTitle="CONTACT US" mainTitle="お問い合わせ" />
      <Contact_01 />
      {/* <Aside_01 /> */}
    </PageContent>
  )
}

export default ContactPage
