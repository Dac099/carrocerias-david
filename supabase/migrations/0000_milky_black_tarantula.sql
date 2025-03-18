CREATE TABLE "bodytrucks" (
	"id" varchar(10) PRIMARY KEY NOT NULL,
	"name" varchar(250),
	"width" integer NOT NULL,
	"height" integer NOT NULL,
	"length" integer NOT NULL,
	"quoteId" varchar(10)
);
--> statement-breakpoint
CREATE TABLE "clients" (
	"id" varchar(10) PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"email" varchar(200),
	"phone" varchar(12),
	"company" varchar(100),
	CONSTRAINT "clients_email_unique" UNIQUE("email"),
	CONSTRAINT "clients_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" varchar(10) PRIMARY KEY NOT NULL,
	"name" varchar(250),
	"price" numeric NOT NULL,
	"quoteId" varchar(10)
);
--> statement-breakpoint
CREATE TABLE "quotes" (
	"id" varchar(10) PRIMARY KEY NOT NULL,
	"type" varchar(20) NOT NULL,
	"name" varchar(30) NOT NULL,
	"price" numeric NOT NULL,
	"createdAt" date,
	"updatedAt" date
);
--> statement-breakpoint
CREATE TABLE "services" (
	"id" varchar(10) PRIMARY KEY NOT NULL,
	"name" varchar(250),
	"quoteId" varchar(10)
);
--> statement-breakpoint
ALTER TABLE "bodytrucks" ADD CONSTRAINT "bodytrucks_quoteId_quotes_id_fk" FOREIGN KEY ("quoteId") REFERENCES "public"."quotes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_quoteId_quotes_id_fk" FOREIGN KEY ("quoteId") REFERENCES "public"."quotes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "services" ADD CONSTRAINT "services_quoteId_quotes_id_fk" FOREIGN KEY ("quoteId") REFERENCES "public"."quotes"("id") ON DELETE no action ON UPDATE no action;