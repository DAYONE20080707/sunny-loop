// components/module/cta/Cta_01.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/ui/frame/PageContent";
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite";
import FreeButtonBlue from "../../button/FreeButtonBlue";
import SectionContent from "../../frame/SectionContent";

const Cta_01 = () => {
  return (
    <>
      <div className="mx-auto py-16 md:py-16 px-4 md:px-5 overflow-x-hidden">
        <section className="md:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
          <p className=" text-lg leading-[160% tracking-[0.03em]">
          あなたの事業に合った最適なSNS戦略・映像施策をご提案します。
            <br />
            ご相談・お見積もりは、下記フォームよりお気軽にご連絡ください。
          </p>
          <div>
            <FreeButtonBlue href="/contact" text="Contact us" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Cta_01;
