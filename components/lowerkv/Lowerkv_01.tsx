"use client";

import Image from "next/image";

interface Lowerkv_01Props {
  enTitle?: string;
  mainTitle?: string;
  className?: string;
}

// 私たちについて
const Lowerkv_01: React.FC<Lowerkv_01Props> = ({ 
  enTitle = "title",
  mainTitle = "タイトルが入ります",
  className = ""
}) => {
  return (
    <div className={`md:max-w-[1240px] px-5 mx-auto pt-[96px] space-y-10 text-accentColor ${className}`}>
      <h1 className="text-3xl md:text-[40px] font-medium tracking-[0.05em] leading-[120%] mx-auto">
        <span className="block font-lato text-lg font-extrabold mb-1 ![line-height:120%] tracking-[0.03em]">
          {enTitle}
        </span>
        {mainTitle}
      </h1>
    </div>
  );
};

export default Lowerkv_01;
