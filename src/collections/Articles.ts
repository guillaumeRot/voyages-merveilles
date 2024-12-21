import { CollectionConfig } from "payload";

const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Titre",
    },
    {
      name: "mainImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Image principale",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Contenu",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      label: "Auteur",
    },
  ],
};

export default Articles;
