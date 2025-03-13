'use server';
import { QuoteForm } from '@/types/dashboard/types';
import { getClientFromFormData } from '@/helpers/quote-genertor';
import { redirect } from 'next/navigation';

export async function saveQuote(formData: FormData){
  const data: QuoteForm = Object.fromEntries(formData.entries()) as QuoteForm;
  const client = getClientFromFormData(data);
  // Guardar información obtenida
  // Redirigir al visualizador
  redirect('/dashboard/viewer');
}