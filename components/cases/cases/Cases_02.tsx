// components/cases/Cases_02.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { microcms } from "@/lib/microcms";
import { Work } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import MoreButton from "@/components/ui/button/MoreButton";

interface CasesProps {
  limit?: number;
}

const CATEGORIES = [
  { id: "all", name: "すべて" },
  { id: "news", name: "お知らせ" },
  { id: "cases", name: "ブログ" },
  { id: "media", name: "メディア" },
];

const Cases_02 = ({ limit = 3 }: CasesProps) => {
  const [contents, setContents] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const getWorks = async () => {
      try {
        const queries = {
          limit,
          ...(activeCategory !== "all" && {
            filters: `category[equals]${activeCategory}`,
          }),
        };

        const data = await microcms.get({
          endpoint: "works",
          queries,
        });
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch works:", error);
      }
      setLoading(false);
    };

    getWorks();
  }, [limit, activeCategory]);

  return (
    <>
      <PageContent className="bg-bgLightBlue">
        <section className="md:max-w-[1200px] mx-auto">
          {/* <ContentHeadline
            enTitle="Cases"
            mainTitle="ブログ"
            enTitleClassName=""
            titleClassName=""
          /> */}
          <div className="flex flex-wrap justify-start md:justify-center gap-x-5 md:gap-20 rounded-full bg-white mx-auto px-5 md:px-20 w-fit">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-1 py-4 transition-all font-bold whitespace-nowrap ${
                  activeCategory === category.id
                    ? "text-accentColor border-b-4 border-accentColor"
                    : "hover:text-accentColor"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center mt-16">
              <h1>Loading...</h1>
            </div>
          ) : contents.length === 0 ? (
            <div className="text-center mt-16">
              <p>記事がありません</p>
            </div>
          ) : (
            <>
              <div className="mt-16 grid grid-cols-1 gap-y-6 md:gap-y-6 gap-x-10 md:gap-x-16 bg-white p-16">
                {contents.map((post: Work) => (
                  <Link
                    key={post.id}
                    href={`/cases/${post.id}`}
                    className="w-full hover:opacity-90 transition-opacity"
                  >
                    <div className="w-full md:flex space-x-6 pb-6 border-b border-[#EFEFEF] last:border-b-0">
                      <div className="w-full md:w-[180px] h-[250px] md:h-[130px] mt-5 md:mt-0">
                        {post.image && (
                          <Image
                            src={post.image.url}
                            alt="制作物サムネイル"
                            width={370}
                            height={223}
                            className="w-full h-full rounded-2xl object-cover"
                          />
                        )}
                      </div>
                      <div className="">
                        <p className="mt-2 text-[#5f5f5f] text-[14px] font-lato font-semibold leading-[130%]">
                          {new Date(post.date)
                            .toLocaleDateString("ja-JP", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, ".")}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {Array.isArray(post.category) ? (
                            post.category.map((cat, index) => (
                              <span
                                key={index}
                                className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1 ![line-height:100%]"
                              >
                                {cat}
                              </span>
                            ))
                          ) : (
                            <span className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1 ![line-height:100%]">
                              {post.category}
                            </span>
                          )}
                        </div>
                        <p className="mt-4 text-lg font-bold">{post.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-center mt-16">
                <MoreButton className="text-accentColor border-accentColor" />
              </div>
            </>
          )}
        </section>
      </PageContent>
    </>
  );
};

export default Cases_02;
