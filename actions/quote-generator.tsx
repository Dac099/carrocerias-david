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
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';

export async function saveQuote(formData: FormData){
  const data: QuoteForm = Object.fromEntries(formData.entries()) as QuoteForm; 
  let quoteId: string;

  try{
    const clientTableId: string = await generateTableId('CLI',clientsTable);
    const quoteTableId: string = await generateTableId('COT', quotesTable);
  
    const client = await db.insert(clientsTable).values({
      id: clientTableId,
      company: data.company || 'Sin mencionar',
      email: data.email || 'Sin mencionar',
      phone: data.phone || 'Sin mencionar',
      name: data.name
    }).onConflictDoNothing({ target: [clientsTable.phone] })
    .returning();

    let clientId: string;
    if (client.length > 0) {
      clientId = client[0].id;
    } else {
      const existingClient = await db.select({
        clientId: clientsTable.id,
      })
      .from(clientsTable)
      .where(eq(clientsTable.phone, data.phone!));
      
      if (existingClient.length > 0) {
        clientId = existingClient[0].clientId;
      } else {
        throw new Error('Ocurrió un error al buscar el cliente');
      }
    }

    const quote = await db.insert(quotesTable).values({
      id: quoteTableId,
      name: data.title,
      price: data.price,
      type: data.type,
      deliveryDate: data.deliveryDate,
      description: data.description,
      clientId: clientId,
    }).returning();

    quoteId = quote[0].id;

    switch(data.type){
      case 'product':
        const productTableId: string = await generateTableId('PRO', productsTable);
        await db.insert(productsTable).values({
          id: productTableId,
          name: data.product,
          price: data.price,
          quoteId: quoteId,
        }).onConflictDoNothing({ target: [productsTable.name] });
        break;
      case 'service':
       const serviceTableId: string = await generateTableId('SER', servicesTable);
       await db.insert(servicesTable).values({
        id: serviceTableId,
        name: data.service,
        quoteId: quote[0].id,
       }).onConflictDoNothing({ target: [servicesTable.name] });
        break;
      case 'truckbody':
        const bodyTruckTableId: string = await generateTableId('CAR', bodyTrucksTable);
        await db.insert(bodyTrucksTable).values({
          id: bodyTruckTableId,
          name: data.bodyTruckName,
          width: parseInt(data.width!),
          height: parseInt(data.height!),
          length: parseInt(data.length!),
          quoteId: quoteId,
        });
        break;
    }
  }catch(e){
    console.log(`ERROR: ${e}`);
    throw new Error('Ocurrió un error al insertar la cotización');
  }

  if(quoteId){
    redirect(`/dashboard/quote/${quoteId}`);
  }else{
    throw new Error('Ocurrió un error al insertar la cotización');
  }
}