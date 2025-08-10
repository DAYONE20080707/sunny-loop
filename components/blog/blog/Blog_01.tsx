"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { microcms } from "@/lib/microcms"
import { Work } from "@/types"
import LoadMoreButton from "@/components/ui/button/LoadMoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"

interface BlogProps {
  limit?: number
}

const Blog_01 = ({ limit = 3 }: BlogProps) => {
  const [contents, setContents] = useState<Work[]>([])
  const [allCategories, setAllCategories] = useState<{ id: string; name: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [displayCount, setDisplayCount] = useState(limit)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        // blogs 全件取得（カテゴリ一覧生成用）
        const blogsData = await microcms.get({
          endpoint: "blogs",
          queries: { limit: 100 },
        })

        if (blogsData && Array.isArray(blogsData.contents)) {
          // カテゴリ一覧作成
          const categorySet = new Set<string>()
          const categoryList: { id: string; name: string }[] = []
          blogsData.contents.forEach((post: Work) => {
            if (Array.isArray(post.category)) {
              post.category.forEach((cat) => {
                if (!categorySet.has(cat)) {
                  categorySet.add(cat)
                  categoryList.push({ id: cat, name: cat })
                }
              })
            } else if (post.category) {
              if (!categorySet.has(post.category)) {
                categorySet.add(post.category)
                categoryList.push({ id: post.category, name: post.category })
              }
            }
          })
          setAllCategories([{ id: "all", name: "すべて" }, ...categoryList])

          // 記事データ取得
          const queries = {
            limit: 100,
            ...(activeCategory !== "all" && {
              filters: `category[equals]${activeCategory}`,
            }),
          }
          const filteredData = await microcms.get({
            endpoint: "blogs",
            queries,
          })

          if (filteredData && Array.isArray(filteredData.contents)) {
            setContents(filteredData.contents)
            setDisplayCount(limit)
            setHasMore(filteredData.contents.length > limit && filteredData.contents.length > 3)
          } else {
            setContents([])
          }
        } else {
          setAllCategories([])
          setContents([])
        }
      } catch (error) {
        console.error("記事取得失敗:", error)
      }
      setLoading(false)
    }

    getData()
  }, [limit, activeCategory])

  return (
    <SectionContent>
      <section className="md:max-w-[1200px] mx-auto">
        {/* カテゴリータブ */}
        <div className="flex flex-wrap justify-start md:justify-center rounded-full mx-auto px-5 md:px-20 w-fit bg-accentColor divide-x divide-white/30 overflow-hidden">
          {allCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 transition-all font-bold whitespace-nowrap text-white
                ${
                  activeCategory === category.id
                    ? "bg-accentColor opacity-80"
                    : "bg-accentColor hover:opacity-80"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* コンテンツ */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mt-16">
              {contents.slice(0, displayCount).map((post: Work) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="w-full hover:opacity-90 transition-opacity"
                >
                  <div className="w-full">
                    <div className="w-full max-h-[223px] overflow-hidden mt-5 md:mt-0 rounded-t-2xl">
                      {post.image && (
                        <Image
                          src={post.image.url}
                          alt="制作物サムネイル"
                          width={370}
                          height={223}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="bg-white py-6">
                      <p className="text-lg font-medium break-words min-h-14 text-accentColor">
                        {post.title}
                      </p>
                      <p className="mt-2 text-base line-clamp-2">
                        {post.content.replace(/<[^>]*>/g, "").substring(0, 100)}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {Array.isArray(post.category) ? (
                          post.category.map((cat, index) => (
                            <span
                              key={index}
                              className="text-[#5f5f5f] text-xs leading-[140%]"
                            >
                              #{cat}
                            </span>
                          ))
                        ) : (
                          <span className="text-[#5f5f5f] text-xs leading-[140%]">
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
              <div className="flex justify-center mt-16 md:mt-[93px]">
                <LoadMoreButton
                  onClick={() => {
                    const newCount = displayCount + 6
                    setDisplayCount(newCount)
                    setHasMore(newCount < contents.length && contents.length > 3)
                  }}
                  className="text-accentColor border-accentColor"
                />
              </div>
            )}
          </>
        )}
      </section>
    </SectionContent>
  )
}

export default Blog_01
