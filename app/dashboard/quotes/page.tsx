import styles from './page.module.css';
import { getQuotesList } from '@/actions/quotes';
import type { QuoteListItem } from '@/types/dashboard/types';
import Link from 'next/link';

export default async function Page() {
  let quotes: QuoteListItem[] = [];
  let onError = false;
  
  try{
    quotes = await getQuotesList();
  }catch(error){
    if(error instanceof Error){
      onError = true;
      console.log(error.message);
    }
  }

  return (
    <article className={styles.container}>
      <section className={styles.msgSection}>
        {onError && 
          <p className={styles.errorText}>Ocurrió un error al obtener la información</p>
        }
      </section>

      <section className={styles.quotesSection}>
        {quotes.length > 0 &&
          quotes.map((quote: QuoteListItem) => (
            <Link                
              key={quote.quoteId}
              href={`/dashboard/quotes/${quote.quoteId}`}
            >
              <article className={styles.quoteCard}>
                <section className={styles.quoteHeading}>
                  <p className={styles.quoteName}>{quote.quoteName}</p>
                  <p className={styles.createdDate}>{quote.createdAt}</p>              
                </section>

                <section className={styles.quoteData}>
                  <p>{quote.clientName}</p>
                  <p className={styles.quotePrice}>
                    $<span>{quote.quotePrice}</span>
                  </p>
                </section>
              </article>

            </Link>
          ))
        }
      </section>
    </article>
  );
}