import Link from "next/link";

interface TopicCardProps {
  title: string;
  slug: string;
  topic: string;
}

const topicColors: Record<string, string> = {
  Introduction: "border-l-blue-500 bg-blue-50",
  Architecture: "border-l-emerald-500 bg-emerald-50",
  "GitHub Actions": "border-l-orange-500 bg-orange-50",
  GitLab: "border-l-purple-500 bg-purple-50",
  Docker: "border-l-cyan-500 bg-cyan-50",
  Testing: "border-l-rose-500 bg-rose-50",
  Analysis: "border-l-amber-500 bg-amber-50",
};

export function TopicCard({ title, slug, topic }: TopicCardProps) {
  const colors = topicColors[topic] || "border-l-gray-500 bg-gray-50";

  return (
    <Link
      href={`/articles/${slug}`}
      className={`group block rounded-lg border border-l-4 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${colors}`}
    >
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {topic}
      </p>
      <h2 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-700">
        {title}
      </h2>
    </Link>
  );
}
