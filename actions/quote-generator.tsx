'use server';
import { QuoteForm } from '@/types/dashboard/types';
import { 
  clientsTable, 
  quotesTable,
  productsTable,
  servicesTable,
  bodyTrucksTable
} from '@/db/schema';
import { db } from '@/db';
import { generateTableId } from '@/helpers/actions';

export async function saveQuote(formData: FormData){
  const data: QuoteForm = Object.fromEntries(formData.entries()) as QuoteForm;    
  try{
    const clientTableId: string = await generateTableId('CLI',clientsTable);
    const quoteTableId: string = await generateTableId('COT', quotesTable);
  
    const client = await db.insert(clientsTable).values({
      id: clientTableId,
      company: data.company || 'Sin mencionar',
      email: data.email || 'Sin mencionar',
      phone: data.phone || 'Sin mencionar',
      name: data.name
    }).onConflictDoNothing({ target: clientsTable.name }).returning();

    const quote = await db.insert(quotesTable).values({
      id: quoteTableId,
      name: data.title,
      price: data.price,
      type: data.type,
      deliveryDate: data.deliveryDate,
      description: data.description,
      clientId: client[0].id
    }).returning();

    switch(data.type){
      case 'product':
        //Add the logic to insert record
        break;
      case 'service':
        //Add the logic to insert record
        break;
      case 'truckbody':
        //Add the logic to insert record
        break;
    }
  }catch(e){
    console.log(`ERROR: ${e}`);
    throw new Error('Ocurrió un error al insertar la cotización');
  }
}