"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import FooterLinks from "@/components/ui/navigation/FooterLinks"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import ContactButton from "@/components/ui/button/ContactButton"

// フッター
const Footer1 = () => {
  const { companyName, companyPostalCode, companyAddress } = CompanyInfo[0]
  return (
    <footer className="border-t py-10 md:py-24 px-4 md:px-5 bg-baseColor text-white">
      <div className="md:max-w-[1400px] mx-auto">
        <div className="md:flex justify-between">
          <div className="space-y-3">
            <h4 className="w-[100px]">{CompanyInfo[0].companyName("tertiary")}</h4>
            <p className="font-light">
              {companyPostalCode}<br />
              {companyAddress}
            </p>
          </div>
          <div className="flex flex-col md:items-end mt-5 md:mt-0">
            <ul className="md:flex items-center md:space-x-10 font-light space-y-5 md:space-y-0">
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <div>{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:w-[198px] mt-7">
              <ContactButton className="![border-radius:0]" />
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center !border-t border-borderGray mt-4 pt-4 ">
          <div className="flex flex-col items-center justify-center text-sm space-y-5">
            {/* <ul className="flex items-center justify-end font-semibold  space-x-5 md:space-x-0">
              {Sns.map((item, index) => (
                <li
                  key={index}
                  className="-5 h-5 md:w-[60px] md:h-[60px] flex items-center justify-center"
                >
                  <Link href={item.href} className="">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
          <ul className="md:flex items-center md:space-x-10 font-light mt-4 md:mt-0 space-y-5 md:space-y-0 py-4">
            {FooterLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <small className="mt-8 flex justify-end items-center font-light">
          ©0000aaaaa. ALL Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer1
