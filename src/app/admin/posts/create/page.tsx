"use client";

import BlogPostForm from "@/components/admin/BlogPostForm";
import DashboardLayout from "@/components/admin/DashboardLayout";

export default function PostsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto flex flex-1">
        <BlogPostForm />
      </div>
    </DashboardLayout>
  );
}
