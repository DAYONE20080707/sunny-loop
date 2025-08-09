import KeyVisual_03 from "@/components/top/kv/KeyVisual_03"
import About_02 from "@/components/top/about/About_02"
import Service_01 from "@/components/top/service/Service_01"
import Case_01 from "@/components/top/case/Case_01"
import Blog_03 from "@/components/top/blog/Blog_03"
import Profile_02 from "@/components/top/profile/Profile_02"
import Cta_01 from "@/components/ui/module/cta/Cta_01"
import Aside_01 from "@/components/ui/module/aside/Aside_01"
import LogoMarquee from "@/components/top/logo/LogoMarquee"

// メインページ
const HomePage = () => {
  return (
    <div>
      <KeyVisual_03 />
      <LogoMarquee />
      <section id="about" className="scroll-mt-32 md:scroll-mt-40">
        <About_02 />
      </section>
      <section id="service" className="scroll-mt-32 md:scroll-mt-40">
        <Service_01 />
      </section>
      <Cta_01 />
      <section id="blog" className="scroll-mt-32 md:scroll-mt-40">
        <Blog_03 />
      </section>
      <section id="cases" className="scroll-mt-32 md:scroll-mt-40">
        <Case_01 />
      </section>
      <section id="company" className="scroll-mt-32 md:scroll-mt-40">
        <Profile_02 />
      </section>
      <Aside_01 />
    </div>
  )
}

export default HomePage
