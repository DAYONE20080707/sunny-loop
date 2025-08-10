import { microcms } from "@/lib/microcms"
import { Work } from "@/types"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { NavigationArrow } from "@/components/ui/icons/NavigationArrow"
import PageContent from "@/components/ui/frame/PageContent"
import SectionContent from "@/components/ui/frame/SectionContent"
import BreadcrumbContainer from "@/components/ui/module/BreadcrumbContainer"
import Aside_01 from "@/components/ui/module/aside/Aside_01"

interface CasesDetailProps {
  params: {
    id: string
  }
}

export default async function CasesDetail_01({ params }: CasesDetailProps) {
  const { id } = params

  try {
    const post = await microcms.get({
      endpoint: "works",
      contentId: id,
    })

    // 前後の記事を取得
    const [prevPost, nextPost] = await Promise.all([
      microcms
        .get({
          endpoint: "cases",
          queries: {
            orders: "-publishedAt",
            limit: 1,
            filters: `publishedAt[less_than]${post.publishedAt}`,
          },
        })
        .then((res) => res.contents[0]),
      microcms
        .get({
          endpoint: "cases",
          queries: {
            orders: "publishedAt",
            limit: 1,
            filters: `publishedAt[greater_than]${post.publishedAt}`,
          },
        })
        .then((res) => res.contents[0]),
    ])

    if (!post) {
      notFound()
    }

    return (
      <>
        {/* ↓実データ表示用 */}
        <PageContent className="">
          <BreadcrumbContainer
            items={[
              { name: "導入事例", href: "/cases" },
              { name: post.title },
            ]}
          />
          <SectionContent className="max-w-[1240px] !pt-10">
            <article className="bg-white">
            <h1 className="text-2xl md:text-[32px] font-medium mb-6 leading-[180%]">{post.title}</h1>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-2">
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(post.category) ? (
                    post.category.map((cat: string, index: number) => (
                      <span
                        key={index}
                        className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1"
                      >
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1">
                      {post.category}
                    </span>
                  )}
                </div>
                <time className="text-base">
                  {new Date(post.createdAt)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, ".")}
                </time>
              </div>
              {post.image && (
                <div className="w-full h-[250px] md:h-[586px] relative mb-10 md:mb-24">
                  <Image
                    src={post.image.url}
                    alt={post.title}
                    fill
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
              )}
              <div
                className="prose max-w-none prose-headings:font-bold prose-h2:text-[24px] prose-h2:mb-6 prose-h2:mt-12 prose-h2:font-medium prose-h2:leading-[160%] prose-h2:text-accentColor prose-h2:font-noto prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-p:leading-relaxed prose-p:text-base prose-li:text-base prose-li:leading-relaxed prose-ul:mt-4 prose-ul:mb-6 prose-ul:pl-6 prose-ol:mt-4 prose-ol:mb-6 prose-ol:list-decimal prose-ol:pl-6 prose-ul:list-disc prose-ul:marker:text-accentColor prose-ul:marker:text-[8px]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <nav className="mt-24 border-t border-b border-black py-4">
              <div className="flex justify-between items-center relative">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.id}`}
                    className="group flex items-center text-black hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
                  >
                    <NavigationArrow
                      direction="left"
                      className="text-accentColor"
                    />
                    <div>
                      <p className="text-base mb-1 font-bold font-lato text-accentColor">PREV</p>
                      <p className="text-base line-clamp-2">
                        {prevPost.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="w-[calc(50%-20px)]" />
                )}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-16 bg-black"></div>

                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.id}`}
                    className="group flex items-center justify-end text-black hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
                  >
                    <div className="text-left">
                      <p className="text-base mb-1 font-bold font-lato text-accentColor">NEXT</p>
                      <p className="text-base line-clamp-2">
                        {nextPost.title}
                      </p>
                    </div>
                    <NavigationArrow
                      direction="right"
                      className="text-accentColor"
                    />
                  </Link>
                ) : (
                  <div className="w-[calc(50%-20px)]" />
                )}
              </div>
            </nav>
          </SectionContent>
          <Aside_01/>
        </PageContent>
        {/* ↓Admin用仮データ */}
        {/* <div className="max-w-[1200px] mx-auto py-16 px-4">
          <article className="bg-white">
            <h1 className="text-3xl font-bold mb-6">タイトルが入ります</h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-2">
              <div className="flex flex-wrap gap-2">
                <span className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1">
                  カテゴリ
                </span>
              </div>
              <time className="text-base">0000.00.00</time>
            </div>

            <div className="w-full h-[400px] relative mb-24">
              <Image
                src="/service/service1.jpg"
                alt=""
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 prose max-w-none prose-headings:font-bold prose-h2:text-[24px] prose-h2:mb-6 prose-h2:mt-12 prose-h2:font-medium prose-h2:leading-[160%] prose-h2:text-accentColor prose-h2:font-noto prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-p:leading-relaxed prose-p:text-base prose-li:text-base prose-li:leading-relaxed prose-ul:mt-4 prose-ul:mb-6 prose-ul:pl-6 prose-ol:mt-4 prose-ol:mb-6 prose-ol:list-decimal prose-ol:pl-6 prose-ul:list-disc prose-ul:marker:text-accentColor prose-ul:marker:text-[8px]">
              <p>
                本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。
              </p>
              <p>
                本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。
              </p>
            </div>
          </article>

          <nav className="mt-24 border-t border-b border-black py-4">
            <div className="flex justify-between items-center relative">
              <Link
                href=""
                className="group flex items-center text-black hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
              >
                <NavigationArrow
                  direction="left"
                  className="text-accentColor"
                />
                <div>
                  <p className="text-base mb-1 font-bold font-lato">PREV</p>
                  <p className="text-lg font-semibold line-clamp-2">
                    前の記事のタイトルが入ります
                  </p>
                </div>
              </Link>


              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-16 bg-black"></div>

              <Link
                href=""
                className="group flex items-center justify-end text-black hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
              >
                <div className="text-left">
                  <p className="text-base mb-1 font-bold font-lato">NEXT</p>
                  <p className="text-lg font-semibold line-clamp-2">
                    次の記事のタイトルが入ります
                  </p>
                </div>
                <NavigationArrow
                  direction="right"
                  className="text-accentColor"
                />
              </Link>

            </div>
          </nav>
        </div> */}
      </>
    )
  } catch (error) {
    console.error("Failed to fetch blog post:", error)
    notFound()
  }
}
