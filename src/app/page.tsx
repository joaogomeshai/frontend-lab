import { getArticles } from "@/services/api";
import { TopicCard } from "@/components/TopicCard";

export default async function HomePage() {
  const articles = await getArticles();

  const topics = Array.from(
    new Map(articles.map((a) => [a.topic, a])).values()
  );

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Topics</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {topics.map((article) => (
          <TopicCard
            key={article.slug}
            title={article.title}
            slug={article.slug}
            topic={article.topic}
          />
        ))}
      </div>
    </div>
  );
}
