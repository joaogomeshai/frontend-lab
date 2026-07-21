import { Article, Topic } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

async function fetchJson<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export function getArticles(): Promise<Article[]> {
  return fetchJson<Article[]>("/articles");
}

export function getArticleBySlug(slug: string): Promise<Article> {
  return fetchJson<Article>(`/articles/${slug}`);
}

export function getTopics(): Promise<Topic[]> {
  return fetchJson<Topic[]>("/topics");
}
