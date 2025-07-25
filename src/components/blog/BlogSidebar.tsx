"use server";

import { getCategories } from "@/services/categories";
import Link from "next/link";

interface BlogSidebarProps {
  readonly language: string;
}

export default async function BlogSidebar({ language }: BlogSidebarProps) {
  const { docs: categories } = await getCategories({
    locale: language,
    limit: 20,
  });
  return (
    <div
      id="sidebar"
      className="sidebar bg-white p-6 rounded-lg shadow-sm md:w-1/4 md:mr-8 md:static"
    >
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h3 className="text-xl font-bold">Categories</h3>
        <button id="close-sidebar" className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <h3 className="text-xl font-bold mb-6 hidden md:block">Categories</h3>
      <ul className="space-y-4">
        {categories
          .filter(
            ({ post_count }) => typeof post_count === "number" && post_count > 0
          )
          .map(({ translations = [], post_count, slug }) => (
            <li
              key={translations[0]?.id}
              className="category-item flex items-center justify-between"
            >
              <Link
                href={`/${language}/${slug}`}
                className="text-gray-700 hover:text-primary"
              >
                {translations[0].translated_name}
              </Link>
              <span className="text-gray-500 text-sm">({post_count})</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
