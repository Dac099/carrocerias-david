ALTER TABLE "quotes" ADD COLUMN "clientId" varchar(10);--> statement-breakpoint
ALTER TABLE "quotes" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "quotes" ADD COLUMN "deliveryDate" date;--> statement-breakpoint
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_clientId_clients_id_fk" FOREIGN KEY ("clientId") REFERENCES "public"."clients"("id") ON DELETE no action ON UPDATE no action;