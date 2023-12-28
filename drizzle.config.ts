import type { Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    user: "ibrahimvelinov",
    password: "password",
    host: "127.0.0.1",
    port: 5432,
    database: "base",
  },
} satisfies Config;
