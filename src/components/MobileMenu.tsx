"use client";

import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Menu Burger pour Mobile/Tablette */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white p-2"
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

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="mt-4">
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
  );
};
