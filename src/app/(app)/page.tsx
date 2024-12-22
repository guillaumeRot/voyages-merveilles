import { ArticlesSection } from "@/components/ArticlesSection";
import { Slider } from "@/components/Slider";
import { getAllArticles } from "@/features/articles.action";

export default async function Home() {
  const result = await getAllArticles({});
  const articles = result?.data;

  if (!articles) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Slider articles={articles} />

      <main>
        <div className="max-w-5xl mx-auto px-4">
          <ArticlesSection articles={articles} />
        </div>
        <footer className="bg-zinc-900 py-12">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="flex flex-col items-center justify-center">
              <p className="text-zinc-400 text-sm mb-4">
                © 2024 Voyages Nature. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
