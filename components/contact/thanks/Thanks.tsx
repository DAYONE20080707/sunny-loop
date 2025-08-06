
import FreeButtonBlue from "@/components/ui/button/FreeButtonBlue"
import { CircleCheck } from "lucide-react"


const Thanks = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center gap-10 py-16 md:pb-[157px] md:pt-[137px]">
          <CircleCheck
            className=" w-20 md:w-[120px] h-auto text-accentColor"
            strokeWidth={1}
          />

          <h2 className=" text-2xl md:text-[40px] font-medium tracking-wider text-accentColor leading-[160%]">
            お問い合わせが送信されました
          </h2>
          <p className="text-base md:text-lg text-center leading-[160%]">
          お問い合わせいただき、誠にありがとうございます。
            <br />
            お問い合わせ内容を確認後、３営業日以内に担当者からご連絡致しますので、
            <br className="hidden md:block" />
            今しばらくお待ちくださいませ。
          </p>
          <div className=" mt-10 md:mt-0">
            <FreeButtonBlue href="/" text="トップページへ戻る" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Thanks
