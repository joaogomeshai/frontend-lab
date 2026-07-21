import { getArticles, getArticleBySlug } from "@/services/api";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }

  if (!article) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-blue-600 hover:underline"
      >
        &larr; Back to topics
      </Link>
      <h1 className="mb-2 text-3xl font-bold">{article.title}</h1>
      <p className="mb-8 text-sm text-gray-500">Topic: {article.topic}</p>
      <div className="prose prose-gray max-w-none whitespace-pre-line">
        {article.content}
      </div>
    </article>
  );
}
