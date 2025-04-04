import styles from './page.module.css';
import { getQuotesList } from '@/actions/quotes';
import type { QuoteListItem } from '@/types/dashboard/types';

export default async function Page() {
  let quotes: QuoteListItem[] = [];
  let onError = false;
  
  try{
    quotes = await getQuotesList();
  }catch(error){
    onError = true;
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
            <article className={styles.quoteCard} key={quote.quoteId}>
              <h3 className={styles.quoteTitle}>{quote.quoteName}</h3>
            </article>
          ))
        }
      </section>
    </article>
  );
}