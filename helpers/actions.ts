'use server'
import { db } from '@/db';
import { PgTable } from 'drizzle-orm/pg-core';

export async function generateTableId(start: string, table: PgTable): Promise<string>
{
  const total = await db.$count(table);
  const totalString = total === 0 ? '000000' : (total/100000).toString().replace('.', '');
  return `${start.toUpperCase()}-${totalString}`
}