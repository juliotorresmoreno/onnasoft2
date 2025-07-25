export function getImageUrl(filename?: string): string {
  if (!filename) {
    return "/default-image.jpg";
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://onnasoft.us";
  return `${baseUrl}/media/file/${filename}`;
}
