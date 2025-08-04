import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02"
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03"
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04"
import Contact_01 from "@/components/contact/contact/Contact_01"
import Aside_01 from "@/components/ui/module/aside/Aside_01"
import PageContent from "@/components/ui/frame/PageContent"
import Breadcrumb from "@/components/ui/module/Breadcrumb"

// お問い合わせ
const ContactPage = () => {
  return (
    <PageContent>
      <div className="md:max-w-[1480px] mx-auto px-5 py-4">
        <Breadcrumb items={[{ name: "お問い合わせ" }]} />
      </div>
      <Lowerkv_01 enTitle="CONTACT" mainTitle="お問い合わせ" />
      <Contact_01 />
      {/* <Aside_01 /> */}
    </PageContent>
  )
}

export default ContactPage
