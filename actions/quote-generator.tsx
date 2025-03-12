'use server';
import { QuoteForm } from '@/types/dashboard/types';

export async function generateQuote(formData: FormData){
  const data: QuoteForm = Object.fromEntries(formData.entries()) as QuoteForm;
  console.log(data);
}