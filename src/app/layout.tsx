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
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
        <nav className="border-b border-blue-100 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <a
                href="/"
                className="text-xl font-bold tracking-tight text-blue-900 transition hover:text-blue-600"
              >
                Multi-Project Pipeline Lab
              </a>
              <a
                href="/chat"
                className="text-sm text-blue-600 transition hover:text-blue-800"
              >
                Chat
              </a>
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
