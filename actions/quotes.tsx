'use server';
import { db } from '@/db';
import { 
  quotesTable,
  clientsTable,
} from '@/db/schema';
import { QuoteListItem } from '@/types/dashboard/types';
import { eq } from 'drizzle-orm';

export async function getQuotesList(): Promise<QuoteListItem[]> {
  try{
    const quotes = await db.select({
      quoteId: quotesTable.id,
      quoteType: quotesTable.type,
      quoteName: quotesTable.name,
      quotePrice: quotesTable.price,
      createdAt: quotesTable.createdAt,
      clientName: clientsTable.name,
    })
    .from(quotesTable)
    .leftJoin(clientsTable, eq(clientsTable.id, quotesTable.clientId));

    return quotes;
  }catch(error){
    console.log(`Error on fetch quotes: ${error}`);
    throw new Error('Error on fetch quotes');
  }
}