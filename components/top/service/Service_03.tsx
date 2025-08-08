// components/service/Service_03.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_01"
import { serviceData } from "@/components/data/top/ServiceData"
import MoreLinkButton from "@/components/ui/button/MoreButton"

const Service_03 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <PageContent>
        <section className="md:max-w-[1200px] mx-auto space-y-10 ">
          <ContentHeadline
            enTitle="Service"
            mainTitle="事業内容"
            enTitleClassName="text-center"
            titleClassName="text-center"
          />

          <div className="grid gris-cols-1 md:grid-cols-2 gap-10">
            {servicesToDisplay.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                subTitle={service.subTitle}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                className="overlay" // テキストを画像の上に配置するためにpositionを指定
              />
            ))}
          </div>
          <div className="flex justify-center">
            <MoreLinkButton
              href="/"
              className=" text-accentColor border-accentColor"
            />
          </div>
        </section>
      </PageContent>
    </>
  )
}

export default Service_03
