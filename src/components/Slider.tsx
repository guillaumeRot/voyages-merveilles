"use client";

import { Article } from "@/payload-types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "./Header";

interface SliderProps {
  articles: Article[] | undefined;
}

interface RichTextContent {
  root: {
    children: Array<{
      children: Array<{
        text: string;
      }>;
    }>;
  };
}

function isRichTextContent(content: unknown): content is RichTextContent {
  const contentObj = content as { root?: { children?: unknown[] } };
  return (
    typeof content === "object" &&
    content !== null &&
    "root" in content &&
    contentObj.root !== undefined &&
    "children" in contentObj.root
  );
}

export const Slider = ({ articles }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!articles?.length) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [articles?.length]);

  if (!articles?.length) return null;

  return (
    <div className="relative h-screen w-full">
      {/* Images de fond avec transition */}
      {articles.map((article, index) => (
        <div
          key={article.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${
                typeof article.mainImage !== "number"
                  ? article.mainImage.url
                  : ""
              }')`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}

      <Header />

      {/* Contenu du slider */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
          {articles[currentSlide].title}
        </h1>
        {/* <p className="text-xl md:text-2xl text-white max-w-2xl font-lora mb-8">
          {isRichTextContent(articles[currentSlide].content) &&
            articles[currentSlide].content.root.children[0]?.children[0]?.text}
        </p> */}
        <Link
          href={`/article/${articles[currentSlide].id}`}
          className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition font-montserrat"
        >
          Lire l&apos;article
        </Link>
      </div>

      {/* Navigation du slider */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
