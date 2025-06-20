import { CoverImage, PostTranslation } from "@/types/models";
import { getAuthToken } from "./auth";
import { FilterOperator, FilterValue } from "@/types/filters";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;
const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL || baseUrl;
const PAYLOAD_USERNAME = process.env.PAYLOAD_USERNAME!;
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD!;

export interface PostTranslationResponse {
  docs: PostTranslation[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

type FilterKeys = keyof Omit<PostTranslation, "post"> | "post";
type Filters = Partial<
  Record<FilterKeys, FilterValue | { value: FilterValue; op: FilterOperator }>
>;

type SelectFields = Partial<Record<keyof PostTranslation, boolean>> & {
  post?: Partial<Record<keyof PostTranslation["post"], boolean>>;
};

export interface QueryParams {
  select?: SelectFields;
  where?: Filters;
  limit?: number;
  depth?: number;
  page?: number;
}

function appendWhereParams(url: URL, where?: Filters) {
  if (!where) return;
  for (const [key, rawValue] of Object.entries(where)) {
    if (rawValue == null || rawValue === "") continue;

    const { value, op } =
      typeof rawValue === "object" && "value" in rawValue
        ? rawValue
        : { value: rawValue, op: "equals" };

    url.searchParams.append(`where[${key}][${op}]`, String(value));
  }
}

function appendSelectParams(url: URL, select?: SelectFields) {
  if (!select) return;
  for (const [field, include] of Object.entries(select)) {
    if (!include) continue;
    if (typeof include === "object") {
      for (const [nestedField, nestedInclude] of Object.entries(include)) {
        if (nestedInclude) {
          url.searchParams.append(`select[${field}][${nestedField}]`, "true");
        }
      }
    } else {
      url.searchParams.append(`select[${field}]`, "true");
    }
  }
}

function buildQueryParams(
  url: URL,
  where?: Filters,
  select?: SelectFields,
  limit?: number,
  depth?: number,
  page: number = 1
) {
  appendWhereParams(url, where);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (depth) url.searchParams.append("depth", depth.toString());
  appendSelectParams(url, select);

  if (page) {
    url.searchParams.append("page", page.toString());
  }
}

function mapDocUrls(doc: PostTranslation, baseUrl: string): PostTranslation {
  const post = doc.post;
  if (!post) return { ...doc };

  const updateImageUrls = (image: CoverImage | null) => {
    if (!image) return image;
    let url = image.url || "";
    let thumbnailURL = image.thumbnailURL || "";
    if (url.startsWith("/")) url = `${baseUrl}${url}`;
    if (thumbnailURL && thumbnailURL.startsWith("/"))
      thumbnailURL = `${baseUrl}${thumbnailURL}`;
    return { ...image, url, thumbnailURL };
  };

  const newPost = { ...post };

  if (post.coverImage) {
    newPost.coverImage = updateImageUrls(post.coverImage);
  }

  if (post.coverThumbnail) {
    newPost.coverThumbnail = updateImageUrls(post.coverThumbnail);
  }

  if (post.author && post.author?.photo) {
    let url = post.author.photo.url || "";
    if (url.startsWith("/")) url = `${baseUrl}${url}`;
    newPost.author = {
      ...post.author,
      photo: {
        ...post.author.photo,
        url,
        thumbnailURL: post.author.photo.thumbnailURL || null,
      },
    };
  }

  return { ...doc, post: newPost };
}

export async function getPostTranslations({
  select,
  where,
  depth,
  limit,
  page = 1,
}: QueryParams): Promise<PostTranslationResponse> {
  const token = await getAuthToken(PAYLOAD_USERNAME, PAYLOAD_PASSWORD);
  const url = new URL(`${baseUrl}/api/post-translations`);

  buildQueryParams(url, where, select, limit, depth, page);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Error fetching post translations");

  const data: PostTranslationResponse = await res.json();

  return {
    ...data,
    docs: data.docs.map((doc) => mapDocUrls(doc, mediaUrl)),
  };
}
