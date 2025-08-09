// components/profile/Profile_02.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import ProfileCard from "@/components/ui/ItemCard/ProfileCard"
import SectionContent from "@/components/ui/frame/SectionContent"

const Profile_02 = () => {
  return (
    <>
      <SectionContent className="bg-bgLightBlue">
        <section className="md:max-w-[1200px] mx-auto">
          <ContentHeadline
            enTitle="COMPANY PROFILE"
            mainTitle={`お客様に合わせたSNS戦略で\nエンゲージメントを向上させる。`}
            enTitleClassName="text-center"
            titleClassName="text-center"
          />
          <div className="mt-16 md:p-10 md:flex md:justify-between">
            <div>
              <ProfileCard label="設立" value="2024年10月11日" />
              <ProfileCard
                label="所在地"
                value={`〒870-0831 大分県大分市要町3-32`}
              />
              <ProfileCard label="電話番号" value="090-2719-6256" />
              <ProfileCard
                label="メールアドレス"
                value="maedakeisuke.0210@gmail.com"
              />
              <ProfileCard label="代表者" value="前田圭祐" />
            </div>
            <div>
              <div className="max-w-[420px] max-h-[400px]">
                <Image
                  src="/top/profile/profile.jpg"
                  alt="プロフィール画像"
                  width={420}
                  height={400}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>

              <p className="mt-4 font-light">
                代表
                <br />
                前田 圭祐／Maeda Keisuke
              </p>
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  )
}

export default Profile_02
