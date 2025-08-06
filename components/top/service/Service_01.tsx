// components/service/Service_01.tsx
"use client"

import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ServiceCard from "@/components/ui/ItemCard/ServiceCard_01"
import { serviceData } from "@/components/data/top/ServiceData"
import SectionContent from "@/components/ui/frame/SectionContent"

const Service_01 = () => {
  // 表示するサービス数をserviceDataのIDを指定して表示
  const serviceIdsToDisplay = [1, 2, 3, 4, 5]

  // 指定したIDに基づいてデータをフィルタリング
  const servicesToDisplay = serviceData.filter((service) =>
    serviceIdsToDisplay.includes(service.id)
  )

  return (
    <>
      <SectionContent className="bg-accentColor">
        <section className="md:max-w-[1200px] mx-auto space-y-10">
          <ContentHeadline
            enTitle="Our Service"
            mainTitle={`SNSを活用して\nビジネスの成長をサポート`}
            enTitleClassName="text-center"
            titleClassName="text-center"
            variant="white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:pb-16">
            {servicesToDisplay.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                subTitle={service.subTitle}
                title={service.title}
                description={service.description}
                image={service.image} // 画像パスを渡す
                className=" space-y-4"
              />
            ))}
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Service_01
