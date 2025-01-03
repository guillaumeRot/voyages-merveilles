"use client";

import { Article } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

interface ArticlesSectionProps {
  articles: Article[];
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <main className="py-20">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-center mb-12">
              <div className="flex-grow h-[1px] bg-black max-w-[100px]"></div>
              <h2 className="font-rubik text-3xl font-light text-black px-8">
                Articles récents
              </h2>
              <div className="flex-grow h-[1px] bg-black max-w-[100px]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                          {formatDate(article.createdAt)}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {article.title}
                    </h3>
                    <p className="text-black text-sm">{article.destination}</p>
                  </Link>
                </article>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/destinations"
                className="inline-block px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition rounded-lg"
              >
                Voir tous les articles ➜
              </Link>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </main>
  );
}
