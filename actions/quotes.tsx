'use server';
import { db } from '@/db';
import { 
  quotesTable,
  clientsTable,
  productsTable,
  servicesTable,
  bodyTrucksTable,
} from '@/db/schema';
import { QuoteListItem, QuoteData } from '@/types/dashboard/types';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

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

export async function getQuoteDataById(quoteId: string): Promise<QuoteData> {
  let quoteData: QuoteData = {
    quoteId: '',
    quoteDescription : '',
    name: '',
    price: '',
    clientId: '',
    clientName: '',
    clientContact: undefined,
    clientCompany: undefined,
    quoteItemName: '',
    quoteItemId: ''
  };

  let quoteItem: Partial<QuoteData>;

  try{
    const result = await db.select({
      quoteId: quotesTable.id,
      quoteDescription: quotesTable.description,
      name: quotesTable.name,
      price: quotesTable.price,
      type: quotesTable.type,
      clientId: clientsTable.id,
      clientName: clientsTable.name,
      clientContact: clientsTable.phone || clientsTable.email,
      clientCompany: clientsTable.company 
    })
    .from(quotesTable)
    .where(eq(quotesTable.id, quoteId))
    .leftJoin(clientsTable, eq(clientsTable.id, quotesTable.clientId));

    quoteData = {
      ...quoteData,
      quoteId: result[0].quoteId,
      quoteDescription: result[0].quoteDescription || '',      
      name: result[0].name,
      price: result[0].price,
      clientId: result[0].clientId || '',
      clientName: result[0].clientName || '',
      clientCompany: result[0].clientCompany || '',
      clientContact: result[0].clientContact || ''
    };


    const [{type}] = result;

    if (type === 'service') {
      const [{ quoteItemId, quoteItemName }] = await db.select({
        quoteItemName: servicesTable.name,
        quoteItemId: servicesTable.id,
      })
      .from(servicesTable)
      .where(eq(servicesTable.quoteId, quoteId));
    
      quoteItem = {
        quoteItemId: quoteItemId,
        quoteItemName: quoteItemName || undefined,
      };
    } else if (type === 'product') {
      const [{ quoteItemId, quoteItemName }] = await db.select({
        quoteItemId: productsTable.id,
        quoteItemName: productsTable.name,
      })
      .from(productsTable)
      .where(eq(productsTable.quoteId, quoteId));
    
      quoteItem = {
        quoteItemId: quoteItemId,
        quoteItemName: quoteItemName || undefined,
      };
    } else if (type === 'truckbody') {
      const [{quoteItemName, bodytruckSize, quoteItemId}] = await db.select({
        quoteItemName: bodyTrucksTable.name,
        bodytruckSize: {
          width: bodyTrucksTable.width,
          height: bodyTrucksTable.height,
          length: bodyTrucksTable.length
        },
        quoteItemId: bodyTrucksTable.id
      })
      .from(bodyTrucksTable)
      .where(eq(bodyTrucksTable.quoteId, quoteId));

      quoteItem = {
        quoteItemId: quoteItemId,
        quoteItemName: quoteItemName || undefined,
        bodytruckSize: bodytruckSize
      };
    }
    
    quoteData = {...quoteData, ...quoteItem!};

  }catch(exception){
    if(exception instanceof Error){
      console.log(`Error on fetch item data with id: ${quoteId}`);
      console.log(`Error: ${exception.message}`);
      redirect('/dashboard/quotes');
    }
  }

  return quoteData;
}