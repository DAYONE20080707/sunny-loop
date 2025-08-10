"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { microcms } from "@/lib/microcms"
import { Work } from "@/types"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import MoreButton from "@/components/ui/button/MoreButton"
import SectionContent from "@/components/ui/frame/SectionContent"

interface BlogProps {
  limit?: number
}

const Blog_03 = ({ limit = 3 }: BlogProps) => {
  const [contents, setContents] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await microcms.get({
          endpoint: "blogs",
          queries: { limit },
        })
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents)
        } else {
          console.error("Unexpected data format:", data)
          setContents([])
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
        setContents([])
      }
      setLoading(false)
    }

    getBlogs()
  }, [limit])

  if (loading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (contents.length === 0) {
    return <div className="text-center py-10">記事がありません</div>
  }

  return (
    <SectionContent className="bg-bgLightBlue">
      <section className="md:max-w-[1200px] mx-auto space-y-16">
        <ContentHeadline
          enTitle="Topics"
          mainTitle={`SNSの力を、もっと身近に。\nヒントと情報をお届け。`}
          enTitleClassName="text-center"
          titleClassName="text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
          {contents.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="w-full block hover:opacity-80 transition-opacity duration-300"
            >
              <div className="w-full max-h-[223px] overflow-hidden rounded-[10px] mt-5 md:mt-0">
                {post.image && (
                  <Image
                    src={post.image.url}
                    alt={post.title}
                    width={370}
                    height={223}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold md:min-h-14 leading-[160%] tracking-[0.03em]">
                  {post.title}
                </p>
                {post.content && (
                  <p className="mt-2 text-base font-light line-clamp-2">
                    {post.content.replace(/<[^>]*>/g, "").substring(0, 80)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <MoreButton className="text-accentColor border-accentColor" />
        </div>
      </section>
    </SectionContent>
  )
}

export default Blog_03
