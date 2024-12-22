"use client";

import { Article } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

interface ArticlesSectionProps {
  articles: Article[];
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-4">
        <section className="mb-20 pt-20">
          <h2 className="font-rubik text-3xl font-light text-center mb-12 text-green-800 dark:text-green-100">
            Articles récents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group">
                <Link href={`/article/${article.id}`} className="block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={
                        typeof article.mainImage !== "number"
                          ? (article.mainImage.url ?? "/placeholder.jpg")
                          : "/placeholder.jpg"
                      }
                      alt={article.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-white text-sm">
                        {article.createdAt}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-green-600 text-sm">
                    {article.destination}
                  </p>
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/destinations"
              className="inline-block px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition rounded-lg"
            >
              Voir toutes les destinations ➜
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
