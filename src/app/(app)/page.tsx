"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Données des articles pour le slider
const SLIDER_ARTICLES = [
  {
    id: 1,
    title: "Les trésors naturels du Costa Rica",
    description:
      "Découvrez la biodiversité exceptionnelle de l'Amérique Centrale",
    image: "/images/paris.jpg",
    date: "15 avril 2024",
    link: "/destinations/costa-rica",
  },
  {
    id: 2,
    title: "Randonnée dans les Fjords",
    description: "Une aventure inoubliable au cœur de la Norvège sauvage",
    image: "/images/paris.jpg",
    date: "10 avril 2024",
    link: "/destinations/norvege",
  },
  {
    id: 3,
    title: "Les Merveilles du Tongariro",
    description: "Exploration des paysages volcaniques de Nouvelle-Zélande",
    image: "/images/paris.jpg",
    date: "5 avril 2024",
    link: "/destinations/nouvelle-zelande",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rotation automatique du slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_ARTICLES.length);
    }, 5000); // Change de slide toutes les 5 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section avec slider */}
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
              style={{ backgroundImage: `url('${article.image}')` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </div>
        ))}

        {/* En-tête avec titre et navigation */}
        <header className="pt-8 pb-6 relative z-50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Titre */}
              <Link
                href="/"
                className="text-2xl font-bold text-white font-playfair"
              >
                Voyages Nature
              </Link>

              {/* Menu Burger pour Mobile/Tablette */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Navigation Desktop */}
              <nav className="hidden lg:block">
                <div className="flex space-x-12">
                  <Link
                    href="/"
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md font-montserrat transition"
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/destinations"
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md font-montserrat transition"
                  >
                    Destinations
                  </Link>
                  <Link
                    href="/about"
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md font-montserrat transition"
                  >
                    Qui suis-je ?
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md font-montserrat transition"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
              <nav className="lg:hidden mt-4">
                <div className="flex flex-col space-y-4 bg-black/80 rounded-lg p-4">
                  <Link
                    href="/"
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md font-montserrat transition text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/destinations"
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md font-montserrat transition text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Destinations
                  </Link>
                  <Link
                    href="/about"
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md font-montserrat transition text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Qui suis-je ?
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md font-montserrat transition text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Contenu du slider */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
            {SLIDER_ARTICLES[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl font-lora mb-8">
            {SLIDER_ARTICLES[currentSlide].description}
          </p>
          <Link
            href={SLIDER_ARTICLES[currentSlide].link}
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

      {/* Contenu principal */}
      <main>
        {/* Contenu avec largeur maximale */}
        <div className="max-w-4xl mx-auto px-4">
          {/* Section Carnets de voyage */}
          <section className="mb-20 pt-20">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-green-800 dark:text-green-100">
              Carnets de voyage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 - Costa Rica */}
              <article className="group">
                <Link href="/destinations/costa-rica" className="block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/images/paris.jpg"
                      alt="Costa Rica"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-white text-sm">15 avril 2024</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                    Les trésors naturels du Costa Rica
                  </h3>
                  <p className="text-green-600 text-sm">AMÉRIQUE CENTRALE</p>
                </Link>
              </article>

              {/* Article 2 - Norvège */}
              <article className="group">
                <Link href="/destinations/norvege" className="block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/images/paris.jpg"
                      alt="Norvège"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-white text-sm">10 avril 2024</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                    Randonnée dans les Fjords
                  </h3>
                  <p className="text-green-600 text-sm">EUROPE DU NORD</p>
                </Link>
              </article>

              {/* Article 3 - Nouvelle-Zélande */}
              <article className="group">
                <Link href="/destinations/nouvelle-zelande" className="block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/images/paris.jpg"
                      alt="Nouvelle-Zélande"
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-white text-sm">5 avril 2024</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                    Les Merveilles du Tongariro
                  </h3>
                  <p className="text-green-600 text-sm">OCÉANIE</p>
                </Link>
              </article>
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
