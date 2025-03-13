import { QuoteForm, Client } from '@/types/dashboard/types';

export function getClientFromFormData(data: QuoteForm): Client{
  return {
    name: data.name ?? 'Sin mencionar',
    company: data.company ?? 'Independiente',
    email: data.email ?? 'Sin proporcionar',
    phone: data.phone ?? 'Sin proporcionar'
  };
}
