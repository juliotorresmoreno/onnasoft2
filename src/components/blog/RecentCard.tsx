"use server";
import { PostTranslation } from "@/types/models";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = Readonly<PostTranslation>;

export default async function RecentCard(article: BlogCardProps) {
  const content =
    article.translatedContent
      .split("\n")
      .find((line) => !line.startsWith("#") && line.trim() !== "")
      ?.substring(0, 100) || "";

  const postUrl = [
    article.locale,
    article.post?.category?.slug,
    article.post?.slug,
  ].join("/");
  return (
    <div className="blog-card bg-white shadow-sm flex flex-col md:flex-row gap-4 p-4">
      <Link href={`/${postUrl}`} className="flex-shrink-0" prefetch={false}>
        <Image
          priority
          src={article.post?.coverImage?.url || "/default-image.jpg"}
          alt="Securing Your API Endpoints"
          className="w-full md:w-[200px] h-48 md:h-auto object-cover rounded-lg cursor-pointer"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Link>
      <div className="rounded-lg flex-1">
        <div className="flex items-center mb-2">
          <span className="bg-primary-light text-white text-xs px-2 py-1 rounded-full">
            {article.post?.category?.name}
          </span>
          <span className="text-gray-500 text-sm ml-auto">
            {new Date(article.createdAt).toLocaleDateString(article.locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <h3 className="font-bold mb-2">
          <Link href={`/${postUrl}`}>{article.translatedTitle}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{content}...</p>
        <div className="flex items-center">
          <Image
            src={article.post?.author?.photo?.url || "/default-avatar.jpg"}
            alt="Author Avatar"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full mr-2 hidden md:block"
          />
          <span className="text-gray-700 text-sm">
            {article.post?.author.name || "Unknown Author"}
          </span>
          <a
            href={`/${postUrl}`}
            className="ml-auto text-primary hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
