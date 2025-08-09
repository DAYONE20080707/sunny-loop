import Header_01 from "@/components/header/Header_01"
// import About1 from "@/components/about/About1";
// import About2 from "@/components/about/About_02";
import Footer1 from "@/components/footer/Footer1"
import KeyVisual_03 from "@/components/top/kv/KeyVisual_03"
import About_02 from "@/components/top/about/About_02"
import Service_01 from "@/components/top/service/Service_01"
import Case_01 from "@/components/top/case/Case_01"
import Blog_03 from "@/components/top/blog/Blog_03"
import Profile_02 from "@/components/top/profile/Profile_02"
import Cta_01 from "@/components/ui/module/cta/Cta_01"
import Aside_01 from "@/components/ui/module/aside/Aside_01"
import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01"
import Privacy_01 from "@/components/privacy/Privacy_01"
import Site_01 from "@/components/site/Site_01"
import LowerAbout_01 from "@/components/about/about/About_01"
import LowerAbout_02 from "@/components/about/about/About_02"
import LowerAbout_03 from "@/components/about/about/About_03"
import LowerAbout_04 from "@/components/about/about/About_04"
import Purpose_01 from "@/components/about/purpose/Purpose_01"
import History_01 from "@/components/about/history/History_01"
import LowerMessage_01 from "@/components/about/message/Message_01"
import LowerMessage_02 from "@/components/about/message/Message_02"
import LowerMessage_03 from "@/components/about/message/Message_03"
import LowerMessage_04 from "@/components/about/message/Message_04"
import LowerPlan_01 from "@/components/price/plan/Plan_01"
import LowerPlan_02 from "@/components/price/plan/Plan_02"
import LowerPlan_03 from "@/components/price/plan/Plan_03"
import LowerPlan_04 from "@/components/price/plan/Plan_04"
import LowerFaq_01 from "@/components/faq/faq/Faq_01"
import LowerFaq_02 from "@/components/faq/faq/Faq_02"
import Contact_01 from "@/components/contact/contact/Contact_01"
import ServiceAbout_01 from "@/components/service/about/About_01"
import ServiceAbout_02 from "@/components/service/about/About_02"
import ServiceAbout_03 from "@/components/service/about/About_03"
import ServiceAbout_04 from "@/components/service/about/About_04"
import LowerService1_01 from "@/components/service/service1/Service_01"
import LowerService1_02 from "@/components/service/service1/Service_02"
import LowerService1_03 from "@/components/service/service1/Service_03"
import LowerService2_01 from "@/components/service/service2/Service_01"
import LowerService2_02 from "@/components/service/service2/Service_02"
import LowerService2_03 from "@/components/service/service2/Service_03"
import LowerService3_01 from "@/components/service/service3/Service_01"
import LowerService3_02 from "@/components/service/service3/Service_02"
import LowerService3_03 from "@/components/service/service3/Service_03"
import LowerBlog_01 from "@/components/blog/blog/Blog_01"
import BlogDetail_01 from "@/components/blog/blogDetail/BlogDetail_01"
import CasesDetail_01 from "@/components/cases/casesDetail/CasesDetail_01"

// セクション情報とコンポーネントのマッピングの型定義
interface SectionOption {
  id: string
  src: string
  alt: string
}

interface SectionInfo {
  title: string
  options: SectionOption[]
  components: { [key: string]: JSX.Element }
}

interface PageConfig {
  sections: { [key: string]: SectionInfo }
}

interface ComponentsConfig {
  [key: string]: PageConfig
}

// ページ情報とコンポーネントのマッピング
export const componentsConfig: ComponentsConfig = {
  Home: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      kv: {
        title: "キービジュアル",
        options: [
          { id: "KeyVisual_01", src: "/admin/1.png", alt: "KeyVisual_01" },
          { id: "KeyVisual_02", src: "/admin/2.png", alt: "KeyVisual_02" },
          { id: "KeyVisual_03", src: "/admin/3.png", alt: "KeyVisual_03" },
          { id: "KeyVisual_04", src: "/admin/4.png", alt: "KeyVisual_04" },
          { id: "KeyVisual_05", src: "/admin/5.png", alt: "KeyVisual_05" },
          { id: "KeyVisual_06", src: "/admin/6.png", alt: "KeyVisual_06" },
        ],
        components: {
          KeyVisual_03: <KeyVisual_03 />,
        },
      },
      about: {
        title: "私たちについて",
        options: [
          { id: "About_01", src: "/admin/1.png", alt: "About_01" },
          { id: "About_02", src: "/admin/2.png", alt: "About_02" },
          { id: "About_03", src: "/admin/3.png", alt: "About_03" },
          { id: "About_04", src: "/admin/4.png", alt: "About_04" },
        ],
        components: {
          About_02: <About_02 />,
        },
      },

      // message: {
      //   title: "メッセージ",
      //   options: [
      //     { id: "Message_01", src: "/admin/1.png", alt: "Message_01" },
      //     { id: "Message_02", src: "/admin/2.png", alt: "Message_02" },
      //     { id: "Message_03", src: "/admin/3.png", alt: "Message_03" },
      //     { id: "Message_04", src: "/admin/4.png", alt: "Message_04" },
      //   ],
      //   components: {
      //     Message_01: <Message_01 />,
      //     Message_02: <Message_02 />,
      //     Message_03: <Message_03 />,
      //     Message_04: <Message_04 />,
      //   },
      // },
      service: {
        title: "サービス",
        options: [
          { id: "Service_01", src: "/admin/1.png", alt: "Service_01" },
          { id: "Service_02", src: "/admin/2.png", alt: "Service_02" },
          { id: "Service_03", src: "/admin/3.png", alt: "Service_03" },
          { id: "Service_04", src: "/admin/4.png", alt: "Service_04" },
        ],
        components: {
          Service_01: <Service_01 />,
        },
      },
      // strength: {
      //   title: "私たちの強み",
      //   options: [
      //     { id: "Strength_01", src: "/admin/1.png", alt: "Strength_01" },
      //     { id: "Strength_02", src: "/admin/2.png", alt: "Strength_02" },
      //     { id: "Strength_03", src: "/admin/3.png", alt: "Strength_03" },
      //     { id: "Strength_04", src: "/admin/4.png", alt: "Strength_04" },
      //   ],
      //   components: {
      //     Strength_01: <Strength_01 />,
      //     Strength_02: <Strength_02 />,
      //     Strength_03: <Strength_03 />,
      //     Strength_04: <Strength_04 />,
      //   },
      // },
      case: {
        title: "導入事例",
        options: [
          { id: "Case_01", src: "/admin/1.png", alt: "Case_01" },
          { id: "Case_02", src: "/admin/2.png", alt: "Case_02" },
          { id: "Case_03", src: "/admin/3.png", alt: "Case_03" },
          { id: "Case_04", src: "/admin/4.png", alt: "Case_04" },
          { id: "Case_05", src: "/admin/5.png", alt: "Case_05" },
          { id: "Case_06", src: "/admin/6.png", alt: "Case_06" },
        ],
        components: {
          Case_01: <Case_01 />,
        },
      },
      blog: {
        title: "ブログ",
        options: [
          { id: "Blog_01", src: "/admin/1.png", alt: "Blog_01" },
          { id: "Blog_02", src: "/admin/2.png", alt: "Blog_02" },
          { id: "Blog_03", src: "/admin/3.png", alt: "Blog_03" },
          { id: "Blog_04", src: "/admin/4.png", alt: "Blog_04" },
          { id: "Blog_05", src: "/admin/5.png", alt: "Blog_05" },
          { id: "Blog_06", src: "/admin/5.png", alt: "Blog_06" },
        ],
        components: {
          Blog_03: <Blog_03 />,
        },
      },
      // plan: {
      //   title: "料金プラン",
      //   options: [
      //     { id: "Plan_01", src: "/admin/1.png", alt: "Plan_01" },
      //     { id: "Plan_02", src: "/admin/2.png", alt: "Plan_02" },
      //     { id: "Plan_03", src: "/admin/3.png", alt: "Plan_03" },
      //     { id: "Plan_04", src: "/admin/4.png", alt: "Plan_04" },
      //   ],
      //   components: {
      //     Plan_01: <Plan_01 />,
      //     Plan_02: <Plan_02 />,
      //     Plan_03: <Plan_03 />,
      //     Plan_04: <Plan_04 />,
      //   },
      // },
      // flow: {
      //   title: "ご利用の流れ",
      //   options: [
      //     { id: "Flow_01", src: "/admin/1.png", alt: "Flow_01" },
      //     { id: "Flow_02", src: "/admin/2.png", alt: "Flow_02" },
      //   ],
      //   components: {
      //     Flow_01: <Flow_01 />,
      //     Flow_02: <Flow_02 />,
      //   },
      // },
      // news: {
      //   title: "お知らせ",
      //   options: [
      //     { id: "News_01", src: "/admin/1.png", alt: "News_01" },
      //     { id: "News_02", src: "/admin/2.png", alt: "News_02" },
      //     { id: "News_03", src: "/admin/3.png", alt: "News_03" },
      //     { id: "News_04", src: "/admin/4.png", alt: "News_04" },
      //     { id: "News_05", src: "/admin/5.png", alt: "News_05" },
      //     { id: "News_06", src: "/admin/6.png", alt: "News_06" },
      //   ],
      //   components: {
      //     News_01: <News_01 />,
      //     News_02: <News_02 />,
      //     News_03: <News_03 />,
      //     News_04: <News_04 />,
      //     News_05: <News_05 />,
      //     News_06: <News_06 />,
      //   },
      // },
      // faq: {
      //   title: "よくある質問",
      //   options: [
      //     { id: "Faq_01", src: "/admin/1.png", alt: "Faq_01" },
      //     { id: "Faq_02", src: "/admin/2.png", alt: "Faq_02" },
      //   ],
      //   components: {
      //     Faq_01: <Faq_01 />,
      //     Faq_02: <Faq_02 />,
      //   },
      // },

      aside: {
        title: "ASIDE",
        options: [
          { id: "Aside_01", src: "/admin/1.png", alt: "Aside_01" },
          { id: "Aside_02", src: "/admin/2.png", alt: "Aside_02" },
        ],
        components: {
          Aside_01: <Aside_01 />,
        },
      },
      profile: {
        title: "会社概要",
        options: [
          { id: "Profile_01", src: "/admin/1.png", alt: "Profile_01" },
          { id: "Profile_02", src: "/admin/2.png", alt: "Profile_02" },
          { id: "Profile_03", src: "/admin/3.png", alt: "Profile_03" },
          { id: "Profile_04", src: "/admin/4.png", alt: "Profile_04" },
        ],
        components: {
          Profile_02: <Profile_02 />,
        },
      },
      cta: {
        title: "CTA",
        options: [
          { id: "Cta_01", src: "/admin/1.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/2.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/3.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/4.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  Blog: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/1.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/2.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/3.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/4.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
        },
      },
      blog: {
        title: "記事一覧",
        options: [
          { id: "LowerBlog_01", src: "/admin/1.png", alt: "LowerBlog_01" },
          { id: "LowerBlog_02", src: "/admin/2.png", alt: "LowerBlog_02" },
          { id: "LowerBlog_03", src: "/admin/3.png", alt: "LowerBlog_03" },
        ],
        components: {
          LowerBlog_01: <LowerBlog_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  About: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/1.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/2.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/3.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/4.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
        },
      },
      about: {
        title: "私たちについて",
        options: [
          { id: "LowerAbout_01", src: "/admin/1.png", alt: "LowerAbout_01" },
          { id: "LowerAbout_02", src: "/admin/2.png", alt: "LowerAbout_02" },
          { id: "LowerAbout_03", src: "/admin/3.png", alt: "LowerAbout_03" },
          { id: "LowerAbout_04", src: "/admin/4.png", alt: "LowerAbout_04" },
        ],
        components: {
          LowerAbout_01: <LowerAbout_01 />,
          LowerAbout_02: <LowerAbout_02 />,
          LowerAbout_03: <LowerAbout_03 />,
          LowerAbout_04: <LowerAbout_04 />,
        },
      },
      purpose: {
        title: "私たちの想い",
        options: [{ id: "Purpose_01", src: "/admin/1.png", alt: "Purpose_01" }],
        components: {
          Purpose_01: <Purpose_01 />,
        },
      },
      history: {
        title: "企業沿革",
        options: [{ id: "History_01", src: "/admin/1.png", alt: "History_01" }],
        components: {
          History_01: <History_01 />,
        },
      },
      message: {
        title: "メッセージ",
        options: [
          {
            id: "LowerMessage_01",
            src: "/admin/1.png",
            alt: "LowerMessage_01",
          },
          {
            id: "LowerMessage_02",
            src: "/admin/2.png",
            alt: "LowerMessage_02",
          },
          {
            id: "LowerMessage_03",
            src: "/admin/3.png",
            alt: "LowerMessage_03",
          },
          {
            id: "LowerMessage_04",
            src: "/admin/4.png",
            alt: "LowerMessage_04",
          },
        ],
        components: {
          LowerMessage_01: <LowerMessage_01 />,
          LowerMessage_02: <LowerMessage_02 />,
          LowerMessage_03: <LowerMessage_03 />,
          LowerMessage_04: <LowerMessage_04 />,
        },
      },
      profile: {
        title: "会社概要",
        options: [
          { id: "Profile_01", src: "/admin/1.png", alt: "Profile_01" },
          { id: "Profile_02", src: "/admin/2.png", alt: "Profile_02" },
          { id: "Profile_03", src: "/admin/3.png", alt: "Profile_03" },
          { id: "Profile_04", src: "/admin/4.png", alt: "Profile_04" },
        ],
        components: {
          Profile_02: <Profile_02 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  Price: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/1.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/2.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/3.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/4.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
        },
      },
      plan: {
        title: "料金プラン",
        options: [
          { id: "LowerPlan_01", src: "/admin/1.png", alt: "LowerPlan_01" },
          { id: "LowerPlan_02", src: "/admin/2.png", alt: "LowerPlan_02" },
          { id: "LowerPlan_03", src: "/admin/3.png", alt: "LowerPlan_03" },
          { id: "LowerPlan_04", src: "/admin/4.png", alt: "LowerPlan_04" },
        ],
        components: {
          LowerPlan_01: <LowerPlan_01 />,
          LowerPlan_02: <LowerPlan_02 />,
          LowerPlan_03: <LowerPlan_03 />,
          LowerPlan_04: <LowerPlan_04 />,
        },
      },
      cta: {
        title: "CTA",
        options: [
          { id: "Cta_01", src: "/admin/1.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/2.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/3.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/4.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  Faq: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/1.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/2.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/3.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/4.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
        },
      },
      faq: {
        title: "よくある質問",
        options: [
          { id: "LowerFaq_01", src: "/admin/1.png", alt: "LowerFaq_01" },
          { id: "LowerFaq_02", src: "/admin/2.png", alt: "LowerFaq_02" },
        ],
        components: {
          LowerFaq_01: <LowerFaq_01 />,
          LowerFaq_02: <LowerFaq_02 />,
        },
      },
      cta: {
        title: "CTA",
        options: [
          { id: "Cta_01", src: "/admin/1.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/2.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/3.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/4.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  Contact: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/1.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/2.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/3.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/4.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
        },
      },
      contact: {
        title: "お問い合わせ",
        options: [{ id: "Contact_01", src: "/admin/1.png", alt: "Contact_01" }],
        components: {
          Contact_01: <Contact_01 />,
        },
      },
      cta: {
        title: "CTA",
        options: [
          { id: "Cta_01", src: "/admin/1.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/2.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/3.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/4.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  Service: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/1.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/2.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/3.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/4.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
        },
      },
      about: {
        title: "私たちについて",
        options: [
          {
            id: "ServiceAbout_01",
            src: "/admin/1.png",
            alt: "ServiceAbout_01",
          },
          {
            id: "ServiceAbout_02",
            src: "/admin/2.png",
            alt: "ServiceAbout_02",
          },
          {
            id: "ServiceAbout_03",
            src: "/admin/3.png",
            alt: "ServiceAbout_03",
          },
          {
            id: "ServiceAbout_04",
            src: "/admin/4.png",
            alt: "ServiceAbout_04",
          },
        ],
        components: {
          ServiceAbout_01: <ServiceAbout_01 />,
          ServiceAbout_02: <ServiceAbout_02 />,
          ServiceAbout_03: <ServiceAbout_03 />,
          ServiceAbout_04: <ServiceAbout_04 />,
        },
      },
      Cta1: {
        title: "CTA1",
        options: [
          { id: "Cta_01", src: "/admin/1.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/2.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/3.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/4.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
        },
      },
      service1: {
        title: "サービス1",
        options: [
          {
            id: "LowerService1_01",
            src: "/admin/1.png",
            alt: "LowerService1_01",
          },
          {
            id: "LowerService1_02",
            src: "/admin/2.png",
            alt: "LowerService1_02",
          },
          {
            id: "LowerService1_03",
            src: "/admin/3.png",
            alt: "LowerService1_03",
          },
        ],
        components: {
          LowerService1_01: <LowerService1_01 />,
          LowerService1_02: <LowerService1_02 />,
          LowerService1_03: <LowerService1_03 />,
        },
      },
      service2: {
        title: "サービス2",
        options: [
          {
            id: "LowerService2_01",
            src: "/admin/1.png",
            alt: "LowerService2_01",
          },
          {
            id: "LowerService2_02",
            src: "/admin/2.png",
            alt: "LowerService2_02",
          },
          {
            id: "LowerService2_03",
            src: "/admin/3.png",
            alt: "LowerService2_03",
          },
        ],
        components: {
          LowerService2_01: <LowerService2_01 />,
          LowerService2_02: <LowerService2_02 />,
          LowerService2_03: <LowerService2_03 />,
        },
      },
      service3: {
        title: "サービス3",
        options: [
          {
            id: "LowerService3_01",
            src: "/admin/1.png",
            alt: "LowerService3_01",
          },
          {
            id: "LowerService3_02",
            src: "/admin/2.png",
            alt: "LowerService3_02",
          },
          {
            id: "LowerService3_03",
            src: "/admin/3.png",
            alt: "LowerService3_03",
          },
        ],
        components: {
          LowerService3_01: <LowerService3_01 />,
          LowerService3_02: <LowerService3_02 />,
          LowerService3_03: <LowerService3_03 />,
        },
      },

      cta2: {
        title: "CTA2",
        options: [
          { id: "Cta_01", src: "/admin/1.png", alt: "Cta_01" },
          { id: "Cta_02", src: "/admin/2.png", alt: "Cta_02" },
          { id: "Cta_03", src: "/admin/3.png", alt: "Cta_03" },
          { id: "Cta_04", src: "/admin/4.png", alt: "Cta_04" },
        ],
        components: {
          Cta_01: <Cta_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  Privacy: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/1.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/2.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/3.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/4.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
        },
      },
      privacy: {
        title: "プライバシーポリシー",
        options: [{ id: "Privacy_01", src: "/admin/1.png", alt: "Privacy_01" }],
        components: {
          Privacy_01: <Privacy_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  Site: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      lowerkv: {
        title: "下層キービジュアル",
        options: [
          { id: "Lowerkv_01", src: "/admin/1.png", alt: "Lowerkv_01" },
          { id: "Lowerkv_02", src: "/admin/2.png", alt: "Lowerkv_02" },
          { id: "Lowerkv_03", src: "/admin/3.png", alt: "Lowerkv_03" },
          { id: "Lowerkv_04", src: "/admin/4.png", alt: "Lowerkv_04" },
        ],
        components: {
          Lowerkv_01: <Lowerkv_01 />,
        },
      },
      privacy: {
        title: "サイトポリシー",
        options: [{ id: "Site_01", src: "/admin/1.png", alt: "Site_01" }],
        components: {
          Site_01: <Site_01 />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  BlogDetail: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      blogDetail: {
        title: "記事詳細",
        options: [
          { id: "BlogDetail_01", src: "/admin/1.png", alt: "BlogDetail_01" },
          { id: "BlogDetail_02", src: "/admin/2.png", alt: "BlogDetail_02" },
        ],
        components: {
          BlogDetail_01: <BlogDetail_01 params={{ id: "" }} />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  CaseDetail: {
    sections: {
      header: {
        title: "ヘッダー",
        options: [
          { id: "Header_01", src: "/admin/1.png", alt: "Header_01" },
          { id: "Header_02", src: "/admin/2.png", alt: "Header_02" },
          { id: "Header_03", src: "/admin/3.png", alt: "Header_03" },
          { id: "Header_04", src: "/admin/4.png", alt: "Header_04" },
        ],
        components: {
          Header_01: <Header_01 />,
        },
      },
      caseDetail: {
        title: "事例詳細",
        options: [
          { id: "CasesDetail_01", src: "/admin/1.png", alt: "CasesDetail_01" },
          { id: "CasesDetail_02", src: "/admin/2.png", alt: "CasesDetail_02" },
        ],
        components: {
          CasesDetail_01: <CasesDetail_01 params={{ id: "" }} />,
        },
      },
      footer: {
        title: "フッター",
        options: [
          { id: "Footer1", src: "/admin/1.png", alt: "Footer1" },
          { id: "Footer2", src: "/admin/2.png", alt: "Footer2" },
        ],
        components: {
          Footer1: <Footer1 />,
        },
      },
    },
  },
  // ここに新しいページを追加していく
}
