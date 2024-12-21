"use client";

import { Slider } from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section avec slider */}
      <Slider />

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
