// components/service/Service_04.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_01"
import { serviceData } from "@/components/data/top/ServiceData"
import MoreLinkButton from "@/components/ui/button/MoreButton"

const Service_04 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <PageContent>
        <section className="md:max-w-[1200px] mx-auto space-y-10">
          <ContentHeadline
            enTitle="Service"
            mainTitle="事業内容"
            enTitleClassName=""
            titleClassName=""
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {servicesToDisplay.map((service) => (
              <ServiceCard
                key={service.id}
                subTitle={service.subTitle}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                className=" md:w-[282px] space-y-4"
                imageContainerClass="  md:w-[282px] h-[280px]"
                showButton={true}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <MoreLinkButton
              href="/"
              className="md:mt-10 text-accentColor border-accentColor   "
            />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Service_04
