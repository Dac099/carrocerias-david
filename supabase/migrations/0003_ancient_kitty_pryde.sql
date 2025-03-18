ALTER TABLE "quotes" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "quotes" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "createdAt" date DEFAULT now();