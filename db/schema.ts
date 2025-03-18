import { 
  numeric, 
  pgTable, 
  text, 
  date,
  varchar,
  integer
} from 'drizzle-orm/pg-core';

//Clients table
export const clientsTable = pgTable('clients', {
  id: varchar({ length: 10}).primaryKey(),
  name: varchar({ length: 100}),
  email: varchar({ length: 200 }).unique(),
  phone: varchar({ length: 12 }).unique(),
  company: varchar({ length: 100 }),
  createdAt: date().defaultNow()
});

//Quotes table
export const quotesTable = pgTable('quotes', {
  id: varchar({ length: 10}).primaryKey(),
  type: varchar({ length: 20 }).notNull(),
  name: varchar({ length: 30}).notNull(),
  price: numeric().notNull(),
  createdAt: date().defaultNow(),
  updatedAt: date().defaultNow(),
  clientId: varchar({ length: 10 }).references(() => clientsTable.id, { onDelete: 'set null'}),
  description: text(),
  deliveryDate: date()
});

//Products table 
export const productsTable = pgTable('products', {
  id: varchar({ length: 10 }).primaryKey(),
  name: varchar({ length: 250 }),
  price: numeric().notNull(),
  quoteId: varchar({ length: 10 }).references(() => quotesTable.id, { onDelete: 'set null'})
});

//Services table
export const servicesTable = pgTable('services', {
  id: varchar({ length: 10 }).primaryKey(),
  name: varchar({ length: 250 }),
  quoteId: varchar({ length: 10 }).references(() => quotesTable.id, { onDelete: 'set null'})
});

//Bodytrucks table
export const bodyTrucksTable = pgTable('bodytrucks', {
  id: varchar({ length: 10 }).primaryKey(),
  name: varchar({ length: 250 }),
  width: integer().notNull(),
  height: integer().notNull(),
  length: integer().notNull(),
  quoteId: varchar({ length: 10 }).references(() => quotesTable.id, { onDelete: 'set null'})
});

export type insertClient = typeof clientsTable.$inferInsert;
export type selectClient = typeof clientsTable.$inferSelect;
export type insertQuote = typeof quotesTable.$inferInsert;
export type selectQuote = typeof quotesTable.$inferSelect;
export type insertProduct = typeof productsTable.$inferInsert;
export type selectProduct = typeof productsTable.$inferSelect;
export type insertService = typeof servicesTable.$inferInsert;
export type selectService = typeof servicesTable.$inferSelect;
export type insertBodytruck = typeof bodyTrucksTable.$inferInsert;
export type selectBodytruck = typeof bodyTrucksTable.$inferSelect;