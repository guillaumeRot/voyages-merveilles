export default function About() {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-slate-900 pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-green-800 dark:text-green-100 mb-8">
          À Propos de Tiffany Gaspard
        </h1>
        <div className="prose prose-green dark:prose-invert max-w-none">
          <p className="text-lg text-green-700 dark:text-green-200">
            Passionnée de voyage et de nature depuis son plus jeune âge, Tiffany
            Gaspard parcourt le monde à la recherche d&apos;expériences
            authentiques et respectueuses de l&apos;environnement.
          </p>
          {/* Ajouter plus de contenu biographique... */}
        </div>
      </main>
    </div>
  );
}
