import { microcms } from "@/lib/microcms";
import { Work } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

interface CasesDetailProps {
  params: {
    id: string;
  };
}

export default async function CasesDetail_02({ params }: CasesDetailProps) {
  const { id } = params;

  try {
    const post = await microcms.get({
      endpoint: "works",
      contentId: id,
    });

    // 関連記事を取得（同じカテゴリーの記事を5件）
    const relatedPosts = await microcms
      .get({
        endpoint: "works",
        queries: {
          filters: Array.isArray(post.category)
            ? `category[contains]${post.category[0]}`
            : `category[equals]${post.category}`,
          orders: "-publishedAt",
          limit: 6, // 現在の記事を除くため6件取得
        },
      })
      .then((res) => res.contents.filter((p: Work) => p.id !== id).slice(0, 5)); // 現在の記事を除外して5件に制限

    if (!post) {
      notFound();
    }

    return (
      <div className="bg-bgLightBlue pb-24">
        ↓実データ表示用
        {post.image && (
          <div className="w-full h-[40vh] max-h-[480px] relative">
            <Image
              src={post.image.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="max-w-[1200px] mx-auto mt-10 md:mt-24 px-3">
          <article className="bg-white p-5 md:p-16">
            <div className="">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
                <div className="flex gap-2">
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
                <time className="text-gray-500 text-sm">
                  {new Date(post.createdAt)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, ".")}
                </time>
              </div>
              <h1 className="text-xl md:text-3xl font-bold mb-10 md:mb-24 pb-10 border-b border-accentColor">
                {post.title}
              </h1>
              <div
                className="prose max-w-none prose-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {relatedPosts.length > 0 && (
            <section className="mt-10 md:mt-24 bg-white p-5 md:p-16">
              <h2 className="text-2xl mb-6 text-accentColor">関連記事</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {relatedPosts.map((relatedPost: Work) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="bg-white overflow-hidden duration-300"
                  >
                    {relatedPost.image && (
                      <div className="relative w-full pt-[56.25%] rounded-[15px] overflow-hidden md:h-[180px]">
                        <Image
                          src={relatedPost.image.url}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {/* <div className="p-4">
                      <time className="text-xs block">
                        {new Date(relatedPost.createdAt)
                          .toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, ".")}
                      </time>
                      <p className="text-lg font-semibold line-clamp-2 mt-1">
                        {relatedPost.title}
                      </p>
                    </div> */}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
        {/* ↓Admin用仮データ */}
        <div className="w-full h-[40vh] max-h-[480px] relative">
          <Image
            src="/service/service1.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-[1200px] mx-auto mt-10 md:mt-24 px-3">
          <article className="bg-white p-5 md:p-16">
            <div className="">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
                <div className="flex gap-2">
                  <span className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1">
                    カテゴリ
                  </span>
                </div>
                <time className="text-gray-500 text-sm">0000.00.00</time>
              </div>
              <h1 className="text-xl md:text-3xl font-bold mb-10 md:mb-24 pb-10 border-b border-accentColor">
                タイトルが入ります
              </h1>
              <div className="space-y-6 prose max-w-none prose-headings:font-bold prose-h2:text-[24px] prose-h2:mb-6 prose-h2:mt-12 prose-h2:font-medium prose-h2:leading-[160%] prose-h2:text-accentColor prose-h2:font-noto prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-p:leading-relaxed prose-p:text-base prose-li:text-base prose-li:leading-relaxed prose-ul:mt-4 prose-ul:mb-6 prose-ul:pl-6 prose-ol:mt-4 prose-ol:mb-6 prose-ol:list-decimal prose-ol:pl-6 prose-ul:list-disc prose-ul:marker:text-accentColor prose-ul:marker:text-[8px]">
                <p>
                  本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。
                </p>
                <p>
                  本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。本文はいります。
                </p>
              </div>
            </div>
          </article>

          <section className="mt-10 md:mt-24 bg-white p-5 md:p-16">
            <h2 className="text-2xl mb-6 text-accentColor">関連記事</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              <Link
                key=""
                href=""
                className="bg-white overflow-hidden duration-300"
              >
                <div className="relative w-full pt-[56.25%] rounded-[15px] overflow-hidden md:h-[180px]">
                  <Image
                    src="/service/service1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <time className="text-xs block">0000.00.00</time>
                  <p className="text-lg font-semibold line-clamp-2 mt-1">
                    関連記事タイトル
                  </p>
                </div>
              </Link>
              <Link
                key=""
                href=""
                className="bg-white overflow-hidden duration-300"
              >
                <div className="relative w-full pt-[56.25%] rounded-[15px] overflow-hidden md:h-[180px]">
                  <Image
                    src="/service/service1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <time className="text-xs block">0000.00.00</time>
                  <p className="text-lg font-semibold line-clamp-2 mt-1">
                    関連記事タイトル
                  </p>
                </div>
              </Link>
              <Link
                key=""
                href=""
                className="bg-white overflow-hidden duration-300"
              >
                <div className="relative w-full pt-[56.25%] rounded-[15px] overflow-hidden md:h-[180px]">
                  <Image
                    src="/service/service1.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <time className="text-xs block">0000.00.00</time>
                  <p className="text-lg font-semibold line-clamp-2 mt-1">
                    関連記事タイトル
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    notFound();
  }
}
