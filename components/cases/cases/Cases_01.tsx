// components/cases/Cases_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { microcms } from "@/lib/microcms"
import { Work } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import LoadMoreButton from "@/components/ui/button/LoadMoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"

interface CasesProps {
  limit?: number
}

const CATEGORIES = [
  { id: "all", name: "すべて" },
  { id: "news", name: "お知らせ" },
  { id: "cases", name: "ブログ" },
  { id: "media", name: "メディア" },
]

const Cases_01 = ({ limit = 3 }: CasesProps) => {
  const [contents, setContents] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [displayCount, setDisplayCount] = useState(limit)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const getWorks = async () => {
      try {
        const queries = {
          limit: 100, // より多くの記事を取得
          ...(activeCategory !== "all" && {
            filters: `category[equals]${activeCategory}`,
          }),
        }

        const data = await microcms.get({
          endpoint: "works",
          queries,
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
          setDisplayCount(limit)
          setHasMore(data.contents.length > limit && data.contents.length > 3)
        } else {
          console.error("Unexpected data format:", data)
        }
      } catch (error) {
        console.error("Failed to fetch works:", error)
      }
      setLoading(false)
    }

    getWorks()
  }, [limit, activeCategory])

  return (
    <>
      <SectionContent className="">
        <section className="md:max-w-[1200px] mx-auto">
          {/* <ContentHeadline
            enTitle="Cases"
            mainTitle="ブログ"
            enTitleClassName=""
            titleClassName=""
          /> */}
          {/* <div className="flex flex-wrap justify-start md:justify-center gap-x-5 md:gap-20 rounded-full bg-accentColor text-white mx-auto px-5 md:px-20 w-fit">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-1 py-4 transition-all font-bold whitespace-nowrap ${
                  activeCategory === category.id
                    ? "text-white border-b-4 border-white"
                    : "hover:text-accentColor"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div> */}

          {loading ? (
            <div className="text-center">
              <h1>Loading...</h1>
            </div>
          ) : contents.length === 0 ? (
            <div className="text-center">
              <p>記事がありません</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
                {contents.slice(0, displayCount).map((post: Work) => (
                  <Link
                    key={post.id}
                    href={`/cases/${post.id}`}
                    className="w-full hover:opacity-90 transition-opacity"
                  >
                    <div className="w-full">
                      <div className="w-full max-h-[223px] overflow-hidden mt-5 md:mt-0 rounded-[10px]">
                        {post.image && (
                          <Image
                            src={post.image.url}
                            alt="制作物サムネイル"
                            width={370}
                            height={223}
                            className="w-full h-full rounded-t-2xl object-cover"
                          />
                        )}
                      </div>
                      <div className="bg-white py-6">
                        <p className="text-lg font-medium break-words min-h-14 text-accentColor">
                          {post.title}
                        </p>
                        <p className="mt-2 text-base line-clamp-2">
                          {post.content
                            .replace(/<[^>]*>/g, "")
                            .substring(0, 100)}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {Array.isArray(post.category) ? (
                            post.category.map((cat, index) => (
                              <span
                                key={index}
                                className="text-[#5f5f5f] text-xs"
                              >
                                #{cat}
                              </span>
                            ))
                          ) : (
                            <span className="text-[#5f5f5f] text-xs">
                              #{post.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {hasMore && (
                <div className="flex justify-center mt-[88px] md:mt-[112px]">
                  <LoadMoreButton
                    onClick={() => {
                      const newCount = displayCount + 6
                      setDisplayCount(newCount)
                      setHasMore(
                        newCount < contents.length && contents.length > 3
                      )
                    }}
                    className="text-accentColor border-accentColor"
                  />
                </div>
              )}
            </>
          )}
        </section>
      </SectionContent>
    </>
  )
}

export default Cases_01
