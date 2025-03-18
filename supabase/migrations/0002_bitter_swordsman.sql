ALTER TABLE "bodytrucks" DROP CONSTRAINT "bodytrucks_quoteId_quotes_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "products_quoteId_quotes_id_fk";
--> statement-breakpoint
ALTER TABLE "quotes" DROP CONSTRAINT "quotes_clientId_clients_id_fk";
--> statement-breakpoint
ALTER TABLE "services" DROP CONSTRAINT "services_quoteId_quotes_id_fk";
--> statement-breakpoint
ALTER TABLE "bodytrucks" ADD CONSTRAINT "bodytrucks_quoteId_quotes_id_fk" FOREIGN KEY ("quoteId") REFERENCES "public"."quotes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_quoteId_quotes_id_fk" FOREIGN KEY ("quoteId") REFERENCES "public"."quotes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_clientId_clients_id_fk" FOREIGN KEY ("clientId") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "services" ADD CONSTRAINT "services_quoteId_quotes_id_fk" FOREIGN KEY ("quoteId") REFERENCES "public"."quotes"("id") ON DELETE set null ON UPDATE no action;