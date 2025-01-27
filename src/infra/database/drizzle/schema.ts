import {
    decimal,
    pgTable,
    timestamp,
    varchar
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: varchar("id", { length: 26 }).primaryKey(),
  category_id: varchar("category_id", { length: 26 }),
  name: varchar("name").notNull(),
  description: varchar("description").notNull(),
  producer_name: varchar("producer_name").notNull(),
  producer_email: varchar("producer_email").notNull(),
  cover: varchar("cover").notNull(),
  thumbnail: varchar("thumbnail").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  updated_at: timestamp("updated_at").notNull(),
  created_at: timestamp("created_at").notNull(),
});
