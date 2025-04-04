export type Service = 'service' | 'product' | 'truckbody';

export type QuoteForm = {
  type: Service;
  price: string;
  title: string;
  deliveryDate: string;
  product?: string;
  service?: string;
  width?: string;
  height?: string;
  length?: string;
  bodyTruckName?: string;
  name: string;
  company?: string;
  phone: string;
  email?: string;
  description: string;
};

export type Client = {
  name: string;
  company: string;
  phone: string;
  email: string;
};

export type QuoteListItem = {
  quoteId: string;
  quoteType: string;
  quoteName: string;
  quotePrice: string;
  createdAt: string | null;
  clientName: string | null;
};