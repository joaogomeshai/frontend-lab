import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multi-Project Pipeline Lab",
  description: "A learning laboratory for multi-project CI/CD pipelines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="border-b bg-white">
          <div className="mx-auto max-w-4xl px-4 py-4">
            <a href="/" className="text-xl font-bold tracking-tight">
              Multi-Project Pipeline Lab
            </a>
          </div>
        </nav>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
