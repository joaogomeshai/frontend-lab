import Link from "next/link";

interface TopicCardProps {
  title: string;
  slug: string;
  topic: string;
}

export function TopicCard({ title, slug, topic }: TopicCardProps) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-blue-600">
        {topic}
      </p>
      <h2 className="text-lg font-semibold">{title}</h2>
    </Link>
  );
}
