CREATE TABLE "products" (
	"id" varchar(26) PRIMARY KEY NOT NULL,
	"category_id" varchar(26),
	"name" text,
	"description" text,
	"producer_name" text,
	"producer_email" text,
	"cover" text,
	"thumbnail" text,
	"price" numeric,
	"updated_at" timestamp,
	"created_at" timestamp
);
