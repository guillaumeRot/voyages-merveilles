"use client";

import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="w-full lg:w-1/3 px-4">
      <div className="sticky top-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
          <h2 className="font-rubik text-2xl font-light mb-6 text-green-800 dark:text-green-100">
            À propos de moi
          </h2>

          <div className="mb-6">
            <Image
              src="/images/tiffany-gaspard.jpg"
              alt="Tiffany Gaspard"
              width={300}
              height={300}
              className="rounded-lg w-full object-cover mb-4"
            />
          </div>

          <div className="prose dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Bonjour ! Je suis Tiffany Gaspard, une passionnée de voyages et
              d&apos;aventures. À travers ce blog, je partage mes expériences et
              découvertes à travers le monde.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Photographe et écrivaine, je cherche à capturer l&apos;essence de
              chaque destination que je visite, en mettant l&apos;accent sur la
              nature, la culture locale et les rencontres authentiques.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}