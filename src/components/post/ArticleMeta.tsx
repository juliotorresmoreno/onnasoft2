"use server";

import { getImageUrl } from "@/lib/image";
import { Post } from "@/types/models";
import Image from "next/image";
import Link from "next/link";

interface ArticleMetaProps {
  readonly article: Post;
}

export default async function ArticleMeta({ article }: ArticleMetaProps) {
  const translation = article.translations?.[0];

  return (
    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
      <div className="flex items-center flex-1 min-w-[200px]">
        <Link
          href={article?.author?.linkedIn || "#"}
          className="flex items-center hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex">
            <Image
              width={40}
              height={40}
              className="h-10 w-10 rounded-full mr-3"
              src={getImageUrl(article?.author?.photo?.filename)}
              alt="Author"
            />

            <div>
              <p className="font-medium text-gray-900">
                {article?.author?.name || "John Doe"}
              </p>
              <p className="text-gray-600">
                {article?.author?.position || "Software Engineer"}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex space-x-6 flex-col sm:flex-row">
        <div className="flex items-center">
          <i className="fas fa-calendar mr-2 text-gray-400"></i>
          <span>
            {new Date(article?.published_date ?? "").toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-clock mr-2 text-gray-400"></i>
          <span>
            {translation?.translated_content
              ? Math.ceil(
                  translation.translated_content.split(" ").length / 200
                )
              : 0}{" "}
            min read
          </span>
        </div>
      </div>
    </div>
  );
}
