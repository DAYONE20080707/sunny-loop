// components/cases/Cases_01.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { microcms } from "@/lib/microcms"
import { Work, Tag } from "@/types"
import LoadMoreButton from "@/components/ui/button/LoadMoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"

interface CasesProps {
  limit?: number
}

const Cases_01 = ({ limit = 3 }: CasesProps) => {
  const [contents, setContents] = useState<Work[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [displayCount, setDisplayCount] = useState(limit)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        // tags API
        const tagsData = await microcms.get({
          endpoint: "tags",
          queries: { limit: 100 }
        })
        if (tagsData && Array.isArray(tagsData.contents)) {
          setTags(tagsData.contents)
        } else {
          console.error("Unexpected tags data format:", tagsData)
        }

        // cases API
        const queries = {
          limit: 100,
          ...(activeCategory !== "all" && {
            filters: `category[equals]${activeCategory}`,
          }),
        }
        const casesData = await microcms.get({
          endpoint: "cases",
          queries,
        })
        if (casesData && Array.isArray(casesData.contents)) {
          setContents(casesData.contents)
          setDisplayCount(limit)
          setHasMore(casesData.contents.length > limit && casesData.contents.length > 3)
        } else {
          console.error("Unexpected cases data format:", casesData)
        }
      } catch (error) {
        console.error("Failed to fetch data:", error)
      }
      setLoading(false)
    }

    getData()
  }, [limit, activeCategory])

  // タグIDから名前を取得するヘルパー
  const getTagName = (tagId: string) => {
    const found = tags.find((t) => t.id === tagId || t.name === tagId)
    return found ? found.name : tagId
  }

  return (
    <SectionContent>
      <section className="md:max-w-[1200px] mx-auto">
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
                <div
                  key={post.id}
                  className="w-full transition-opacity"
                >
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
                    <p className="h-8 text-lg font-medium break-words text-accentColor">
                      {post.title.replace(/<[^>]*>/g, "").substring(0, 100)}
                    </p>
                    <p className="mt-2 text-base line-clamp-2">
                      {post.content.replace(/<[^>]*>/g, "").substring(0, 100)}
                    </p>

                    {/* カテゴリー */}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {Array.isArray(post.category) ? (
                        post.category.map((cat, index) => (
                          <span
                            key={`cat-${index}`}
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

                      {/* タグ（tags APIから名前を取得） */}
                      {Array.isArray(post.tag) &&
                        post.tag.map((t, index) => (
                          <span
                            key={`tag-${index}`}
                            className="text-[#999999] text-xs"
                          >
                            #{getTagName(t.name)}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-[88px] md:mt-[112px]">
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

export default Cases_01
