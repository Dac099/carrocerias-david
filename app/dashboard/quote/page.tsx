import styles from './page.module.css';
import { QuoteForm } from '@/components/quoteForm/quoteForm';

export default function Page(){
  return (
    <article className={styles.container}>
      <QuoteForm />
    </article>
  );
}