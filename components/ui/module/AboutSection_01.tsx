import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";

interface AboutSection_01Props {
  title: string; // 見出しテキスト
  description: string; // 本文
  buttonHref?: string; // ボタンリンク先（任意）
  imageUrl?: string; // 画像URL（任意）
  position?: string; // 役職（任意）
  name?: string; // 氏名（任意）
}

const AboutSection_01 = ({
  title,
  description,
  buttonHref,
  imageUrl,
  position,
  name,
}: AboutSection_01Props) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <>
      <div className="md:flex justify-between md:max-w-[1200px] mx-auto gap-10">
        <h3 className="w-full md:max-w-[500px] text-3xl md:text-5xl font-light leading-relaxed md:leading-[84px] tracking-wide">
          {convertNewLines(title)}
        </h3>
        <div>
          <p className="w-full md:max-w-[660px] leading-relaxed md:leading-[45px] md:text-lg mt-10 md:mt-3 whitespace-pre-line">
            {description}
          </p>
          {(position || name) && (
            <p className="mt-10 text-lg leading-[250%]">
              {position}
              <br />
              {name}
            </p>
          )}
          {buttonHref && (
            <MoreButton
              href={buttonHref}
              className="mt-10 text-accentColor border-accentColor"
            />
          )}
        </div>
      </div>
      {/* <section className="md:w-[95%] h-[250px] md:h-[380px] mx-auto mt-10 md:mt-24  flex justify-center relative">
        <Image
          src="/top/message/message_img.png"
          alt="message"
          layout="fill" // 画像のサイズは親要素にフィット
          objectFit="cover" // 画像を親要素に合わせてトリミング
          className="block "
        />
      </section> */}
    </>
  );
};

export default AboutSection_01;
