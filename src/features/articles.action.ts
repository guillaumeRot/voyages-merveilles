"use server";

import { action } from "@/lib/safe-actions";
import { Article } from "@/payload-types";
import config from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { z } from "zod";

// export const getSliderArticles = action
//   .schema(z.object({}))
//   .action(async () => {
//     console.log("TEST GUI 2");
//     const articles = await payload.find({
//       collection: "articles",
//       // depth: 1,
//       // limit: 3,
//       // sort: "-publishedAt",
//     });

//     console.log("TEST GUI 3:", articles);

//     return articles.docs;
//   });

// export const findArticleById = action
//   .schema(z.object({}))
//   .action(async ({}) => {
//     try {
//       console.log("Recherche de l'article avec l'ID:1");

//       const article = await payload.find({
//         collection: "articles",
//       });

//       console.log("Article trouvé:", article);

//       if (!article) {
//         throw new Error("Article non trouvé");
//       }

//       return article;
//     } catch (error: unknown) {
//       console.error("Erreur lors de la recherche de l'article:", error);
//       throw new Error(
//         `Erreur lors de la recherche de l'article: ${error instanceof Error ? error.message : "Erreur inconnue"}`
//       );
//     }
//   });

export const getAllArticles = action.schema(z.object({})).action(async () => {
  try {
    console.log("Récupération de tous les articles");

    const payload = await getPayloadHMR({
      config,
    });
    const articles = await payload.find({
      collection: "articles",
    });

    // const articles = await payload.find({
    //   collection: "articles",
    // });

    console.log("Articles trouvés:", articles);

    if (!articles) {
      throw new Error("Aucun article trouvé");
    }

    return articles.docs;
  } catch (error: unknown) {
    console.error("Erreur lors de la récupération des articles:", error);
    throw new Error(
      `Erreur lors de la récupération des articles: ${
        error instanceof Error ? error.message : "Erreur inconnue"
      }`
    );
  }
});

export type Articles = Article[];
