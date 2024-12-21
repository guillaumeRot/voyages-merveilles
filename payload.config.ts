import Articles from "@/collections/Articles";
import { Users } from "@/collections/Users";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

if (!process.env.DATABASE_URI) {
  throw new Error("DATABASE_URI is required");
}

if (!process.env.PAYLOAD_SECRET) {
  throw new Error("PAYLOAD_SECRET is required");
}

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Articles],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  secret: process.env.PAYLOAD_SECRET,
});
