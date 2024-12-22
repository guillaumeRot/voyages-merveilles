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

          {/* Footer */}
          <footer className="bg-green-50 dark:bg-slate-900 py-8 border-t border-green-100 dark:border-green-800">
            <div className="max-w-4xl mx-auto px-4 text-center text-green-600 dark:text-green-400">
              <p>© 2024 Voyages Nature. Tous droits réservés.</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
