"use client";

import { Article } from "@/payload-types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "./Header";

interface RichTextNode {
  text: string;
  type: string;
  version: number;
}

interface RichTextParagraph {
  type: string;
  version: number;
  children: RichTextNode[];
  direction: "ltr";
  format: string;
  indent: number;
}

interface RichTextContent {
  root: {
    type: string;
    version: number;
    children: RichTextParagraph[];
    direction: "ltr";
    format: string;
    indent: number;
  };
}

const SLIDER_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Les trésors naturels du Costa Rica",
    content: {
      root: {
        type: "root",
        version: 1,
        direction: "ltr",
        format: "",
        indent: 0,
        children: [
          {
            type: "paragraph",
            version: 1,
            direction: "ltr",
            format: "",
            indent: 0,
            children: [
              {
                text: "Découvrez la biodiversité exceptionnelle de l'Amérique Centrale",
                type: "text",
                version: 1,
              },
            ],
          },
        ],
      },
    },
    mainImage: {
      id: 1,
      url: "/images/paris.jpg",
      alt: "Costa Rica",
      filename: "paris.jpg",
      mimeType: "image/jpeg",
      filesize: 1000,
      width: 1920,
      height: 1080,
      createdAt: "2024-04-15T00:00:00.000Z",
      updatedAt: "2024-04-15T00:00:00.000Z",
    },
    author: {
      id: 1,
      email: "admin@example.com",
      createdAt: "2024-04-15T00:00:00.000Z",
      updatedAt: "2024-04-15T00:00:00.000Z",
    },
    createdAt: "2024-04-15T00:00:00.000Z",
    updatedAt: "2024-04-15T00:00:00.000Z",
  },
  {
    id: 2,
    title: "Randonnée dans les Fjords",
    content: {
      root: {
        type: "root",
        version: 1,
        direction: "ltr",
        format: "",
        indent: 0,
        children: [
          {
            type: "paragraph",
            version: 1,
            direction: "ltr",
            format: "",
            indent: 0,
            children: [
              {
                text: "Une aventure inoubliable au cœur de la Norvège sauvage",
                type: "text",
                version: 1,
              },
            ],
          },
        ],
      },
    },
    mainImage: {
      id: 2,
      url: "/images/paris.jpg",
      alt: "Norvège",
      filename: "paris.jpg",
      mimeType: "image/jpeg",
      filesize: 1000,
      width: 1920,
      height: 1080,
      createdAt: "2024-04-10T00:00:00.000Z",
      updatedAt: "2024-04-10T00:00:00.000Z",
    },
    author: {
      id: 2,
      email: "admin@example.com",
      createdAt: "2024-04-10T00:00:00.000Z",
      updatedAt: "2024-04-10T00:00:00.000Z",
    },
    createdAt: "2024-04-10T00:00:00.000Z",
    updatedAt: "2024-04-10T00:00:00.000Z",
  },
  {
    id: 3,
    title: "Les Merveilles du Tongariro",
    content: {
      root: {
        type: "root",
        version: 1,
        direction: "ltr",
        format: "",
        indent: 0,
        children: [
          {
            type: "paragraph",
            version: 1,
            direction: "ltr",
            format: "",
            indent: 0,
            children: [
              {
                text: "Exploration des paysages volcaniques de Nouvelle-Zélande",
                type: "text",
                version: 1,
              },
            ],
          },
        ],
      },
    },
    mainImage: {
      id: 3,
      url: "/images/paris.jpg",
      alt: "Nouvelle-Zélande",
      filename: "paris.jpg",
      mimeType: "image/jpeg",
      filesize: 1000,
      width: 1920,
      height: 1080,
      createdAt: "2024-04-05T00:00:00.000Z",
      updatedAt: "2024-04-05T00:00:00.000Z",
    },
    author: {
      id: 3,
      email: "admin@example.com",
      createdAt: "2024-04-05T00:00:00.000Z",
      updatedAt: "2024-04-05T00:00:00.000Z",
    },
    createdAt: "2024-04-05T00:00:00.000Z",
    updatedAt: "2024-04-05T00:00:00.000Z",
  },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_ARTICLES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Images de fond avec transition */}
      {SLIDER_ARTICLES.map((article, index) => (
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
          {SLIDER_ARTICLES[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl font-lora mb-8">
          {typeof SLIDER_ARTICLES[currentSlide].content === "object" &&
            "root" in SLIDER_ARTICLES[currentSlide].content &&
            "children" in SLIDER_ARTICLES[currentSlide].content.root &&
            Array.isArray(
              SLIDER_ARTICLES[currentSlide].content.root.children
            ) &&
            (
              SLIDER_ARTICLES[currentSlide]
                .content as unknown as RichTextContent
            ).root.children[0].children[0].text}
        </p>
        <Link
          href={`/article/${SLIDER_ARTICLES[currentSlide].id}`}
          className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg backdrop-blur-sm transition font-montserrat"
        >
          Lire l&apos;article
        </Link>
      </div>

      {/* Navigation du slider */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {SLIDER_ARTICLES.map((_, index) => (
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
