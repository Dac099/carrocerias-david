import { db } from '@/db';
import { clientsTable, quotesTable } from '@/db/schema';
import { ClientDataCard } from '@/types/dashboard/types';
import { eq, count } from 'drizzle-orm';

export async function getClientsData(): Promise<ClientDataCard[]> {
  try {
    const clients = await db.select({
      clientId: clientsTable.id,
      clientName: clientsTable.name,
      clientEmail: clientsTable.email,
      clientPhone: clientsTable.phone,
      totalQuotes: count(quotesTable.id),
      createdAt: clientsTable.createdAt,
    })
      .from(clientsTable)
      .leftJoin(quotesTable, eq(clientsTable.id, quotesTable.clientId))
      .groupBy(clientsTable.id, clientsTable.name, clientsTable.email, clientsTable.phone);

    const clientData: ClientDataCard[] = clients.map(c => ({
      clientId: c.clientId,
      clientName: c.clientName ?? 'Anónimo',
      clientContact: c.clientPhone || c.clientEmail || 'Sin contacto',
      totalQuotes: c.totalQuotes,
      createdAt: c.createdAt ?? '',
    }));

    return clientData;
  } catch (e) {
    if (e instanceof Error) {
      console.log(`Error on retrieve clients data: ${e.message}`);
      throw new Error(e.message);
    }
    console.log('Unknown error on retrieve clients data');
    throw new Error('Unknown error on retrieve clients data');
  }
}
