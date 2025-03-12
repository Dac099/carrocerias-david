export type Service = 'service' | 'article' | 'truckbody';
export type QuoteForm = {
  type: Service;
  price: string;
  deliveryDate: string;
  product?: string;
  service?: string;
  width?: string;
  height?: string;
  length?: string;
  name: string;
  company?: string;
  phone?: string;
  email?: string;
  description: string;
};