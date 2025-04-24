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

export type QuoteData = {
  quoteId: string;
  quoteDescription: string;
  createdAt: string;
  name: string;
  price: string;
  clientId: string;
  clientName: string;
  clientContact: string | undefined;
  clientCompany: string | undefined;
  quoteItemName: string;
  quoteItemId: string;
  bodytruckSize?: {
    width: number;
    height: number;
    length: number;
  };
};

export type ClientDataCard = {
  clientId: string;
  clientName: string;
  clientContact: string;
  totalQuotes: number;
  createdAt: string;
};
