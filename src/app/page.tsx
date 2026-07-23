import { getArticles } from "@/services/api";
import { TopicCard } from "@/components/TopicCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const articles = await getArticles();

  const topics = Array.from(
    new Map(articles.map((a) => [a.topic, a])).values()
  );

  return (
    <div>
      <section className="mb-12">
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
          Multi-Project Pipeline laboratory
        </h1>
        <p className="max-w-2xl text-lg text-gray-600">
          Demo flow: frontend and backend paired changes across repositories.
          This PR waits for the matching backend branch before running E2E.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            GitHub Actions
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            GitLab CI
          </span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
            Docker
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            Playwright
          </span>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-800">Topics:</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((article) => (
            <TopicCard
              key={article.slug}
              title={article.title}
              slug={article.slug}
              topic={article.topic}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
