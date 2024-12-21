"use client";

import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
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

          {/* Menu Mobile Component */}
          <MobileMenu />

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
      </div>
    </header>
  );
};
