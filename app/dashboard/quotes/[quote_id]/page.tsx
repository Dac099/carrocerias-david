import { getQuoteDataById } from '@/actions/quotes';
import { QuoteDetails } from '@/components/quoteDetails/quoteDetails';

type Props = {
  params: Promise<{quote_id: string}>;
};

export default async function Page({params}: Props) {
  const { quote_id } = await params;
  const quoteData = await getQuoteDataById(quote_id);

  return <QuoteDetails quoteData={quoteData} quoteId={quote_id}/>
}
