ALTER TABLE "products" ADD CONSTRAINT "products_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "services" ADD CONSTRAINT "services_name_unique" UNIQUE("name");