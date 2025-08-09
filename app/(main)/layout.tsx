import Footer1 from "@/components/footer/Footer1"
import Header1 from "@/components/header/Header_01"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header1 /> */}
      <Header1 />
      <main className="flex-1">{children}</main>
      {/* <Footer1 /> */}
      <Footer1/>
    </div>
  )
}

export default MainLayout
