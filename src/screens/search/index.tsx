"use server";

import BlogLayout from "@/components/blog/BlogLayout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { search } from "@/services/search-article";
import { redirect } from "next/navigation";
export interface SearchPageProps {
  readonly language: string;
  readonly pathname: string;
  readonly currentPage: number;
  readonly query: string;
}

export default async function SearchPage({
  language,
  pathname,
  currentPage,
  query,
}: SearchPageProps) {
  if (!query) {
    redirect(`${language}/blog`);
  }

  const {
    docs: articles,
    page,
    totalPages,
  } = await search({
    search: query,
    page: currentPage,
    locale: language,
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar query={query} language={language} pathname={pathname} />
      <main>
        <BlogLayout
          language={language}
          articles={articles}
          currentPage={page}
          totalPages={totalPages}
        />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
